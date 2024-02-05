export class StreamingPlayer {
    amplifier: Amplifier;

    on() {
        console.log("Streaming player on");
    }
    off() {
        console.log("Streaming player off");
    }
    setSurroundSound() {
        console.log("Streaming player set surround sound");
    }
    setDvd() {
        console.log("Streaming player set dvd");
    }
    setVolume() {
        console.log("Streaming player set volume");
    }
    stop () {
        console.log("Streaming player stop");
    }
}

export class Tunner {
    amplifier: Amplifier;

    on() {
        console.log("Tuner on");
    }
    off() {
        console.log("Tuner off");
    }
    setFrequency() {
        console.log("Tuner set frequency");
    }
}

export class PopcornPopper {
    on() {
        console.log("Popcorn popper on");
    }
    off() {
        console.log("Popcorn popper off");
    }
    pop() {
        console.log("Popcorn popper pop");
    }
}

export class Projector {
    player: StreamingPlayer;

    on() {
        console.log("Projector on");
    }
    off() {
        console.log("Projector off");
    }
    wideScreenMode() {
        console.log("Projector wide screen mode");
    }
}

export class TheaterLights {

    on() {
        console.log("Lights on");
    }
    off() {
        console.log("Lights off");
    }
}


export class Amplifier {

    private _streamingPlayer: StreamingPlayer;

    on() {
        console.log("Amplifier on");
    }
    off() {
        console.log("Amplifier off");
    }
    setSurroundSound() {
        console.log("Amplifier set surround sound");
    }
    setDvd() {
        console.log("Amplifier set dvd");
    }
    setVolume(n: number) {
        console.log("Amplifier set volume");
    }
}

export class HomeTheaterFacade {
    private _amplifier: Amplifier;
    private _tuner: Tunner;
    private _projector: Projector;
    private _popcornPopper: PopcornPopper;
    private _streamingPlayer: StreamingPlayer;
    private _theaterLights: TheaterLights;
    constructor(
        amplifier: Amplifier,
        tuner: Tunner,
        projector: Projector,
        popcornPopper: PopcornPopper,
        streamingPlayer: StreamingPlayer,
        theaterLights: TheaterLights) {

        this._amplifier = amplifier;
        this._tuner = tuner;
        this._projector = projector;
        this._popcornPopper = popcornPopper;
        this._streamingPlayer = streamingPlayer;
        this._theaterLights = theaterLights;
        
    }

    watchMovie(movie: string) {
        console.log(`Get ready to watch ${movie}`);
        this._popcornPopper.on();
        this._popcornPopper.pop();
        this._theaterLights.on();
        this._projector.on();
        this._projector.wideScreenMode();
        this._amplifier.on();
        this._amplifier.setDvd();
        this._amplifier.setSurroundSound();
        this._amplifier.setVolume(5);
        this._streamingPlayer.on();
        this._streamingPlayer.setDvd();
    }

    endMovie() {
        console.log("Shutting movie down...");
        this._popcornPopper.off();
        this._theaterLights.off();
        this._projector.off();
        this._amplifier.off();
        this._streamingPlayer.stop();
        this._streamingPlayer.off();
    }
}
