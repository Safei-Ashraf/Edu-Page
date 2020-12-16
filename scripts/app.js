//Global obj to hold data:
let answerInfo = {};
//Answers list:
const modelAnswers = [`eraser`,`ruler`,`pencil`,`book`,`pen`];
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

//event checks if answer is correct or wrong:
answersList.forEach(option => option.addEventListener('click',
    ()=>{
    console.log('answer clicked', option)
    answerInfo.selected = option.textContent;
    console.log(answerInfo.selected);
    answerInfo.checked = modelAnswers.includes(answerInfo.selected);
    answerInfo.option = option.id;
    console.log(answerInfo.storedValue);
}));

answerAreas.forEach(box=> box.addEventListener('click', ()=>{
    if(answerInfo.selected)
    {
        if(answerInfo.checked)
        {
            document.getElementById(answerInfo.option).classList.add('hide-answer');
            box.classList.add('hide-answer');
            box.textContent = answerInfo.selected;
        }
        else{
            box.textContent = 'X'
        }
    }
    }));