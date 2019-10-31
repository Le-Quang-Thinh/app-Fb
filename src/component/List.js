import React from 'react';

const List = (props) => {

      return (
      <li>{props.items} {props.idone} 
        <button onClick={props.delitem}>Delete</button>
        <button onClick={props.Active}>Active</button>
      </li>
      )
      
    
    }

export default List;