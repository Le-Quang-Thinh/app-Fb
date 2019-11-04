import React, { Component } from 'react';
import List from './List'
import { stringify } from 'querystring';
import '../App.css';
import {Container,Row,Col,Button} from 'react-bootstrap'


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
        e.preventDefault();
        if(this.state.term!==""){
        this.setState({
        index : this.state.index+1
        });
        const items = [...this.state.items];
        items.push(
                {
                    id: this.state.index+1,
                    value: this.state.term,
                    active: true
                }
            );
          this.setState({term: "", items })}
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
        Object.assign(this.state.actives, items);

        this.setState({items:items,actives:items})
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
            active:!todo.active
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
    
    let obj= Object.assign([],this.state.items, this.state.actives);
    // obj=Object.getOwnPropertyNames(obj);
    this.setState({items: obj}); 
    console.log("items",obj); 
    // if(!this.state.actives){
    //     this.setState({items: this.state.actives});
    //   console.log("acive", this.state.actives);
    //   }

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
            <Container>
              <Row className="justify-content-md-center">
              <Col md={{ span: 6}}>
                <form className="App" onSubmit={this.onSubmit}>
                    <input type="text"  value= {this.state.term} onChange={this.changeHandler} />
                    <button variant="secondary">submit</button>
                </form>
              </Col>
              <Col md={{ span: 6, offset: 4 }}>
                <Button onClick={()=>this.All()}>All</Button>
                <Button onClick={()=>this.Sort()}>Sort Active</Button>
                <Button onClick={()=>this.All()}>Complete</Button>
              </Col>
            </Row>
            <ul className="justify-content-md-center">
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
            </Container>
         );
    }
}
 
export default Input;