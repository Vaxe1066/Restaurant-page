
import Icon from './burgers.jpg';

const loadPage = () => {
    const content = document.querySelector("#content");
    const backgroundImgDiv = document.createElement("div");
    console.log("I have loaded");
    console.log("helloooo agin, lies---wooooooh");
     // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Icon;
    myIcon.classList.add("background-img");
    content.appendChild(myIcon);


}
    

export default loadPage