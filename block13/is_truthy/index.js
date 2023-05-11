// pseudocode -- step by step solution a human can understand
/*
    -creat a variable called value
    -if value is truthy, print true
    -if value is falsey, then we want to check the following conditons
    -if value is false
        - print "The boolean value false is falsy";
    - if value is null
        - print "The null value is falsy";
    ...
    */

    // code --- step by step instructions that a computer can understand and execute
    let value = "Haji"
    if (value) {
        console.log(true);
    } else {
        if (value === false) {
            console.log("The boolean value false is falsy");
        } else if (value === null) {
            console.log("The null value is falsy");
        } else if (value === undefined) {
            console.log("undefined is falsy");
        } else if (value === 0) {
            console.log("The number 0 is falsy (the only falsy number)");
        } else if (value === "") {
            console.log("The empty string is falsy (the only falsy string)");
        }
        }
