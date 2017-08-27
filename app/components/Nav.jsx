var React = require('react');
var { Link } = require('react-router');

var Nav = () => {
    return (
        <div>
            <li>
                <Link className="button hollow" to="/about">About</Link>
            </li>
        </div>
    );
};

module.exports = Nav;