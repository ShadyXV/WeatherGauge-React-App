var React = require('react');
var {Link} = require('react-router');

var Example = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">Example</h1>
      <p>Here's whats the weather like in</p>
      <ol>
        <li><Link to="/?Location=Kathmandu">Kathmandu,Nepal</Link></li>
      </ol>
      <ol>
        <li><Link to="/?Locaion=lousiana">Lousiana,USA</Link></li>
      </ol>
    </div>
  );
};

module.exports = Example;
