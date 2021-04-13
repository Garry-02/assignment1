const themebtn = document.querySelector(".themebutton");
const head = document.querySelector("header");
const sidebar = document.querySelector(".sidebar");
const middle = document.querySelector(".middle");
const footer = document.querySelector("footer");
const ul = document.querySelector(".headerlist");
const textarea = document.querySelector("textarea");

function themeChange() {

    head.classList.toggle("light");
    head.classList.toggle("dark");
    sidebar.classList.toggle("sdark");
    sidebar.classList.toggle("slight");
    middle.classList.toggle("mdark");
    middle.classList.toggle("mlight");
    footer.classList.toggle("dark");
    footer.classList.toggle("light");
    ul.classList.toggle("light");
    ul.classList.toggle("dark");
    textarea.classList.toggle("tlight");
    textarea.classList.toggle("tdark");

}


var newbtn = document.querySelector(".newbutton");
const savebtn = document.querySelector(".save");
const delbtn = document.querySelector(".delete");

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

var NotesArray = [];

function saveNote() {
    const note = document.querySelector('textarea').value
    const notearr = note.split('\n\n')
    NotesArray.push(createNoteObject(notearr))
    document.querySelector('textarea').value = ""
    console.log(NotesArray)
    delNote();
}


function createNoteObject(arr) {
    return NewObject = {title : arr[0], body: arr[1]}
}

