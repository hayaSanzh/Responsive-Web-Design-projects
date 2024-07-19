let result = document.getElementById('result');
let checkBtn = document.getElementById('check-btn');

let isPalindrome = () => {
    let mainText = document.getElementById('text-input').value;
    if(mainText === ''){
        alert('Please input a value');
    }
    let left = 0, right = mainText.length - 1;
    let text = mainText.toLowerCase();
    while(left < right) {
        if ((text[left] >= ' ' && text[left] <= '/') ||
            (text[left] >= ':' && text[left] <= '@') ||
            (text[left] >= '[' && text[left] <= '`') ||
            (text[left] >= '{' && text[left] <= '~')) {
            left++;
        } else if ((text[right] >= ' ' && text[right] <= '/') ||
            (text[right] >= ':' && text[right] <= '@') ||
            (text[right] >= '[' && text[right] <= '`') ||
            (text[right] >= '{' && text[right] <= '~')) {
            right--;
            console.log('!');
        } else {
            if (text[left] !== text[right]) {
                result.classList.remove('hide');
                result.innerText = mainText + ' is not a palindrome';
                return;
            } else {
                left++;
                right--;
            }
        }
    }

    result.classList.remove('hide');
    result.innerText = mainText + ' is a palindrome';
};
checkBtn.addEventListener('click',isPalindrome);

