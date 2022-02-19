
let taskInput=document.getElementById('taskInput');
let taskBtn=document.getElementById('taskBtn');
let noTask=document.getElementById('noTask');
let tasks=document.querySelector('.tasks');
let disValid=document.getElementById('disValid');
let closeValidationMessage=document.getElementById('closeValidationMessage');

let addTask = ()=>{
let inputData=taskInput.value;


 if(inputData.trim() ==0 || taskInput.value.length<3 || taskInput.value.length>20){
    disValid.classList.remove('none');
 }else{
    noTask.classList.add('none');
    tasks.innerHTML+=`
    <div class="alert alert-info pb-4">
    ${inputData}
    <button class='btn delete float-right btn-danger'> Delete </button>
    </div>
    `;
    taskInput.value="";
 }

}
let removedisValid =()=>{
    disValid.classList.add('none');
}
taskBtn.addEventListener('click',addTask);
closeValidationMessage.addEventListener('click',removedisValid);


document.addEventListener('click',function(e){
    if (e.target.classList.contains('delete')){
        e.target.parentElement.remove();
        if(tasks.children.length==0) {
noTask.classList.remove('none');
        }
    }
    
    })
