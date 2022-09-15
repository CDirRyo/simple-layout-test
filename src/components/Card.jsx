const Card = (props) => {
    const {image, text, id, setModal} = props;
    const cardIndex = parseInt(id.slice(1));
    const style = image === "" ? {background: `center / contain no-repeat url(img/icone.svg)`, backgroundColor: "#F6F4F6", backgroundSize: "64px 64px"}: {background: `center / cover no-repeat url(${image})`};
    
    return (
        <div className="card">
            <div className="card-image-div" style={style}></div>
            <div className="decorative-line-h"></div>
            <p>{text}</p>
            <div className="card-buttons">
                <button onClick={() => setModal({type: "delete", cardIndex})} className="delete card-button"><img src="img/icon-trash.svg" alt="trash"/> Excluir</button>
                <div className="decorative-line-v"></div>
                <button onClick={() => setModal({type: "edit", cardIndex})} className="edit card-button"><img src="img/icon-edit.svg" alt="edit"/> Editar</button>
            </div>           
        </div>
    )
}

export default Card;
