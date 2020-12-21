import React from 'react';
import { Route,Link } from 'react-router-dom';

const Smurf = props => {
  
  return (
    <div className="Smurf" >
      <Link to={`/smurf/${props.id}`}>
        <h3>{props.name}</h3>
      </Link>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick = {()=> props.deleteSmurf(props.id)}>Delete Me</button>
      <Route path = {`/smurf/${props.id}`}/>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

