import React from 'react';

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: 'swordfish',
      authorized: false
    };
    this.authorize = this.authorize.bind(this);
  }

  authorize(e) {
    const password = e.target.querySelector(
      'input[type="password"]').value;
    const auth = password == this.state.password;
    this.setState({
      authorized: auth
    });
  }

  render() {
    const login = (
        <form action="#" 
        onSubmit={this.authorize}>
      	<input type="password" placeholder="Password" />
    	<input type="submit" />
    	</form>
  	);
    const contactInfo = (
		<ul>
    		<li>
      		i.am@jnoweb.com
    		</li>
    		<li>
      		+49160 8967510
    		</li>
  		</ul>
		);
    return (
      <div id="authorization">
        <h1>{ this.state.authorized ? 'Contact' : 'Enter the Password' }</h1>
        { this.state.authorized ? contactInfo : login }
      </div>
    );
  }
}

export default Contact;