const BOX1 = document.querySelectorAll(".container .box")[0];
const BOX2 = document.querySelectorAll(".container .box")[1];
const BOX3 = document.querySelectorAll(".container .box")[2];

const BOXES = {
  0: {
    orientation: true, // Go upwards
  },
  1: {
    orientation: true, // Go upwards
  },
  2: {
    orientation: true, // Go upwards
  },
};

const assignRandomDistanceAndDuration = (box) => {
  // Distance
  if (BOXES[box.id].orientation) {
    box.style.transform = `translateY(${Math.floor(Math.random() * 100)}%)`;
  } else {
    box.style.transform = `translateY(-${Math.floor(Math.random() * 100)}%)`;
  }
  BOXES[box.id].orientation = !BOXES[box.id].orientation;
  let tempDelay = Math.floor(Math.random() * 2000);
  box.style.transitionDuration = `${tempDelay}ms`;
  setTimeout(() => {
    assignRandomDistanceAndDuration(box);
  }, tempDelay);
};

assignRandomDistanceAndDuration(BOX1);
assignRandomDistanceAndDuration(BOX2);
assignRandomDistanceAndDuration(BOX3);
