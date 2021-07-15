
import Icon from './burgers.jpg';

const loadPage = () => {
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

    const listStart = document.createElement("ul");

    const monday = document.createElement("li");
    const tuesday = document.createElement("li");
    const wednesday = document.createElement("li");
    const thursday = document.createElement("li");
    const friday = document.createElement("li");
    const saturday = document.createElement("li");
    const sunday = document.createElement("li");




    

    middle.classList.add("middle");

    header.classList.add("header");
    navDiv.classList.add("nav-buttons");
    midContent.classList.add("mid-content");

    homeBtn.classList.add("home-btn");
    menuBtn.classList.add("menu-btn");
    contactBtn.classList.add("contact-btn");

    restDesc.classList.add("rest-desc");
    hours.classList.add("hours");

    listStart.classList.add("hours-list");

  
    header.textContent = "Viraj's Burgers";

    homeBtn.setAttribute("type", "button");
    menuBtn.setAttribute("type", "button");
    contactBtn.setAttribute("type", "button");
    homeBtn.setAttribute("value", "Home");
    menuBtn.setAttribute("value", "Menu");
    contactBtn.setAttribute("value", "Contact");

    restDesc.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."

    monday.textContent = "Monday: Closed";
    tuesday.textContent = "Tuesday: noon - 10pm";
    wednesday.textContent = "Wedensday: noon - 10pm";
    thursday.textContent = "Thursday: noon - 10pm";
    friday.textContent = "Friday: noon - 12pm";
    saturday.textContent = "Saturday: noon - 12pm";
    sunday.textContent = "Sunday: noon - 10pm";


    //title.classList.add("restaurant-name");
    //title.textContent = "Viraj's Fat Burgers";

    //header.appendChild(title);
    //content.appendChild(header);
    //content.appendChild(backdrop);
    //content.appendChild(firstTest);
    

    
    //middle.appendChild(navDiv);
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

    const hoursEl = document.querySelector(".hours");

    hoursEl.appendChild(listStart);

    const listStartEl = document.querySelector(".hours-list");
    listStartEl.appendChild(monday);
    listStartEl.appendChild(tuesday);
    listStartEl.appendChild(wednesday);
    listStartEl.appendChild(thursday);
    listStartEl.appendChild(friday);
    listStartEl.appendChild(saturday);
    listStartEl.appendChild(sunday);



    
    
    //midContent.appendChild(restDesc);
    //midContent.appendChild(hours);

    //middleEl.appendChild(midContent);

    

   




    console.log("I have loaded");
    console.log("helloooo agin, lies---wooooooh");
     // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("background-img");
    


}
    

export default loadPage