import Link from 'next/link';
import { Suspense } from 'react';
import { CartButton } from './cart/cart-button';
import { Navigation } from './navigation';

export const Header = () => {
    return (
        <header className="fixed max-w-screen-2xl w-full top-4 left-1/2 -translate-x-1/2 z-10">
            <div className="bg-light border border-muted flex items-stretch rounded-full justify-between">
                <div className="flex items-stretch flex-1">
                    <Link href="/">
                        <div className="bg-dark items-center inline-flex rounded-full my-2 mx-2 px-6 py-3 h-10">
                            <svg height="100%" viewBox="0 0 89 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M10.2901 0.148682V3.05966H3.37213V6.2681H9.94845V9.17908H3.37213V15.001H0.0412598V0.148682H10.2901ZM29.4 5.07821C29.4 7.45798 28.4605 8.98784 26.5602 9.68903L30.3395 15.001H26.24L22.9305 10.2627H20.6245V15.001H17.2936V0.148682H22.9518C25.2791 0.148682 26.9232 0.531147 27.9268 1.31732C28.9089 2.1035 29.4 3.35712 29.4 5.07821ZM23.0586 7.39425C24.1902 7.39425 24.9802 7.20301 25.3859 6.8418C25.7916 6.48058 26.0051 5.88563 26.0051 5.07821C26.0051 4.29203 25.7916 3.73959 25.3645 3.44212C24.9375 3.14465 24.1902 2.99591 23.1226 2.99591H20.6245V7.39425H23.0586ZM47.4421 0.148682H50.7729V15.001H47.4421L40.332 5.6944V15.001H37.0011V0.148682H40.1184L47.4421 9.71028V0.148682ZM64.3737 3.01716V15.001H61.0428V3.01716H56.8152V0.148682H68.6013V3.01716H64.3737ZM87.5407 5.07821C87.5407 7.45798 86.6013 8.98784 84.701 9.68903L88.4802 15.001H84.3807L81.0712 10.2627H78.7652V15.001H75.4343V0.148682H81.0925C83.4199 0.148682 85.0639 0.531147 86.0675 1.31732C87.0497 2.1035 87.5407 3.35712 87.5407 5.07821ZM81.1993 7.39425C82.3309 7.39425 83.1209 7.20301 83.5266 6.8418C83.9323 6.48058 84.1458 5.88563 84.1458 5.07821C84.1458 4.29203 83.9323 3.73959 83.5053 3.44212C83.0782 3.14465 82.3309 2.99591 81.2633 2.99591H78.7652V7.39425H81.1993Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <span className="sr-only">Home</span>
                    </Link>

                    <Suspense fallback={null}>
                        <div className="flex-1 sm:hidden flex justify-end items-center">
                            <button className="p-4">
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                                <span className="sr-only">Toggle menu</span>
                            </button>
                        </div>
                        <Navigation className="hidden sm:flex gap-6 min-h-full text-base self-stretch items-stretch font-medium pl-8" />
                    </Suspense>
                </div>

                <Link
                    href="/account"
                    className="flex items-center font-medium  border-x border-muted px-4 sm:px-6 gap-2 hover:bg-muted/20 active:bg-muted/40"
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
                    <span className="max-sm:sr-only">Account</span>
                </Link>
                <CartButton />
            </div>
        </header>
    );
};
