const _greenbg = "#def1d7";
const _greenfg = "#155724";
const _redbg = "#f8d7da";
const _redfg = "#721c24";
const _grayfg = "#383d41";
const _graybg = "#e2e3e5";
const _bluefg = "#004085";
const _bluebg = "#cce5ff";

var mouse = {
    x: 0,
    y: 0,
    dy: 0,
    dy: 0
};

var library = [];
var sequence = [];
var grid = {
    visible: true,
    fill: false,
    ddt: 20, // grid size in pixels
    name: "28261.0182",
    dirty: false,
    refresh_timer: 0,
};

function animateloop() {
    dc.clearRect(0, 0, width, height);

    if (grid.visible) {
        dc.strokeStyle = "gray";
        dc.lineWidth = 1;
        dc.beginPath();
        var n = width / grid.ddt;
        var i0 = 0.5;
        for (var i = 0; i < n; i++) {
            var p = i0 + grid.ddt * i;
            dc.moveTo(p, 0);
            dc.lineTo(p, height);
        }
        var n = height / grid.ddt;
        for (var i = 0; i < n; i++) {
            var p = i0 + grid.ddt * i;
            dc.moveTo(0, p);
            dc.lineTo(width, p);
        }
        dc.stroke();

        dc.strokeStyle = "red";
        dc.lineWidth = 1;
        dc.beginPath();
        var n = width / grid.ddt;
        var i0 = 0.5;
        for (var i = 0; i < n; i += 5) {
            var p = i0 + grid.ddt * i;
            dc.moveTo(p, 0);
            dc.lineTo(p, height);
        }
        var n = height / grid.ddt;
        for (var i = 0; i < n; i += 5) {
            var p = i0 + grid.ddt * i;
            dc.moveTo(0, p);
            dc.lineTo(width, p);
        }
        dc.stroke();

        dc.strokeStyle = "pink";
        dc.lineWidth = 1;
        dc.beginPath();
        var n = width / grid.ddt;
        var i0 = 0.5;
        var p = i0 + grid.ddt * n / 2;
        dc.moveTo(p, 0);
        dc.lineTo(p, height);
        var n = height / grid.ddt;
        var p = i0 + grid.ddt * n / 2;
        dc.moveTo(0, p);
        dc.lineTo(width, p);
        dc.stroke();
    }

    dc.fillStyle = dc.strokeStyle = "green";
    dc.lineWidth = 5;
    dc.beginPath();
    for (var i = 0; i < sequence.length; i++) {
        var px = grid.ddt * (sequence[i].x + 40);
        var py = grid.ddt * (sequence[i].y + 25);
        if (sequence[i].command === 'moveTo') {
            dc.moveTo(px, py);
        }
        else if (sequence[i].command === 'lineTo') {
            dc.lineTo(px, py);
        }
    }
    if (grid.fill) {
        dc.fill();
    }
    else {
        dc.stroke();
    }

    mouse.dx = Math.floor((mouse.x + grid.ddt / 2) / grid.ddt) - 40;
    mouse.dy = Math.floor((mouse.y + grid.ddt / 2) / grid.ddt) - 25;
    var px = grid.ddt * (mouse.dx + 40);
    var py = grid.ddt * (mouse.dy + 25);
    dc.fillStyle = "yellow";
    dc.beginPath();
    dc.arc(px, py, 10, 0, 6.28, false);
    dc.fill();
    document.getElementById('mouse-pos').innerText = mouse.dx + ', ' + mouse.dy;

    if (grid.refresh_timer > 0) {
        grid.refresh_timer--;
        if (grid.refresh_timer === 0) {
            //console.log("bingo");
            click_dbase();
        }
    }

}

function click_obj_canvas(ev) {
    mouse.x = ev.offsetX;
    mouse.y = ev.offsetY;
}

function canvas_mouse_move(ev) {
    mouse.x = ev.offsetX;
    mouse.y = ev.offsetY;
};

function canvas_key_down(ev) {
    var key = ev.which || ev.keyCode;
    //console.log(key);
    switch (key) {
        case 50: // 2
            if (sequence.length === 0) {
                sequence[sequence.length] = { command: 'moveTo', x: mouse.dx, y: mouse.dy };
            }
            else {
                sequence[sequence.length] = { command: 'lineTo', x: mouse.dx, y: mouse.dy };
            }
            grid.dirty = true;
            break;
        case 49: // 1
            sequence[sequence.length] = { command: 'moveTo', x: mouse.dx, y: mouse.dy };
            grid.dirty = true;
            break;
        case 51: // 3
            grid.visible = !grid.visible;
            break;
        case 53: // 5
            break;
        case 54: // 6
            grid.fill = !grid.fill;
            break;
        case 55: // 7
            updateExport();
            var copyText = document.getElementById('export');
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            break;
        case 56: //8
            var copyText = document.getElementById('export');
            copyText.value = exportSVGseq(sequence, 0, sequence.length - 1);
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            //updateExport();
            break;
        case 57: //9
            var copyText = document.getElementById('export');
            copyText.value = JSON.stringify(sequence);
            copyText.select();
            copyText.setSelectionRange(0, 99999);
            document.execCommand("copy");
            //updateExport();
            break;
        case 48: //0
            sequence = [];
            grid.dirty = false;
            break;
        case 39: // ->
            for (var i = 0; i < sequence.length; i++) {
                sequence[i].x++;
                grid.dirty = true;
            }
            break;
        case 37: // <-
            for (var i = 0; i < sequence.length; i++) {
                sequence[i].x--;
                grid.dirty = true;
            }
            break;
        case 38: // up
            for (var i = 0; i < sequence.length; i++) {
                sequence[i].y++;
                grid.dirty = true;
            }
            break;
        case 40: // down
            for (var i = 0; i < sequence.length; i++) {
                sequence[i].y--;
                grid.dirty = true;
            }
            break;
        case 8: // backspace
            if (sequence.length > 0) {
                sequence = sequence.slice(0, sequence.length - 1);
                grid.dirty = true;
            }
            break;
    }
    updateExport();

}


function exportSVGseq(seq, start, stop) {
    var text = "";
    var svgStart = "<svg viewBox=\"-50 -30 100 60\">";
    var polyStart = "<path fill=\"none\" stroke=\"white\" stroke-width=\"0.5\" d=\"";
    var polyEnd = "\" />";
    var svgEnd = "</svg>";
    var points = "";
    for (var i = start; i < (stop + 1); i++) {
        //console.log(JSON.stringify(seq[i]));
        if (seq[i].command === 'moveTo') {
            points += 'M' + seq[i].x + ' ' + seq[i].y + ' ';
        }
        else if (seq[i].command === 'lineTo') {
            points += 'L' + seq[i].x + ' ' + seq[i].y + ' ';
        }
    }
    text += svgStart + polyStart + points + polyEnd + svgEnd;
    return text;
}

function updateExport() {
    var text = "";
    for (var i = 0; i < sequence.length; i++) {
        text += sequence[i].command + '(' + sequence[i].x + ',' + sequence[i].y + ');\r\n';
    }
    document.getElementById('export').value = text;
}

function click_delete_from_dbase() {
    var els = document.getElementById("panel-dbase-files").children;
    var names = '';
    var first = true;
    for (var i = 0; i < els.length; i++) {
        if (els[i].style.background !== 'gray') {
            if (first) {
                first = false;
            }
            else {
                names += ','
            }
            names += "'" + els[i].costum + "'";
        }
    }

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var seq = JSON.parse(this.responseText);
            sequence = [];
            var p = 0;
            for (var i = 0; i < seq.length; i++) {
                sequence[p++] = { command: seq[i].command, x: Number(seq[i].x), y: Number(seq[i].y) };
                //console.log(sequence[seq[i].step]);

            }
            grid.refresh_timer = 50;
        }
    };
    //console.log("/controllers/load_invaders.php?name=" + names);
    xmlhttp.open("GET", "/controllers/delete_invaders.php?name=" + names, true);
    xmlhttp.send();
}

function click_load_from_dbase() {
    var els = document.getElementById("panel-dbase-files").children;
    var names = '';
    var first = true;
    for (var i = 0; i < els.length; i++) {
        if (els[i].style.background !== 'gray') {
            if (first) {
                first = false;
            }
            else {
                names += ','
            }
            names += "'" + els[i].costum + "'";
        }
    }

    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var seq = JSON.parse(this.responseText);
            sequence = [];
            var p = 0;
            for (var i = 0; i < seq.length; i++) {
                sequence[p++] = { command: seq[i].command, x: Number(seq[i].x), y: Number(seq[i].y) };
                //console.log(sequence[seq[i].step]);

            }
            updateExport();
            click_editor();
        }
    };
    //console.log("/controllers/load_invaders.php?name=" + names);
    xmlhttp.open("GET", "/controllers/load_invaders.php?name=" + names, true);
    xmlhttp.send();
}


function saveToDBase() {
    if (grid.dirty) {
        grid.dirty = false;
        xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                //console.log("Timer set");
                grid.refresh_timer = 50;
            }
        };

        d = new Date();
        grid.name = d.getFullYear() + "-" + ("0" + (d.getMonth() + 1)).slice(-2) + "-" + ("0" + d.getDate()).slice(-2) + " " +
            ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2) + ":" + ("0" + d.getSeconds()).slice(-2);
        //console.log(grid.name + ': ' + JSON.stringify(sequence));
        xmlhttp.open("GET", "/controllers/save_invader.php?name=" + grid.name + "&steps=" + sequence.length + "&data=" + JSON.stringify(sequence), true);
        xmlhttp.send();
    }
}

function click_save_to_dbase() {
    saveToDBase(); 0
}

function getNames() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("name-list-ajax-response").innerHTML = this.responseText;
        }
    };
    xmlhttp.open("GET", "/controllers/load_all_invaders.php", true);
    xmlhttp.send();
}

function click_dbase_refresh() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var seq = JSON.parse(this.responseText);
            document.getElementById('panel-dbase-files').innerHTML = '';
            var left = 10;
            var top = 10;
            var dx = 320;
            var dy = 210;
            var savename = "empty";
            var el = null;
            var starti, endi;
            starti = endi = 0;
            for (var i = 0; i < seq.length; i++) {
                if (savename != seq[i].savename) {
                    if (el != null) {
                        //console.log(savename + '----------------');
                        el.innerHTML = exportSVGseq(seq, starti, endi);
                    }
                    starti = endi = i;
                    savename = seq[i].savename;
                    var el = document.createElement("div");
                    //el.style.border = "5px solid #b8daff";
                    el.costum = savename;
                    el.style.borderRadius = "5px";
                    el.style.width = "310px";
                    el.style.height = "200px";
                    el.style.left = left + "px";
                    el.style.top = top + "px";
                    el.style.position = "absolute";
                    el.style.cursor = "pointer";
                    el.style.background = "gray";
                    //el.innerHTML = '<div class="center">New</div>';
                    document.getElementById("panel-dbase-files").appendChild(el);
                    el.addEventListener("click", function () {
                        if (this.style.background === 'gray') {
                            this.style.background = "green";
                            //console.log(this.costum + '----------------');
                        }
                        else {
                            this.style.background = "gray";
                        }
                    });

                    left += dx;
                    if (left > 1420) {
                        left = 10;
                        top += dy;
                    }
                }
                endi = i;
            }
            if (el != null) {
                el.innerHTML = exportSVGseq(seq, starti, endi);
            }
        }
    };
    xmlhttp.open("GET", "/controllers/load_all_invaders.php", true);
    xmlhttp.send();

}

function refresh_library() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
            var seq = JSON.parse(this.responseText);
            var start = 0;
            var end = 0;
            for (var i = 0; i < seq.length; i++) {
                if (seq[i].step === 0) {
                    end = i;
                    if (end > start) {
                        library[library.length] = {
                            savegame: seq[i].savegame,
                            seq: seq.slice(start, end),
                        };
                        start = end;
                    }
                }
            }
            if (end > start) {
                library[library.length] = {
                    savegame: seq[i].savegame,
                    seq: seq.slice(start, end),
                };
                start = end;
            }
            console.log("library = " + JSON.stringify(library));
        }
    };
    xmlhttp.open("GET", "/controllers/load_all_invaders.php", true);
    xmlhttp.send();
}

function click_obj_refresh() {
    xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            //console.log(this.responseText);
            var seq = JSON.parse(this.responseText);
            document.getElementById('sprites').innerHTML = '';
            var left = 1620;
            var top = 140;
            var dx = 145;
            var dy = 92;
            var savename = "empty";
            var el = null;
            var starti, endi;
            starti = endi = 0;
            for (var i = 0; i < seq.length; i++) {
                if (savename != seq[i].savename) {
                    if (el != null) {
                        //console.log(savename + '----------------');
                        el.innerHTML = exportSVGseq(seq, starti, endi);
                    }
                    starti = endi = i;
                    savename = seq[i].savename;
                    var el = document.createElement("div");
                    el.costum = savename;
                    el.style.width = "140px";
                    el.style.height = "88px";
                    el.style.left = left + "px";
                    el.style.top = top + "px";
                    el.style.position = "absolute";
                    el.style.cursor = "pointer";
                    el.style.background = "gray";
                    //el.innerHTML = '<div class="center">New</div>';
                    document.getElementById("sprites").appendChild(el);
                    el.addEventListener("click", function () {
                        var els = document.getElementById("sprites").children;
                        for (var i = 0; i < els.length; i++) {
                            els[i].style.background = 'gray';
                        }
                        this.style.background = "green";
                    });

                    left += dx;
                    if (left > 1800) {
                        left = 1620;
                        top += dy;
                    }
                }
                endi = i;
            }
            if (el != null) {
                el.innerHTML = exportSVGseq(seq, starti, endi);
            }
        }
    };
    xmlhttp.open("GET", "/controllers/load_all_invaders.php", true);
    xmlhttp.send();
}

function click_obj() {
    document.getElementById('panel-obj').style.visibility = '';
    document.getElementById('panel-dbase').style.visibility = 'hidden';
    document.getElementById('panel-editor').style.visibility = 'hidden';
    click_obj_refresh();
    refresh_library();
}

function click_editor() {
    document.getElementById('panel-editor').style.visibility = '';
    document.getElementById('panel-dbase').style.visibility = 'hidden';
    document.getElementById('panel-obj').style.visibility = 'hidden';
}

function click_dbase() {
    document.getElementById('panel-dbase').style.visibility = '';
    document.getElementById('panel-editor').style.visibility = 'hidden';
    document.getElementById('panel-obj').style.visibility = 'hidden';
    document.getElementById('click_save_to_dbase_button').style.visibility = (grid.dirty) ? '' : 'hidden';
    click_dbase_refresh();
}

/***********************************
// main - program starts here !!!!!!
************************************/
//init_gui();

const canvas = document.getElementById("editor-canvas");
const width = canvas.width;
const height = canvas.height;
const dc = canvas.getContext("2d");
//canvas.style.visibility = "hidden";

window.setInterval(animateloop, 1000 / 60);

