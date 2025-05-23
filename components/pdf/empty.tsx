import React from 'react';

import { Page, Text, Document } from '@react-pdf/renderer';

export const EmptyPDF = () => {
    return (
        <Document title={`No layout for path`} author="Furnitut" subject="Product PDF">
            <Page style={{ padding: 48, backgroundColor: '#f6f4f3', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 12, fontWeight: 600 }}>No layout for shape type</Text>
            </Page>
        </Document>
    );
};
