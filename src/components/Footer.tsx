import React from 'react';

interface Quote {
    text: string;
    by: string;
}

interface Props {
    quote: Quote;
}

const Footer: React.FC<Props> = ({ quote }) => {
    return (
        <footer className="quote">
            <hr className="underline" />
            <p>{quote.text}</p>
            <p>— {quote.by}</p>
        </footer>
    )
}

export default Footer;
