import React, {Component} from 'react'
// import NumericInput from 'react-numeric-input';
class Form extends Component {
    constructor(props){
        super(props)
        this.state = {
            todotext: '',
            minute:'00',
            second:'00',
            timeBonus:''
        }
    }

    onChangeTodoText= (e)=>{
        e.preventDefault();
        this.setState({
            todotext: e.target.value
        })
    }

    onChangeTodoText3= (e)=>{
        e.preventDefault();
        this.setState({
            timeBonus: e.target.value
        })
    }
    Minute= (e) =>{
        this.setState({
            minute: e.target.value
        })}
    Second= (e) =>{
        this.setState({
            second: e.target.value
        })}
    Clock = () =>{
        this.props.addTodo(this.state.todotext,this.state.minute,this.state.second,this.state.timeBonus)
            this.props.handleClick()
            this.setState({ todotext: '',timeStart:'',timeBonus:''})
    }
    render(){    

        return (
            <>
                  <div className="form-group row">
                    <div className="col-sm-10">
                      <input onChange={this.onChangeTodoText} value={this.state.todotext} type="text" className="form-control" id="inputEmail3" placeholder="add todo here"/>
                      <div className="col-7">
                        Minute :   <input type="number"  min="0" max="60" value={this.state.minute} onChange={this.Minute} step="any" />
                        Second :   <input type="number"  min="0" max="60" value={this.state.second} onChange={this.Second} step="any" />
                      </div>
                      {/* <input onChange={this.onChangeTodoText2} value={this.state.timeStart} type="text" className="form-control" id="inputEmail3" placeholder="add time here"/> */}
                      {/* <input onChange={this.onChangeTodoText3} value={this.state.timeBonus} type="text" className="form-control" id="inputEmail3" placeholder="add timebonus here"/> */}
                      <button type="button" onClick={() =>{ this.Clock()}} style={{marginTop: "25px"}} className="btn btn-success">Add Todo</button>
                    </div>
                  </div>
            </>
        );
    }
}

export default Form;