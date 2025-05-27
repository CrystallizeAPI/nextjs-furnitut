import { Price } from "@/components/price";

type TotalProps = {
    total: {
        net: number;
        gross: number;
    }
}
export const CartOrderTotal = ({ total }: TotalProps) => {
    return <div className="flex flex-col gap-2  py-4 items-end mt-2 px-6" >
        <div className="flex justify-between w-60 text-sm text-dark/70">
            <p>Net</p>
            <Price price={{ price: total.net }} />
        </div>
        <div className="flex justify-between w-60 text-sm text-dark/70">
            <p>Tax</p>
            <p>
                <Price
                    price={{
                        price: total.gross - total.net,
                    }}
                />
            </p>
        </div>
        <div className="flex font-bold text-lgxl justify-between w-60">
            <p>Gross</p>
            <p>
                <Price price={{ price: total.gross }} />
            </p>
        </div>
    </div >
}
