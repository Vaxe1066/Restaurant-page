

const clearDom = () =>{
    const myNode = document.querySelector("#content");
    while (myNode.firstChild) {
      myNode.removeChild(myNode.lastChild);
    }

}

export default clearDom