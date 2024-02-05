export class Light {
    private _isOn: boolean;
    on(): void {
        this._isOn = true;
        console.log("Light is on");
    }
    off(): void {
        this._isOn = false;
        console.log("Light is off");
    }
}

class OutdoorLight {
    on(): void {
        console.log("Outdoor light is on");
    }
    off(): void {
        console.log("Outdoor light is off");
    }
}

export class Stereo {
    on(): void {
        console.log("Stereo is on");
    }
    off(): void {
        console.log("Stereo is off");
    }

    setVolume(volume: number): void {
        console.log(`Stereo volume set to ${volume}`);
    }

    setCD(): void {
        console.log("Stereo is now playing CD");
    }

    setDVD(): void {
        console.log("Stereo is now playing DVD");
    }

    setRadio(): void {
        console.log("Stereo is now playing radio");
    }
}

export class GarageDoor {
    up(): void {
        console.log("Garage door is up");
    }
    down(): void {
        console.log("Garage door is down");
    }
    stop(): void {
        console.log("Garage door is stopped");
    }
    lightOn(): void {
        console.log("Garage door light is on");
    }
    lightOff(): void {
        console.log("Garage door light is off");
    }
}

interface Command {
    execute(): void;
    undo(): void;
}

export class LightOnCommand implements Command {
    private _light: Light;
    constructor (light: Light) {
        this._light = light;
    }

    execute(): void {
        this._light.on();
    }

    undo(): void {
        this._light.off();
    }
}

export class LightOffCommand implements Command {
    private _light: Light;
    constructor (light: Light) {
        this._light = light;
    }

    execute(): void {
        this._light.off();
    }

    undo(): void {
        this._light.on();
    }
}

export class GarageDoorOpenCommand implements Command {
    private _garageDoor: GarageDoor;
    constructor (garageDoor: any) {
        this._garageDoor = garageDoor;
    }

    execute(): void {
        this._garageDoor.up();
    }

    undo(): void {
        this._garageDoor.down();
    }
}

export class GarageDoorCloseCommand implements Command {
    private _garageDoor: GarageDoor;
    constructor (garageDoor: any) {
        this._garageDoor = garageDoor;
    }
    execute(): void {
        this._garageDoor.down();
    }
    undo(): void {
        this._garageDoor.up();
    }
}

export class StereoOnWithCDCommand implements Command {
    private _stereo: Stereo;
    constructor (stereo: Stereo) {
        this._stereo = stereo;
    }
    execute(): void {
        this._stereo.on();
        this._stereo.setCD();
        this._stereo.setVolume(11);
    }

    undo(): void {
        this._stereo.off();
    }
}

export class StereoOffCommand implements Command {
    private _stereo: Stereo;
    constructor (stereo: Stereo) {
        this._stereo = stereo;
    }
    execute(): void {
        this._stereo.off();
    }
    undo(): void {
        this._stereo.on();
        this._stereo.setCD();
        this._stereo.setVolume(11);
    }
}

class NoCommand implements Command {
    execute(): void {
        console.log("No command");
    }

    undo(): void {
        console.log("No command");
    }
}

export class RemoteControl {
    private slotsOn: Command[] = [];
    private slotsOff: Command[] = [];
    private undoCommand: Command;

    constructor() {
        for (let i = 0; i < 7; i++) {
            this.slotsOn[i] = new NoCommand();
            this.slotsOff[i] = new NoCommand();
        }
        this.undoCommand = new NoCommand();
    }

    setCommand(slot: number, commandOn: Command, commandOff: Command): void {
        this.slotsOn[slot] = commandOn;
        this.slotsOff[slot] = commandOff;
    }

    buttonWasPressed(slot: number): void {
        this.slotsOn[slot].execute();
        this.undoCommand = this.slotsOn[slot];
    }

    undoButtonWasPressed(): void {
        this.undoCommand.undo();
        this.undoCommand = new NoCommand();
    }
}