// https://www.geeksforgeeks.org/missing-characters-make-string-pangram/
function missingCharFoPangram(sentence) {
    let str= sentence.toLowerCase().split(" ").join("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<str.length;i++) {
        alphabet=alphabet.replace(str[i], '');
    }
    return alphabet
}