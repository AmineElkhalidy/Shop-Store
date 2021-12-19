/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
  
  sr.reveal(`.about__data ,.about__title, .footer__copy`,{delay: 600})
  sr.reveal(`.about__perfil`,{delay: 700})
  sr.reveal(`.about__img`,{delay: 900, origin: 'top'})