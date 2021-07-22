const NavMenu = document.getElementById('nav_container'),
      NavToggle = document.getElementById('nav_toggle'),
      NavClose = document.getElementById('nav_close')


    NavToggle.addEventListener('click', () =>{
       NavToggle ? NavMenu.style.display ='initial' : NavMenu.style.display='none'
    })

    NavClose.addEventListener('click', () =>{
        
        NavClose ? NavMenu.style.display = 'none' : NavMenu.style.display = 'initial'
    })

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:5
            }
        }
    })