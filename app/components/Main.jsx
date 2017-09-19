'use strict';

var React = require('react');
var { Link } = require('react-router');
var Carousel = require('nuka-carousel');
var Nav = require('Nav');

var Main = React.createClass({
    mixins: [Carousel.ControllerMixin],
    render: function() {
    return (
        <div className="container" style={{padding:0}}>        
           <Carousel wrapAround={true} autoplay={true}>
                <img src="images/header-image-1.png"/>
                <img src="images/header-image-1.png"/>
                <img src="images/header-image-1.png"/>
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