import { makeCrystalPayment } from '@/app/actions/make-crystal-payment';
import { useActionState } from 'react';

export const Crystal = ({ cartId }: { cartId: string }) => {
    const [da, onSubmit, isPending] = useActionState(makeCrystalPayment, null);

    return (
        <div className="bg-soft mx-8 mt-4 rounded-lg px-6 py-4 flex gap-8 items-center ">
            <p className="text-sm italic">Crystal coin is for testing purposes only, no real transaction will occur.</p>
            <form action={onSubmit}>
                <input type="hidden" name="cartId" value={cartId} />
                <button
                    type="submit"
                    disabled={isPending}
                    className="bg-dark text-light font-medium rounded px-6 py-2 text-nowrap"
                >
                    {isPending ? 'Processing payment' : 'Confirm payment'}
                </button>
            </form>
        </div>
    );
};
