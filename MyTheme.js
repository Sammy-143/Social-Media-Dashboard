const themeToggleBtn = document.querySelector('.theme-toggle');
const theme = localStorage.getItem('theme'); 

theme && document.body.classList.add(theme);


const image = document.querySelector('header img');
let isOldImage = true;

themeToggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light');
    if (document.body.classList.contains('light')){
        localStorage.setItem('theme', 'light');
    }
    else{
      localStorage.removeItem('theme');
    }
   
});


image.addEventListener('click', () => {
    if (isOldImage) {
      image.src = 'lightBtn.svg';
    } else {
      image.src = 'darkBtn.svg';
    }
    isOldImage = !isOldImage;
  });