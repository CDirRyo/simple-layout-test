import ResultsHeader from "./ResultsHeader";
import SearchResults from "./SearchResults";

const ResultsSection = (props) => {
    const {query, cards, setModal} = props;

  return (
    <div className="results-section">
        <ResultsHeader setModal={setModal}/>
        <SearchResults query={query} cards={cards} setModal={setModal}/>
    </div>
  )
}

export default ResultsSection