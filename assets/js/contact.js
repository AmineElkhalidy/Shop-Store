/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
  
  sr.reveal(`.section__title`,{delay: 600})
  sr.reveal(`.contact__data`,{delay: 900, origin: 'top'})
  sr.reveal(`.contact__form`,{origin: 'right', interval: 100})