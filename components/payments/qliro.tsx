import { useEffect, useRef, useState } from 'react';

export const Qliro = ({ cartId }: { cartId?: string }) => {
    const [isPending, setPending] = useState(false)
    const [snippet, setSnippet] = useState<string | null>(null);
    useEffect(() => {
        setPending(true)
        fetch('/api/payments/qliro', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cartId }),
        })
            .then((response) => response.json())
            .then((data) => {
                setPending(false)
                if (data.order?.OrderHtmlSnippet) {
                    setSnippet(data.order.OrderHtmlSnippet);
                }
            });
    }, [cartId]);

    return (
        <div className="bg-soft mx-8 mt-4 rounded-lg px-6 py-4 flex gap-8 items-center ">
            {snippet && <HtmlSnippet snippet={snippet} />}
            {!snippet && <>
                <p className="text-sm italic">{isPending ? 'Qliro payment is loading...' : ''}</p>
            </>}
        </div>
    );
};


type Props = {
    snippet: string;
};
export function HtmlSnippet({ snippet }: Props) {
    const containerRef = useRef<HTMLDivElement>(null);
    const scriptsRef = useRef<HTMLScriptElement[]>([]);

    useEffect(() => {
        if (!snippet || !containerRef.current) return;

        const container = containerRef.current;
        container.innerHTML = '';
        const wrapper = document.createElement('div');
        wrapper.innerHTML = snippet;
        const scripts = Array.from(wrapper.querySelectorAll('script'));
        const nonScriptNodes = Array.from(wrapper.childNodes).filter(
            node => node.nodeType !== Node.ELEMENT_NODE || (node as Element).tagName !== 'SCRIPT'
        );
        nonScriptNodes.forEach((node) => {
            container.appendChild(node.cloneNode(true));
        });
        scripts.forEach((oldScript) => {
            const newScript = document.createElement('script');
            Array.from(oldScript.attributes).forEach(attr => {
                newScript.setAttribute(attr.name, attr.value);
            });
            if (oldScript.src) {
                newScript.src = oldScript.src;
            } else {
                newScript.textContent = oldScript.textContent;
            }
            document.head.appendChild(newScript);
            scriptsRef.current.push(newScript);
        });

        return () => {
            scriptsRef.current.forEach(script => {
                if (script.parentNode) {
                    script.parentNode.removeChild(script);
                }
            });
            scriptsRef.current = [];
            container.innerHTML = '';
        };
    }, [snippet]);

    return <div ref={containerRef} style={{ width: '100%' }} />;
}
