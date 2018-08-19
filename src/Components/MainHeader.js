import {Component} from "react";
import {Link} from "react-router-dom";
import menu from "../resources/icons/whiteMenu.svg";
import closeMenu from "../resources/icons/whiteCloseIcon.svg";
import React from "react";
import "../StyleSheets/Header.css"
import {MainPages} from "../Constants/MainPages";

class MainHeader extends Component {
    constructor() {
        super();
        this.state = {
            iconState : menu
        };

        this.changeIcon = this.changeIcon.bind(this);
    }

    changeIcon(){
        this.setState({
            iconState : this.state.iconState === menu ? closeMenu : menu
        });
        this.props.toggleMenu();
    }

    render() {
        return (
            <div className="header">
                {this.props.width < 800 ? <div>
                    <img className="menu" src={this.state.iconState}
                         onClick={this.changeIcon} alt="menu icon toggle"/>
                </div> : <div></div>}
                <Link to={process.env.PUBLIC_URL} style={{ textDecoration: 'none', color:'White'}}>
                    <h2>Kito Pham</h2>
                </Link>
                    {this.props.width > 800 ?
                        <div className="headerButton_Container">
                            {MainPages.map((page, index) => (
                                <Link
                                    key={index}
                                    className="headerButton"
                                    //onClick ={()=>{this.props.changePage(index)}}
                                    to={process.env.PUBLIC_URL + "/" + page.name}
                                >
                                    {page.name}
                                </Link>

                            ))}
                        </div>
                        :
                    <div></div>}
            </div>
        );
    }
}

export {MainHeader};