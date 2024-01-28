// LocalizationApp.js

// let currentLanguage = 'ar';
// let currentDirction = "rtl"


// Function to get the saved language and direction from local storage
function getSavedLanguageAndDirection() {
  const savedLanguage = localStorage.getItem('currentLanguage');
  const savedDirection = localStorage.getItem('currentDirection');
  return { language: savedLanguage || 'ar', direction: savedDirection || 'rtl' };
}

let { language: currentLanguage, direction: currentDirection } = getSavedLanguageAndDirection();

function changeLanguage() {
  currentLanguage = currentLanguage === 'en' ? 'ar' : 'en';
  currentDirection = currentDirection === 'ltr' ? 'rtl' : 'ltr';
  applyTranslations();

  localStorage.setItem('currentLanguage', currentLanguage);
  localStorage.setItem('currentDirection', currentDirection);
}

function applyTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  const elementsDir = document.querySelectorAll('[dir]');


  elements.forEach(elementd => {
    const key = elementd.getAttribute('placeholder');

    if (translations[currentLanguage][key]) {
      elementd.placeholder = translations[currentLanguage][key];
    }
  })

  elementsDir.forEach((element) => {
    // const dirs = element.getAttribute('dir');
    element.dir = currentDirection;

   
    
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


function closeNav() {
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.style.right = currentDirection === 'ltr' ? '350px' : '';
  mobileNav.style.left = currentDirection === 'rtl' ? '350px' : '';
}

function apenNav() {
  const mobileNav = document.getElementById('mobile-nav');
  mobileNav.style.right = currentDirection === 'ltr' ? '20px' : '';
  mobileNav.style.left = currentDirection === 'rtl' ? '20px' : '';
}

