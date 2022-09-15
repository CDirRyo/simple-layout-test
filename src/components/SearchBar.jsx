const SearchBar = (props) => {
    const {setQuery, query} = props;

    return (
        <div className="search-background">
            <div className="search-bar-div">
                <input type="text" placeholder="Digite aqui sua busca..." id="query" className="search-bar" value={query.bar} onChange={(e) => setQuery(prev => ({...prev, bar: e.target.value}))}/>
                <button onClick={() => setQuery(prev => ({...prev, searched: prev.bar}))} className="search-button"><img src="img/lupa.png" alt="search-button"/></button>
            </div>
        </div>
    )
}

export default SearchBar;