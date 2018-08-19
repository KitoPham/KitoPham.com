import {Component} from "react/lib/ReactBaseClasses";
import {Link} from "react-router-dom";
import React from "react";
import "../StyleSheets/ExpandedMenu.css"
import {MainPages} from "../Constants/MainPages";

class ExpandedMenu extends Component {

    render() {
        return(
            <div className="expandedMenu">
                {MainPages.map((page, index) => (
                    <Link
                        key={index}
                        className="expanded_menu_item"
                        to={process.env.PUBLIC_URL + "/" + page.name}
                    >
                        {page.name}
                    </Link>

                ))}
            </div>
        )
    }

}

export {ExpandedMenu}