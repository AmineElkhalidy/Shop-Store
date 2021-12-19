/*=============== SHOW / HIDDEN INPUT ===============*/
const showHiddenInput = (inputOverlay, inputPass, inputIcon) =>{
    const overlay = document.getElementById(inputOverlay),
          input = document.getElementById(inputPass),
          iconEye = document.getElementById(inputIcon)
          
    iconEye.addEventListener('click', () =>{
        // Change password to text
        if(input.type === 'password'){
            // Switch to text
            input.type = 'text'

            // Change icon
            iconEye.classList.add('ri-eye-off-line')
        }else{
            // Change to password
            input.type = 'password'

            // Remove icon
            iconEye.classList.remove('ri-eye-off-line')
        }

        // Toggle the overlay
        overlay.classList.toggle('overlay-content')
    })
}

showHiddenInput('input-overlay','input-pass','input-icon')
/*===== LOGIN SHOW and HIDDEN =====*/
const signUp = document.getElementById('sign-up'),
    signIn = document.getElementById('sign-in'),
    loginIn = document.getElementById('login-in'),
    loginUp = document.getElementById('login-up')


signUp.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('block')
    loginUp.classList.remove('none')

    // Add classes
    loginIn.classList.toggle('none')
    loginUp.classList.toggle('block')
})

signIn.addEventListener('click', ()=>{
    // Remove classes first if they exist
    loginIn.classList.remove('none')
    loginUp.classList.remove('block')

    // Add classes
    loginIn.classList.toggle('block')
    loginUp.classList.toggle('none')
})

