const container = document.querySelectorAll(".container");

Object.values(container).map(container => {
    const slider = new Glide(container, {
        type: "carousel",
        perView: 4,
        gap: 10,

        breakpoints: {
            
            768: {
                perView:2
            },
            568: {
                perView: 1
            },
            320: {
                perView: 1
            }
        }

    });


    slider.mount();

});