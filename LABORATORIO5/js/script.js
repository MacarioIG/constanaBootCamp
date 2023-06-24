const HEADER = document.getElementById('header');
console.log(window)
window.addEventListener('scroll', ()=>{

    if(window.scrollY > 0 ){

        HEADER.classList.add('change-nav-bg')

    }else {


        HEADER.classList.remove('change-nav-bg')
        HEADER.classList.add('change-nav-bg2')


    }
    
})