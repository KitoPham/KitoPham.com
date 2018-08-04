import React, { Component } from 'react';
import './App.css';
import linkedinlogo from './resources/linkedin-icon.png';
import fblogo from './resources/fb-icon.png';
import githublogo from './resources/github-icon.png';
import logo from './resources/KPLogo2.png';
import testVideo from './resources/videoTemp.mp4';
import projectVideo from './resources/codingVideo.mp4';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {ProjectGallery} from './Components/ProjectGallery';
import {Project} from "./Components/Project";

import {codeProjects, websiteProjects, designProjects} from "./Components/ProjectListings";
import {About} from "./Components/About";
import {Photography} from "./Components/Photography";


/*
 * JS used to manage the content of the website
 * Center text will keep changing depending on the text
 *
 */

class Mainheader extends Component {
    render() {
        return (
            <div className="header">
                <img src={logo} className="header-logo" alt="logo" />

                <div>
                    <h2>Kito Pham</h2>
                    <div className = "headerButton_Container">
                        {MainPages.map((page, index) => (
                            <Link
                                key = {index}
                                className="headerButton"
                                //onClick ={()=>{this.props.changePage(index)}}
                                to={process.env.PUBLIC_URL + "/"+ page.name}
                            >
                                {page.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}


class Home extends Component{
    constructor(){
        super();
        this.state = {
            size : 0
        }
    }
    sizeClasses = [
        ["Coding","About","Photography"],
        ["bigCoding", "shortAbout", "skinnyPhotography" ],
        ["shortCode", "bigAbout", "skinnyPhotography"],
        ["skinnyCode", "skinnyAbout", "bigPhotography"]
    ]

    Box = [3];

    render() {
        return(
            <div className = "Content_Container">
                <div className = "homeButton_Container">

                    <Link id={this.sizeClasses[this.state.size][0]} className="homeButton"
                        //onClick ={()=>{this.props.changePage(1)}}
                          onMouseOver ={() =>{this.setState({size:1});
                              this.Box[0].play();}}
                          onMouseLeave={()=>{this.setState({size:0});
                              this.Box[0].pause(); this.Box[0].currentTime=0;}}
                          to={process.env.PUBLIC_URL + '/Projects'} style={{ textDecoration: 'none', color: 'white', backgroundSize:'1200px'}}>
                        <video ref = {(input) => {this.Box[0] = input}} muted>
                            <source src={projectVideo} type="video/mp4" />
                            <source src={projectVideo} type="video/ogg" />
                        </video>
                        <div className="videoOverlay"></div>
                        <div className="homeButtonText" id="codingText">Projects</div>
                    </Link>

                    <Link id={this.sizeClasses[this.state.size][1]} className="homeButton"
                        //onClick ={()=>{this.props.changePage(2)}}
                          onMouseOver ={() =>{this.setState({size:2});
                              this.Box[1].play();}}
                          onMouseLeave={()=>{this.setState({size:0});
                              this.Box[1].pause(); this.Box[1].currentTime=0;}}
                          to={process.env.PUBLIC_URL + '/About'} style={{ textDecoration: 'none', color: 'white', backgroundSize:'1200px', backgroundOrigin:"-200px"}}>
                        <video ref = {(input) => {this.Box[1] = input}} muted>
                            <source src={testVideo} type="video/mp4" />
                            <source src={testVideo} type="video/ogg" />
                        </video>
                        <div className="videoOverlay"></div>
                        <div className="homeButtonText" id="aboutText">About</div>
                    </Link>

                    <Link id={this.sizeClasses[this.state.size][2]} className="homeButton"
                        //onClick ={()=>{this.props.changePage(1)}}
                          onMouseOver ={() =>{this.setState({size:3});
                              this.Box[2].play();}}
                          onMouseLeave={()=>{this.setState({size:0});
                              this.Box[2].pause(); this.Box[2].currentTime=0;}}
                          to={process.env.PUBLIC_URL + '/Photography'} style={{ textDecoration: 'none', color: 'white', backgroundSize:'1500px'}}>
                        <video ref = {(input) => {this.Box[2] = input}} muted>
                            <source src={testVideo} type="video/mp4" />
                            <source src={testVideo} type="video/ogg" />
                        </video>
                        <div className="videoOverlay"></div>
                        <div className="homeButtonText" id="photoText">Photography</div>
                    </Link>

                </div>
            </div>
        )
    }'/'
}


class Mainfooter extends Component {
    render() {
        return (
            <div className="footer">
                <div id = "social_media_bar">
                    <a href = "https://www.facebook.com/KitoMahp">
                        <img src={fblogo} className="social-media" alt="facebook" />
                    </a>
                    <a href = "https://www.linkedin.com/in/kitopham">
                        <img src={linkedinlogo} className="social-media" alt="linkedin" />
                    </a>
                    <a href = "https://www.github.com/kpham97">
                        <img src={githublogo} className="social-media" alt="facebook" />
                    </a>
                </div>
                <div id = "footerYear">@2017</div>
            </div>
        )
    }
}

let MainPages = [
    {Component : <Home />, name : "Home"},
    {Component : <ProjectGallery />, name: "Projects"},
    {Component : <Photography />, name : "Photography"},
    {Component : <About />, name: "About"}
];

class App extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 0,
        };
        this.changePage = this.changePage.bind(this);
    }
    componentWillMount() {
        console.log(MainPages[this.state.currentPage].name);

    }


//Used to change state of homepage through header which is a separate component
    changePage(index) {
        this.setState({
            currentPage: index,
        });
        console.log("current updated page index is" + this.state.currentPage);
        console.log("index is " + index);
    }

    render () {
        return (
            <Router>
                <div>
                    <Mainheader changePage= {this.changePage}/>
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component = {()=>{return <Home />}}/>
                        <Route exact path={process.env.PUBLIC_URL + '/Home'} component = {()=>{return <Home />}}/>
                        <Route exact path={process.env.PUBLIC_URL + '/Projects'} component = {()=>{return <ProjectGallery />}}/>
                        <Route exact path={process.env.PUBLIC_URL + '/Photography'} component = {()=>{return <Photography />}}/>
                        <Route exact path={process.env.PUBLIC_URL + '/About'} component = {()=>{return <About />}}/>

                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/There'} component = {()=>{return <Project object = {codeProjects[0]}/>}} />
                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/bitcoin'} component = {()=>{return <Project object = {codeProjects[1]}/>}} />
                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/relive'} component = {()=>{return <Project object = {codeProjects[2]}/>}} />
                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/huskyquest'} component = {()=>{return <Project object = {codeProjects[3]}/>}} />
                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/clank'} component = {()=>{return <Project object = {codeProjects[4]}/>}} />

                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/airquality'} component = {()=>{return <Project object = {websiteProjects[0]}/>}} />
                        <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/nextstep'} component = {()=>{return <Project object = {websiteProjects[1]}/>}} />

                        <Route exact path={process.env.PUBLIC_URL + '/Projects/design/candyfacts'} component = {()=>{return <Project object = {designProjects[0]}/>}} />


                        <Route component={()=>{return (<p> 404 page not found</p>)}}/>
                    </Switch>
                    <Mainfooter changePage= {this.changePage}/>
                </div>
            </Router>
        );
    }

}



export default App;
