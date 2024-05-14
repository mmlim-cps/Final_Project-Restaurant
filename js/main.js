const nav=document.getElementById("nav");
const icon=document.getElementsByClassName("brand");
const icon1=icon[0];
const icon2=icon[1];
const icon3=icon[2];
window.onscroll=function(){
    if(document.body.scrollTop>=5||document.documentElement.scrollTop>=5){
        nav.classList.add("nav-transparent");
        nav.classList.remove("nav-colored");
        icon1.src="media/logo-sml.png";
        icon2.src="media/logo-sml.png";
        icon3.src="media/logo-sml.png";
    }
    else{
        nav.classList.remove("nav-transparent");
        nav.classList.add("nav-colored");
        icon1.src="media/logo-big.png", icon2.src="media/logo-big.png", icon3.src="media/logo-big.png";
    }
}