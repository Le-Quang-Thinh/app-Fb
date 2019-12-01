import React, {Component} from 'react'
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
            timeStart:'',
            timeBonus:''
        }
    }

    onChangeTodoText= (e)=>{
        e.preventDefault();
        this.setState({
            todotext: e.target.value
        })
    }
    onChangeTodoText2= (e)=>{
        e.preventDefault();
        this.setState({
            timeStart: e.target.value
        })
    }
    onChangeTodoText3= (e)=>{
        e.preventDefault();
        this.setState({
            timeBonus: e.target.value
        })
    }

    render(){    

        return (
                  <div className="form-group row">

                    <div className="col-sm-10">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="inputEmail3" placeholder="add todo here"/>
                      <input onChange={this.onChangeTodoText2} value={this.state.timeStart} type="text" className="form-control" id="inputEmail3" placeholder="add time here"/>
                      <input onChange={this.onChangeTodoText3} value={this.state.timeBonus} type="text" className="form-control" id="inputEmail3" placeholder="add timebonus here"/>
                      <button type="button" onClick={() =>{ this.props.addTodo(this.state.todotext,this.state.timeStart,this.state.timeBonus); this.setState({ todotext: '',timeStart:'',timeBonus:''}) } } style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
                    </div>
                  </div>
        );
    }
}

export default Form;