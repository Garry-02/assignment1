const themebtn = document.querySelector(".themebutton");
const head = document.querySelector("header");
const sidebar = document.querySelector(".sidebar");
const middle = document.querySelector(".middle");
const footer = document.querySelector("footer");
const ul = document.querySelector(".headerlist");
const textarea = document.querySelector("textarea");
var newbtn = document.querySelector(".newbutton");
const savebtn = document.querySelector(".save");
const delbtn = document.querySelector(".delete");
const closebtn = document.querySelector(".close");
var NotesArray = [];


function themeChange() {
    head.classList.toggle("dark");
    sidebar.classList.toggle("sdark");
    middle.classList.toggle("mdark");;
    footer.classList.toggle("dark");
    ul.classList.toggle("dark");
    textarea.classList.toggle("tdark");
}

function createNoteObject(arr) {
    return NewObject = {title : arr[0], body: arr[1]}
}

function newNote() {
    newbtn.style.visibility = 'hidden';
    savebtn.style.visibility = 'visible';
    delbtn.style.visibility = 'visible';
    textarea.style.visibility = 'visible';
}

function delNote() {
    newbtn.style.visibility = 'visible';
    savebtn.style.visibility = 'hidden';
    delbtn.style.visibility = 'hidden';
    textarea.style.visibility = 'hidden';
    textarea.value = "add your note here (Put title in first line and hit enter twice before note body)";
}   

function saveNote() {
    const note = document.querySelector('textarea').value;
    const notearr = note.split('\n\n');
    NotesArray.push(createNoteObject(notearr));
    textarea.value = "";
    console.log(NotesArray);
    delNote();

    const noteTitle = Object.values(notearr)[0];
    console.log(noteTitle);
    const entry = document.createElement("li");
    entry.onclick = function() {
        textarea.style.visibility = 'visible';
        textarea.value = note;
        newbtn.style.visibility = 'hidden';
        closebtn.style.visibility = 'visible'; 
    }
    entry.appendChild(document.createTextNode(noteTitle))
    document.getElementById("notelist").appendChild(entry)
}

function closeNote() {
    delNote();
    closebtn.style.visibility = 'hidden';
}