const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
const notes = document.querySelectorAll(".input-box");

function shownotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
  
}
shownotes();

function updateStorage() {
  localStorage.setItem("notes" , notesContainer.innerHTML);
  
}



createBtn.addEventListener("click" , ()=>{
  let inputBOX = document.createElement("p");
  let img = document.createElement("img");
  inputBOX.className = "input-box";
  inputBOX.setAttribute("contenteditable" , "true");
  img.src = "c:/Users/sys/Downloads/delete-removebg-preview.png";
  notesContainer.appendChild(inputBOX).appendChild(img);
  
})
// $(document).ready(function () {
//   $("#hidden").click(function () {
//     $(".notes-container").hide( );
    
// })
  
// })

 notesContainer.addEventListener("click", function (e) {   
 if (e.target.tagName == "IMG") {
   e.target.parentElement.remove();
     updateStorage();
  }
  else if(e.target.tagName === "p"){
    notes = document.querySelectorAll(".input-box");
    notes.forEach(nt =>{
      nt.onkeyup = function () {
        updateStorage();
        
      }
    }

    )

  }
  document.addEventListener("keydown" , event =>{
    if (event.key === "Enter") {
      document.execCommand("insertLineBreak");
      event.preventDefault();
      
    }
  })
  
    
  
   })


