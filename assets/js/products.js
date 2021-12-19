/*=============== SCROLL REVEAL ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
  })
  
  sr.reveal(`.section__title, .products__description`,{delay: 600})
  sr.reveal(`.home__footer`,{delay: 700})
  sr.reveal(`.home__img, .story__img`,{delay: 900, origin: 'top'})
  
  sr.reveal(`.products__card`,{origin: 'top', interval: 400, delay: 100})
