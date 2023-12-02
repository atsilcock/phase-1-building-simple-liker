// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById("modal")
const errorMessage = document.getElementById("modal-message")
errorModal.classList.add('hidden')

const similarElements = document.querySelectorAll(".like-glyph");

similarElements.forEach(element => {
  element.addEventListener('click', (e) => {
    mimicServerCall()
    .then(() => {
      console.log(e.target)
      if (e.target.classList.contains('activated-heart')){
        e.target.classList.remove('activated-heart')
        e.target.textContent = EMPTY_HEART
      } else {
        e.target.classList.add("activated-heart")
        e.target.textContent = FULL_HEART
        
    }
    })
    .catch((error) =>{
      console.log(error)
      errorModal.classList.remove('hidden')
      errorMessage.textContent = error;
      setTimeout(() => {errorModal.classList.add('hidden')}, 3000)
    })
  })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
