/* Button to switch to dark theme 
    light theme : light background with dark text
    dark theme : dark background with light text 

    - when in light theme, button is "off" or boolean value False
    - when in dark theme, button is "on" or boolean value True
    - when clicked,
    - checks if button = on or off
    - if off, changes theme to dark
    - if on, changes theme to light 

*/

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