import React, { Component } from 'react'

export default class List extends Component {
    handleDelete = (index) => {
this.props.handleDelete(index)
    }
    handleEdit = (ls) => {
this.props.handleEdit(ls)
    }
  render() {
    let lists = this.props.lists.map((ls,index) =>{
        return  <li key={index}>{ls}
        <button className='edit' onClick={()=>this.handleEdit(ls)}>ED</button> 
        <button onClick={()=>this.handleDelete(index)} className='delete'>DEL</button>
     </li>
    })
    return (
      <ol className='todolist'>
       {lists}
      </ol>
    )
  }
}
