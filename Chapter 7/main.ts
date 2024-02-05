

import {
    Amplifier,
    Tunner,
    Projector,
    PopcornPopper,
    StreamingPlayer,
    TheaterLights,
    HomeTheaterFacade
} from "./Facade";
import { MallardDuck, WildTurkey, TurkeyAdapter } from "./Adapter";

// Facade example
const homeTheater = new HomeTheaterFacade(
    new Amplifier(),
    new Tunner(),
    new Projector(),
    new PopcornPopper(),
    new StreamingPlayer(),
    new TheaterLights()
);
homeTheater.watchMovie("Rush");
homeTheater.endMovie();


console.log();
console.log("---------------------------------");
console.log();

// Adapter example
const duck = new MallardDuck();
const turkey = new WildTurkey();
const turkeyAdapter = new TurkeyAdapter(turkey);

duck.fly();
duck.quack();

turkeyAdapter.fly();
turkeyAdapter.quack();

