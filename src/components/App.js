import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import Footer from './Footer';
import { useState } from 'react';


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }
  
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }
  
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  return (
    <div className="page">
      <Header />

      <Main 
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={setSelectedCard}
        />

      <PopupWithForm 
        name="userInfoForm"
        title="Редактировать профиль"
        submitButtonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
            <label className="popup__text-field">
              <input id="name-text" name="userName" type="text" placeholder="Имя"
              className="popup__text popup__text_type_name" required minLength="2" maxLength="40" />
              <span className="popup__text-error name-text-error"></span>
            </label>
            <label className="popup__text-field">
              <input id="occupation-text" name="userOccupation" type="text" placeholder="О себе"
              className="popup__text popup__text_type_occupation" required minLength="2" maxLength="200" />
              <span className="popup__text-error occupation-text-error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm 
        name="addCardForm"
        title="Новое место"
        submitButtonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
            <label className="popup__text-field">
              <input id="place-text" name="name" type="text" placeholder="Название"
              className="popup__text popup__text_type_place-name" required minLength="2" maxLength="30" />
              <span className="popup__text-error place-text-error"></span>
            </label>
            <label className="popup__text-field">
              <input id="image-link" name="link" type="url" placeholder="Ссылка на картинку"
              className="popup__text popup__text_type_image-link" required />
              <span className="popup__text-error image-link-error"></span>
            </label>
          </>
        )}
      />

      <PopupWithForm 
        name="editAvatarForm"
        title="Обновить аватар"
        submitButtonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={(
          <>
            <label className="popup__text-field">
              <input id="image-avatarlink" name="avatarLink" type="url" placeholder="Ссылка на картинку"
              className="popup__text popup__text_type_image-link" required />
              <span className="popup__text-error image-avatarlink-error"></span>
            </label>
          </>
        )}
      />

      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

      <Footer />
    </div>
  );
}

export default App;