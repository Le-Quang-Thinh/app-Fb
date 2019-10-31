import React from 'react';
import { stringify } from 'querystring';

const List = (props) => {

      return (
      <li style={{
      }}>{(stringify(props.items))}
        <button onClick={props.delitem}>Delete</button>
        <button onClick={props.Active}>Active</button>
        <button onClick={props.Deactive}>Deective</button>
      </li>
      )
      
    
    }

export default List;