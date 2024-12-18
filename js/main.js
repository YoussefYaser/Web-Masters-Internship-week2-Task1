const page = document.querySelector('.page');
const nav = document.querySelector('nav');
const navBarToggler = document.querySelector('.page nav .navbar-toggler');
const subscribeInput = document.querySelector('.page footer .subscribe input');

page.style.setProperty('padding-top', `${nav.clientHeight}px`);

// handle navbar shadow with scroll

window.addEventListener('scroll', function(){
    if(this.scrollY < 200)
        nav.style.cssText = `box-shadow: 0 0 28px 10px transparent;`;
    else
        nav.style.cssText = `box-shadow: 0 0 28px 10px #cccccc8a;`;
});

navBarToggler.addEventListener('click', function(){
    if(!this.classList.contains('collapsed')){
        nav.style.cssText = `box-shadow: rgba(204, 204, 204, 0.54) 0px 0px 28px 10px;`
    }
    else if(!window.scrollY){
        nav.style.cssText = `box-shadow: none;`
    }
});

//---------------------------------------------------------------------------------------------

// subscribe input placeholder toggle

subscribeInput.addEventListener('blur', function(){
    if(this.value){
        this.nextElementSibling.nextElementSibling.style.opacity = '0';
    }
    else{
        this.nextElementSibling.nextElementSibling.style.opacity = '1';
    }
})






