var bt=document.getElementById("popbtn")
var over=document.querySelector(".overlay")
var po=document.querySelector(".pop")
/*bt.addEventListener("click",function(){
    over.style.display="block"
    po.style.display="block"
})*/
function update(){
    over.style.display="block"
    po.style.display="block"
}
var canc=document.getElementById("cancelpop")
canc.addEventListener("click",function(){
    event.preventDefault()
    over.style.display="none"
    po.style.display="none"
})
var container=document.querySelector(".container")
var abook=document.getElementById("addbook")
var btitle=document.getElementById("booktitle")
var author=document.getElementById("author")
var desc=document.getElementById("bookdesc")
abook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","bookcon")
    div.innerHTML=`<h2 class="h2">${btitle.value}</h2>
    <h5>${author.value}</h5>
    <p>${desc.value}</p>
    <button class="bookbtn" onclick="deletec(event)">delete</button>`
    container.append(div)
    over.style.display="none"
    po.style.display="none"
})
function deletec(event){
    event.target.parentElement.remove()
}
