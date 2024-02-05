interface Observer {
    update(): void;
}

interface Subject {
    attach(observer: Observer): void;
    detach(observer: Observer): void;
    notify(): void;
}

interface DisplayElement {
    display(): void;
}

abstract class Observable implements Subject {
    private _observers: Observer[] = [];
    attach(observer: Observer): void {
        const isExist = this._observers.includes(observer);
        if (isExist) {
            return;
        }
        this._observers.push(observer);
    }

    detach(observer: Observer): void {
        const index = this._observers.indexOf(observer);
        if (index === -1) {
            return;
        }
        this._observers.splice(index, 1);
    }

    notify(): void {
        for (const observer of this._observers) {
            observer.update();
        }
    }
}

export class WeatherData extends Observable {
    private _temperature: number = 0;
    private _humidity: number = 0;
    private _pressure: number = 0;

    get temperature(): number {
        return this._temperature;
    }

    get humidity(): number {
        return this._humidity;
    }

    get pressure(): number {
        return this._pressure;
    }

    measurementsChanged(): void {
        this.notify();
    }

    setMeasurements(temp: number, humidity: number, pressure: number) {
        this._temperature = temp;
        this._humidity = humidity;
        this._pressure = pressure;
        this.measurementsChanged();
    }
}

export class CurrentConditionsDisplay implements Observer, DisplayElement {
    private _weatherData: WeatherData;

    constructor(weatherData: WeatherData) {
        this._weatherData = weatherData;
        weatherData.attach(this);
    }

    update(): void {
        this.display();
    }

    display(): void {
        console.log(`Current conditions: ${this._weatherData.temperature}F degrees and ${this._weatherData.humidity}% humidity`);
    }
}