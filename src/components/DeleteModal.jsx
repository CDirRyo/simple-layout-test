const DeleteModal = (props) => {
    const {modal, setModal, setCards} = props;
    const classes = modal.type === "delete"? "modal" : "closed-modal";

    const deleteCard = () => {
        const id = modal.cardIndex;
        setCards(prev => [...prev.slice(0, id), ...prev.slice(id+1)]);
        setModal({type: null, cardIndex: null});
    };

  return (
    <div className={classes}>
        <div className="delete-card">
            <div className="delete-image-div"><img className="delete-image" src="img/icon-trash.svg" alt="delete"/></div>
            <h2>Excluir</h2>
            <p>CERTEZA QUE DESEJA EXCLUIR?</p>
            <div className="decorative-line-h"></div>
            <div className="delete-buttons">
                <button onClick={deleteCard} className="delete-button">Excluir</button>
                <button onClick={() => setModal({type: null, cardIndex: null})} className="cancel-button">Cancelar</button>
            </div>
        </div>

    </div>
  )
}

export default DeleteModal