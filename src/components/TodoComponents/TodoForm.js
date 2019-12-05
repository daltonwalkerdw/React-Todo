import React from "react"

class TodoForm extends React.Component {
    constructor() {
    
        super();
        this.state = {
          text: ""
        };
        
      }
    

    // changeHandler = event => {
    //     this.setState( { itemText: event.target.value } )
    //     console.log(event.target.value)
    // }

    // submitHandler = event => {
    //     event.preventDefault();
    //     this.props.addTodo(this.state.itemText)
    //     this.setState({ itemText: "" })
//    }
handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
}

handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit({
        text: this.state.text,
        complete: false,
        id: Date.now()
    })
    this.setState({
        text: ''
    })
}

    render(){
        return (
            <form className="input" onSubmit={this.handleSubmit}>
                <input 
                className="css-input"
                type="text"
                name="text"
                value={this.state.text}
                onChange={this.handleChange}
                />
                <button className="myButton" type="submit">Add</button>
                <button className="myButton" onClick={this.props.delete}>Remove Completed</button>
            </form>
        )
    }
}

export default TodoForm;