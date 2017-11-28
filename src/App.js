import React, { Component } from 'react';
import './App.css';
import linkedinlogo from './resources/linkedin-icon.png';
import fblogo from './resources/fb-icon.png';
import githublogo from './resources/github-icon.png';
import logo from './resources/KPLogo2.png';
import backicon from './resources/backicon.png';
import testVideo from './resources/videoTemp.mp4';
import projectVideo from './resources/codingVideo.mp4';
import aboutPhoto from './resources/aboutPhoto.jpg';
import comingSoonImage from './resources/comingsoon.png';
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

class Photography extends Component {
  render() {
    return (
      <div>
        <h1> Photography </h1>
        <h1> Sorry! Still under construction!  </h1>
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
            <div className="homeButtonText" id="designText">About</div>
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

/* <div id ="footerText">
 <h2>Contact Me</h2>
 <ul>
 <li>Email: kpham97@live.com </li>
 <li>Phone: (509) 619 - 4686</li>
 <li>GitHub: github.com/kpham97</li>
 <li>LinkedIn: linkedin.com/in/kpham97</li>
 </ul>
 </div>*/

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

let codeProjects = [
  {url:"bitcoin", name : "BitStamp Mobile", type:"Android App",
    technology:["Java", "Retrofit", "Android MPChart", "Jackson"], img:"http://students.washington.edu/kpham97/BitcoinTracker/BitHomePage.png",
    brief: "Tasked over the course of a week during a challenge to create an Android Application that acts as a simple bitcoin " +
    "tracking app that notifies the user when prices go below a specific amount. This app has is made of " +
    "three sections an order book page that holds data for asks and data for bids, a graph that keeps track" +
    "of the price transactions over time and a notifications page that enables the user to choose to be notified " +
    "when a transaction goes below a specific amount",
    summary:"To access the bitcoin data I used a retrofit client to make repeated calls to the bitstamp API v2 where" +
    "I would store the data the data using a file client script implemented using Jackson object mapper to save the call from POJO" +
    "in a text document. Using the same script I implemented a load method to re-access that data. For each of the app " +
    "functions consisted of three steps: a first local load, and api call to gather new data, and then a update call to to " +
    "show the new data. The notification made a new api call every hour using native JobService and WakefulBroadCastReceiver. " +
    "The graph was rendered using the Android MPChart Library. Order book charts were rendered a Recyclerview and Adaptor.",
    pictures:["http://students.washington.edu/kpham97/BitcoinTracker/BitHomePage.png",
      "http://students.washington.edu/kpham97/BitcoinTracker/BitGraph.png",
      "http://students.washington.edu/kpham97/BitcoinTracker/BitNotificationPage.png",
      "http://students.washington.edu/kpham97/BitcoinTracker/BitNotification.png"],
    link:"https://github.com/kpham97/ILoveZappos"},
  {url:"relive", name : "Relive", type:"Android App",
    technology:["Java", "Picasso", "Facebook SDK"], img:"http://students.washington.edu/kpham97/relive/1.png",
    brief: "Tasked in Android Mobile Development class with a small team of people to develop our own multi-page app. We " +
    "decided on playing around with the Facebook API to create a fun tool for users to view old statuses of friends. " +
    "We wanted the app to have several types of features to accompany bringing up old friends, the ability to separate out " +
    "pictures statuses and text statuses, and to quiz users on how well they remember their friends old statuses by quizzing " +
    "them to guess who posted the shown statuses. The user would then have results on how many of their friends statuses they got right. ",
    summary:"To do this we used a system of fragments and recyclersViews to display the questions / results page for the quiz game. And to " +
    "receive access to the facebook api we installed the facebook sdk and acquired a private api key. To get access to a user's friend list " +
    "we implemented a facebook log in button so that users could give permissions to the facebook graph api to read their data. Unfortunately " +
    "what this meant was that the graph api could only access the user's friends who have given their own permissions already. There was no " +
    "work around as this was a self imposed limitation by the Facebook API to control privacy from everyone but larger companies.\n My task in " +
    "particular for this project was to implement the api calls, the storing of the call, and to map the data to the elements in during the quiz " +
    "game. I did this using Json Objects and POJOS, where I used the POJOs to store the data after an initial API Call. I did this " +
    "to improve speed of the application, where the API would only need to be called once. To import the image directly into the RecyclerView based off " +
    "a string url in the POJO I used the Picasso library to draw the image. Last, I also implemented the settings/preferences fragment to control" +
    "settings for the quizzes using SharedPreferences.",
    pictures:["http://students.washington.edu/kpham97/relive/1.png",
      "http://students.washington.edu/kpham97/relive/2.png",
      "http://students.washington.edu/kpham97/relive/3.png",
      "http://students.washington.edu/kpham97/relive/4.png",
      "http://students.washington.edu/kpham97/relive/5.png",
      "http://students.washington.edu/kpham97/relive/6.png",
      "http://students.washington.edu/kpham97/relive/7.png"],
    link:"https://github.com/kpham97/Android-Project-ReLive"},
  /*{url:"huskyquest", name : "Husky Quest", type:"iOS App",
    technology:["Swift", "Alamofire"], img:"http://students.washington.edu/acequal/images/logo.jpg",
    brief: "",
    summary:"",
    pictures:[],
    link:"https://github.com/kpham97/HuskyQuest"}*/
];

let websiteProjects = [
  {url:"airquality", name : "Air Quality", type:"Web App",
    technology:["R", "Shiny", "GGPlot", "Jsonlite", "dplyr"], img:"http://students.washington.edu/kpham97/airquality/1.png",
    brief: "Assigned to work with a team to show knowledge of the R language and it's supporting libraries, we wanted to work " +
    "with a data set that we could visually show on a page and we were curious about how the air quality was across the United States" +
    "so we decided to explore the OpenAQ index api to answer our questions." +
    "state",
    summary:"What resulted was a simple web app that displayed a map that contained the average Air Quality Index (AQI), over the " +
    "month of February in 2017. We limited the average to a month because the sheer amount of data rows that our web host ShinyApp " +
    "could handle. We decided to balance on load times and data and settled on 65,000 rows of data for the month. Implemented also due " +
    "is a comparative direct graph we used to graph the change in AQ between two cities and a graph to show their averages next to each " +
    "other. My task specfically in this group was to work on the backend server-side services of the web app. Data gathering, data storage, " +
    "mapping, etc.",
    pictures:["http://students.washington.edu/kpham97/airquality/1.png",
      "http://students.washington.edu/kpham97/airquality/2.png"],
    link:"https://isenen.shinyapps.io/AirQualityProject/"},
  {url:"nextstep", name : "Next Step", type:"Prototype",
    technology:["AxureRP", "Photoshop CS6"], img:"http://students.washington.edu/kpham97/nextstep/1.png",
    brief: "Assigned to think about a social problem, and ideate solutions to solve that problem, we landed on the topic of the Income " +
    "disparity with in the United States. Going further into income inequality our research showed that while unemployment in the states " +
    "was rapidly going down, low-income careers and part-time jobs were on the rise. We wanted to create a resource that enables a user " +
    "to be assessed and find other careers that would require low investment training or education that the user could pursue. Our logic " +
    "was that users could use the resource higher paying careers that they were only one certification away from that satisfied their wants " +
    "and desires in a job and they weren't limited to their current job.",
    summary:"To accomplish this task we created a prototype website through the AxureRP prototyping tool. The prototype website has a short quiz section " +
    "to acquire the interests and the skillset of the user, at the end of the quiz the user is brought to a results page that contains three " +
    "sections seperated by jobs requiring no additional training, little training, or alot of training based off what the user's assessment " +
    "they are then given an option to bookmark careers for later viewing. Also shown is a list of resources that a user can visit to acquire to " +
    "skills or lessons. My specific task for this project was the overall design, structure, and flow of the website. In terms of smaller " +
    "picture, I designed the quiz and results page for the prototype.",
    pictures:["http://students.washington.edu/kpham97/nextstep/1.png",
      "http://students.washington.edu/kpham97/nextstep/2.png",
      "http://students.washington.edu/kpham97/nextstep/3.png",
      "http://students.washington.edu/kpham97/nextstep/4.png",
      "http://students.washington.edu/kpham97/nextstep/5.png",
      "http://students.washington.edu/kpham97/nextstep/6.png",
      "http://students.washington.edu/kpham97/nextstep/7.png",
      "http://students.washington.edu/kpham97/nextstep/8.png",
      "http://students.washington.edu/kpham97/nextstep/9.png",
      "http://students.washington.edu/kpham97/nextstep/10.png",
      "http://students.washington.edu/kpham97/nextstep/11.png",
      "http://students.washington.edu/kpham97/nextstep/12.png",
      "http://students.washington.edu/kpham97/nextstep/13.png",
      "http://students.washington.edu/kpham97/nextstep/14.png",],
    link:"http://fmbbsg.axshare.com"},
];

let designProjects = [
  {url:"candyfacts", name : "Candy Facts", type:"Infograph",
    technology:["Adobe Illustrator"], img:"http://students.washington.edu/kpham97/InfographDesign.png",
    brief: "",
    summary:"",
    pictures:["http://students.washington.edu/kpham97/FinalInfograph.png"],
    link:"http://kpham97.wixsite.com/362portfolio2017"},

];

class Coding extends Component {
  render(){

    function intersperse(arr, sep) {
      if (arr.length === 0) {
        return [];
      }

      return arr.slice(1).reduce(function(xs, x, i) {
        return xs.concat([sep, x]);
      }, [arr[0]]);
    }

    return(
      <div className= "Content_Container">
        <div id="coding_projects">
          <h1>Mobile Apps</h1>
          <ul className="projects">
            {codeProjects.map((page, index) => (
              <li key = {index}>
              <Link
                //onClick ={()=>{this.props.changePage(index)}}
                to={process.env.PUBLIC_URL + '/Projects/dev/'+ page.url}
                style={{ textDecoration: 'none', color: 'black'}}>
                <div className="projectImageWrap"><img className="projectImage" src={page.img} alt={page.img}/></div>
              </Link>
                <div className="projectText">
                  <strong>{page.name}</strong><br />
                  {page.type} : {intersperse(page.technology, ", ")}
                </div>
              </li>
            ))}
            <li className="comingSoon">
              <div
                style={{ textDecoration: 'none', color: 'black'}}>
                <div className="projectImageWrap"><img className="projectImage" src={comingSoonImage} alt="coming soon"/></div>
              </div>
              <div className="projectText">
                <strong>More works soon . . .</strong><br />
              </div>
            </li>
          </ul>
        </div>
        <div id="coding_projects">
          <h1>Websites</h1>
          <ul className="projects">
            {websiteProjects.map((page, index) => (
              <li key = {index}>
                <Link
                  //onClick ={()=>{this.props.changePage(index)}}
                  to={process.env.PUBLIC_URL + '/Projects/dev/'+ page.url}
                  style={{ textDecoration: 'none', color: 'black'}}>
                  <div className="projectImageWrap"><img className="projectImage" src={page.img} alt={page.img}/></div>
                </Link>
                <div className="projectText">
                  <strong>{page.name}</strong><br />
                  {page.type} : {intersperse(page.technology, ", ")}
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
                to={process.env.PUBLIC_URL + '/projects/design/'+ page.url}
                style={{ textDecoration: 'none', color: 'black'}}>
                <img className="projectImage" src={page.img} alt={page.img}/>
                <strong>{page.name}</strong><br />
                {page.type} : {intersperse(page.technology, ", ")}
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
        <div className="page_Container">
        <Link to="/projects" className = "backbutton"><img src={backicon} alt = "back"/></Link>
        <h1>{this.props.object.name}</h1>
        <h4>{this.props.object.type}</h4>
          <div className="technology">
            <h3>Technologies</h3>
            <ul>
              {this.props.object.technology.map((word, index)=>(
                <li key = {index}>
                  {word}
                </li>
              ))}
            </ul>
          </div>
        <img className="pageImage" src={this.props.object.img}/>
          <a className="pageLink" href={this.props.object.link}> See More </a>
        <div className="brief"><h2>Brief</h2>{this.props.object.brief}</div>
        <div className="summary"><h2>Summary</h2>{this.props.object.summary}</div>

        <div className="pageGallery">{this.props.object.pictures.map((picture, index) => (
          <a href= {picture} key = {index}>
            <img className="pageGalleryImage" src = {picture} alt={picture}/>
          </a>))}
        </div>
      </div>
      </div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div className="Content_Container">
        <h1>About Me</h1>
        <div className="about">
          <img src = {aboutPhoto} alt = "my picture" className="aboutPic"/>
          <p className="aboutText">
            Community-driven developer. Current University of Washington - Seattle student studying Informatics with Cybersecurity. Background
            in Information and Telecommunications where I worked on and off for several years under an IT Consultant
            company as a computer and networks consultant as well with customer service as a receptionist at a locally
            popular nail salon.  Formerly campus outreach chair for social justice club Asian Coalition for Equality and
            former Outreach chair for Annual ACT conference where I handled securing sponsorships with local non profit
            organizations and acquired keynote speakers. An opportunity where I learned to communicate and connect with a
            diverse cast of individuals and acquire leadership skills in managing tasks. Today, I just like to sit back
            and code while seeing my projects come to life. I also do photography and design work as a hobby putting me
            in positions where I have to change my way of thinking in to a more artistic and creative approach. My
            varying experiences have given me the skill-set to be able to handle a wide range of roles and responsibilities
            and the ability to think on my feet to flourish best in environments that are always changing.
          </p>
          <h2>Contact Me</h2>
          <ul>
            <li>Email: kpham97@live.com </li>
            <li>Phone: (509) 619 - 4686</li>
            <li>GitHub: github.com/kpham97</li>
            <li>LinkedIn: linkedin.com/in/kpham97</li>
          </ul>
        </div>
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
            <Route exact path={process.env.PUBLIC_URL + '/'} component = {()=>{return <Home />}}/>
            <Route exact path={process.env.PUBLIC_URL + '/Home'} component = {()=>{return <Home />}}/>
            <Route exact path={process.env.PUBLIC_URL + '/Projects'} component = {()=>{return <Coding />}}/>
            <Route exact path={process.env.PUBLIC_URL + '/Photography'} component = {()=>{return <Photography />}}/>
            <Route exact path={process.env.PUBLIC_URL + '/About'} component = {()=>{return <About />}}/>

            <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/bitcoin'} component = {()=>{return <Project object = {codeProjects[0]}/>}} />
            <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/relive'} component = {()=>{return <Project object = {codeProjects[1]}/>}} />
            <Route exact path={process.env.PUBLIC_URL + '/Projects/dev/huskyquest'} component = {()=>{return <Project object = {codeProjects[2]}/>}} />

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
