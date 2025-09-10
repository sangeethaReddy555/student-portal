let all=document.getElementById('all')
let male=document.getElementById('male')
let female=document.getElementById('female')
let pass=document.getElementById('pass')
let fail=document.getElementById('fail')
let uinput=document.getElementById('uservalue')
let btn=document.getElementById('btn')
let tbvalue=document.getElementById('tabvalue')

let stud=[
    {id:101,name:"sangeetha",gender:"female",score:75,mail:"sangeetha@gmail.com"},
    {id:102,name:"harika",gender:"female",score:95,mail:"harika@gmail.com"},
    {id:103,name:"sagarika",gender:"female",score:70,mail:"sagarika@gmail.com"},
    {id:104,name:"raj",gender:"male",score:80,mail:"raj@gmail.com"},
    {id:105,name:"mohan",gender:"male",score:79,mail:"mohan@gmail.com"},
    {id:106,name:"venkat",gender:"male",score:95,mail:"venkat@gmail.com"},
    {id:107,name:"manju",gender:"female",score:85,mail:"manju@gmail.com"}
]

function displayvalue(stud){
    let output=""
    stud.forEach(element => {
        output+=`
        <tr>
        <td>${element.id}</td>
        <td>${element.name}</td>
        <td>${element.gender}</td>
        <td>${element.score}</td>
        <td>${element.mail}</td>
        </tr>
        `
    });
    tbvalue.innerHTML=output
}
displayvalue(stud);

all.addEventListener('click',function(){
    displayvalue(stud);
})

male.addEventListener('click',function(){
    let malefil=stud.filter((element)=>element.gender=="male")
    displayvalue(malefil);
})

female.addEventListener('click',function(){
    let femalefil=stud.filter((element)=>element.gender=="female")
    displayvalue(femalefil);
})

pass.addEventListener('click',function(){
    let passfil=stud.filter((element)=>element.score>=80)
    displayvalue(passfil);
})

fail.addEventListener('click',function(){
    let failfil=stud.filter((element)=>element.score<80)
    displayvalue(failfil);
})

btn.addEventListener('click',function(){
    let invalue=uinput.value
    let low=invalue.toLowerCase();
    let showvalue=stud.filter((element)=>element.name==low)
    uinput.value=""
    displayvalue(showvalue);
})