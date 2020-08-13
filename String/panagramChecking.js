//https://www.geeksforgeeks.org/pangram-checking/

function panagramChecking(sentence) {
    let str= sentence.toLowerCase().split(" ").join("");
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0;i<str.length;i++) {
       alphabet=alphabet.replace(str[i], '')
    }
    if(!alphabet.length) return true;
    return false;

}

// panagram("The quick brown fox jumps over lazy the dog")
// true
// panagram("The quick brown fox jumps over dog")
// false