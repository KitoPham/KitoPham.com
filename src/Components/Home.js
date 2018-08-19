import React, {Component} from "react";
import KLogo from "../resources/circleMenuIcons/icon_BlackK.svg"
import LogoCircle from "../resources/circleMenuIcons/icon_BlackCircle.svg"
import projectIcon from "../resources/circleMenuIcons/icon_BlackDev.svg"
import aboutIcon from "../resources/circleMenuIcons/icon_BlackAbut.svg"
import cameraIcon from "../resources/circleMenuIcons/icon_BlackCamera.svg"
import '../StyleSheets/HomePage.css';
import Link from "react-router-dom/es/Link";

class HomePage extends Component{

    constructor(){
        super();
        this.state = {
            spinState: false,
            menuVisibility: false,
            menuClicked: false,
            backgroundName:"introduction",
            itemTextVisibility : false
        };

        if(localStorage.getItem("homeState") != null){
            this.state = JSON.parse(localStorage.getItem("homeState"));
        }
        console.log(localStorage.getItem("homeState"));
        this.handleClick = this.handleClick.bind(this);
    };

    handleClick(){
        this.setState({
            spinState: !this.state.spinState,
            menuVisibility:!this.state.menuVisibility,
            menuClicked: !this.state.menuClicked,
            itemTextVisibility: !this.state.itemTextVisibility,
            backgroundName:"introduction"
        }, ()=>{localStorage.setItem("homeState", JSON.stringify(this.state));console.log(localStorage.getItem("homeState"));}
        );



    }

    render(){
        return (
        <div className = {"Content_Container "}>
            <div className = "homeButton_Container">
                <div className = {"home_section "+ this.state.backgroundName}>
                    <h2>Hi! I'm Kito </h2>
                    <p>I'm passionate about mobile development and strive to improve myself wherever I can! </p>
                        <p>Currently I'm doing awesome things finding solutions at Zappos.com as their Android Intern!</p>

                </div>
                <div className="menu_container">
                    <Link to={process.env.PUBLIC_URL + "/Projects"} style={{color:'white'}}>
                        <div className={"menu_item " + (this.state.menuVisibility ? "icon_dev" : "icon_hidden")} id="projects"
                            onMouseOver={()=>{this.setState({backgroundName : "background_dev"})}} onMouseLeave={()=>{this.setState({backgroundName:"white_background"})}}>
                            <div className={this.state.itemTextVisibility ? "itemText" : "itemTextHidden"}>Projects</div>
                            <img className="devIcon" src={projectIcon} alt="dev icon"/>
                        </div>
                    </Link>
                    <Link to={process.env.PUBLIC_URL + "/Photography"} style={{color:'white'}}>
                        <div className={"menu_item " + (this.state.menuVisibility ? "icon_camera" : "icon_hidden")} id="photography"
                             onMouseOver={() => {this.setState({backgroundName : "background_camera"})}}  onMouseLeave={()=>{this.setState({backgroundName:"white_background"})}}>
                            <div className={this.state.itemTextVisibility ? "itemText" : "itemTextHidden"}>Photography</div>
                            <img className= "cameraIcon" src={cameraIcon} alt="camera icon"/>
                        </div>
                    </Link>
                    <Link to={process.env.PUBLIC_URL + "/About"} style={{color:'white'}}>
                        <div className={"menu_item " + (this.state.menuVisibility ? "icon_about" : "icon_hidden")} id="about"
                             onMouseOver={()=>{this.setState({backgroundName : "background_about"})}}  onMouseLeave={()=>{this.setState({backgroundName:"white_background"})}}>
                            <div className={this.state.itemTextVisibility ? "itemText" : "itemTextHidden"}>About</div>
                            <img className= "aboutIcon" src={aboutIcon} alt="about icon"/>
                        </div>
                    </Link>
                    <div className={"Logo_Container " + (this.state.menuClicked ? "logo_container_clicked" : "")}
                         onClick={this.handleClick}
                         onMouseLeave={()=>{this.state.menuVisibility ? this.setState({backgroundName:"white_background"}):this.setState({backgroundName:"introduction"})}}>
                        <img className="logoK" src = {KLogo} alt="klogo"/>
                        <img className={this.state.spinState ? "logoCircleRotating" : "logoCircle"} src = {LogoCircle} alt={"rotating circle"}/>
                    </div>
                </div>

            </div>
        </div>
        )
    };
}

export {HomePage};