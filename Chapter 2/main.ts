import { WeatherData, CurrentConditionsDisplay } from "./Observer";

// Observer Pattern Example

const weatherData = new WeatherData();
const cd = new CurrentConditionsDisplay(weatherData);

// Simulate measurements
// The WeatherData object will notify all observers when measurements change
weatherData.setMeasurements(80, 65, 30.4); // Output: 80F degrees and 65% humidity
weatherData.setMeasurements(82, 70, 29.2); // Output: 82F degrees and 70% humidity