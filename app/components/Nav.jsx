var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render:function(){
    return(
          <ul className="menu expanded nav-bar">
            <li className="menu-text">WeatherGuage</li>
            <li>
              <IndexLink to='/' activeClassName='active' activeStyle={{fontWeight:'bold',borderLeft: '1px solid rgb(33, 153, 232)',borderRight: '1px solid rgb(33, 153, 232)',marginRight:'20px'}}>Instruments</IndexLink>
            </li>
            <li>
              About
             {  //<Link to='/about' activeClassName='active' activeStyle={{fontWeight:'bold',borderLeft: '1px solid rgb(33, 153, 232)',borderRight: '1px solid rgb(33, 153, 232)'}}>About</Link>
         }
            </li>
            <li>
              Example
            {//<Link to='/example' activeClassName='active' activeStyle={{fontWeight:'bold',borderLeft: '1px solid rgb(33, 153, 232)',borderRight: '1px solid rgb(33, 153, 232)'}}>Example</Link>
        }
            </li>
          </ul>
    );
  }
})


module.exports = Nav;
