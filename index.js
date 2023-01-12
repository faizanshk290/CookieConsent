const modalBoxEl = document.getElementById('modal-box')
const acceptBtn = document.getElementById('accept-btn')
const declineBtn = document.getElementById('decline-btn')
const consentForm = document.getElementById('consent-form')
const closeBtn = document.getElementById('modal-close-btn')

setTimeout(() => {
   modalBoxEl.style.display = 'block' 
}, 1500);


consentForm.addEventListener("submit",(submission)=>{

    submission.preventDefault()

    const formData = new FormData(consentForm)
    console.log(formData.get('name'),formData.get('email'))

    document.getElementById('modal-msg').innerHTML = 
    `
        <div id="confirm-msg-container">
            <img class="loading-gif" src="images/loading.svg">
            <p id="confirm-msg">Uploading your data to dark web....</p>
        </div>
    `

    setTimeout(() => {
        document.getElementById("confirm-msg").textContent = "Making the sale...."
    },2500 );

    setTimeout(()=>{
        document.getElementById('modal-inner').innerHTML = 
        `
            <div id="final-msg-container">
                <h4 >Thanks, <span>${formData.get('name')}</span> Buddy!</h4>
                <p>We just sold the rights to your eternal soul !!!</p>
                <img class="pirate-gif" src="images/pirate.gif">
            </div>
        `
        closeBtn.disabled = false
    },5500)
    
})

declineBtn.addEventListener("mouseover",()=>{
    document.getElementById('modal-btn-container').classList.toggle('reverse-btn')
})

closeBtn.addEventListener("click",()=>{
    modalBoxEl.style.display = 'none'
})