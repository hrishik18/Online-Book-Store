
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count=0;
    let count2 = 0;
    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
        else if(letter!=='  ')
        { 
         count2++;
        }
        else 
        mkjcontinue;

    }
    console.log("The consonant are : "+count2);
    return count;
}

const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log("The vowels are : "+result);
