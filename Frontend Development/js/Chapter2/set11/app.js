let color = "green";

switch(color) {
    case "red":
        console.log("Stop");
        break;
    case "green":
        console.log("Go");
        prompt("Something went wrong")
        break;
    case "yellow":
        console.log("Warning");
        break;
    default:
        console.log("Unknown color");
}
