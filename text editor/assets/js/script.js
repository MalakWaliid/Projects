function Bold(){
    document.getElementById("textarea").style.fontWeight = "bold";
}
function Italic(){
    document.getElementById("textarea").style.fontStyle = "italic";
}
function Lalign(){
    document.getElementById("textarea").style.textAlign = "left";
}
function Ralign(){
    document.getElementById("textarea").style.textAlign = "right";
}
function Center(){
    document.getElementById("textarea").style.textAlign = "center";
}
function UpCase() {
    document.getElementById("textarea").style.textTransform = "uppercase";
}
  
function LCase() {
    document.getElementById("textarea").style.textTransform = "lowercase";
}
  
function Capitalize() {
   
    document.getElementById("textarea").style.textTransform = "capitalize";
}
  
function Clear() {
 
    document.getElementById("textarea").style.fontWeight = "normal";
    document.getElementById("textarea").style.textAlign = "left";
    document.getElementById("textarea").style.fontStyle = "normal";
    document.getElementById("textarea").style.textTransform = "capitalize";
    document.getElementById("textarea").value = " ";
}