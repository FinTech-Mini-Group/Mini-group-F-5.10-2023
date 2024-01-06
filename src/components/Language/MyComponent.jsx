import React from 'react';
import { useTranslation } from 'react-i18next';

const MyComponent = () => {
const { t, i18n } = useTranslation();
const changeLanguage = (lng) => {
    i18n.
changeLanguage(lng);
  };
  return (
    <div>
      <h1>{t('welcome.title')}</h1>
      <p>{t('welcome.message')}</p>
      <button onClick={() => changeLanguage('uz')}>O'zbekcha</button>
      <button onClick={() => changeLanguage('ru')}>Русский</button>
    </div>
  );
};

export default MyComponent;