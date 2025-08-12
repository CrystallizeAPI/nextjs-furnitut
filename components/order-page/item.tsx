import { Price } from "@/components/price";
import { Image } from '@/components/image';
import { CartItem } from "@/use-cases/contracts/cart";
import { OrderItem } from "@crystallize/js-api-client";

type CartOrderItemProps = {
    item: CartItem | OrderItem
}
export const CartOrderItem = ({ item }: CartOrderItemProps) => {
    const imageProps = 'imageUrl' in item ? { src: item.imageUrl } : ('images' in item ? item.images[0] : {});
    const sku = 'sku' in item ? item.sku : ('variant' in item ? item.variant.sku : '');
    return <div className="px-6 py-2 mb-2 gap-2 w-full flex items-center border-b border-muted">
        <div className="flex justify-between w-full gap-8 ">
            <div className="overflow-hidden relative rounded-md w-16 h-20 bg-soft border border-muted">
                <Image {...imageProps} altText={item.name} className="object-contain" />
            </div>
            <div className="flex flex-col w-full justify-center">
                <span className="text-base">{item.name}</span>
                <span className="text-sm italic text-dark/70">{sku}</span>
                <span className="text-sm">Qty: {item.quantity}</span>
            </div>
        </div>
        <div className="text-base">
            {typeof item.price?.gross === 'number' && (
                <Price price={{ price: item.price.gross }} />
            )}
        </div>
    </div>
}
