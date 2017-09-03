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
              key= {index}
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
      <div className = "Home_Container">
        <div className = "homeButton_Container">

          <Link id={this.sizeClasses[this.state.size][0]} className="homeButton"
             //onClick ={()=>{this.props.changePage(1)}}
             onMouseOver ={() =>{this.setState({size:1});
             this.Box[0].play();}}
             onMouseLeave={()=>{this.setState({size:0});
             this.Box[0].pause(); this.Box[0].currentTime=0;}}
                to={"/Coding"} style={{ textDecoration: 'none', color: 'white'}}>
            <video ref = {(input) => {this.Box[0] = input}} loop muted>
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/mp4" />
              <source src="http://students.washington.edu/kpham97/videoTemp.mp4" type="video/ogg" />
            </video>
            <div className="videoOverlay"></div>
              <span id="codingText">Coding</span>
          </Link>

          <Link id={this.sizeClasses[this.state.size][1]} className="homeButton" ref = {(input) => {this.Box[1] = input}}
             //onClick ={()=>{this.props.changePage(2)}}
             onMouseOver ={() =>{this.setState({size:2});}}
             onMouseLeave={()=>{this.setState({size:0});}}
                to={"/Design"} style={{ textDecoration: 'none', color: 'white'}}>
            <span id="designText">Design</span>
          </Link>

          <Link id={this.sizeClasses[this.state.size][2]} className="homeButton"
             //onClick ={()=>{this.props.changePage(1)}}
             onMouseOver ={() =>{this.setState({size:3});
               this.Box[2].play();}}
             onMouseLeave={()=>{this.setState({size:0});
               this.Box[2].pause(); this.Box[2].currentTime=0;}}
                to={"/Photography"} style={{ textDecoration: 'none', color: 'white'}}>
            <video ref = {(input) => {this.Box[2] = input}} loop muted>
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

class Coding extends Component {

  render(){

    return(
      <div className= "project_container">
         coding
      </div>
    )
  }
}

class Design extends Component{

  render(){

    return(
      <div className= "project_container">
        design
      </div>
    )
  }
}

var MainPages = [
  {Component : <Home />, name : "Home"},
  {Component : <Coding />, name: "Coding"},
  {Component : <Design />, name: "Design"},
  {Component : <Photography />, name : "Photography"},
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
          <Route path="/Home" component = {()=>{return <Home />}}/>
          <Route path="/Coding" component = {()=>{return <Coding />}}/>
          <Route path="/Photography" component = {()=>{return <Photography />}}/>
          <Route path="/Design" component = {()=>{return <Design />}}/>
            <Route component={()=>{return (<p> 404 page not found</p>)}}/>
          </Switch>
        <Mainfooter changePage= {this.changePage}/>
        </div>
      </Router>
    );
  }

}



export default App;
