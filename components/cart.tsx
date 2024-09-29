import { Cart, CartItem } from '@/use-cases/contracts/cart';
import { Image } from '@crystallize/reactjs-components';
import { Price } from './price';

export const CartViewer = ({ cart }: { cart: Cart | null }) => {
    return (
        <>
            {cart && cart.items.length === 0 && <p>Your cart is empty.</p>}
            {cart && cart.items.length > 0 && (
                <ul>
                    {cart.items.map((item: CartItem) => (
                        <li key={`${item.variant.sku}`} className="flex items-center mb-4 justify-between">
                            <div className="flex">
                                <Image
                                    {...item.images[0]}
                                    alt={item.name}
                                    className="w-10 h-10 rounded-xl pr-2"
                                    key={`image-${item.variant.sku}`}
                                />
                                <div className="flex flex-col">
                                    <span>{item.name}</span>
                                    <span>
                                        {item.quantity} x{' '}
                                        <Price
                                            price={{
                                                price: item.variant.price.gross,
                                            }}
                                        />
                                    </span>
                                </div>
                            </div>
                            <span>
                                <Price price={{ price: item.price.gross }} />
                            </span>
                        </li>
                    ))}
                </ul>
            )}
            {cart && cart.items.length > 0 && (
                <div className="mt-4">
                    <div>
                        <span className="text-gray-600">Net:</span>
                        <span className="text-gray-800 float-right">
                            <Price price={{ price: cart.total.net }} />
                        </span>
                    </div>
                    <div>
                        <span className="text-gray-600">Tax:</span>
                        <span className="text-gray-800 float-right">
                            <Price price={{ price: cart.total.taxAmount }} />
                        </span>
                    </div>
                    <div className="mb-4">
                        <span className="text-gray-900 font-bold">Gross:</span>
                        <span className="text-gray-900 font-bold float-right">
                            <Price price={{ price: cart.total.gross }} />
                        </span>
                    </div>
                </div>
            )}
        </>
    );
};
