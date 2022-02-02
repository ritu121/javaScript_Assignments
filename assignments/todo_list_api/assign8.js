let button = document.querySelector("#clickme");
let trueDiv = document.querySelector(".true");
let falseDiv = document.querySelector(".false");
button.addEventListener("click", getApi)
function getApi(){
  fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json()).then(data => renderdata(data))
}
function renderdata(data){
    for(var i=0; i<data.length; i++){
        var elem = data[i];
        if (elem.completed===false){
            let ptag = document.createElement('p')
            let text = elem.title;
            ptag.innerHTML = text;
            falseDiv.appendChild(ptag);
        }
        else if (elem.completed===true){
            let ptag = document.createElement('p')
            let text = elem.title;
            ptag.innerHTML = text;
            trueDiv.appendChild(ptag);
        }
    }
}