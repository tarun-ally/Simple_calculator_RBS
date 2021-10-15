var number = document.getElementById('num');
var equal = document.getElementById('equal');
var answer = document.getElementById('answer');
var removeAnswer = document.getElementById('remove');
var showingNumber =document.getElementById('showingNumber');

let tag=0;
// showing answer
equal.addEventListener('click', arthematic);

// adding element to string
number.addEventListener('click', addElement);

// removing answer node
removeAnswer.addEventListener('click', deleteAnswer);


var numb = '';
function addElement(e) {
    
    if(tag==1){
        showingNumber.removeChild(showingNumber.childNodes[1]);

    }
    tag=1;
    numb += `${e.target.innerText}`;
    let line = document.createElement('li');
    showingNumber.appendChild(line.appendChild(document.createTextNode(numb)));

    console.log(numb);
}

function arthematic(e) {
    let currentValue = 0;
    let previousValue = 0;
    let add;
    let flag = 0;
    for (let i = 0; i < numb.length; i++) {
        // console.log(typeof numb[i])
        if (parseInt(numb[i]) >= 0 && parseInt(numb[i]) <= 9) {
            currentValue = currentValue * 10 + parseInt(numb[i]);

        }
        if (numb[i] == '-' || numb[i] == '+' || numb[i] == '*' || numb[i] == '/') {
            flag += 1;
            add = numb[i];
            previousValue = currentValue;
            currentValue = 0;
        }

    }
    var li = document.createElement('li');
    let ans=currentValue;
    if(add=='-'){
        ans = previousValue - currentValue;
    }
    if(add=='+'){
        ans = previousValue + currentValue;
        
    }
    if(add=='*'){
        ans = previousValue * currentValue;
        
    }
    if(add=='/'){
        ans = previousValue / currentValue;
        
    }

    answer.appendChild(li.appendChild(document.createTextNode(ans)));
    currentValue=0;
    previousValue=0;
    add='';
    // ans='';
    numb='';
    // answer.childNodes(`<li>${currentValue}</li>`);
    console.log(currentValue, previousValue, add, ans, 'as');

}

 function deleteAnswer(e){

    answer.removeChild(answer.childNodes[1]);
    //  console.log();
 }