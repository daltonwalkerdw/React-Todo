import React from 'react';

import "./components/TodoComponents/Todo.css"
import { todoData } from "./components/TodoComponents/TodoData"
import TodoForm from "./components/TodoComponents/TodoForm"
import TodoList from "./components/TodoComponents/TodoList"
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    
    super();
    this.state = {
      todoData: todoData
    };
    console.log(todoData)
  }

  toggleItem = itemId => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (itemId === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item
      }) 
    });
  };

  

  

  render() {
    return (
      <div className="App">
        <h1>Todo-List</h1>
        
        <TodoList 
        todoData={todoData}
        toggleItem={this.toggleItem}
        />
        
      </div>
    );
  }
}

export default App;
