// SAVE BUTTON

const saveBtn = document.querySelector('.save-btn');

saveBtn.addEventListener('click', () => {

  saveBtn.innerText = "Saving...";

  saveBtn.style.opacity = "0.8";

  setTimeout(() => {

    saveBtn.innerText = "Saved Successfully";

    saveBtn.style.opacity = "1";

  }, 2000);

});


// THEME SELECTION

const themes = document.querySelectorAll('.theme-card');

themes.forEach(theme => {

  theme.addEventListener('click', () => {

    themes.forEach(item => {
      item.classList.remove('active-theme');
    });

    theme.classList.add('active-theme');

  });

});


// INPUT ANIMATION

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {

  input.addEventListener('focus', () => {

    input.style.border = "2px solid #38bdf8";

  });

  input.addEventListener('blur', () => {

    input.style.border = "none";

  });

});