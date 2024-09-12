import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './HeaderMainComponent.css';

function HeaderMainComponent() {
  const { t, i18n } = useTranslation();
  const [state, setState] = useState({
    lenguaje: "es-ES",
    isScroll: false,
  })

  useEffect(() => {
    const handleScroll = () => {
      setState({ ...state, isScroll: window.scrollY > 0 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setState({ ...state, lenguaje: newLanguage });
    i18n.changeLanguage(newLanguage);
  };

  return (
    <header className={state.isScroll ? 'scrolled' : ''}>
      <div className="header-content">
        <nav>
          <ul>
            <li><a href="#index">{t('home_header')}</a></li>
            <li><a href="#about">{t('about_me_header')}</a></li>
            <li><a href="#projects">{t('skills_header')}</a></li>
            <li><a href="#trajectory">{t('trajectory_header')}</a></li>
            <li><a href="#contact">{t('contact_header')}</a></li>
            <li>
              <select value={state.lenguaje} onChange={handleLanguageChange} className="language-dropdown">
                <option value="es-ES">Español</option>
                <option value="en-GB">English</option>
                <option value="es-CA">Català</option>
              </select>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderMainComponent;
