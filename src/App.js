import React, { Component } from 'react';
import './App.css';
import linkedinlogo from './logo.svg';
import fblogo from './logo.svg';
import logo from './logo.svg';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
//import ReactDOM from 'react-dom';

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
        <div className = "headerButton_Container">
          <h2>Kito Pham</h2>
          {MainPages.map((page, index) => (
            <Link
              key = {index}
              className="headerButton"
              //onClick ={()=>{this.props.changePage(index)}}
              to={"/"+ page.name}
              style={{ textDecoration: 'none', color: 'lightblue'}}>
              {page.name}

            </Link>
          ))}
        </div>
      </div>
    );
  }
}

class Photography extends Component {
  render() {
    return (
      <div>
        <h1> photography </h1>
        <p> under construction </p>
      </div>
    )
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
    ["Coding","Design","Photography"],
    ["bigCoding", "shortDesign", "skinnyPhotography" ],
    ["shortCode", "bigDesign", "skinnyPhotography"],
    ["skinnyCode", "skinnyDesign", "bigPhotography"]
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
                to={"/Projects"} style={{ textDecoration: 'none', color: 'white'}}>
            <video ref = {(input) => {this.Box[0] = input}} muted>
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/mp4" />
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/ogg" />
            </video>
            <div className="videoOverlay"></div>
            <span id="codingText">Projects</span>
          </Link>

          <Link id={this.sizeClasses[this.state.size][1]} className="homeButton"
            //onClick ={()=>{this.props.changePage(2)}}
                onMouseOver ={() =>{this.setState({size:2});
                  this.Box[1].play();}}
                onMouseLeave={()=>{this.setState({size:0});
                  this.Box[1].pause(); this.Box[1].currentTime=0;}}
                to={"/About"} style={{ textDecoration: 'none', color: 'white'}}>
            <video ref = {(input) => {this.Box[1] = input}} muted>
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/mp4" />
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/ogg" />
            </video>
            <div className="videoOverlay"></div>
            <span id="designText">About</span>
          </Link>

          <Link id={this.sizeClasses[this.state.size][2]} className="homeButton"
            //onClick ={()=>{this.props.changePage(1)}}
                onMouseOver ={() =>{this.setState({size:3});
                  this.Box[2].play();}}
                onMouseLeave={()=>{this.setState({size:0});
                  this.Box[2].pause(); this.Box[2].currentTime=0;}}
                to={"/Photography"} style={{ textDecoration: 'none', color: 'white'}}>
            <video ref = {(input) => {this.Box[2] = input}} muted>
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/mp4" />
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/ogg" />
            </video>
            <div className="videoOverlay"></div>
            <span id="photoText">Photography</span>
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
        <div id ="footerText">
          <h2>Contact Me</h2>
          <ul>
            <li>Email: kpham97@live.com </li>
            <li>Phone: (509) 619 - 4686</li>
          </ul>
        </div>
        <div id = "social_media_bar">
          <div id = "footerYear">@2017</div>
          <a href = "https://www.facebook.com/KitoMahp">
            <img src={fblogo} className="social-media" alt="facebook" />
          </a>
          <a href = "https://www.facebook.com/KitoMahp">
            <img src={linkedinlogo} className="social-media" alt="linkedin" />
          </a>
          <a href = "https://www.facebook.com/KitoMahp">
            <img src={fblogo} className="social-media" alt="facebook" />
          </a>
        </div>
      </div>
    )
  }
}

let codeProjects = [
  {url:"testproject1", name : "Test Project1", type:"IOS App", technology:"Swift", img:"http://students.washington.edu/acequal/images/logo.jpg"},
];

let designProjects = [
  {url:"candyfacts", name : "Candy Facts", type:"Infograph", technology:"Adobe Illustrator", img:"http://students.washington.edu/acequal/images/logo.jpg"},

];

class Coding extends Component {
  render(){
    return(
      <div className= "Content_Container">
        <div id="coding_projects">
          <h1>Apps & Websites</h1>
          <ul className="projects">
            {codeProjects.map((page, index) => (
              <li key = {index}>
              <Link
                className="headerButton"
                //onClick ={()=>{this.props.changePage(index)}}
                to={"/Projects/dev/"+ page.url}
                style={{ textDecoration: 'none', color: 'black'}}>
                <img className="projectImage" src={page.img}/>
                <strong>{page.name}</strong><br />
                {page.type} : {page.technology}
              </Link>
              </li>
            ))}
          </ul>
        </div>
        <div id="design_projects">
          <h1>Design</h1>
        <ul className="projects">
          {designProjects.map((page, index) => (
            <li key = {index}>
              <Link
                className="headerButton"
                //onClick ={()=>{this.props.changePage(index)}}
                to={"/projects/design/"+ page.url}
                style={{ textDecoration: 'none', color: 'black'}}>
                <img className="projectImage" src={page.img}/>
                <strong>{page.name}</strong><br />
                {page.type} : {page.technology}
              </Link>
            </li>
          ))}
        </ul>
        </div>
      </div>
    )
  }
}

class Project extends Component{
  render(){
    return(
      <div className="Content_Container">
        <Link to="/projects">back</Link>
        <h1>{this.props.object.name}</h1>
        <h4>{this.props.object.type}</h4>
        <img className="pageImage" src={this.props.object.img}/>
        <h3>Technologies</h3>
        <ul>
          <li>{this.props.object.technology}</li>
        </ul>
      </div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div>
        About Me
      </div>
    )
  }
}

var MainPages = [
  {Component : <Home />, name : "Home"},
  {Component : <Coding />, name: "Projects"},
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



  changePage(index) {
    this.setState({
      currentPage: index,
    })
    console.log("current updated page index is" + this.state.currentPage);
    console.log("index is " + index);
  }

  render () {
    /*const currPage = () => {return(MainPages[this.state.currentPage].Component)};
     console.log(this.state.currentPage);*/
    /*var component = React.cloneElement(currPage,
     {changePage: this.changePage});*/
    return (
      <Router>
        <div>
          <Mainheader changePage= {this.changePage}/>
          <Switch>
            <Route exact path="/" component = {()=>{return <Home />}}/>
            <Route exact path="/Home" component = {()=>{return <Home />}}/>
            <Route exact path="/Projects" component = {()=>{return <Coding />}}/>
            <Route exact path="/Photography" component = {()=>{return <Photography />}}/>
            <Route exact path="/About" component = {()=>{return <About />}}/>
            <Route exact path={"/Projects/dev/testproject1"} component = {()=>{return <Project object = {codeProjects[0]}/>}} />
            <Route exact path={"/Projects/design/candyfacts"} component = {()=>{return <Project object = {designProjects[0]}/>}} />
            <Route component={()=>{return (<p> 404 page not found</p>)}}/>
          </Switch>
          <Mainfooter changePage= {this.changePage}/>
        </div>
      </Router>
    );
  }

}



export default App;
