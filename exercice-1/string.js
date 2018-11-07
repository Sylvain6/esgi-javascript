helloWorld = 'hello world';

function ucFirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function allMin(string){
    return string.toLowerCase();
}

function capitalize(string){
    if (string.length === 0) {
        console.log("Key is empty");
        return;
    }
    let splitted = string.split(" ");
    newTab = [];
    splitted.map((currElement) => {
        capitalizedWord = allMin(currElement);
        newTab.push(capitalizedWord);
    });
    capitalizedString = newTab.join(" ");
    return capitalizedString;
}

function pascalCase(string){
    if (string.length === 0) {
        console.log("Key is empty");
        return;
    }
    let splitted = string.split(" ");
    newTab = [];
    splitted.map((currElement) => {
        capitalizedWord = ucFirst(currElement);
        newTab.push(capitalizedWord);
    });
    capitalizedString = newTab.join("");
    return capitalizedString;
}

function snakeCase(string){
    if (string.length === 0) {
        console.log("Key is empty");
        return;
    }
    let splitted = string.split(" ");
    newTab = [];
    splitted.map((currElement) => {
        capitalizedWord = allMin(currElement);
        newTab.push(capitalizedWord);
    });
    capitalizedString = newTab.join("_");
    return capitalizedString;
}

function leet(string)
{
    if (string.length == 0) {
        console.log("Key is empty");
        return;
    }
    //tabReg =[/[a]/gi, /[e]/gi, /[o]/gi, /[u]/gi, /[i]/gi, /[y]/gi];
    //tabChar = ["4","3","0","(_)","1","7"];
    //leetString = string.replace(tabReg, tabChar);

    leetString = string.replace(/[a]/gi, "4")
        .replace(/[e]/gi, "3")
        .replace(/[o]/gi, "0")
        .replace(/[u]/gi, "(_)")
        .replace(/[i]/gi, "1")
        .replace(/[y]/gi, "7");

    return leetString;
}

function verlan(string){
    if (string.length === 0) {
        console.log("Key is empty");
        return;
    }
    return string.split("").reverse().join("");
}

function reverse(string){
    if (string.length === 0) {
        console.log("Key is empty");
        return;
    }
 return string.split("").join("").split(" ").reverse().join(" ");
}

console.log(ucFirst(helloWorld)); // UCFIRST
console.log(capitalize(helloWorld)); // CAPITALIZE
console.log(pascalCase(helloWorld)); // PASCALCASE
console.log(snakeCase(helloWorld)); // SNAKECASE
console.log(leet(helloWorld)); // LEET
console.log(verlan(helloWorld)); // VERLAN
console.log(reverse(helloWorld)); // REVERSE
