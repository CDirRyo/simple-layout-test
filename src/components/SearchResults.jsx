import Card from "./Card";

const SearchResults = (props) => {
    const {cards, query, setModal} = props;
    const lowerQuery = query.searched.toLowerCase();

    return (
        <div className="search-results">
            {cards.reduce((prev, card, index) => card.text.toLowerCase().includes(lowerQuery)? 
            [...prev, <Card setModal={setModal} key={`c${index}`} id={`c${index}`} text={card.text} image={card.image}/>] : prev
            ,[])}
        </div>
    )
}

export default SearchResults;