import { StyleSheet } from '@react-pdf/renderer';

export const styles = StyleSheet.create({
    productPage: {
        backgroundColor: '#f6f4f3',
    },
    indexPage: {
        backgroundColor: '#f6f4f3',
        paddingLeft: 48,
        paddingTop: 48,
    },
    productDescriptionContainer: {
        color: '#211a1d',
    },
    tablePage: {
        flexDirection: 'column',
        backgroundColor: '#f6f4f3',
        justifyContent: 'space-between',
    },
    image: {
        height: '70%',
        borderWidth: 1,
        borderColor: '#dfdfdf',
        borderStyle: 'solid',
        objectFit: 'cover',
        objectPosition: 'left',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12,
    },
    title: {
        marginTop: 15,
        marginBottom: 6,
        fontWeight: 700,
        color: '#211a1d',
        fontSize: 14,
    },

    productDescription: {
        paddingRight: '40%',
        color: '#211a1d',
        fontSize: 10,
        lineHeight: 1.7,
    },
    price: {
        color: '#211a1d',
        marginTop: 10,
        fontWeight: 700,
        borderRadius: 8,
        fontSize: 12,
        textAlign: 'left',
    },
    priceLineThrough: {
        color: '#211a1d',
        marginTop: 4,
        fontWeight: 400,
        borderRadius: 8,
        fontSize: 10,
        textAlign: 'left',
        textDecoration: 'line-through',
    },
    productName: {
        fontSize: 16,
        marginBottom: 10,
    },
    productPrice: {
        fontSize: 12,
    },
    table: {
        justifyContent: 'flex-start',
        flexDirection: 'column',
        padding: '10%',
    },
    tableRow: {
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
        flexDirection: 'row',
        borderRadius: 12,
    },
    tableCell: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    tableCellImage: {
        width: 40,
        height: 50,
        borderRadius: 8,
        marginRight: 10,
    },
    tableCellName: {
        color: '#000',
        fontSize: 14,
        minWidth: '35%',
        paddingTop: 15,
        paddingBottom: 15,
    },
    tableHeader: {
        alignItems: 'center',
        flexDirection: 'row',
        paddingBottom: 10,
    },
    tableHeaderName: {
        fontSize: 8,
        color: '#333',
    },
});
