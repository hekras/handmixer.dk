const _greenbg = "#def1d7";
const _greenfg = "#155724";
const _redbg = "#f8d7da";
const _redfg = "#721c24";
const _grayfg = "#383d41";
const _graybg = "#e2e3e5";
const _bluefg = "#004085";
const _bluebg = "#cce5ff";
const number_of_particles = 1000;

var mouse = {
    x: 0,
    y: 0,
    dy: 0,
    dy: 0
};

var Stjerner = [];

function animateloop() {
    dc.clearRect(0, 0, width, height);

    dc.fillStyle = 'yellow';
    dc.beginPath();
    for (var i = 0; i < Stjerner.length; i++) {
        var s = Stjerner[i];
        dc.moveTo(s.xloc, s.yloc);
        dc.arc(s.xloc, s.yloc, s.radius, 0, 2 * Math.PI);

        s.xloc += s.xvelocity;
        s.yloc += s.yvelocity;

        if ((s.xloc > width) || (s.xloc < 0) || (s.yloc > height) || (s.yloc < 0)) {
            s.xloc = width / 2;
            s.yloc = height / 2;
        }

    }
    dc.fill();

}

function canvas_key_down(ev) {
    var key = ev.which || ev.keyCode;
    //console.log(key);
    switch (key) {
    }

}



/***********************************
// main - program starts here !!!!!!
************************************/

const canvas = document.getElementById("canvas");
const width = canvas.width;
const height = canvas.height;
const dc = canvas.getContext("2d");
console.log("size: " + width + ", " + height);
//canvas.style.visibility = "hidden";

var xcenter = width / 2;
var ycenter = height / 2;
for (var i = 0; i < number_of_particles; i++) {
    var angle = 2 * Math.PI * Math.random();
    var velocity = 7 * Math.random();
    var stjerne = {
        xloc: xcenter,
        yloc: ycenter,
        xvelocity: velocity * Math.sin(angle),
        yvelocity: velocity * Math.cos(angle),
        radius: 5 + 60 * Math.random(),
    };
    Stjerner[i] = stjerne;
}



window.setInterval(animateloop, 1000 / 60);

