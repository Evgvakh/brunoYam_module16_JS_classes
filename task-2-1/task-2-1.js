class Validator {
    isRangedNumber(num, array) {
        if (num >= array[0] && num <= array[1]) {
            return true;
        } else { return false; }
    } 

    isPhoneNumber(str) {
        let isPlus = true;
        let arr = str.split(' ');        
        
        if(arr[0] !== '+7') {
            return false;
        }

        if (arr[0] === '+7') {
            arr.splice(0, 1);
        }

        if (arr.join('').length < 10) {
            return false;
        }

        let numArr = arr.map(el => el = Number(el));         
        
        for (let i of numArr) {
            if (isNaN(i)) {
                return false;
            }
        }

        return true;
    }
}

const validator = new Validator();

console.log(validator.isRangedNumber(5, [1, 7]));
console.log(validator.isRangedNumber(2, [4, 8]));

console.log(validator.isPhoneNumber("+7 999 999 99 99"));
console.log(validator.isPhoneNumber("a 999 999"));
console.log(validator.isPhoneNumber("9 999 999 99 99"));