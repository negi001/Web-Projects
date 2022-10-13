// get text from each button
let string = '';
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=> {
    button.addEventListener('click', (e) => {
        string += e.target.innerText;
        document.getElementById("result").innerText = string;
    })
})

// all clear button 
function clear_all_text() {
    // getting AC button by Id
    let text = document.getElementById("clear").innerText;
    // set everything to 0
    let output = document.getElementById("result").innerText = 0;
    string='';
}

// calculate data
function calculate() {
    let calc = document.getElementById("result").innerText;
    let final = eval(calc);
    document.getElementById("result").innerText = final;
    string=final;
}


