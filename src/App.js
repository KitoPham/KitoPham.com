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
              style={{ textDecoration: 'none', color: 'black'}}>
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
            <li>GitHub: github.com/kpham97</li>
            <li>LinkedIn: linkedin.com/in/kpham97</li>
          </ul>
        </div>
        <div id = "social_media_bar">
          <a href = "https://www.facebook.com/KitoMahp">
            <img src={fblogo} className="social-media" alt="facebook" />
          </a>
          <a href = "https://www.facebook.com/KitoMahp">
            <img src={linkedinlogo} className="social-media" alt="linkedin" />
          </a>
          <a href = "https://www.facebook.com/KitoMahp">
            <img src={fblogo} className="social-media" alt="facebook" />
          </a>
          <div id = "footerYear">@2017</div>
        </div>
      </div>
    )
  }
}

let codeProjects = [
  {url:"bitcoin", name : "BitStamp Mobile", type:"Android App",
    technology:"Java, Retrofit, Android MPChart, Jackson", img:"http://students.washington.edu/kpham97/BitcoinTracker/BitHomePage.png",
    brief: "Tasked during a challenge to create an Android Application that acts as a simple bitcoin " +
    "tracking app that notifies the user when prices go below a specific amount. This app has is made of " +
    "three sections an order book page that holds data for asks and data for bids, a graph that keeps track" +
    "of the price transactions over time and a notifications page that enables the user to choose to be notified " +
    "when a transaction goes below a specific amount",
    summary:"To access the bitcoin data I used a retrofit client to make repeated calls to the bitstamp API v2 where" +
    "I would store the data the data using a file client script implemented using Jackson object mapper to save the call from POJO" +
    "in a text document. Using the same script I implemented a load method to re-access that data. For each of the app " +
    "functions consisted of three steps: a first local load, and api call to gather new data, and then a update call to to " +
    "show the new data. The notification made a new api call every hour using native JobService and WakefulBroadCastReceiver. " +
    "The graph was rendered using the Android MPChart Library. Order book charts were rendered a Recyclerview and Adaptor. This" +
    "app was completed over the course of a week",
    pictures:["http://students.washington.edu/kpham97/BitcoinTracker/BitHomePage.png",
      "http://students.washington.edu/kpham97/BitcoinTracker/BitGraph.png",
      "http://students.washington.edu/kpham97/BitcoinTracker/BitNotificationPage.png",
      "http://students.washington.edu/kpham97/BitcoinTracker/BitNotification.png"]},
  {url:"relive", name : "Relive", type:"Android App",
    technology:"Java, Picasso, Facebook SDK", img:"http://students.washington.edu/acequal/images/logo.jpg",
    brief: "",
    summary:"",
    pictures:[]},
  {url:"huskyquest", name : "Husky Quest", type:"iOS App",
    technology:"Swift, Alamofire", img:"http://students.washington.edu/acequal/images/logo.jpg",
    brief: "",
    summary:"",
    pictures:[]},
  {url:"airquality", name : "Air Quality", type:"iOS App",
    technology:"R, Shiny, GGPlot, Jsonlite, dplyr", img:"http://students.washington.edu/acequal/images/logo.jpg",
    brief: "https://isenen.shinyapps.io/AirQualityProject/",
    summary:"",
    pictures:[]}
];

let designProjects = [
  {url:"candyfacts", name : "Candy Facts", type:"Infograph",
    technology:"Adobe Illustrator", img:"http://students.washington.edu/acequal/images/logo.jpg",
    brief: "",
    summary:"",
    pictures:["http://students.washington.edu/acequal/images/logo.jpg", "http://students.washington.edu/acequal/images/logo.jpg"]},
  {url:"nextstep", name : "Next Step", type:"Prototype - Website",
    technology:"AxureRP", img:"http://students.washington.edu/acequal/images/logo.jpg",
    brief: "http://fmbbsg.axshare.com",
    summary:"",
    pictures:["http://students.washington.edu/acequal/images/logo.jpg", "http://students.washington.edu/acequal/images/logo.jpg"]},

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
                //onClick ={()=>{this.props.changePage(index)}}
                to={"/Projects/dev/"+ page.url}
                style={{ textDecoration: 'none', color: 'black'}}>
                <div className="projectImageWrap"><img className="projectImage" src={page.img}/></div>
              </Link>
                <div className="projectText">
                  <strong>{page.name}</strong><br />
                  {page.type} : {page.technology}
                </div>
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
        <p className="brief">{this.props.object.brief}</p>
        <p className="summary">{this.props.object.summary}</p>
        {this.props.object.pictures.map((picture, index) => (
          <a href= {picture}>
            <img className="pageGallery" src = {picture}/>
          </a>))}
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

            <Route exact path={"/Projects/dev/bitcoin"} component = {()=>{return <Project object = {codeProjects[0]}/>}} />
            <Route exact path={"/Projects/dev/relive"} component = {()=>{return <Project object = {codeProjects[1]}/>}} />
            <Route exact path={"/Projects/dev/huskyquest"} component = {()=>{return <Project object = {codeProjects[2]}/>}} />
            <Route exact path={"/Projects/dev/airquality"} component = {()=>{return <Project object = {codeProjects[3]}/>}} />

            <Route exact path={"/Projects/design/candyfacts"} component = {()=>{return <Project object = {designProjects[0]}/>}} />
            <Route exact path={"/Projects/design/nextstep"} component = {()=>{return <Project object = {designProjects[0]}/>}} />

            <Route component={()=>{return (<p> 404 page not found</p>)}}/>
          </Switch>
          <Mainfooter changePage= {this.changePage}/>
        </div>
      </Router>
    );
  }

}



export default App;
