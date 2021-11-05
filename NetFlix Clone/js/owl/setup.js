$('.owl-carousel').owlCarousel({
    loop:true,/*se colcar falae acaba no final*/
    margin:10,
    nav:false,/*tira botao debaixo pra passar*/
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5/*ssetiver 100px fica 5 item*/
        }
    }
})