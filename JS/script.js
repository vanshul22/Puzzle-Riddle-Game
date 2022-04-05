/*
Website Name - Puzzle-Riddle-Game
Name : Vanshul Kesharwani
Date : 04/04/2022
Version : 3.2.1
Email : vkvanshulkesharwani54@gmail.com
Description : This is a Web app for playing puzzle game. We can play game of puzzle. Works without reloading page with JavaScript.
*/

// Grabbing imgBox.
const imgBox = document.querySelector(".imgBox");

// Grabbing all boxes from class name.
const colorBoxes = document.getElementsByClassName("colorBox");

// This Event Listener only for draggable element like here imgBox.
imgBox.addEventListener("dragstart", dragStart);
imgBox.addEventListener("dragend", dragEnd);

// Function for Drag Start of imgBox.
function dragStart(e) {
    e.target.className += " hold";
    setTimeout(() => {
        e.target.className = "hide";
    }, 0);
};

// Function for Drag End of imgBox. 
function dragEnd(e) {
    e.target.className = "imgBox";
};

// For loop for all colorBoxes.
for (let colorBox of colorBoxes) {
    colorBox.addEventListener("dragover", (e) => {
        // To drop any element we have to prevent default settings. by default we cant drop any thing in any element.
        e.preventDefault();
    });
    colorBox.addEventListener("dragenter", (e) => {
        // While entering we will change border style and bgcolor.
        e.target.className += " dashed";
    });
    colorBox.addEventListener("dragleave", (e) => {
        // Removing extra dashed classes from here. We need clean code and with this when we remove element it will back to normal.
        e.target.className = "colorBox";
    });
    colorBox.addEventListener("drop", (e) => {
        // Adding element to over element.
        e.target.append(imgBox);
    });
};