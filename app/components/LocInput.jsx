var React = require('react');
//appid=c4e735ea8bd7e7b6dc8368c752517b2d of andrew
var Loc = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();

    var location = this.refs.location.value;

    if(location.length >0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render:function(){
    return (
      <form className="main-form" onSubmit={this.onFormSubmit}>
        <input type='search' placeholder='Search Weather By City' ref="location"/>
        <button className="button expanded hollow">Get Data</button>
    </form>
    );
  }
});

module.exports  = Loc;
