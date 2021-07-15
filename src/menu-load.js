import spicyImg from './Spicy_Peri.jpg';
import chickenImg from './chicken.jpg';
import baconImg from './bacon_chicken.jpg';
import doubleImg from './double_cheese.jpg';



const loadMenu = () =>{
    console.log("Hello Friend");

    const content = document.querySelector("#content");
    const middle = document.createElement("div");

    const header = document.createElement("div");
    const navDiv = document.createElement("div");
    const midContent = document.createElement("div");

    const restDesc = document.createElement("div");
    const hours = document.createElement("div");

    const homeBtn = document.createElement("input");
    const menuBtn = document.createElement("input");
    const contactBtn = document.createElement("input");



    middle.classList.add("middle");

    header.classList.add("header");
    navDiv.classList.add("nav-buttons");
    midContent.classList.add("mid-content");

    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");

    restDesc.classList.add("rest-desc");


    header.textContent = "Viraj's Burgers";
    //since this is the home page
    menuBtn.setAttribute("style", "background-color: rgba(245, 96, 10, 0.8");

    homeBtn.setAttribute("type", "button");
    menuBtn.setAttribute("type", "button");
    contactBtn.setAttribute("type", "button");
    homeBtn.setAttribute("value", "Home");
    menuBtn.setAttribute("value", "Menu");
    contactBtn.setAttribute("value", "Contact");

    content.appendChild(middle);
    const middleEl = document.querySelector(".middle");

    middleEl.appendChild(header);
    middleEl.appendChild(navDiv);
    middleEl.appendChild(midContent);

    const navDivEl = document.querySelector(".nav-buttons");

    navDivEl.appendChild(homeBtn);
    navDivEl.appendChild(menuBtn);
    navDivEl.appendChild(contactBtn);

    const midContentEl = document.querySelector(".mid-content");
    
    midContentEl.appendChild(restDesc);
    midContentEl.appendChild(hours);



    //the above is the template now create the menu
    const row1 = document.createElement("figure");
    const row2 = document.createElement("figure");
    const row3 = document.createElement("figure");
    const row4 = document.createElement("figure");
    //const row5 = document.createElement("figure");
    //const row6 = document.createElement("figure");


    row1.classList.add("row1");
    row2.classList.add("row2");
    row3.classList.add("row3");
    row4.classList.add("row4");
    //row5.classList.add("row5");
    //row6.classList.add("row6");



    const restDescEl = document.querySelector(".rest-desc");

    restDescEl.appendChild(row1);
    restDescEl.appendChild(row2);
    restDescEl.appendChild(row3);
    restDescEl.appendChild(row4);


    
    const row1Cap = document.createElement("figcaption");
    const row2Cap = document.createElement("figcaption");
    const row3Cap = document.createElement("figcaption");
    const row4Cap = document.createElement("figcaption");
    //const row5 = document.createElement("figure");
    //const row6 = document.createElement("figure");


    row1Cap.classList.add("row1Cap");
    row2Cap.classList.add("row2Cap");
    row3Cap.classList.add("row3Cap");
    row4Cap.classList.add("row4Cap");
    //row5.classList.add("row5");
    //row6.classList.add("row6")





    function createImage(source, className){
        const mySpicy = new Image();
        mySpicy.src = source;
        mySpicy.classList.add(className);
        mySpicy.setAttribute("width", "150px");
        mySpicy.setAttribute("height", "150px");

        return mySpicy;
    }

    let mySpicy = createImage(spicyImg, "spciy-img");
    let chicken = createImage(chickenImg, "chicken");
    let double = createImage(doubleImg, "chicken");
    let bacon = createImage(baconImg, "chicken");


    const row1El = document.querySelector(".row1");
    const row2El = document.querySelector(".row2");
    const row3El = document.querySelector(".row3");
    const row4El = document.querySelector(".row4");
    //const row5El = document.querySelector(".row5");
    //const row6El = document.querySelector(".row6");

    row1El.appendChild(mySpicy);
    row2El.appendChild(chicken);
    row3El.appendChild(double);
    row4El.appendChild(bacon);

    row1Cap.textContent = "Spicy Peri-Peri";
    row2Cap.textContent = "Juicy Chicken";
    row3Cap.textContent = "Double Cheese Burger";
    row4Cap.textContent = "Bacon & Chicken Burger";

    row1El.appendChild(row1Cap);
    row2El.appendChild(row2Cap);
    row3El.appendChild(row3Cap);
    row4El.appendChild(row4Cap);



}


export default loadMenu