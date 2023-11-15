var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

let inputemail = document.querySelector('#email');
let mistake = document.querySelector('#mistake');
let valueemail = inputemail.value;



function submit() {
  if (inputemail.value.match(validRegex)) {
    document.querySelector('#btn').addEventListener('click', () => {
      document.querySelector('.main-div').style.display = 'none'
    });

    document.querySelector('#btn').addEventListener('click', () => {
      document.querySelector('.pop-up').style.display = 'block'
    });
  } else {
    mistake.innerHTML = 'Please enter valid email!'
    inputemail.style.borderColor = 'red'
    inputemail.style.color = 'red'
  }

}

document.querySelector('.pop-up-btn').addEventListener('click', () => {
  document.querySelector('.pop-up').style.display = 'none'
  location.reload()
});

document.querySelector('.pop-up-btn').addEventListener('click', () => {
  document.querySelector('.main-div').style.display = 'block'
});






