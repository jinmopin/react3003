import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return (
        <footer id="footer">
            <div className="container">
                <div className="footer__inner">
                    <div>
                        <p>Let's create something new</p>
                        <h3>
                            Let's Get In<br />Touch
                        </h3>
                        <Link to="/contact" className="contact">
                            Contact Me
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;