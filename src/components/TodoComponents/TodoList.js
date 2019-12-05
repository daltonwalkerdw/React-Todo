// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react"

import Todo from "./Todo";
import TodoForm from "./TodoForm"

class TodoList extends React.Component {

  constructor() {
    
    super();
    this.state = {
      todos: []
    };
    
  }

   toggleComplete = id => {
     this.setState({
        todos: this.state.todos.map(todo =>{
            if (todo.id === id){
               return {
                   id: todo.id,
                   text: todo.text,
                   complete: !todo.complete
               }
            }
            else {
                return todo
            }
        })
     })
   }

   addTodo = todo => {
    this.setState({
      todos: [todo, ...this.state.todos]
    })
  };

   removeCompleted = () => {
       this.setState({
           todos: this.state.todos.filter(todo => !todo.complete)
       })
   }

render(){
    return (
    <div className="todo-list">
        <div className="form">
         <TodoForm onSubmit={this.addTodo} delete={this.removeCompleted} />
         <div>Todos Left: {this.state.todos.filter(todo => !todo.complete).length}</div>
      </div>
      <div className="todoList">
      {this.state.todos.map(todo => (
      <Todo
       key={todo.id}
       toggleComplete={() => this.toggleComplete(todo.id)}
       todo={todo}
         />
      ))}
      </div>
    </div>
  );
}
  
};

export default TodoList;
