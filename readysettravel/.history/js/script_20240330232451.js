function invert(){
    document.getElementById("invertColorLogo").style.filter="invert(100%)";
    }



let tourOne = {
    name: "Mountain Hiking Tour",
    duration: "4 days | 10 stops",
    cost: "$1500"
}

let tourTwo = {
    name: "Snorkel the Barrier Reef Tour",
    duration: "2 days | 2 stops",
    cost: "$1,000"
}

let tourThree = {
    name: "Tour the Pyramids on Camelback",
    duration: "2 days | 2 stops",
    cost: "$2,000"
}

document.getElementById("nameOne").innerHTML = tourOne.name;
document.getElementById("durationOne").innerHTML = tourOne.duration;
document.getElementById("costOne").innerHTML = tourOne.cost;

document.getElementById("nameTwo").innerHTML = tourTwo.name;
document.getElementById("durationTwo").innerHTML = tourTwo.duration;
document.getElementById("costTwo").innerHTML = tourTwo.cost;

document.getElementById("nameThree").innerHTML = tourThree.name;
document.getElementById("durationThree").innerHTML = tourThree.duration;
document.getElementById("costThree").innerHTML = tourThree.cost;