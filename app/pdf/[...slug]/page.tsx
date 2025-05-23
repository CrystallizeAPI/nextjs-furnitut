type PDFProps = {
    params: Promise<{ slug: string[] }>;
};
export default async function PDFPage({ params }: PDFProps) {
    const { slug } = await params;
    slug.pop();
    const path = slug.join('/');
    const pdfUrl = `/api/pdf?path=${encodeURIComponent(path)}`;

    return (
        <div style={{ height: '100vh' }}>
            <iframe src={pdfUrl} style={{ width: '100%', height: '100%', border: 'none' }} />
        </div>
    );
}
