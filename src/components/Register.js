import React, { Component } from 'react'

export default class Register extends Component {
    render() {
        return (
            <>
                 <div className="register">
                    <img src="https://i.picsum.photos/id/2/300/300.jpg" alt="register"></img>
                    <div className="registerCard">
                        <h3>Sign Up</h3>
                        <label>Name</label>
                        <input type="text"></input>
                        <label>Email</label>
                        <input type="text"></input>
                        <label>Password</label>
                        <input type="password"></input>
                        <label>Mobile Number</label>
                        <input type="text"></input>
                        <button>Sign Up</button>
                    </div>
                </div>
            </>
        )
    }
}
