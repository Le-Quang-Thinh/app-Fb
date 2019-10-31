import React, { Component } from 'react';
import List from './List'
class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            term: '',
            items: []
          };
    }

    onSubmit = (e) => {
        e.preventDefault()
        // this.setState({
        // index : this.state.index+1,
        // term: '',
        // items: [...this.state.items,this.state.term]
        // });
        const items = [...this.state.items];
        items.push(
                {
                    id: this.state.index+1,
                    value: this.state.term,
                    isDone: false
                }
            );
          this.setState({term: "", items })
      }
    changeHandler= event =>{
        this.setState({term: event.target.value});
        if (event.keyCode === 13) {
          event.preventDefault();
          this.onSubmit();
         }
      }

    delitem =(index,e) =>{
        const items=Object.assign([],this.state.items);
        items.splice(index,1);
        this.setState({items:items})
      }
    Active= (id,e) =>{
      e.preventDefault()
      const index=this.state.items.findIndex((item)=>{
        return item.id===id
      });
      const item=Object.assign({},this.state.items[index]);
        item.isDone=true;
      const items=Object.assign([],this.state.items);
      items[index] =item;
      this.setState({items:items});
    }
    render() { 
        return ( 
            <>
            <form className="App" onSubmit={this.onSubmit}>
                <input type="text"  value= {this.state.term} onChange={this.changeHandler} />
                <button >submit</button>
            </form>
            <ul >
              {
                this.state.items.map((items,index)=>{
                  return(
                    <List items={items.value} key={index} idone={items.isDone}
                          delitem={this.delitem.bind(this,index)}
                          Active={this.Active.bind(this,index)}
                          >{this.state.items.active}
                    </List>
                  )
                })
              }
            </ul>
            </>
         );
    }
}
 
export default Input;