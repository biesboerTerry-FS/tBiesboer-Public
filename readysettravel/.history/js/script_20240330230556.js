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

document.getElementById("name").innerHTML = tourOne.name;
document.getElementById("duration").innerHTML = tourOne.duration;
document.getElementById("cost").innerHTML = tourOne.cost;

document.getElementById("name").innerHTML = tourTwo.name;
document.getElementById("duration").innerHTML = tourTwo.duration;
document.getElementById("cost").innerHTML = tourTwo.cost;

document.getElementById("name").innerHTML = tourThree.name;
document.getElementById("duration").innerHTML = tourThree.duration;
document.getElementById("cost").innerHTML = tourThree.cost;