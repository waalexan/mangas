window.addEventListener('scroll', () =>{
    if(window.scrollY==0){
        document.querySelector('.top').classList.remove("scrooll")    
    }else{
        document.querySelector('.top').classList.add("scrooll")
        
    }
})

document.getElementById('busca').onclick=function(){
    document.querySelector('.formsearch').classList.toggle("showform")
    document.querySelector('.formuser').classList.remove("showform")
}
document.getElementById('login').onclick=function(){
    document.querySelector('.formuser').classList.toggle("showform")
    document.querySelector('.formsearch').classList.remove("showform")
}

document.getElementById('menu-phone').onclick=function(){
    document.querySelector('.menu-menu').classList.toggle("showform2")
}