// generateID is a *function* that, when invoked, returns a number representing
// an ID.
var generateID = makeCounter();
// By using a counter, we have a function that will always generate a new number
// -- this is great for generating unique IDs for things.

// Try the following at your console:

// generateID(); // => ?

// What does it return? Try invoking generateID a few more times to be certain
// of how it works.

// EXERCISE 1
var todos = [];
function todoFactory(task, deadline) {
  return {
    task: task,
    deadline: deadline,
    complete: false,            // todos always start as incomplete
    id: generateID()            // use generateID to make an ID for this todo
  };
}

var toDo1 = todoFactory("solve lecture exercises", "today")
var toDo2 = todoFactory("go home", "5pm")

// EXERCISE 2
function isComplete(check){
  if (check){
    return "Complete";
  }
  return "On hold";
}

function displayTodo(todo) {
  return todo.id + ": " + todo.task + " should be done by " + todo.deadline + ". Status: " + isComplete(todo.complete)
}

// var myTodoList = makeTodoList(???);

// makeTodoList accepts an *array* of todo objects as a parameter, and returns
// an object with methods for manipulating todos
function makeTodoList(initialTodos) {
  var todos = initialTodos;
  var archived= [];
  return {
    display: function() {
      tmpArray = [];
      for (var i = 0 ; i < initialTodos.length ; i++) {
        tmpArray[i] = displayTodo(initialTodos[i])
      }
      return tmpArray.join('\n')
    },
    add: function(task, deadline) {
      todos.push(todoFactory(task,deadline));
    },
    complete: function(id){
      for (var i = 0 ; i < todos.length ; i++){
        if (todos[i].id === id){
          todos[i].complete = !todos[i].complete;
        }
      }
    },
    archive : function(){
      for (var i = 0 ; i < todos.length ; i++){
        if(todos[i].complete === true){
          archived.push(todos[i]);
          todos.splice(i,1);
          i--;
        }
      }
    },
    unarchive: function(id){
      var temp=[];
      for (var i in archived){
        if (archived[i].id === id){
          if(id===0){
            todos.unshift(archived[i])
          }else{
            for (var j = 0 ; j <= id ; j++){
              if(archived[i].id>todos[j].id && archived[i].id<todos[j+1].id){
                for (var k=todos.length ; k > j+1 ; k--){
                  todos[k]=todos[k-1];
                }
                todos[j+1]= archived[i];
                break;
              }
            }
          }
          archived.splice(i,1);
          break;
        }
      }
    },
    displayArchived: function() {
      tmpArray = [];
      for (var i = 0 ; i < archived.length ; i++) {
        tmpArray[i] = displayTodo(archived[i])
      }
      return tmpArray.join('\n')
    },
    clearArchived: function() {
      archived = []
      return "archive cleared"
    }
  };
}

// =============================================================================
// HELPER FUNCTIONS

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}


initialTodo = [toDo1, toDo2];
var myToDo = makeTodoList(initialTodo)

/*

myToDo.display()
myToDo.add("first insert", "ergui")
myToDo.add("second insert", "ergui")
myToDo.display()
myToDo.complete(2)
myToDo.display()
myToDo.archive()
myToDo.display()
myToDo.unarchive(2)
myToDo.display()

*/