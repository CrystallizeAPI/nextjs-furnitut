import { Suspense } from 'react';

type PDFProps = {
    params: Promise<{ slug: string[] }>;
};

async function PDFIframe({ params }: PDFProps) {
    const { slug } = await params;
    slug.pop();
    const path = slug.join('/');
    const pdfUrl = `/api/pdf?path=${encodeURIComponent(path)}`;

    return <iframe src={pdfUrl} style={{ width: '100%', height: '100%', border: 'none' }} />;
}

export default async function PDFPage({ params }: PDFProps) {
    return (
        <div style={{ height: '100vh' }}>
            <Suspense>
                <PDFIframe params={params} />
            </Suspense>
        </div>
    );
}
