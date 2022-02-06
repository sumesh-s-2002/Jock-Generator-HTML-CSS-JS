//define ui variables
const input = document.querySelector("#number");
      div = document.querySelector(".jockes")
//adding eventListner for button
getJockesBtn = document.querySelector(".btn").addEventListener("click", ()=>{
    let numberOfJockes = input.value;
    if(numberOfJockes > 0){
        getJockes(numberOfJockes)
    }
})
//define getJockes
function getJockes(count){
    let json;
    //instantiating xmlHttpRequest
    let xhr = new XMLHttpRequest();
    //establishing connection and senting request to api readyState = 1
    xhr.open("GET", `http://api.icndb.com/jokes/random/${count}`, true)
    //readdy state-4(final)-response recieved
    xhr.onload = ()=>{
        if(xhr.status === 200){
            //resonse will be json format we have to conver it to javascript
            //object inorder to use the properties inside it
            json = xhr.responseText
            JSON.parse(json).value.forEach((object)=>{
                setToUI(object)
            })
        }
    }

    xhr.send()
}
//define set to undefined
function setToUI(object){
    let li = "";
    li = `<li>${object.joke}</li>`;
    document.querySelector("ul").innerHTML += li;
}