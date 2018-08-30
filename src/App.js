import React, { Component } from 'react';
import './StyleSheets/App.css';
import linkedinlogo from './resources/icons/linkedin-icon.png';
import fblogo from './resources/icons/fb-icon.png';
import githublogo from './resources/icons/github-icon.png';
import testVideo from './resources/videos/videoTemp.mp4';
import projectVideo from './resources/videos/codingVideo.mp4';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import {ProjectGallery} from './Components/ProjectGallery';
import {Project} from "./Components/Project";

import {codeProjects, websiteProjects, designProjects} from "./Constants/ProjectListings";
import {About} from "./Components/About";
import {Photography} from "./Components/Photography";
import {HomePage} from "./Components/Home";
import {MainHeader} from "./Components/MainHeader"
import {ExpandedMenu} from "./Components/ExpandedMenu"

/*
 * JS used to manage the content of the website
 * Center text will keep changing depending on the text
 *
 */
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
    ];

    Box = [3];


    render() {
        var backgroundSize = {
            textDecoration: 'none',
            color: 'white',
            backgroundSize: this.props.width
        };
        return(
            <div className = "Content_Container">
                <div className = "homeButton_Container">

                    <Link id={this.sizeClasses[this.state.size][0]} className="homeButton"
                        //onClick ={()=>{this.props.changePage(1)}}
                          onMouseOver ={() =>{this.setState({size:1});
                              this.Box[0].play();}}
                          onMouseLeave={()=>{this.setState({size:0});
                              this.Box[0].pause(); this.Box[0].currentTime=0;}}
                          to={process.env.PUBLIC_URL + '/Projects'} style={backgroundSize}>
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
                          to={process.env.PUBLIC_URL + '/About'} style={backgroundSize}>
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
                          to={process.env.PUBLIC_URL + '/Photography'} style={{backgroundSize: this.props.width<1150 ? this.props.height  * 1.2 : this.props.width}}>
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
                        <img src={githublogo} className="social-media" alt="facebook" style={{borderRadius: '50%'}}/>
                    </a>
                </div>
                <div id = "footerYear">@2017</div>
            </div>
        )
    }
}



class App extends Component {
    constructor(){
        super();
        this.state = {
            currentPage: 0,
            menuVisibility : false,
            width: 0, height: 0
        };
        this.changePage = this.changePage.bind(this);
        this.toggleMenu = this.toggleMenu.bind(this);
        this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
    }
    componentDidMount() {
        this.updateWindowDimensions();
        window.addEventListener('resize', this.updateWindowDimensions);
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateWindowDimensions);
    }

    updateWindowDimensions() {
        console.log("height: " + window.innerHeight);
        console.log("width: " + window.innerWidth);
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    }


//Used to change state of homepage through header which is a separate component
    changePage(index) {
        this.setState({
            currentPage: index,
        });
        console.log("current updated page index is" + this.state.currentPage);
        console.log("index is " + index);
    }

    toggleMenu(){
        this.setState({
          menuVisibility : !this.state.menuVisibility
        })
    }


    render () {
        let expandedMenu = <div></div>;
        if (this.state.menuVisibility){
            expandedMenu = <ExpandedMenu/>
        }
        return (
            <Router>
                <div>
                    <MainHeader width = {this.state.width} changePage= {this.changePage} toggleMenu ={this.toggleMenu}/>
                    {expandedMenu}
                    <Switch>
                        <Route exact path={process.env.PUBLIC_URL + '/'} component = {()=>{return <Home width={this.state.width} height={this.state.height}/>}}/>
                        <Route exact path={process.env.PUBLIC_URL + '/Home'} component = {()=>{return <Home width={this.state.width} height={this.state.height}/>}}/>

                        <Route exact path={process.env.PUBLIC_URL + '/HomeV2'} component = {()=>{return <HomePage width={this.state.width} />}}/>
                        <Route exact path={process.env.PUBLIC_URL + '/HomeV1'} component = {()=>{return <Home width={this.state.width}/>}}/>

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
