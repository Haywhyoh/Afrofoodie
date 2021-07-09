const NavMenu = document.getElementById('nav_container'),
      NavToggle = document.getElementById('nav_toggle'),
      NavClose = document.getElementById('nav_close')

if (NavToggle) {
    NavToggle.addEventListener('click', () =>{
        NavMenu.style.visibility ='visible'
    })
}