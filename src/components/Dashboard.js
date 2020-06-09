import React, { Component } from 'react'

import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

export default class Dashboard extends Component {

    constructor () {
        super()
        this.state = {
            title:"Welcome to Edunomics",
            classBTN:false,
            homeClicked:true,
            sessionsClicked:false,
            downloadsClicked:false,
            settingsClicked:false,
            aboutClicked:false,
            anchorEl:"",
            subject:"",
            openCourse:"",
            courses:[],
        }
    }

    navigateIT = (dest) => {
        if(dest === "home"){
            this.setState({title:"Welcome to Edunomics"})
            this.setState({classBTN:false})
            this.setState({homeClicked:true})
            this.setState({sessionsClicked:false})
            this.setState({downloadsClicked:false})
            this.setState({settingsClicked:false})
            this.setState({aboutClicked:false})
            document.getElementById("home").style.backgroundColor = "#99989A"
            document.getElementById("sessions").style.backgroundColor = "transparent"
            document.getElementById("downloads").style.backgroundColor = "transparent"
            document.getElementById("settings").style.backgroundColor = "transparent"
            document.getElementById("about").style.backgroundColor = "transparent"
        } else if(dest === "sessions"){
            this.setState({title:"Home/Sessions"})
            this.setState({classBTN:true})
            this.setState({homeClicked:false})
            this.setState({sessionsClicked:true})
            this.setState({downloadsClicked:false})
            this.setState({settingsClicked:false})
            this.setState({aboutClicked:false})
            document.getElementById("sessions").style.backgroundColor = "#99989A"
            document.getElementById("home").style.backgroundColor = "transparent"
            document.getElementById("downloads").style.backgroundColor = "transparent"
            document.getElementById("settings").style.backgroundColor = "transparent"
            document.getElementById("about").style.backgroundColor = "transparent"
        } else if(dest === "downloads"){
            this.setState({title:"Home/Downloads"})
            this.setState({classBTN:false})
            this.setState({homeClicked:false})
            this.setState({sessionsClicked:false})
            this.setState({downloadsClicked:true})
            this.setState({settingsClicked:false})
            this.setState({aboutClicked:false})
            document.getElementById("downloads").style.backgroundColor = "#99989A"
            document.getElementById("home").style.backgroundColor = "transparent"
            document.getElementById("sessions").style.backgroundColor = "transparent"
            document.getElementById("settings").style.backgroundColor = "transparent"
            document.getElementById("about").style.backgroundColor = "transparent"
        } else if(dest === "settings"){
            this.setState({title:"Home/Settings"})
            this.setState({classBTN:false})
            this.setState({homeClicked:false})
            this.setState({sessionsClicked:false})
            this.setState({downloadsClicked:false})
            this.setState({settingsClicked:true})
            this.setState({aboutClicked:false})
            document.getElementById("settings").style.backgroundColor = "#99989A"
            document.getElementById("home").style.backgroundColor = "transparent"
            document.getElementById("sessions").style.backgroundColor = "transparent"
            document.getElementById("downloads").style.backgroundColor = "transparent"
            document.getElementById("about").style.backgroundColor = "transparent"
        } else if(dest === "about"){
            this.setState({title:"Home/About"})
            this.setState({classBTN:false})
            this.setState({homeClicked:false})
            this.setState({sessionsClicked:false})
            this.setState({downloadsClicked:false})
            this.setState({settingsClicked:false})
            this.setState({aboutClicked:true})
            document.getElementById("about").style.backgroundColor = "#99989A"
            document.getElementById("home").style.backgroundColor = "transparent"
            document.getElementById("sessions").style.backgroundColor = "transparent"
            document.getElementById("downloads").style.backgroundColor = "transparent"
            document.getElementById("settings").style.backgroundColor = "transparent"
        }
    }

    openDownloads = () => {
        this.setState({title:"Home/Downloads"})
        this.setState({classBTN:false})
        this.setState({homeClicked:false})
        this.setState({sessionsClicked:false})
        this.setState({downloadsClicked:true})
        this.setState({settingsClicked:false})
        this.setState({aboutClicked:false})
        document.getElementById("downloads").style.backgroundColor = "#99989A"
        document.getElementById("home").style.backgroundColor = "transparent"
        document.getElementById("sessions").style.backgroundColor = "transparent"
        document.getElementById("settings").style.backgroundColor = "transparent"
        document.getElementById("about").style.backgroundColor = "transparent"
    }

    handleClick = (event) => {
        this.setState({anchorEl:event.currentTarget})
    }

    openSubject = (event) => {
        this.setState({subject:event.currentTarget})
    }

    handleClose = () => {
        this.setState({anchorEl:null})
        this.setState({subject:null})
    }

    closeCourse = () => {
        this.setState({openCourse:null})
    }

    openCourses = (event,subject) => {
        console.log("opening "+ subject)
        this.setState({openCourse:event.currentTarget})
        if(subject==="physics"){
            let courses = ["Quantum physics",'Gravitation','Relativity']
            this.setState({courses:courses})

        } else  if(subject === "maths"){
            let courses = ['Relations and functions','Matrices','Determinants','Application of derivatives']
            this.setState({courses:courses})
        }
    }

    logout = () => {
        this.props.history.push("/") 
    }

    render() {

        const courses = this.state.courses.map(course => {
            return(
                <MenuItem>{course}</MenuItem>
            )
        })

        return (
            <>

                <Menu
                    anchorEl={this.state.subject}
                    keepMounted
                    open={Boolean(this.state.subject)}
                    onClose={this.handleClose}
                >
                    <MenuItem onClick={(e) => this.openCourses(e,"physics")}>Physics</MenuItem>
                    <MenuItem onClick={(e) => this.openCourses(e,"maths")}>Mathematics</MenuItem>
                </Menu>

                <Menu
                    anchorEl={this.state.openCourse}
                    keepMounted
                    open={Boolean(this.state.openCourse)}
                    onClose={this.closeCourse}
                >
                    {courses}
                </Menu>

                <nav className="navbar">
                    <h3>
                        {this.state.title}
                    </h3>
                    {   this.state.classBTN 
                        && 
                        <button className="select-class-btn" onClick={this.openSubject}>Select Class</button>
                    }
                   
                    <button onClick={this.handleClick}>My Account</button>
                    <Menu
                        anchorEl={this.state.anchorEl}
                        keepMounted
                        open={Boolean(this.state.anchorEl)}
                        onClose={this.handleClose}
                    >
                        <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                        <MenuItem onClick={this.handleClose}>My account</MenuItem>
                        <MenuItem onClick={this.logout}>Logout</MenuItem>
                    </Menu>
                </nav>
                <div className="panel">
                    <div className="panelNav">
                        <h3 onClick={() => this.navigateIT("home")} id="home">Home</h3>
                        <h3 onClick={() => this.navigateIT("sessions")} id="sessions">sessions</h3>
                        <h3 onClick={() => this.navigateIT("downloads")} id="downloads">downloads</h3>
                        <h3 onClick={() => this.navigateIT("settings")} id="settings">settings</h3>
                        <h3 onClick={() => this.navigateIT("about")} id="about">about</h3>
                    </div>
                    <div className="panelData">

                        <div className="panel-content">
                            {this.state.homeClicked ?
                            <>
                                <div className="panel-content-group">
                                    <div className="content-card">
                                        <h3 className="content-card-text">All Interactive Sessions</h3>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="content-card-text">Practice Questions</h3>
                                    </div>
                                </div>
                                <div className="panel-content-group">
                                    <div className="content-card">
                                        <h3 className="content-card-text" onClick={() => this.openDownloads()}>Downloads</h3>
                                    </div>
                                    <div className="content-card">
                                        <h3 className="content-card-text">Ask questions</h3>
                                    </div>
                                </div>
                            </>
                            :
                            this.state.sessionsClicked?
                            null
                            :
                            this.state.downloadsClicked?  
                                <h3 className="download-text">Download Previous year question papers</h3>
                            :
                            this.state.sessionsClicked?
                            <>
                            </>
                            :
                            this.state.aboutClicked?
                            <>
                            </>
                            :
                            null 
                            }
                            
                        </div>

                        <div className="card-section">
                            <div className="card-half-width">
                                <div className="card">
                                    <h3 className="card-title">Topics Covered</h3>
                                    <hr />
                                </div>
                                <div className="card">
                                    <h3 className="card-title">Recent Activities</h3>
                                    <hr />
                                </div>
                            </div>
                            <div className="card card-full-width">
                                <h3 className="card-title">Performances</h3>
                                <hr />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}
