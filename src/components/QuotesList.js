import QuoteListItem from "./QuoteListItem";

const QuotesList = ({quotes, selectQuote}) => {

    const quoteListItems = quotes.map((quote)=>{
        return <QuoteListItem 
                    quote={quote} 
                    selectQuote={selectQuote}
                />
    })

    return(
        <ul>
            {quoteListItems}
        </ul>
    );
}

export default QuotesList;

