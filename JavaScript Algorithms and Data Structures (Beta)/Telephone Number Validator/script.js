const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
let isValid = () => {
    const number = document.getElementById('user-input').value;
    if(number === ''){
        alert('Please provide a phone number');
        return;
    }

    const countryNumber = `^(1\\s?)?`;
    const areaCode = `(\\([0-9]{3}\\)|([0-9]{3}))`;
    const spaceMinus = `(\\s|-)?`;
    const phoneNumber = `[0-9]{3}(\\s|-)?[0-9]{4}$`;
    const numberRegex = `${countryNumber}${areaCode}${spaceMinus}${phoneNumber}`;
    console.log(numberRegex);
    console.log(number.match(numberRegex));
    if(number.match(numberRegex)){
        let resultsDiv = document.getElementById('results-div');
        let p = document.createElement('p');
        p.appendChild(document.createElement('valid'));
        p.classList.add('valid');
        p.innerText = `Valid US number: ${number}`;
        resultsDiv.appendChild(p);
    } else {
        let resultsDiv = document.getElementById('results-div');
        let p = document.createElement('p');
        p.appendChild(document.createElement('invalid'));
        p.classList.add('invalid');
        p.innerText = `Invalid US number: ${number}`;
        resultsDiv.appendChild(p);
    }
}

let clearResults = () => {
    const resultsDiv = document.getElementById('results-div');
    while(resultsDiv.firstChild) {
        resultsDiv.removeChild(resultsDiv.lastChild);
    }

}

checkBtn.addEventListener('click', isValid);
clearBtn.addEventListener('click', clearResults);

window.addEventListener('keyup', function(event){
    if (event.key === 'Enter'){
        isValid();
    }
    if(event.key === ' '){
        clearResults();
    }
});
