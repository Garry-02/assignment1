const themebtn = document.querySelector(".themebutton");
const head = document.querySelector("header");
const sidebar = document.querySelector(".sidebar");
const middle = document.querySelector(".middle");
const footer = document.querySelector("footer");
const ul = document.querySelector(".headerlist");
const textarea = document.querySelector("textarea");


function themechange() {

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

function newnote() {
    newbtn.style.visibility = 'hidden';
    savebtn.style.visibility = 'visible';
    delbtn.style.visibility = 'visible';
    textarea.style.visibility = 'visible';
}

function del() {
    newbtn.style.visibility = 'visible';
    savebtn.style.visibility = 'hidden';
    delbtn.style.visibility = 'hidden';
    textarea.style.visibility = 'hidden';
    textarea.innerHTML = "add your note here";
}


/* new note button 
    when clicked, 
    - shows a note title area
    - shows up a blank note taking area 
    - shows save button cancel buttons

*/

/* save note button
    when clicked, 
    - checks if there is something written in the note not or not
    - if nothing is written :
        - prompts "write something before saving" 
    - else : 
        - saves it as a note with the note title as its name 
        - saves it to NoteArray with other notes as another array element
        - displays in list at sidebar
    - removes the note title area
    - removes the note taking area 
    - removes the buttons
*/

/* cancel note button
    when clicked,
    - note is cancelled :
    - returns page to original state 
        - removes the note title area
        - removes the note taking area
        - removes the buttons
*/

/* NoteArray 
    An array with objects :
    - body 
    - title
    stores the saved note with :
    - note title as title 
    - note area as body 
*/