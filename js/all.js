;(function(){

    const minList = document.querySelector(".header_menu_minlist");

    let header = document.querySelector(".header");

    const OpenList = function(e){
        e.preventDefault();
        header.classList.toggle("open");
    }

    minList.addEventListener("click",OpenList);

})()