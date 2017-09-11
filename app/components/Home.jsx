var React = require('react');

var Home = React.createClass({
    componentDidMount:function(){
        document.getElementById('home').scrollIntoView();
    },
    render: function() {
     return (
        <h1 className="home" id="home">Welcome to Quantum Civilization!</h1>
    )
    }
});

module.exports = Home;
