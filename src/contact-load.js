

const loadContact = () => {
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
    contactBtn.setAttribute("style", "background-color: rgba(245, 96, 10, 0.8");

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

    restDesc.classList.add("rest-desc-cont");

    const restDescEl = document.querySelector(".rest-desc-cont");

    const googleMap = document.createElement("iframe");
    googleMap.setAttribute("src","https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d75394.15842155041!2d-1.605771611807124!3d53.8060834705913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!3m2!1d53.8007554!2d-1.5490773999999998!5e0!3m2!1sen!2suk!4v1626363635522!5m2!1sen!2suk")
    googleMap.setAttribute("width", "600");
    googleMap.setAttribute("height", "450");
    googleMap.setAttribute("style", "border:0");
    googleMap.setAttribute("allowfullscreen", "0");
    googleMap.setAttribute("loading", "lazy");

    restDescEl.appendChild(googleMap);


    const infoDiv = document.createElement("div");
    infoDiv.classList.add("info");
    restDescEl.appendChild(infoDiv);

    const infoDivEl = document.querySelector(".info");

    const parInfo = document.createElement("p");
    parInfo.setAttribute('style', 'white-space: pre;');
    parInfo.textContent="1 Leeds Road,\r\n";
    parInfo.textContent+="LS1 1JJ,\r\n" ;
    parInfo.textContent+="Leeds. \r\n" ;
    parInfo.textContent+="\r\n" ;
    parInfo.textContent+="0113 2796543 \r\n" ;
    parInfo.textContent+="info@burgers.com" ;

    infoDivEl.appendChild(parInfo);










/*
<iframe 
src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d75394.15842155041!2d-1.605771611807124!3d53.8060834705913!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e3!4m0!4m5!1s0x48793e4ada64bd99%3A0x51adbafd0213dca9!2sLeeds!3m2!1d53.8007554!2d-1.5490773999999998!5e0!3m2!1sen!2suk!4v1626363635522!5m2!1sen!2suk" 
width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
*/

}
    
    
export default loadContact
