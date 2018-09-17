// Write your solution here!


const drivers = ["Milo", "Otis", "Garfield"]

function destructivelyRemoveFirstDriver(name){
drivers.shift(name)
}

function destructivelyAppendDriver(name){
drivers.push("Ralph")
}

function destructivelyRemoveLastDriver(){
  drivers.pop()
}

function destructivelyPrependDriver(name){
drivers.unshift("Bob")
}

function appendDriver(name){
  return [...drivers, name];
}

function prependDriver (name) {
  return [name, ...drivers];
}

function removeFirstDriver () {
  return drivers.slice(1);
}


function removeLastDriver () {
  return drivers.slice(0, drivers.length - 1);
}
