const NewCardModal = (props) => {
    const {modal,setModal, newCard, setNewCard, setCards} = props;
    const classes = ["edit", "new"].includes(modal.type)? "modal" : "closed-modal";
    const isNew = modal.type === "new"; 
    const reset = () => {
        setModal({type: null, cardIndex: null});
        setNewCard({text:"", image:""});
    };
    const createCard = () => {
        setCards(prev => [...prev, {text: newCard.text, image: newCard.image}]);
        reset();
    };
    const editCard = () => {
        const id = modal.cardIndex;
        setCards(prev => [...prev.slice(0, id), {text: newCard.text, image: newCard.image}, ...prev.slice(id+1)]);
        reset();
    }

    return (
        <div className={classes}>
            <div className="create-modal">
                <div className="create-header">
                    <div className="image-div"><img src="img/icone_criar.svg" alt="create" /></div> 
                    <h2>Criar card</h2>
                </div>
                <div className="decorative-line-h">
                </div>
                <div className="create-name">
                    <p>DIGITE UM NOME PARA O CARD</p>
                    <input value={newCard.text} onChange={(e) => setNewCard(prev => ({...prev, text: e.target.value}))} type="text" placeholder="Digite o título"/>
                </div>
                <div className="create-image">
                    <p>INCLUA UMA IMAGEM PARA APARECER NO CARD</p>
                    <input value={newCard.image} onChange={(e) => setNewCard(prev => ({...prev, image: e.target.value}))} type="text" placeholder="Digite o link da imagem"/>
                </div>
                <div className="decorative-line-h"></div>
                <div className="create-buttons">
                    <button className="cancel-button" onClick={() => reset()}>Cancelar</button>
                    <button className="create-button" onClick={isNew? createCard : editCard}>{isNew? "Criar" : "Editar"} card</button>    
                </div>
            </div>      
        </div>
    )
}

export default NewCardModal