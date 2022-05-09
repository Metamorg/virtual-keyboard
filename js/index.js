import Keyboard from './Keyboard.js';

const langCode = localStorage.getItem('keyboardLang') || 'en';
const keyboard = new Keyboard(langCode);
// eslint-disable-next-line eol-last
keyboard.init();