import ReactMarkdown from 'react-markdown';

export const MarkdownText = ({ children, className = '' }) => {
    return (
        <div className={className}>
            <ReactMarkdown
                components={{
                    // Personalizar cómo se renderizan los elementos
                    p: ({ node, ...props }) => <span {...props} />, // Evitar párrafos para texto inline
                    strong: ({ node, ...props }) => <strong className="font-bold" {...props} />,
                    em: ({ node, ...props }) => <em className="italic" {...props} />,
                    code: ({ node, ...props }) => <code className="bg-slate-100 px-1 rounded text-sm font-mono" {...props} />,
                }}
            >
                {children}
            </ReactMarkdown>
        </div>
    );
};
