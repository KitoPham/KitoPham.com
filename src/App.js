import React, { Component } from 'react';
import './App.css';
import linkedinlogo from './logo.svg';
import fblogo from './logo.svg';
import logo from './logo.svg';


/*
 * JS used to manage the content of the website
 * Center text will keep changing depending on the text
 *
 */
class Mainheader extends Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className = "headerButton_Container">
          <h2>Kito Pham</h2>
          {MainPages.map((page, index) => (
            <a
              key= {index}
              className="headerButton"
              onClick ={()=>{this.props.changePage(index)}}
            >
              {page.name}
            </a>
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
  constructor() {
    super();
    this.state = {
      picNum: 0
    }
  }

  pictures = [
    "codePicture",
    "designPicture"
  ];

  render() {
    return(
      <div className = "Home_Container">
        <div className = "homeButton_Container">
          <img id={this.pictures[this.state.picNum]} className="homeImage" alt="picture"/>
          <div id="Coding" className="homeButton"
               onClick ={()=>{this.props.changePage(1)}}
               onMouseOver={this.setState({picNum: 0})}
          > Coding </div>
          <div id="Design" className="homeButton"
               onClick ={()=>{this.props.changePage(2)}}
               onMouseOver={this.setState({picNum: 1})}
          >Design</div>
          <div id="Photography" className="homeButton"
               onClick ={()=>{this.props.changePage(3)}}
               /*onMouseOver={this.setState({picNum: 1})}*/
          >Photography</div>
        </div>
      </div>
    )
  }
}

class Mainfooter extends Component {
  render() {
    return (
      <div className="footer">
        <div id = "social-media-bar">
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
  constructor(){
    super();
    this.state = {
      currentProject: 0,
    };
  }

  render(){


    return(
      <div className= "Coding_Container">
      </div>
    )
  }
}
class Design extends Component {
  render() {
    return (
      <div>
        <h1> Design </h1>
        <p> under construction </p>
      </div>
    )
  }
}

var MainPages = [
  {Component : <Home />, name : "Home"},
  {Component : <Coding />, name: "Coding"},
  {Component: <Design />, name:"Design"},
  {Component : <Photography />, name : "Photography"}
];


class App extends Component {
  constructor(){
    super();
    this.state = {
      currentPage: 0,
    };
    this.changePage = this.changePage.bind(this);
  }

  changePage(index) {
    this.setState({
      currentPage: index,
    })
    console.log("current updated page index is" + this.state.currentPage);
    console.log("index is " + index);

  }
  render () {
    const currPage = MainPages[this.state.currentPage].Component;
    console.log(this.state.currentPage);
    var component = React.cloneElement(currPage,
      {changePage: this.changePage});
    return (
      <div>
        <Mainheader changePage= {this.changePage}/>
        {component}
        <Mainfooter changePage= {this.changePage}/>
      </div>
    );
  }

}



export default App;
