const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1 //determines if it is prev/next
        const slides = button
        .closest("[data-carousel]")
        .querySelector('[data-slides]') //selects the data

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset //convert to an array
        //Looping back to first or previous slide

        if (newIndex < 0) newIndex = slides.children.length -1 
        if (newIndex >= slides.children.length) newIndex = 0 //this means we looped over the last slide and return to the beginning

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active //removes slide that was active before
    })
})