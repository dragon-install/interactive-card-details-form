let nameInput = document.querySelector('#name')
let nameOnCard = document.querySelector('.name-on-card')
let numberInput = document.querySelector('#number')
let numberOnCard = document.querySelector('.card-number')


nameInput.addEventListener('input', () => {
  nameOnCard.textContent = nameInput.value
})

// numberInput.addEventListener('input', () => {
//   numberOnCard.textContent = numberInput.value
//   if(numberInput.value.length > numberInput.maxLength) {
//     alert('too many numbers')
//     return
//   }
// })

numberInput.addEventListener('input', () => {
  if(numberInput.value.length > numberInput.maxLength) {
    return
  } else {
    
  }
})
