document.addEventListener('DOMContentLoaded', () => {
  // Находим элементы
  const toggleBtn = document.querySelector('.survey-toggle__btn');
  const surveySection = document.querySelector('.survey');
  const closeBtn = document.querySelector('.survey__close-btn');
  const surveyLink = document.querySelector('a[href="#survey"]');   
  const surveyForm = document.querySelector('.survey__form');
  const thankYouPopup = document.querySelector('.thank-you-popup');
  const closePopupBtn = document.querySelector('.thank-you-popup__close-btn');

  // Проверяем, найдены ли все элементы
  if (!surveyForm || !thankYouPopup || !closePopupBtn) {
      console.error('Ошибка: Не удалось найти элементы формы или попапа');
      return;
  }

  // Открытие/закрытие опроса
  if (toggleBtn) {
      toggleBtn.addEventListener('click', () => {
          surveySection.classList.toggle('survey--visible');
          console.log('Опрос открыт/закрыт');
      });
  }

  // Закрытие опроса
  if (closeBtn) {
      closeBtn.addEventListener('click', () => {
          surveySection.classList.remove('survey--visible');
          console.log('Опрос закрыт кнопкой');
      });
  }

  // Открытие опроса по ссылке
  if (surveyLink) {
      surveyLink.addEventListener('click', (e) => {
          e.preventDefault();
          surveySection.classList.add('survey--visible');
          console.log('Опрос открыт по ссылке');
      });
  }

  // Обработка отправки формы
  surveyForm.addEventListener('submit', (e) => {
      e.preventDefault();
      console.log('Форма отправлена');
      surveySection.classList.remove('survey--visible');
      thankYouPopup.classList.add('thank-you-popup--visible');
  });

  // Закрытие попапа
  closePopupBtn.addEventListener('click', () => {
      thankYouPopup.classList.remove('thank-you-popup--visible');
      console.log('Попап закрыт');
  });
});