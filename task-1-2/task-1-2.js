class MyString {   
    reverse(string) {
        return string.split('').reverse().join('');  
    }

    ucFirst(string) {        
        let a = string.split('');
        a[0] = a[0].toUpperCase();
        return a.join('');                
    }

    ucWords(string) {
        let a = string.split(' ');
        const array = [];        
        a.forEach((element)=> {
            let c = element.split('');            
            c[0] = c[0].toUpperCase();            
            let d = c.join('');            
            array.push(d);            
        });
        let jointString = array.join(' ');
        return jointString;
    }

}

const str = new MyString();

console.log(str.reverse("foo"));
console.log(str.reverse("abcde"));

console.log(str.ucFirst("dima"));
console.log(str.ucFirst("Oleg"));

console.log(str.ucWords("hello world"));
console.log(str.ucWords("abc abc ABC Abc"));