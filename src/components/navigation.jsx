import React from "react";
import { Link, withRouter } from "react-router-dom"
import "../styles.css"


function Navigation(props) {
    return (
        <div className="frame">
            <h1 className="frame__title">spencer hamilton</h1>
            <div className="frame__links">
                <a className="frame__link"  href="/resume">
                    resume
                </a>
                <a className="frame__link" href="/home">
                    home
                </a>
                <a className="frame__link" href="/procreate">
                    procreate
                </a>
                <a className="frame__link" href="https://github.com/Shamilton05">
                    github
                </a>
            </div>
        </div>
    )
}

export default Navigation;