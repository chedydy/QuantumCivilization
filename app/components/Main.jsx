var React = require('react');
var Home = require('Home');
var About = require('About');
var { Link } = require('react-router');

var Main = (props) => {
    return (
        <div className="container">
            <img src="images/QuantumCivilization.png" className="image" />
            <div className="row">
                <div className="columns medium-6 large-4 small-centered">
                    <div className="button-toolbar small expanded topright">
                        <div className="controls">
                            <Link className="button hollow" to="/home">Home</Link>
                            <Link className="button hollow" to="/about">About</Link>
                        </div>
                    </div>
                </div>
            </div>
            {props.children}
        </div>
    )
};

module.exports = Main;