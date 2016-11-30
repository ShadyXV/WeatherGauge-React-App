var React = require('react');

 var About =(props) => {
   return(
     <div>
       <h1 className="text-center page-title">About</h1>
       <p>
         This is a Weather App build on React as on The Complete React Web App Developer Course
       </p>
       <p>Here are some of the tools i've used</p>
       <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - The JS Framework used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - Provides weather data by city name.
        </li>
       </ul>
     </div>
   );
 };

module.exports = About;
