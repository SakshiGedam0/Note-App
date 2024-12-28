const noteContainer =  document.querySelector(".note-container");
const createBtn =  document.querySelector(".btn");
let note = document.querySelectorAll(".input-box");

function showNote(){
    noteContainer.innerHTML=localStorage.getItem("note");
}
showNote();
function updatedStorage(){
    localStorage.setItem("note",noteContainer.innerHTML);
}
createBtn.addEventListener("click",()=>{
    let inputBox = document.createElement("p");
    let img = document.createElement("img");
    inputBox.className = "input-box";
    inputBox.setAttribute("contenteditable","true");
    img.src="images/delete.png";
    inputBox.appendChild(img);
    noteContainer.appendChild(inputBox);
    inputBox.onkeyup = function() {
        updatedStorage();
    };
});
noteContainer.addEventListener("click",function(e){
    if(e.target.tagName === 'IMG'){
        e.target.parentElement.remove();
        updatedStorage();
    }
});
document.addEventListener("keydown",event =>{
    if(event.key === "Enter"){
        document.execCommand("insertHTML", false, "<br><br>");
        event.preventDefault();
    }
});