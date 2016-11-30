var React = require('react');


var WeatherUpdate = ({reading, val, units, min, max, ticks, size}) =>{
  return (

              <canvas className="instrument" data-type="radial-gauge" data-value={reading}
                data-width={size}
                data-height={size}
                data-units={units}
                data-title={val}
                data-min-value={min}
                data-max-value={max}
                data-major-ticks={ticks}
                data-minor-ticks="2"
                data-stroke-ticks="true"
                data-highlights="[ {&quot;from&quot;: -50, &quot;to&quot;: 0, &quot;color&quot;: &quot;rgba(0,0, 255, .3)&quot;}, {&quot;from&quot;: 0, &quot;to&quot;: 50, &quot;color&quot;: &quot;rgba(255, 0, 0, .3)&quot;} ]"
                data-ticks-angle="225"
                data-start-angle="67.5"></canvas>


  );
}
module.exports = WeatherUpdate;

// <canvas className="instrument" data-type="radial-gauge" data-value={temp}
//   data-width="300"
//   data-height="300"
//   data-units="°C"
//   data-title="Temprature"
//   data-min-value="-50"
//   data-max-value="50"
//   data-major-ticks="[-50,-40,-30,-20,-10,0,10,20,30,40,50]"
//   data-minor-ticks="2"
//   data-stroke-ticks="true"
//   data-highlights="[ {&quot;from&quot;: -50, &quot;to&quot;: 0, &quot;color&quot;: &quot;rgba(0,0, 255, .3)&quot;}, {&quot;from&quot;: 0, &quot;to&quot;: 50, &quot;color&quot;: &quot;rgba(255, 0, 0, .3)&quot;} ]"
//   data-ticks-angle="225"
//   data-start-angle="67.5"></canvas>
