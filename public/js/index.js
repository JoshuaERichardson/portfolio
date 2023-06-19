import { THREEinit } from "./scrollableProjects.js";

// onClick listener for modal transition
const divTab1 = document.getElementById("tab-1-1");
const divTab2 = document.getElementById("tab-2-2");
const divTab3 = document.getElementById("tab-3-3");

const divModal1 = document.getElementById("chip-modal1");
const divModal2 = document.getElementById("chip-modal2");
const divModal3 = document.getElementById("chip-modal3");
var parentDiv = divModal1.parentNode;

// On document load, remove divModal2:
document.getElementById("chip-modal2").remove();
document.getElementById("chip-modal3").remove();


var activeTab = 1;
divTab1.addEventListener("click", function (e) {
  if (activeTab == 1) {
    return;
  } else if (activeTab == 2) {
    parentDiv.replaceChild(divModal1, divModal2);
  } else {
    parentDiv.replaceChild(divModal1, divModal3);
    showContainers();
  }
  activeTab = 1;
});

divTab2.addEventListener("click", function (e) {
  if (activeTab == 2) {
    return;
  } else if (activeTab == 1) {
    parentDiv.replaceChild(divModal2, divModal1);
  } else {
    parentDiv.replaceChild(divModal2, divModal3);
    showContainers();
  }
  activeTab = 2;
});

divTab3.addEventListener("click", function (e) {
  if (activeTab == 3) {
    return;
  } else if (activeTab == 1) {
    parentDiv.replaceChild(divModal3, divModal1);
    // THREEinit();
    hideContainers();
  } else {
    parentDiv.replaceChild(divModal3, divModal2);
    // THREEinit();
    hideContainers();
  }
  activeTab = 3;

});

// Hide the containers when user selects tab 3:
function hideContainers(){
  const chip = document.querySelector(".chip");
  // Turn chip display to none:
  const bg = document.querySelector("#bg");
  chip.style.display = "none";
  bg.style.display = "block";
}

function showContainers(){
  const chip = document.querySelector(".chip");
  // Turn chip display to none:
  chip.style.display = "block";
  const bg = document.querySelector("#bg");
  bg.style.display= "none";
}



// // 3js stuff:
// import * as THREE from '../../three/build/three.module.js';

// const scene = new THREE.Scene();
// scene.background = new THREE.Color(0xefd1b5);
// scene.fog = new THREE.FogExp2(0xefd1b5, 0.0025);

// // Background:
// // Twinkling stars:
// const starsGeometry = new THREE.Geometry();



