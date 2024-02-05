

// Home Theater example for the Facade pattern
import {
    Amplifier,
    Tunner,
    Projector,
    PopcornPopper,
    StreamingPlayer,
    TheaterLights,
    HomeTheaterFacade
} from "./Facade";

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



