function f1() {
    document.getElementById("textarea").style.fontWeight = "bold";
}

function f2() {
    document.getElementById("textarea").style.fontStyle = "italic";
}

function f3() {
    document.getElementById("textarea").style.textAlign = "left";
}

function f4() {
    document.getElementById("textarea").style.textAlign = "center";
}

function f5() {
    document.getElementById("textarea").style.textAlign = "right";
}

function f6() {
    document.getElementById("textarea").style.textTransform = "uppercase";
}

function f7() {
    document.getElementById("textarea").style.textTransform = "lowercase";
}

function f8() {
    document.getElementById("textarea").style.textTransform = "capitalize";
}

function f9() {
    document.getElementById("textarea").style.textDecoration ="underline";
}

function f10() {
    s = document.getElementById("textarea").value;
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	document.getElementById("textarea").value = s;
}

function f11() {
    document.getElementById("textarea").value ="";
}