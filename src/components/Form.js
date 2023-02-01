import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newLession: ""
        }
    }
    componentWillUnmount = () => {
        let {editLession} = this.props
        this.setState({
            newLession:editLession
        })
     }
     componentWillReceiveProps = (nextProps) => {
let {editLession} = nextProps
this.setState({
    newLession:editLession
})
     }
    sendData = () => {
        if (this.state.newLession.trim()!=="") {
            this.props.handleAdd(this.state.newLession)
        }
        
    }
    handleChange = (e) => {
        this.setState({
            newLession: e.target.value
        })
    }
    handleUpdate = () => {
this.props.handleUpdate(this.props.editLession,this.state.newLession)
    }
    render() {
let {editLession} = this.props
        let btn = ""
        if (editLession == "") {
            btn = <button onClick={this.sendData} className='btn'>ADD</button>
        } else {
            btn = <button onClick={this.handleUpdate} className='btn'>Update</button>
        }
        return (
            <div>
                <input value={this.state.newLession} onChange={this.handleChange} name="add" type={'text'} />
                {btn}
            </div>
        )
    }
}
