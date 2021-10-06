var check;

function display_level2() {
    check=0;
    document.getElementById("level2").style.display="block";
    check++;
    console.log(check);
}

function level2() {
    if(check%2==0)
    {document.getElementById("level2").style.display="none";
    check++;
    console.log(check);}
    else
    {document.getElementById("level3").style.display="block";
    check++;
    console.log(check);}
}

// function display_div() {
//     document.getElementById("div1").style.display="block";
// }

// function close_div() {
//     document.getElementById("div1").style.display="none";
// }