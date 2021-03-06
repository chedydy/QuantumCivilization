var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');
var About = require('About');
var Home = require('Home');
var { Route, Router,Redirect, hashHistory } = require('react-router');

//Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles');

ReactDOM.render(
    <Router history={hashHistory}>
        <Route component={Main}>
            <Route path="about" component={About}/>
            <Route path="/" component={Home}/>
            <Route path="home" component={Home}/>
        </Route>
    </Router>,
    document.getElementById('app')
);
