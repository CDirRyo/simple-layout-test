import {useState} from 'react';
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchBar";
import ResultsSection from "./components/ResultsSection";
import DeleteModal from "./components/DeleteModal";
import NewCardModal from "./components/NewCardModal";



function App() {
    const [query, setQuery] = useState({bar: "", searched: ""});
    const [modal, setModal] = useState({type: null, cardIndex: null});
    const [cards, setCards] = useState([]);
    const [newCard, setNewCard] = useState({text: "", image:""});

    return (
        <div className="App">
            <NavBar/>
            <DeleteModal setModal={setModal} modal={modal} setCards={setCards}/>
            <NewCardModal setCards={setCards} setModal={setModal} newCard={newCard} setNewCard={setNewCard} modal={modal}/>
            <SearchBar query={query} setQuery={setQuery}/>
            <ResultsSection query={query} cards={cards} setModal={setModal}/>
        </div>
    );
}

export default App;
