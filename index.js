document.getElementById('head4').style.display = "none";
var marks = 0;
let sr = 1;
var array = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1];
//array of correct answers
var ans = [2, 4, 4, 2, 3, 2, 2, 4, 1, 3];
function onclickfunction() {

    checkans();
    checkans2();
    if (sr < 10) {
        sr += 1;
        document.getElementById('no.').innerHTML = sr;
        jumpnextquestion();
    } else {
        document.getElementById('div1').style.display = "none";
        document.getElementById('div2').style.display = "none";
        document.getElementById('div3').style.display = "none";
        document.getElementById('div4').style.display = "none";
        document.getElementById('div5').style.display = "none";
        document.getElementById('head4').style.display = "block";
        document.getElementById('butn').style.display = "none";
        for (i = 0; i < 10; i++) {
            if (array[i] == ans[i]) {
                marks += 1;
            }
        }
        document.getElementById('noo').innerHTML = marks;
    }

}
//function to go back 
function goback() {
    if (sr >= 2) {
        sr -= 1;
    }
    document.getElementById('no.').innerHTML = sr;
    jumpnextquestion();
    forcheck();
}
//function to check marks
function checkans() {

    let op1 = document.getElementById('optt1');
    let op2 = document.getElementById('optt2');
    let op3 = document.getElementById('optt3');
    let op4 = document.getElementById('optt4');
    let c = -1;
    if (op1.checked) {
        c = 1;
    } else if (op2.checked) {
        c = 2;
    }
    else if (op3.checked) {
        c = 3;
    }
    else if (op4.checked) {
        c = 4;
    }
    array[sr - 1] = c;



}
//function to jump to next question 
function jumpnextquestion() {
    if (sr == 2) {
        document.getElementById('question').innerHTML = "- When interpreter encounters an empty statements, what it will do:";
        document.getElementById('opt1').innerHTML = "Shows a warning";
        document.getElementById('opt2').innerHTML = "Prompts to complete";
        document.getElementById('opt3').innerHTML = "Throws an error";
        document.getElementById('opt4').innerHTML = "Ignores statements";
    }
    else if (sr == 3) {
        document.getElementById('question').innerHTML = "- Which one of the following also known as Conditional Expression:";
        document.getElementById('opt1').innerHTML = "Alternative to if-else";
        document.getElementById('opt2').innerHTML = "Switch statement";
        document.getElementById('opt3').innerHTML = "If-then-else ";
        document.getElementById('opt4').innerHTML = "immediate if";
    }
    else if (sr == 4) {
        document.getElementById('question').innerHTML = "- Which of the following variables takes precedence over the others if the names are the same?";
        document.getElementById('opt1').innerHTML = "Global variable";
        document.getElementById('opt2').innerHTML = "The local element";
        document.getElementById('opt3').innerHTML = "Both";
        document.getElementById('opt4').innerHTML = "None of the above";
    }
    else if (sr == 5) {
        document.getElementById('question').innerHTML = "- In the JavaScript, which one of the following is not considered as an error:";
        document.getElementById('opt1').innerHTML = "Syntax error";
        document.getElementById('opt2').innerHTML = "Missed semicolons";
        document.getElementById('opt3').innerHTML = "Division by zero";
        document.getElementById('opt4').innerHTML = "Missing of Bracket";
    }
    else if (sr == 6) {
        document.getElementById('question').innerHTML = "- Which of following is shared structure of a set of similar objects";
        document.getElementById('opt1').innerHTML = "Encapsulation";
        document.getElementById('opt2').innerHTML = "A Class";
        document.getElementById('opt3').innerHTML = "Inheritance";
        document.getElementById('opt4').innerHTML = "None of Above";
    }
    else if (sr == 7) {
        document.getElementById('question').innerHTML = "- in oops public, private & protected are";
        document.getElementById('opt1').innerHTML = "Classes";
        document.getElementById('opt2').innerHTML = "Access Modifiers";
        document.getElementById('opt3').innerHTML = "Interfaces ";
        document.getElementById('opt4').innerHTML = "Method signature";
    }
    else if (sr == 8) {
        document.getElementById('question').innerHTML = "- A private member of a class is visible to";
        document.getElementById('opt1').innerHTML = "every where";
        document.getElementById('opt2').innerHTML = "in sub class";
        document.getElementById('opt3').innerHTML = "members to same package";
        document.getElementById('opt4').innerHTML = "only members of same class";
    }
    else if (sr == 9) {
        document.getElementById('question').innerHTML = "- Which keyword is used to inherit a class or abstract class is";
        document.getElementById('opt1').innerHTML = "extends";
        document.getElementById('opt2').innerHTML = "extend";
        document.getElementById('opt3').innerHTML = "implement";
        document.getElementById('opt4').innerHTML = "inherit";
    }
    else if (sr == 10) {
        document.getElementById('question').innerHTML = "- In the JavaScript, which one of the following is not considered as an error:";
        document.getElementById('opt1').innerHTML = "Syntax error";
        document.getElementById('opt2').innerHTML = "Missed semicolons";
        document.getElementById('opt3').innerHTML = "Division by zero";
        document.getElementById('opt4').innerHTML = "Missing of Bracket";
        document.getElementById('butn').innerHTML = "Submit";
    }



}
//function to save previous checked answer
function forcheck() {
    var p = array[sr - 1];
    let op1 = document.getElementById('optt1');
    let op2 = document.getElementById('optt2');
    let op3 = document.getElementById('optt3');
    let op4 = document.getElementById('optt4');
    if (p == 1) {
        op1.checked = "true";
    } else if (p == 2) {
        op2.checked = "true";
    }
    else if (p == 3) {
        op3.checked = "true";
    }
    else if (p == 4) {
        op4.checked = "true";
    }
}
function checkans2() {
    if (array[sr] == -1) {
        document.getElementById('optt1').checked = false;
        document.getElementById('optt2').checked = false;
        document.getElementById('optt3').checked = false;
        document.getElementById('optt4').checked = false;
    } else {
        var p = array[sr];
        let op1 = document.getElementById('optt1');
        let op2 = document.getElementById('optt2');
        let op3 = document.getElementById('optt3');
        let op4 = document.getElementById('optt4');
        if (p == 1) {
            op1.checked = "true";
        } else if (p == 2) {
            op2.checked = "true";
        }
        else if (p == 3) {
            op3.checked = "true";
        }
        else if (p == 4) {
            op4.checked = "true";
        }

    }
}