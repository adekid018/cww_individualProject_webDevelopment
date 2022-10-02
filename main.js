const inputBox=document.querySelectorAll(".input")
inputBox[0].setAttribute("id","ase")
const error=document.querySelector("#error")
//const addPlayer=document.querySelectorAll("#addPlayer")
const outputSection=document.querySelector("#outputSection")
let outputAll
let outputFirstDiv
let outputFirstDivContent
let date
let countryPart
let scorePart
let deleteContainer
let deleteIcon
let addFive
let deleteFive
let array=[]
function dateFun(){
    const myDate=new Date()
    let month=myDate.getMonth()+1
    
    switch(month){
        case 1:
            month="JAN"
        break;
        case 2:
            month="FEB"
        break;
        case 3:
            month="MAR"
        break;
        case 4:
            month="APR"
        break;
        case 5:
            month="MAY"
        break;
        case 6:
            month="JUN"
        break;
        case 7:
            month="JUL"
        break;
        case 8:
            month="AUG"
        break;
        case 9:
            month="SEP"
        break;
        case 10:
            month="OCT"
        break;
        case 11:
            month="NOV"
        break;
        default:month="DEC"
    }
    const date=myDate.getDate()
    const year=myDate.getFullYear()
    let hour=myDate.getHours()
    if(hour<11){
        hour=`0${hour}`
    }
    let minute=myDate.getMinutes()
    if(minute<9){
    minute=`0${minute}`
}
    return `DATE:${month} ${date}, ${year} ${hour}:${minute}`
}
console.log(dateFun())
//styling
let trial


const ok=document.querySelector("#btn")
const ok2=document.querySelector("#btn2")
function hello(){
  console.log("hello")
}

const deleteButton=document.querySelectorAll(".deleteFive")
let score


function AddPlayer(){
    if(inputBox[0].value==""){
        error.textContent="Field is required"
    }
    else{
    error.textContent=""
   const outPutAll=document.createElement("div")
   outPutAll.setAttribute("class","outputAll")
   
   const outputFirstDiv=document.createElement("div")
   outputFirstDiv.setAttribute("class","outputFirstDiv")

   const outputFirstDivContent=document.createElement("p")
   outputFirstDivContent.setAttribute("class","outputFirstDivContent")

   const date=document.createElement("span")
   date.setAttribute("class","date")

   const deleteContainer=document.createElement("div")
   deleteContainer.setAttribute("class","deleteContainer")

   const deleteIcon=document.createElement("p")
   deleteIcon.setAttribute("class","deleteIcon")

  outputFirstDivContent.textContent=`${inputBox[0].value} `
  
  deleteIcon.textContent="delete"
  date.textContent=dateFun()
//  trial=document.querySelectorAll(".outPutAll")  
  
  deleteContainer.appendChild(deleteIcon)
   outputFirstDiv.appendChild(outputFirstDivContent)
   outputFirstDiv.appendChild(date)
   outPutAll.appendChild(outputFirstDiv)
   outPutAll.appendChild(deleteContainer)
   outputSection.appendChild(outPutAll)
   

   const allDelete=document.querySelectorAll(".deleteIcon")
   const allContainer=document.querySelectorAll(".outputAll")
   
   for(let i=0; i<allContainer.length;i++){
    console.log(typeof allDelete.length)
    allDelete[i].onclick=function(){
        outputSection.removeChild(allContainer[i])
    }
    }

    
    }
    
  
  inputBox[0].value=""
}   
