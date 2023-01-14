function Card( { card, onCardClick } ) {
  
  const handleCardClick = () => {
    onCardClick(card);
  }
  
  return (
    <li className="element">
      <img className="element__image" src={card.link} alt={card.name} onClick={handleCardClick}/>
      <div className="element__container">
        <h2 className="element__title">{card.name}</h2>
        <div className="element__like-container">
          <button className="element__like-button" type="button"></button>
          <span className="element__like-counter">{card.likes.length}</span>
        </div>
      </div>
      <button className="element__delete-button" type="button"></button>
    </li>
  )
}

export default Card;