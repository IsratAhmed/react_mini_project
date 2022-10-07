const QuoteListItem = ({quote, selectQuote}) => {

    const handleClick = () => {
        selectQuote(quote);
    }

    return (
        <>
        <li onClick={handleClick}>{quote.quote}</li>
        <li onClick={handleClick}>{quote.role}</li>
        </>
        
    );
}

export default QuoteListItem;