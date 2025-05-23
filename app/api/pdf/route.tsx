import { NextResponse } from 'next/server';
import { renderToStream } from '@react-pdf/renderer';
import { ProductPDF, ProductPDFProps } from '@/components/pdf/product';
import { fetchProductDataForPDF } from '@/components/pdf/product/utils';
import { FetchItemShapeDocument } from '@/generated/discovery/graphql';
import { apiRequest } from '@/utils/api-request';
import { EmptyPDF } from '@/components/pdf/empty';


type ItemShape = 'category' | 'product' | null;

const fetchItemShape = async (path: string): Promise<ItemShape> => {
    const response = await apiRequest(FetchItemShapeDocument, { path });
    const itemShape = response?.data?.search?.hits?.[0]?.shape;

    if (!itemShape) {
        return null;
    }

    return itemShape as ItemShape;
};


export async function GET(
    req: Request,
) {
    const { searchParams } = new URL(req.url);
    const urlPath = searchParams.get('path');
    const path = `/${urlPath?.split(',').join('/')}`;

    const shapeType = await fetchItemShape(path);
    let stream;

    if (shapeType === 'product') {
        const data = await fetchProductDataForPDF(path);
        stream = await renderToStream(<ProductPDF product={data as unknown as ProductPDFProps} />);
    } else {
        stream = await renderToStream(<EmptyPDF />);
    }

    return new NextResponse(stream as any, {
        status: 200,
        headers: {
            'Content-Type': 'application/pdf',
            'Content-Disposition': 'inline; filename="document.pdf"',
        },
    });
}