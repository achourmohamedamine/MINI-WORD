document.getElementById("color").addEventListener("input",changeColor);
function changeColor(){
    let selectedcolor=document.getElementById("color").value;
    let paragraph=document.querySelector('p');
    paragraph.style.color=selectedcolor;
}
document.getElementById("number").addEventListener("input",function(event){
    let size=this.value+'px';
    document.querySelector('p').style.fontSize=size;

});
document.querySelector('select').addEventListener("change",function(event){
    let font=this.value;
    document.querySelector('p').style.fontFamily=font;

});