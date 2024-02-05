
import { 
    LightOnCommand, 
    LightOffCommand, 
    GarageDoorOpenCommand, 
    GarageDoorCloseCommand, 
    StereoOnWithCDCommand, 
    StereoOffCommand,
    RemoteControl,
    Light,
    GarageDoor,
    Stereo
} from "./Command";

// Command Pattern example

const remote = new RemoteControl();
const light = new Light();
const garageDoor = new GarageDoor();
const stereo = new Stereo();

remote.setCommand(0, new LightOnCommand(light), new LightOffCommand(light));
remote.buttonWasPressed(0);
remote.undoButtonWasPressed();
remote.setCommand(1, new GarageDoorOpenCommand(garageDoor), new GarageDoorCloseCommand(garageDoor));
remote.buttonWasPressed(1);
remote.setCommand(2, new StereoOnWithCDCommand(stereo), new StereoOffCommand(stereo));
remote.buttonWasPressed(2);
remote.buttonWasPressed(5);
