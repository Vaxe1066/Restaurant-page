import loadPage from './page-load.js';
import loadMenu from './menu-load.js';
import loadContact from './contact-load.js';
import clearDom from './clear-dom.js';

import './style.css';



loadPage();



function eventHandler(){
    const home = document.querySelector(".home-btn");
    const menu = document.querySelector(".menu-btn");
    const contact = document.querySelector(".contact-btn");


    if(home){
        home.addEventListener("click", ()=>{
            clearDom();
            loadPage();
            eventHandler();
        })
    }

    if(menu){
        menu.addEventListener("click", ()=>{
            clearDom();
            loadMenu();
            eventHandler();
        })
    }

    if(contact){
        contact.addEventListener("click", ()=>{
            clearDom();
            loadContact();
            eventHandler();
        })
    }
}






eventHandler();


