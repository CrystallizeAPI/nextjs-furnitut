'use client';

import Link from 'next/link';
import { useCart } from '@/context/cart-context';
import { usePathname } from 'next/navigation';
import { Image } from '@/components/image';

type HeaderProps = {
    navigation?: { href: string; name: string }[];
};

export const Header = ({ navigation }: HeaderProps) => {
    const { setIsCartOpen, cart, isCartOpen } = useCart();
    const currentPath = usePathname();

    if (currentPath === '/checkout')
        return (
            <header className=" fixed max-w-screen-2xl w-full px-10  top-4 left-1/2 -translate-x-1/2 z-10 flex items-center gap-8">
                <Link href="/">
                    <div className="bg-dark items-center inline-flex rounded-full my-2 mx-2 px-6 py-3 h-10">
                        <svg
                            width="auto"
                            height="100%"
                            viewBox="0 0 89 15"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10.2901 0.148682V3.05966H3.37213V6.2681H9.94845V9.17908H3.37213V15.001H0.0412598V0.148682H10.2901ZM29.4 5.07821C29.4 7.45798 28.4605 8.98784 26.5602 9.68903L30.3395 15.001H26.24L22.9305 10.2627H20.6245V15.001H17.2936V0.148682H22.9518C25.2791 0.148682 26.9232 0.531147 27.9268 1.31732C28.9089 2.1035 29.4 3.35712 29.4 5.07821ZM23.0586 7.39425C24.1902 7.39425 24.9802 7.20301 25.3859 6.8418C25.7916 6.48058 26.0051 5.88563 26.0051 5.07821C26.0051 4.29203 25.7916 3.73959 25.3645 3.44212C24.9375 3.14465 24.1902 2.99591 23.1226 2.99591H20.6245V7.39425H23.0586ZM47.4421 0.148682H50.7729V15.001H47.4421L40.332 5.6944V15.001H37.0011V0.148682H40.1184L47.4421 9.71028V0.148682ZM64.3737 3.01716V15.001H61.0428V3.01716H56.8152V0.148682H68.6013V3.01716H64.3737ZM87.5407 5.07821C87.5407 7.45798 86.6013 8.98784 84.701 9.68903L88.4802 15.001H84.3807L81.0712 10.2627H78.7652V15.001H75.4343V0.148682H81.0925C83.4199 0.148682 85.0639 0.531147 86.0675 1.31732C87.0497 2.1035 87.5407 3.35712 87.5407 5.07821ZM81.1993 7.39425C82.3309 7.39425 83.1209 7.20301 83.5266 6.8418C83.9323 6.48058 84.1458 5.88563 84.1458 5.07821C84.1458 4.29203 83.9323 3.73959 83.5053 3.44212C83.0782 3.14465 82.3309 2.99591 81.2633 2.99591H78.7652V7.39425H81.1993Z"
                                fill="white"
                            />
                        </svg>
                    </div>
                </Link>
                <h1 className="text-xl font-bold">Checkout</h1>
            </header>
        );

    return (
        <header className=" fixed max-w-screen-2xl w-full  top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-light border border-muted flex items-stretch rounded-full justify-between">
                <div className="flex items-stretch">
                    <Link href="/">
                        <div className="bg-dark items-center inline-flex rounded-full my-2 mx-2 px-6 py-3 h-10">
                            <svg
                                width="auto"
                                height="100%"
                                viewBox="0 0 89 15"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.2901 0.148682V3.05966H3.37213V6.2681H9.94845V9.17908H3.37213V15.001H0.0412598V0.148682H10.2901ZM29.4 5.07821C29.4 7.45798 28.4605 8.98784 26.5602 9.68903L30.3395 15.001H26.24L22.9305 10.2627H20.6245V15.001H17.2936V0.148682H22.9518C25.2791 0.148682 26.9232 0.531147 27.9268 1.31732C28.9089 2.1035 29.4 3.35712 29.4 5.07821ZM23.0586 7.39425C24.1902 7.39425 24.9802 7.20301 25.3859 6.8418C25.7916 6.48058 26.0051 5.88563 26.0051 5.07821C26.0051 4.29203 25.7916 3.73959 25.3645 3.44212C24.9375 3.14465 24.1902 2.99591 23.1226 2.99591H20.6245V7.39425H23.0586ZM47.4421 0.148682H50.7729V15.001H47.4421L40.332 5.6944V15.001H37.0011V0.148682H40.1184L47.4421 9.71028V0.148682ZM64.3737 3.01716V15.001H61.0428V3.01716H56.8152V0.148682H68.6013V3.01716H64.3737ZM87.5407 5.07821C87.5407 7.45798 86.6013 8.98784 84.701 9.68903L88.4802 15.001H84.3807L81.0712 10.2627H78.7652V15.001H75.4343V0.148682H81.0925C83.4199 0.148682 85.0639 0.531147 86.0675 1.31732C87.0497 2.1035 87.5407 3.35712 87.5407 5.07821ZM81.1993 7.39425C82.3309 7.39425 83.1209 7.20301 83.5266 6.8418C83.9323 6.48058 84.1458 5.88563 84.1458 5.07821C84.1458 4.29203 83.9323 3.73959 83.5053 3.44212C83.0782 3.14465 82.3309 2.99591 81.2633 2.99591H78.7652V7.39425H81.1993Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                    </Link>
                    <div className="flex gap-6 min-h-full text-base self-stretch items-stretch font-medium pl-8">
                        {navigation?.map(({ href, name }) => (
                            <Link href={href} className="h-full flex items-center" key={name}>
                                {name}
                            </Link>
                        ))}
                    </div>
                </div>

                <div className="flex items-stretch  ">
                    <Link
                        href="/account"
                        className="flex items-center font-medium  border-x border-muted px-6 gap-2 hover:bg-muted/20 active:bg-muted/40"
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle
                                cx="12.6046"
                                cy="7.47778"
                                r="4"
                                stroke="#33363F"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                            <path
                                d="M5.9425 18.7983C6.60358 16.0046 9.37634 14.4778 12.2472 14.4778H12.962C15.8329 14.4778 18.6056 16.0046 19.2667 18.7983C19.3946 19.3389 19.4963 19.9046 19.5535 20.4794C19.6082 21.029 19.1569 21.4778 18.6046 21.4778H6.60461C6.05233 21.4778 5.60103 21.029 5.65572 20.4794C5.71292 19.9046 5.81458 19.3389 5.9425 18.7983Z"
                                stroke="#33363F"
                                strokeWidth="2"
                                strokeLinecap="round"
                            />
                        </svg>
                        <span>Account</span>
                    </Link>
                    <button
                        className="flex items-center font-medium px-6 gap-2 hover:bg-muted/20 active:bg-muted/40 rounded-r-full"
                        onClick={() => setIsCartOpen(!isCartOpen)}
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M4 4.47778H5.62563C6.193 4.47778 6.47669 4.47778 6.70214 4.60212C6.79511 4.65339 6.87933 4.71914 6.95162 4.7969C7.12692 4.98547 7.19573 5.26069 7.33333 5.81112L7.51493 6.5375C7.616 6.9418 7.66654 7.14395 7.74455 7.31354C8.01534 7.90227 8.5546 8.32332 9.19144 8.44324C9.37488 8.47778 9.58326 8.47778 10 8.47778V8.47778"
                                stroke="#222222"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <path
                                d="M18 17.4778H7.55091C7.40471 17.4778 7.33162 17.4778 7.27616 17.4716C6.68857 17.4058 6.28605 16.8473 6.40945 16.2691C6.42109 16.2145 6.44421 16.1452 6.49044 16.0065V16.0065C6.54177 15.8525 6.56743 15.7755 6.59579 15.7075C6.88607 15.0119 7.54277 14.5386 8.29448 14.4832C8.3679 14.4778 8.44906 14.4778 8.61137 14.4778H14"
                                stroke="#222222"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M15.7639 14.4778H9.69425C8.71658 14.4778 7.8822 13.771 7.72147 12.8066L7.2911 10.2244C7.13872 9.31008 7.84378 8.47778 8.77069 8.47778H18.382C19.1253 8.47778 19.6088 9.2601 19.2764 9.925L17.5528 13.3722C17.214 14.0498 16.5215 14.4778 15.7639 14.4778Z"
                                stroke="#222222"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                            />
                            <circle cx="17" cy="20.4778" r="1" fill="#222222" />
                            <circle cx="9" cy="20.4778" r="1" fill="#222222" />
                        </svg>
                        <span className="pr-8 relative flex items-start justify-center">
                            Cart{' '}
                            {cart && cart?.items.length > 0 && (
                                <span className="text-sm absolute right-0 h-5 w-5 text-bold bg-vivid text-light rounded top-1/2 -translate-y-1/2">
                                    {cart?.items.length}
                                </span>
                            )}
                        </span>
                    </button>
                    {!!cart?.lastItemAdded?.length && (
                        <div className="starting:opacity-0 starting:translate-y-10 opacity-100 transition-all absolute border translate-y-4 border-muted top-full right-0 bg-light text-dark p-2 rounded-lg shadow">
                            {cart.lastItemAdded.map((item, index) => (
                                <div className="flex gap-2 items-center pr-6" key={index}>
                                    <div className="w-8 h-8 relative overflow-hidden rounded border border-muted ">
                                        <Image
                                            {...item.images?.[0]}
                                            key="image"
                                            sizes="100px"
                                            className="relative [&_img]:object-cover"
                                        />
                                    </div>
                                    <div className="flex gap-1">
                                        <span className="text-sm italic font-bold text-dark ">
                                            {item.variant.product.name}
                                        </span>
                                        <span className="text-sm text-dark ">added to cart</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};
