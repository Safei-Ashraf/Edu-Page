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
answersList.forEach((option,key) => option.addEventListener('click',
    ()=>{
    answerInfo.selected = option.textContent;
    answerInfo.checked = modelAnswers.includes(answerInfo.selected);
    answerInfo.option = option.id;
    //toggling class active on answer selection:
    option.classList.toggle('selected-option');
    answersList.forEach((ell, els)=>{
        if(key !== els) {
            ell.classList.remove('selected-option');
        }});
}));

answerAreas.forEach(box=> box.addEventListener('click', ()=>{
    if(answerInfo.selected)
    {
        if(answerInfo.checked)
        {
            document.getElementById(answerInfo.option).classList.add('hide-answer');
            box.textContent = answerInfo.selected;
            box.style.pointerEvents = 'none'; //disable box if correct answer chosen
        }
        else{
            box.textContent = 'X'
            setTimeout(()=>{box.textContent = ''}, 1500);
        }}
    }));