//Adding event listeners to the img from Portfolio 
const projectHTMLImg = document.getElementById('projectsHTML');
const projectCSSImg = document.getElementById('projectsCSS');
const projectJSImg = document.getElementById('projectsJS');
//Creating a new button element
projectHTML.addEventListener('click', function(){
    const HTMLbutton = document.createElement('button');
    HTMLbutton.style.cursor = 'pointer';
    //Replace the img with button
    projectHTMLImg.replaceWith(HTMLbutton);
    //Add an Event listener to the new button
    HTMLbutton.addEventListener('click', function(){
        alert('Button clicked!');
    })


})