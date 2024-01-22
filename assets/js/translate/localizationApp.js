// LocalizationApp.js

let currentLanguage = 'ar';

let currentDirction = "rtl"

function changeLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  currentDirction = currentDirction === 'ltr' ? 'rtl' : 'ltr';
  applyTranslations();
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  const elementsDir =document.querySelectorAll('[dir]');
 

  elements.forEach(elementd=>{
    const key=elementd.getAttribute('placeholder');
    
    if (translations[currentLanguage][key]) {
      elementd.placeholder = translations[currentLanguage][key];
    }
  })

  elementsDir.forEach((element)=>{
    // const dirs = element.getAttribute('dir');
    element.dir=currentDirction;
  })

  elements.forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (translations[currentLanguage][key]) {
      element.textContent = translations[currentLanguage][key];
    }
  });
}



// Initial application of translations
applyTranslations();
