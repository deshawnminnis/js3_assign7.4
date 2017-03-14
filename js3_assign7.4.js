//function using an outer function to pass values to an inner function//

function outerFunction(passToMe) {
    if (passToMe && (typeof passToMe == "function")) {
        passToMe();
    }
}


outerFunction(function innerFunction() { alert("I was called"); });