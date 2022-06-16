
const cards  =  document.querySelectorAll(".cards");


const obsevable = new IntersectionObserver(entries =>{
    // console.log(entries);   
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })
});


cards.forEach(card => {
    obsevable.observe(card)
})