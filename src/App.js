import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import List from './components/List';
import { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: [
        "JavaScripts",
        "reactJs",
        "HTML,CSS",
      ],
      editLession: ""
    }
  }
  sendData = (data) => {
    if (!this.state.lists.includes(data)) {
      this.setState({
      lists: [...this.state.lists, data]
    })
    }
    
  }
  handleDelete = (index, i) => {
    if (window.confirm("are you sure delete")) {
      let arr = this.state.lists.filter((ls, i) => i !== index)
      this.setState({
        lists: arr
      })
    }
  }
  handleEdit = (data) => {
    this.setState({
      editLession: data
    })
  }
  handleUpdate = (edit, newL) => {
    let arr = []
    this.state.lists.forEach(ls => {
      if (ls === edit) {
        arr.push(newL)
      } else {
        arr.push(ls)
      }
    })
    this.setState({
      lists: arr,
      editLession: ""
    })
  }
  render() {
    return (
      <div className="App">
        <Form handleUpdate={this.handleUpdate} editLession={this.state.editLession} handleAdd={this.sendData} />
        <List handleEdit={this.handleEdit} handleDelete={this.handleDelete} lists={this.state.lists} />
      </div>
    );
  }
}


export default App;
