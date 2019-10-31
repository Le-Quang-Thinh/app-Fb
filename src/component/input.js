import React, { Component } from 'react';
import List from './List'
import { stringify } from 'querystring';

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            term: '',
            items: [],
            actives: []
          };
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.setState({
        index : this.state.index+1
        });
        const items = [...this.state.items];
        items.push(
                {
                    id: this.state.index+1,
                    value: this.state.term,
                    active: false
                }
            );
          this.setState({term: "", items })
      }
    changeHandler= event =>{
        this.setState({term: event.target.value});
        if (event.keyCode === 13 && event.value !== "") {
          event.preventDefault();
          this.onSubmit();
         }
      }

    delitem =(index,e) =>{
        const items=Object.assign([],this.state.items);
        items.splice(index,1);
        this.setState({items:items})
      }
    Active= (id) =>{
      // console.log(id);
      // const item=Object.assign({},this.state.items[id]);
      //   item.active=true;
      // const items=Object.assign([],this.state.items);
      // items[id] =item;
      // this.setState({items:items});
      this.setState({
        items:this.state.items.map(todo=>{
          if(todo.id ===id)
          return {
            ...todo,
            active:true
          };
          else{
            return todo;
          }
        })
      });
    };

    Deactive= (id) =>{
      this.setState({
        items:this.state.items.map(todo=>{
          if(todo.id ===id)
          return {
            ...todo,
            active:false
          };
          else{
            return todo;
          }
        })
      });
    };
    All =()=>{
      // const active = [...this.state.items];
      // Object.assign(this.state.actives, active);
      // let items = [...this.state.items];
    //  this.setState({items: items.filter(item => item.active === true && item.active === false  )});
      this.setState({items: this.state.actives});
   }


    Sort =()=>{

      const active = [...this.state.items];
      Object.assign(this.state.actives, active);
      console.log(Object.assign(this.state.actives, active));
      this.setState({
        items: active.filter(item => item.active === true )
      });
      console.log(stringify(this.state.actives));
    }
    render() { 
        return ( 
            <>
            <form className="App" onSubmit={this.onSubmit}>
                <input type="text"  value= {this.state.term} onChange={this.changeHandler} />
                <button >submit</button>
            </form>
            <button onClick={()=>this.All()}>All</button>
            <button onClick={()=>this.Sort()}>Sort Active</button>
            <ul >
              {
                this.state.items.map((items,index)=>{
                  return(
                    <List items={items} key={items.id}
                          delitem={this.delitem.bind(this,index)}
                          Active={()=> this.Active(items.id)}
                          Deactive={()=>this.Deactive(items.id)}
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