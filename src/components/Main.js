import { useEffect, useState } from 'react';
import avatarIcon from '../images/edit-avatar.svg';
import { apiNew } from '../utils/Api';
import Card from './Card';


function Main( { onEditProfile, onAddPlace, onEditAvatar, onCardClick } ) {
  
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [avatarLink, setAvatarLink] = useState();
  const [cards, setCards] = useState([]);

  let userId
  
  useEffect(() => {
    Promise.all([apiNew.getInitialCards(), apiNew.getProfileInfo()])
      .then(([initCards, initUserInfo]) => {
        //console.log(initCards)
        //console.log(initUserInfo)

        userId = initUserInfo._id;

        setUserName(initUserInfo.name);
        setUserDescription(initUserInfo.about);
        setAvatarLink(initUserInfo.avatar);

        setCards(initCards);
      })
      .catch((error) => {
        console.log(`Ошибка при первичной загрузке профиля и карточек: ${error}`)
      })
  }, [])
  
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__box">
          <div onClick={onEditAvatar} className="profile__avatar-container">
            <img className="profile__avatar" src={avatarLink} alt="Аватар" />
            <div className="profile__avatar-overlay">
              <img className="profile__avatar-icon" src={avatarIcon} alt="Редактировать аватар" />
            </div>
          </div>
          <div className="profile__info">
            <h1 className="profile__name">{userName}</h1>
            <button onClick={onEditProfile} className="profile__edit-button" type="button"></button>
            <p className="profile__occupation">{userDescription}</p>
          </div>
        </div>
        <button onClick={onAddPlace} className="profile__add-button" type="button"></button>
      </section>
      
      <section className="elements">
        <ul className="elements__list">
          {
            cards.map((card) => (
              <Card card={card} key={card._id} onCardClick={onCardClick}/>
            ))
          } 
        </ul> 
      </section>
    </main> 
  )
}

export default Main;