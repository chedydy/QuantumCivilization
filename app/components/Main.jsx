'use strict';

var React = require('react');
var { Link } = require('react-router');
var Carousel = require('nuka-carousel');

var Main = React.createClass({
    mixins: [Carousel.ControllerMixin],
    render: function() {
    return (
        <div className="container">
           <Carousel>
                <img src="images/QuantumCivilization.png"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2"/>
                <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3"/>
            </Carousel>
            {this.props.children}
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
        </div>
    )
    }
});

module.exports = Main;