//Catching DOM elements:
//top buttons:
const imgBtn = document.querySelector('#dummy-img-btn');
const helpBtn = document.querySelector('#help-btn');

//Answer options:
const answersList = document.querySelectorAll('.option');

//Answer Areas:
const answerAreas = document.querySelectorAll('.answer-place');

//Handle Click Events:
const displayImg = ()=>{
    console.log('dummy img displayed here');
    }
imgBtn.addEventListener('click', displayImg);

const displayHelp = ()=>{
    console.log('a div overlay with help content here')
}
helpBtn.addEventListener('click', displayHelp);


answersList.forEach(option => option.addEventListener('click',
 ()=>{console.log('answer clicked', option)}));