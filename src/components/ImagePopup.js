function ImagePopup( { card, onClose } ) {
  return (
    <div className={`popup popup_type_open-card ${card && 'popup_opened'}`}>
      <div className="popup__opencard-container">
        <button onClick={onClose} className="popup__close popup__close_open-card" type="button">
        </button>
        <img className="popup__image" src={card ? card.link : ""} alt={card ? card.name : ""}/>
        <p className="popup__place-name">{card ? card.name : ""}</p>
      </div>
    </div>
  )
}

export default ImagePopup;