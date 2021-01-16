import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default function About() {
    return (
        <div style = {{ color: `teal` }}>
            <Link to="/contact/">Contact</Link>
            <Header headerText="About Gatsby" />
            <Header headerText="A second header, just for fun." />
            {/* any vanilla JS goes in { } */}
            { React.createElement("p", null, "This is text in JS.") }
            <p>Oooookay, self-aggrandizing.</p>
        </div>
    );
}