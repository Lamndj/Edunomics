import React, { Component } from 'react'

export default class Home extends Component {

    constructor (){
        super()
        this.state = {
            adminlogin:false,
            email:"",
            password:""
        }
    }

    showAdminLogin = () => {
        this.setState({adminlogin:true})
    }

    onChange = (e) => {
        this.setState({[e.target.id]:e.target.value})
    }

    login = () => {
        if(this.state.email === "admin" && this.state.password === "1234"){
            this.props.history.push("/dashboard") 
        }
    }

    register = () => {
        this.props.history.push("/register") 
    }

    render() {
        return (
            <>
                <div className="banner">
                    <p id="welcomeText">Welcome to Edunomics</p>
                    <div className="centralText">
                        <h3>Where do you want to go today?</h3>
                        <p>Share your ultimate travel bucket list with us.</p>
                    </div>
                    <div className="bannerBTNS">
                        <button onClick={this.showAdminLogin}>Log In</button>
                        <button onClick={this.register}>Sign Up</button>
                    </div>
                    {   this.state.adminlogin
                        &&
                        <div className="loginAdmin">
                            <label>Email Id/Phone Number</label>
                            <input type="text" id="email" value={this.state.email} onChange={this.onChange} />
                            <label>Password</label>
                            <input type="password" id="password" value={this.state.password} onChange={this.onChange} />
                            <button onClick={this.login}>Login</button>
                        </div>
                    }
                </div>
                <div className="randomText">

                    <h3>Whatever your style, travel your way</h3>
                    
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>

                    <img src="https://i.picsum.photos/id/320/800/800.jpg" alt="dummy" />

                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt ullamcorper eros non 
                    pharetra. eget libero porta, efficitur elit id, rhoncus nunc. Mauris in purus vulputate, 
                    faucibus sem sit amet, fermentum ante. Etiam a dolor posuere, aliquet ex quis, venenatis justo. 
                    Quisque molestie convallis diam. Donec volutpat, leo ac placerat malesuada, tellus purus luctus 
                    urna, vitae iaculis diam nunc nec odio. Vivamus et turpis mauris. Cras eget laoreet tellus, ac 
                    cursus sem. Phasellus vel ex eu dui mattis ultricies in vitae ante. Sed condimentum odio eu elit 
                    posuere, non porttitor odio sollicitudin. Donec consequat viverra aliquam. Donec arcu libero, 
                    tempus t urna nec, pulvinar ultricies mauris.
                    </p>
                </div>

                <footer>
                    <h3>EDUNOMICS</h3>
                    <p>contact@edunomics.in</p>
                    <div className="icons">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-twitter"></i>
                    </div>
                    <div className="footer-links">
                        <h3>join us |</h3>
                        <h3>cookie policy |</h3>
                        <h3>terms of use |</h3>
                        <h3>tech |</h3>
                        <h3>privacy policy</h3>
                    </div>
                </footer>
            </>
        )
    }
}
