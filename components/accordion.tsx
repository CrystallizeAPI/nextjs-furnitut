type AccordionProps = {
    title: string;
    children: React.ReactNode;
    defaultOpen?: boolean;
    className?: string;
};

export const Accordion = ({ title, children, defaultOpen, className }: AccordionProps) => (
    <details open={defaultOpen} className={`accordination text-dark`}>
        <summary className={`text-2xl ${className}`}>
            <h2 className=" font-bold flex items-center justify-between">
                <span>{title}</span>
                <span className="accordination-arrow">
                    <svg width="15" height="19" viewBox="0 0 15 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M14.6102 7.34826L8.24622 0.984298C7.8557 0.593774 7.22253 0.593774 6.83201 0.984298L0.468048 7.34826C0.0775232 7.73878 0.0775232 8.37195 0.468048 8.76247C0.858572 9.153 1.49174 9.153 1.88226 8.76247L6.53912 4.10562L6.53911 17.2109C6.53911 17.7632 6.98683 18.2109 7.53911 18.2109C8.0914 18.2109 8.53911 17.7632 8.53911 17.2109L8.53912 4.10562L13.196 8.76247C13.5865 9.153 14.2197 9.153 14.6102 8.76247C15.0007 8.37195 15.0007 7.73878 14.6102 7.34826Z"
                            fill="#211A1D"
                        />
                    </svg>
                </span>
            </h2>
        </summary>
        {children}
    </details>
);
