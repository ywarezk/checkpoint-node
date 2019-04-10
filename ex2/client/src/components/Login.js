import React from 'react';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.emailRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    login = async (event) => {
        event.preventDefault();
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        console.log(email, password);
        try {
            const response = await fetch('http://localhost:3001/api/login/', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: email, password})
            })
            const json = await response.json();
            console.log(json.token);
        } catch(err) {
            alert('login failed');
        }
        
        
    }

    render() {
        return (
            <form onSubmit={this.login}>
                <input
                    ref={this.emailRef} 
                    type="email" name="username" placeholder="Email" />
                <input
                    ref={this.passwordRef} 
                    type="password" name="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        )
    }

}