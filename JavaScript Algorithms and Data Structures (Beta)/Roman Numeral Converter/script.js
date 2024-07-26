const numberInput = document.getElementById("number");
const convert = document.getElementById("convert-btn");
const output = document.getElementById("output");
const tens = ['I', 'X', 'C', 'M']; //roman numbers that divide by 10
const fives = ['V', 'L', 'D']; //roman number that divide by 5

let toRoman = () => {
    if(numberInput.value === '') {
        return 'Please enter a valid number';
    }
    if(numberInput.value < 0) {
        return 'Please enter a number greater than or equal to 1';
    }
    if(numberInput.value >= 4000) {
        return 'Please enter a number less than or equal to 3999';
    }
    let romanNumber = '';
    const number = numberInput.value;
    for (let i = 0; i < number.length; i++) {
        if(number[i] === '4'){
            romanNumber += tens[number.length - i - 1] + fives[number.length - i - 1];
        } else if(number[i] === '9'){
            romanNumber += tens[number.length - i - 1] + tens[number.length - i];
        } else {
                number[i] >= '5' ? romanNumber += fives[number.length - i - 1] : romanNumber;
                for (let j = 0; j < number[i] % 5; j++) {
                    romanNumber += tens[number.length - i - 1];
            }
        }
    }
    return romanNumber;
}

//1111 = MCXI
//1555 = MDLV
//555 = DLV
//1444 = MCDXLIV
//1999 = MCMXCIX

convert.addEventListener("click", () => {output.innerHTML = toRoman();});
document.addEventListener("keydown", (event) => {
    if(event.keyCode === 13) {
        output.innerHTML = toRoman();
        console.log('!');
    }
})
