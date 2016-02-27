/**
 * Created by kiran on 2/20/2016.
 */
var person = {
    name:'kiran',
    age:21
};

function updatePerson(obj){
    //obj={
       // name:'kiran',
     //   age:26
    //};
    obj.age=26;
}
updatePerson(person);
console.log(person);

//Array example

var gradeArray=[15,22];
var grades=[];
function addGrades(gradeArray){
   // gradeArray.push(55);
debugger;
    gradeArray=[1,2,3,4];
}

addGrades(gradeArray);
console.log(gradeArray);

