helloWorld = "toggle case is the best";

function ucfirst(string) {
    if (typeof string !== "string") {
        console.log("Key is empty");
        return;
    }
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function allMin(string){
    return string.toLowerCase();
}

function capitalize(string){
    if (typeof string !== "string") {
        console.log("Key is empty");
        return;
    }
    minString = allMin(string);
    let splitted = minString.split(" ");
    newTab = [];
    splitted.map((currElement) => {
        capitalizedWord = ucfirst(currElement);
        newTab.push(capitalizedWord);
    });
    capitalizedString = newTab.join(" ");
    return capitalizedString;
}

function pascalcase(string){
    if (typeof string !== "string") {
        console.log("Key is empty");
        return;
    }
    let splitted = string.split(" ");
    newTab = [];
    splitted.map((currElement) => {
        capitalizedWord = ucfirst(currElement);
        newTab.push(capitalizedWord);
    });
    capitalizedString = newTab.join("");
    return capitalizedString;
}

function snakecase(string){
    if (typeof string !== "string") {
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
    if (typeof string !== "string") {
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
    if (typeof string !== "string") {
        console.log("Key is empty");
        return;
    }
    return string.split("").reverse().join("");
}

function reverse(string){
    if (typeof string !== "string") {
        console.log("Key is empty");
        return;
    }
 return string.split("").join("").split(" ").reverse().join(" ");
}

test = {
    "animals":[
        {
            "type":{
                "name": "dog"
            }
        },
        {
            "type":{
                "name": "cat"
            }
        }
    ]
}

const prop_access = (obj,key) => {
    if (obj != null) {
        if (key != null && key.length > 0) {
            return key.split(".").reduce(function(o, x) {
                if (typeof o == "undefined" || o === null) {
                    return o;
                } else {
                    if (typeof o[x] == "undefined" || o[x] === null) {
                        console.log(key+" not exist"); return;
                    } else {
                        return o[x];
                    }
                }
            }, obj);
        } else {
            return obj;
        }
    } else {
        return '';
    }
}

console.log(ucfirst(helloWorld)); // UCFIRST
console.log(capitalize(helloWorld)); // CAPITALIZE
console.log(pascalcase(helloWorld)); // PASCALCASE
console.log(snakecase(helloWorld)); // SNAKECASE
console.log(leet(helloWorld)); // LEET
console.log(verlan(helloWorld)); // VERLAN
console.log(reverse(helloWorld)); // REVERSE
