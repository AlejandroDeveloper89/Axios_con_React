import React from 'react';
import axios from 'axios';

export default class PersonInput extends React.Component {
	state = {
		name: '',
	};

  handleChange = event => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = event => {
	   event.preventDefault();

	const user = {
		name: this.state.name,
	};

	axios
    .post('https://jsonplaceholder.typicode.com/users', {user})
		.then(res => {
	     console.log(res);
	     console.log(res.data);
	    });
    };

  render() {
	   return (
       <form onSubmit={this.handleSubmit}>
          <label>
          <br/>
          <h1>Ingrese un nombre:</h1>
          <input type="text" name="name" placeholder="nombre" onChange={this.handleChange}/>
          </label>
            <button type="submit">enviar</button>
        </form>
     );
    }
  }
