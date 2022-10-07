import QuoteListItem from "./QuoteListItem";

const VisitedQuotesList = ({visitedQuotes, selectQuotes}) => {
    const visitedQuotesListItems = visitedQuotes.map((quote) => {
        return <QuoteListItem quote={quote} selectQuotes={selectQuotes}/>
    })
    return(
        <ul>
            <h2>Movies yet to be seen: </h2>
            {visitedQuotesListItems}
        </ul>
    );
}

export default VisitedQuotesList;