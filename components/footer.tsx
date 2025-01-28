import Link from 'next/link';
import { Suspense } from 'react';
import { Navigation } from './navigation';

export const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className="mt-24 border-t border-muted px-12">
            <div className="px-12  max-w-screen-2xl mx-auto pt-24 pb-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <Link href="/">
                            <div className=" h-7">
                                <svg
                                    width="auto"
                                    height="100%"
                                    viewBox="0 0 185 15"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.2901 0.148682V3.05966H3.37213V6.2681H9.94845V9.17908H3.37213V15.001H0.0412598V0.148682H10.2901ZM29.4 5.07821C29.4 7.45798 28.4605 8.98784 26.5602 9.68903L30.3395 15.001H26.24L22.9305 10.2627H20.6245V15.001H17.2936V0.148682H22.9518C25.2791 0.148682 26.9232 0.531147 27.9268 1.31732C28.9089 2.1035 29.4 3.35712 29.4 5.07821ZM23.0586 7.39425C24.1902 7.39425 24.9802 7.20301 25.3859 6.8418C25.7916 6.48058 26.0051 5.88563 26.0051 5.07821C26.0051 4.29203 25.7916 3.73959 25.3645 3.44212C24.9375 3.14465 24.1902 2.99591 23.1226 2.99591H20.6245V7.39425H23.0586ZM47.4421 0.148682H50.7729V15.001H47.4421L40.332 5.6944V15.001H37.0011V0.148682H40.1184L47.4421 9.71028V0.148682ZM64.3737 3.01716V15.001H61.0428V3.01716H56.8152V0.148682H68.6013V3.01716H64.3737ZM87.5407 5.07821C87.5407 7.45798 86.6013 8.98784 84.701 9.68903L88.4802 15.001H84.3807L81.0712 10.2627H78.7652V15.001H75.4343V0.148682H81.0925C83.4199 0.148682 85.0639 0.531147 86.0675 1.31732C87.0497 2.1035 87.5407 3.35712 87.5407 5.07821ZM81.1993 7.39425C82.3309 7.39425 83.1209 7.20301 83.5266 6.8418C83.9323 6.48058 84.1458 5.88563 84.1458 5.07821C84.1458 4.29203 83.9323 3.73959 83.5053 3.44212C83.0782 3.14465 82.3309 2.99591 81.2633 2.99591H78.7652V7.39425H81.1993Z"
                                        fill="black"
                                    />
                                </svg>
                            </div>
                        </Link>

                        <p className="text-sm mt-8 ">Organization No. 9999999</p>
                        <p className="text-sm mt-1">© {year} Crystallize AS</p>
                    </div>
                    <Suspense fallback={null}>
                        <Navigation className="flex flex-col gap-4 min-h-full text-base self-stretch items-stretch font-medium pl-8 mt-12" />
                    </Suspense>
                </div>
            </div>
            <div className="px-12  max-w-screen-2xl mx-auto pt-24 pb-48">
                This commerce site is built for demo purposes, no real shopping will happen here
            </div>
        </footer>
    );
};
