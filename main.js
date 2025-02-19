//Adding event listeners to the img from Portfolio 
const projectHTML = document.getElementById('projectsHTML');
const projectCSS = document.getElementById('projectsCSS');
const projectJS = document.getElementById('projectsJS');
//Creating a new button element
projectHTML.addEventListener('click', function(){
    const HTMLbutton = document.createElement('button');
    HTMLbutton.style.cursor = 'pointer';
    //Replace the img with button
    projectHTML.replaceWith(buttonElement);
    //Add an Event listener to the new button
    HTMLbutton.addEventListener('click', function(){
        alert('Button clicked!');
    })


})