let todoList=[
  {item:'buymilk',
    dueDate:'4/10/2023'
  },
    {
      item:'go to college',
      dueDate:'4/10/2023'
    }

];
displayItems();

function addTodo(){
  let inputElement=document.querySelector('#todo-input');
  let dateElement=document.querySelector('#todo-date');
  let todoItem=inputElement.value;
  let tododate=dateElement.value;
  todoList.push({item:todoItem,dueDate:tododate});
inputElement.value='';
dateElement.value='';
displayItems();

}

function displayItems(){
  let containerElement=document.querySelector('.todo-container');


  let newHTMl='';
 
  for(let i=0;i<todoList.length;i++){


let {item,dueDate}=todoList[i];
    newHTMl += `
    
    <span>${item}</span>
    <span>${dueDate}</span>
    <button  class="btn-delete" onclick="todoList.splice(${i},1);displayItems();">Delete</button>
    
    `;

  }
  containerElement.innerHTML=newHTMl;
}