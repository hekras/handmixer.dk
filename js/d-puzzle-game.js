const _greenbg = "#def1d7";
const _greenfg = "#155724";
const _redbg = "#f8d7da";
const _redfg = "#721c24";
const _grayfg = "#383d41";
const _graybg = "#e2e3e5";
const _bluefg = "#004085";
const _bluebg = "#cce5ff";
const _select = "s";
const _cell = "c";

var blank_cell = 0;
var cell = [];
var model = [];
var img = [];
var big_image = new Image();
var randomize = 0;
big_image.src = "./images/puzzle/puzzle-0001.png";

// init gui
function init_gui() {


    for (var j = 0; j < 16; j++) {
        var xo = 200 * (j % 4);
        var yo = 200 * Math.floor(j / 4);
        var el = document.createElement("canvas");
        el.id = _cell + j;
        el.model = j;
        el.style.border = "1px solid black";
        el.style.borderRadius = "5px";
        el.width = 200;
        el.height = 200;
        el.style.width = "200px";
        el.style.height = "200px";
        el.style.left = xo + "px";
        el.style.top = yo + "px";
        el.style.position = "absolute";
        el.style.cursor = "pointer";
        document.getElementById("puzzle").appendChild(el);
        el.getContext("2d").drawImage(big_image, 0, 0);
        cell[j] = el;
        model[j] = j;
        el.addEventListener("click", function () {
            var nr = this.model;
            var x = nr % 4;
            var to_nr = -1;
            if ((x < 3) && (model[nr + 1] === blank_cell)) {
                to_nr = nr + 1;
            }
            else if ((x > 0) && (model[nr - 1] === blank_cell)) {
                to_nr = nr - 1;
            }

            var y = Math.floor(nr / 4);
            if ((y < 3) && (model[nr + 4] === blank_cell)) {
                to_nr = nr + 4;
            }
            else if ((y > 0) && (model[nr - 4] === blank_cell)) {
                to_nr = nr - 4;
            }

            if (to_nr > -1) {
                var m = model[nr];
                model[nr] = model[to_nr];
                model[to_nr] = m;

                for (var i = 0; i < 16; i++) {
                    var j = model[i];
                    var xo = 200 * (i % 4);
                    var yo = 200 * Math.floor(i / 4);
                    cell[j].style.left = xo + "px";
                    cell[j].style.top = yo + "px";
                    cell[j].model = i;
                }
                localStorage.setItem("puzzle", JSON.stringify(model));
            }

        });
    }

    var savedModel = localStorage.getItem("puzzle");
    if (savedModel != null) {
        model = JSON.parse(savedModel);
        for (var i = 0; i < 16; i++) {
            var j = model[i];
            var xo = 200 * (i % 4);
            var yo = 200 * Math.floor(i / 4);
            cell[j].style.left = xo + "px";
            cell[j].style.top = yo + "px";
            cell[j].model = i;
        }
    }

    document.getElementById(_cell + 15).style.background = "#000";

    var el = document.createElement("div");
    el.style.border = "4px solid black";
    el.style.borderRadius = "5px";
    el.style.width = "178px";
    el.style.height = "60px";
    el.style.left = "18px";
    el.style.top = "820px";
    el.style.position = "absolute";
    el.style.cursor = "pointer";
    el.style.background = _bluebg;
    el.style.color = _bluefg;
    el.style.fontSize = "30px";
    el.innerHTML = '<div class="center">Fix</div>';
    document.getElementById("puzzle").appendChild(el);
    el.addEventListener("click", function () {
        for (var i = 0; i < 16; i++) {
            model[i] = i;
            cell[i].model = i;
            var xo = 200 * (i % 4);
            var yo = 200 * Math.floor(i / 4);
            cell[i].style.left = xo + "px";
            cell[i].style.top = yo + "px";
        }
        localStorage.setItem("puzzle", JSON.stringify(model));
    });

    var el = document.createElement("div");
    el.style.border = "4px solid black";
    el.style.borderRadius = "5px";
    el.style.width = "178px";
    el.style.height = "60px";
    el.style.left = "220px";
    el.style.top = "820px";
    el.style.position = "absolute";
    el.style.cursor = "pointer";
    el.style.background = _bluebg;
    el.style.color = _bluefg;
    el.style.fontSize = "30px";
    el.innerHTML = '<div class="center">Mix</div>';
    document.getElementById("puzzle").appendChild(el);
    el.addEventListener("click", function () {
        randomize = 100;
    });
}

function animateloop() {

    if (randomize > 0) {
        var nr = Math.floor(16 * Math.random());

        var x = nr % 4;
        var to_nr = -1;
        if ((x < 3) && (model[nr + 1] === blank_cell)) {
            to_nr = nr + 1;
        }
        else if ((x > 0) && (model[nr - 1] === blank_cell)) {
            to_nr = nr - 1;
        }

        var y = Math.floor(nr / 4);
        if ((y < 3) && (model[nr + 4] === blank_cell)) {
            to_nr = nr + 4;
        }
        else if ((y > 0) && (model[nr - 4] === blank_cell)) {
            to_nr = nr - 4;
        }

        if (to_nr > -1) {
            var m = model[nr];
            model[nr] = model[to_nr];
            model[to_nr] = m;

            for (var i = 0; i < 16; i++) {
                var j = model[i];
                var xo = 200 * (i % 4);
                var yo = 200 * Math.floor(i / 4);
                cell[j].style.left = xo + "px";
                cell[j].style.top = yo + "px";
                cell[j].model = i;
            }
            localStorage.setItem("puzzle", JSON.stringify(model));
            randomize--;
        }
    }


    for (var i = 0; i < 16; i++) {
        var j = model[i];
        var xo = 200 * (j % 4);
        var yo = 200 * Math.floor(j / 4);
        var dc = cell[j].getContext("2d");
        if (j != 0) {
            dc.save();
            dc.drawImage(big_image, -xo, -yo);
            dc.restore();
        }
        else {
            dc.fillStyle = "white";
            dc.fillRect(0, 0, 200, 200);
        }
    }
}


/***********************************
// main - program starts here !!!!!!
************************************/
init_gui();

window.setInterval(animateloop, 1000 / 60);

