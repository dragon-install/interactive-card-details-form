let nameInput = document.querySelector('#name')
let nameOnCard = document.querySelector('.name-on-card')

nameInput.addEventListener('input', () => {
  nameOnCard.textContent = nameInput.value
})

