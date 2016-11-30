var React = require('react');
var ReactDOM = require('react-dom');
var Loc = require('Loc');
var WeatherUpdate = require('WeatherUpdate');
var openweathermap = require('Openweathermap');
var ErrorModal = require('ErrorModal');





var Weather = React.createClass({
  getInitialState:function(){
    return {
      isLoading:false,
    }
  },
  handleSearch: function(location){

    var that = this;

    this.setState({
      isLoading:true,
      errorMessage:undefined
    });

    openweathermap.getTemp(location).then(function(data){
      that.setState({
        location:location,
        temp:data.main.temp,
        pressure: data.main.pressure,
        humidity: data.main.humidity,
        temp_min: data.main.temp_min,
        temp_max: data.main.temp_max,
        wind_speed:data.wind.speed,
        visibility:data.visibility,
        sunrise:data.sys.sunrise,
        sunset:data.sys.sunset,
        isLoading:false
      });
    },function(e){
      that.setState({
        isLoading:false,
        errorMessage:e.message
      });
    });
  },
   render:function(){
     var {isLoading,temp,location,errorMessage,pressure,humidity,temp_min,temp_max, wind_speed, visibility, sunrise, sunset}=this.state;

     function renderMessage (){
       if(isLoading){
         return <h3 className="text-center">fetching Weather...</h3>
       }else if (temp && location){
        return  (<div>
          <WeatherUpdate reading={temp}/>
          <WeatherUpdate reading={pressure}/>
          <WeatherUpdate reading={wind_speed}/>
          </div>
        )
       }
     };

     function renderError() {
       if (typeof errorMessage === 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    };

     return(
       <div>
          <Loc onSearch={this.handleSearch}/>
          <WeatherUpdate reading={temp} val="Temperature" units="°C" min= '-50' max='50' ticks='[-50,-40,-30,-20,-10,0,10,20,30,40,50]' size='300'/>
          <WeatherUpdate reading={pressure} val="Pressure" units="Pa" min='300' max='3000' ticks='[300,600,900,1200,1500,1800,2100,2400,2700,3000]' size='400]'/>
          <WeatherUpdate reading={wind_speed} val="Wind speed" units="Km/hr" min='0' max='50'ticks='[0,5,10,15,20,25,30,35,40,45,50]' size='300'/>
       </div>
     );
   }
 });

module.exports = Weather;

// <WeatherUpdate temp={temp} location={location} pressure={pressure} humidity={humidity} max={temp_max} min={temp_min} windSpeed={wind_speed} visibility={visibility} sunrise={sunrise} sunset={sunset}/>
