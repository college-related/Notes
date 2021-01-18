
var menu = document.querySelector(".menu");
var toc = document.querySelector(".stackedit__left");
var list = document.querySelector(".stackedit__toc").children.item(0).children.item(0).children.item(1).children;
var closeMenu = document.querySelector(".closeMenu");

menu.addEventListener('click', function(){
    toc.classList.add("active-sidebar");
    closeMenu.style.display = "block"; 
});

function closeSideBar(){
    toc.classList.remove("active-sidebar");
    closeMenu.style.display = "none";
}

for(var i = 0; i < list.length; i++){
    list[i].addEventListener('click', closeSideBar);
}

if(toc.classList.contains("active-sidebar")){
    document.addEventListener('click', closeSideBar);
}

closeMenu.addEventListener('click', closeSideBar);