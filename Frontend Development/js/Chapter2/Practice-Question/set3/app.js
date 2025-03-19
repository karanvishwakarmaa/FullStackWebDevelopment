let quarter = prompt("Enter which quarter you can find");

switch (quarter) {
    case "1":
        alert("The month of January to March");
        break;
    case "2":
        alert("The month of April to June");
        break;
    case "3":
        alert("The month of July to September");
        break;
    case "4":
        alert("The month of October to December");
        break;
    default:
        alert("Invalid quarter");
}