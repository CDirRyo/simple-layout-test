const ResultsHeader = (props) => {
    const {setModal} = props;
    return (
        <div className="results-header">
            <h1>Resultado de busca</h1>
            <button onClick={() => setModal({type: "new", cardIndex: null})} className="new-card">Novo Card</button>
        </div>
    )
}

export default ResultsHeader