/*
    Invader game again
*/

var mouse = {
    x: 0,
    y: 0,
    dy: 0,
    dy: 0
};

// the good guy metrics
var good_boi = {
    x: 0,
    y: 0,
    tx: 0,
    ty: 0,
    angle: 0,
    acc: 0.01,    // acelleration when W is pressed
    dacc: 0.15,   // decelleration when W is not pressed
    velo: 0,      // velocity
    vx: 0,       // unity vector to crosshair
    vy: 0,
    vvx: 0,       // unity vector to crosshair
    vvy: 0,
}


var sequence1 = [{ command: "moveTo", x: -35, y: -20 }, { command: "lineTo", x: 35, y: -20 }, { command: "lineTo", x: 35, y: 20 }, { command: "lineTo", x: -35, y: 20 }, { command: "lineTo", x: -35, y: -20 }, { command: "moveTo", x: -25, y: -10 }, { command: "lineTo", x: -25, y: -10 }, { command: "lineTo", x: -5, y: -10 }, { command: "lineTo", x: -5, y: 10 }, { command: "lineTo", x: -25, y: 10 }, { command: "lineTo", x: -25, y: -10 }, { command: "moveTo", x: 5, y: -10 }, { command: "lineTo", x: 25, y: -10 }, { command: "lineTo", x: 25, y: 10 }, { command: "lineTo", x: 5, y: 10 }, { command: "lineTo", x: 5, y: -10 }, { command: "moveTo", x: -5, y: -18 }, { command: "lineTo", x: 0, y: -12 }, { command: "lineTo", x: 5, y: -18 }, { command: "lineTo", x: -5, y: -18 }, { command: "moveTo", x: -27, y: -17 }, { command: "lineTo", x: -33, y: -12 }, { command: "moveTo", x: -32, y: -3 }, { command: "lineTo", x: -29, y: 0 }, { command: "moveTo", x: -28, y: 7 }, { command: "lineTo", x: -31, y: 11 }, { command: "moveTo", x: -26, y: 17 }, { command: "lineTo", x: -24, y: 13 }, { command: "moveTo", x: -13, y: 13 }, { command: "lineTo", x: -4, y: 18 }, { command: "moveTo", x: -1, y: 4 }, { command: "lineTo", x: 0, y: 7 }, { command: "moveTo", x: 6, y: 17 }, { command: "lineTo", x: 10, y: 14 }, { command: "moveTo", x: 18, y: 17 }, { command: "lineTo", x: 23, y: 14 }, { command: "moveTo", x: 32, y: 18 }, { command: "lineTo", x: 27, y: 11 }, { command: "moveTo", x: 31, y: 2 }, { command: "lineTo", x: 29, y: -2 }, { command: "moveTo", x: 33, y: -8 }, { command: "lineTo", x: 30, y: -7 }, { command: "moveTo", x: 29, y: -14 }, { command: "lineTo", x: 25, y: -14 }, { command: "moveTo", x: 29, y: -18 }, { command: "lineTo", x: 34, y: -14 }, { command: "moveTo", x: 16, y: -14 }, { command: "lineTo", x: 13, y: -12 }, { command: "moveTo", x: -9, y: -19 }, { command: "lineTo", x: -12, y: -16 }, { command: "moveTo", x: -17, y: -11 }, { command: "lineTo", x: -17, y: -14 }];
var sequence2 = [{ command: "moveTo", x: -33, y: 0 }, { command: "lineTo", x: -33, y: 0 }, { command: "lineTo", x: -30, y: -7 }, { command: "lineTo", x: -26, y: -13 }, { command: "lineTo", x: -21, y: -15 }, { command: "lineTo", x: -15, y: -17 }, { command: "lineTo", x: 7, y: -17 }, { command: "lineTo", x: 19, y: -15 }, { command: "lineTo", x: 23, y: -12 }, { command: "lineTo", x: 30, y: -4 }, { command: "lineTo", x: 33, y: 5 }, { command: "lineTo", x: 32, y: 11 }, { command: "lineTo", x: 31, y: 17 }, { command: "lineTo", x: 29, y: 19 }, { command: "lineTo", x: 26, y: 21 }, { command: "lineTo", x: 23, y: 22 }, { command: "lineTo", x: 18, y: 22 }, { command: "lineTo", x: 14, y: 22 }, { command: "lineTo", x: 11, y: 18 }, { command: "lineTo", x: 10, y: 14 }, { command: "lineTo", x: 11, y: 11 }, { command: "lineTo", x: 8, y: 5 }, { command: "lineTo", x: 6, y: 2 }, { command: "lineTo", x: 2, y: 4 }, { command: "lineTo", x: 1, y: 10 }, { command: "lineTo", x: 1, y: 13 }, { command: "lineTo", x: -1, y: 17 }, { command: "lineTo", x: -4, y: 19 }, { command: "lineTo", x: -6, y: 18 }, { command: "lineTo", x: -9, y: 14 }, { command: "lineTo", x: -10, y: 11 }, { command: "lineTo", x: -13, y: 10 }, { command: "lineTo", x: -18, y: 15 }, { command: "lineTo", x: -20, y: 18 }, { command: "lineTo", x: -24, y: 20 }, { command: "lineTo", x: -27, y: 19 }, { command: "lineTo", x: -30, y: 16 }, { command: "lineTo", x: -32, y: 11 }, { command: "lineTo", x: -34, y: 7 }, { command: "lineTo", x: -34, y: 5 }, { command: "lineTo", x: -33, y: 1 }, { command: "lineTo", x: -33, y: 1 }, { command: "lineTo", x: -33, y: 0 }, { command: "moveTo", x: -23, y: -5 }, { command: "lineTo", x: -24, y: -5 }, { command: "lineTo", x: -25, y: -3 }, { command: "lineTo", x: -27, y: -2 }, { command: "lineTo", x: -27, y: 4 }, { command: "lineTo", x: -28, y: 6 }, { command: "lineTo", x: -28, y: 8 }, { command: "lineTo", x: -27, y: 10 }, { command: "lineTo", x: -26, y: 11 }, { command: "lineTo", x: -26, y: 12 }, { command: "lineTo", x: -22, y: 12 }, { command: "lineTo", x: -20, y: 11 }, { command: "lineTo", x: -19, y: 10 }, { command: "lineTo", x: -15, y: 7 }, { command: "lineTo", x: -14, y: 6 }, { command: "lineTo", x: -13, y: 6 }, { command: "lineTo", x: -10, y: 7 }, { command: "lineTo", x: -8, y: 7 }, { command: "lineTo", x: -7, y: 8 }, { command: "lineTo", x: -6, y: 8 }, { command: "lineTo", x: -5, y: 7 }, { command: "lineTo", x: -6, y: 5 }, { command: "lineTo", x: -8, y: 4 }, { command: "lineTo", x: -10, y: 2 }, { command: "lineTo", x: -12, y: 1 }, { command: "lineTo", x: -13, y: 0 }, { command: "lineTo", x: -15, y: -1 }, { command: "lineTo", x: -16, y: -2 }, { command: "lineTo", x: -17, y: -3 }, { command: "lineTo", x: -19, y: -3 }, { command: "lineTo", x: -20, y: -4 }, { command: "lineTo", x: -21, y: -4 }, { command: "lineTo", x: -22, y: -5 }, { command: "lineTo", x: -23, y: -5 }, { command: "moveTo", x: -21, y: -9 }, { command: "lineTo", x: -21, y: -9 }, { command: "lineTo", x: -20, y: -9 }, { command: "lineTo", x: -18, y: -8 }, { command: "lineTo", x: -16, y: -6 }, { command: "lineTo", x: -15, y: -5 }, { command: "lineTo", x: -13, y: -4 }, { command: "lineTo", x: -11, y: -3 }, { command: "lineTo", x: -10, y: -2 }, { command: "lineTo", x: -8, y: 0 }, { command: "lineTo", x: -7, y: 1 }, { command: "lineTo", x: -6, y: 1 }, { command: "lineTo", x: -4, y: 2 }, { command: "lineTo", x: -3, y: 2 }, { command: "lineTo", x: -2, y: 2 }, { command: "lineTo", x: -1, y: 1 }, { command: "lineTo", x: 0, y: 0 }, { command: "lineTo", x: 1, y: 0 }, { command: "lineTo", x: 3, y: -1 }, { command: "lineTo", x: 5, y: -1 }, { command: "lineTo", x: 7, y: -1 }, { command: "lineTo", x: 9, y: 1 }, { command: "lineTo", x: 10, y: 2 }, { command: "lineTo", x: 11, y: 4 }, { command: "lineTo", x: 13, y: 6 }, { command: "lineTo", x: 15, y: 10 }, { command: "lineTo", x: 15, y: 12 }, { command: "lineTo", x: 16, y: 14 }, { command: "lineTo", x: 20, y: 17 }, { command: "lineTo", x: 20, y: 17 }, { command: "lineTo", x: 23, y: 17 }, { command: "lineTo", x: 25, y: 16 }, { command: "lineTo", x: 26, y: 14 }, { command: "lineTo", x: 28, y: 12 }, { command: "lineTo", x: 29, y: 11 }, { command: "lineTo", x: 29, y: 8 }, { command: "lineTo", x: 28, y: 5 }, { command: "lineTo", x: 28, y: 3 }, { command: "lineTo", x: 26, y: 0 }, { command: "lineTo", x: 25, y: -3 }, { command: "lineTo", x: 24, y: -4 }, { command: "lineTo", x: 22, y: -6 }, { command: "lineTo", x: 19, y: -8 }, { command: "lineTo", x: 17, y: -10 }, { command: "lineTo", x: 17, y: -11 }, { command: "lineTo", x: 13, y: -13 }, { command: "lineTo", x: 12, y: -13 }, { command: "lineTo", x: 10, y: -13 }, { command: "lineTo", x: 7, y: -13 }, { command: "lineTo", x: 5, y: -14 }, { command: "lineTo", x: 0, y: -14 }, { command: "lineTo", x: -2, y: -14 }, { command: "lineTo", x: -3, y: -14 }, { command: "lineTo", x: -4, y: -14 }, { command: "lineTo", x: -5, y: -13 }, { command: "lineTo", x: -7, y: -14 }, { command: "lineTo", x: -8, y: -14 }, { command: "lineTo", x: -12, y: -13 }, { command: "lineTo", x: -14, y: -13 }, { command: "lineTo", x: -16, y: -12 }, { command: "lineTo", x: -16, y: -12 }, { command: "lineTo", x: -20, y: -11 }, { command: "lineTo", x: -20, y: -11 }, { command: "lineTo", x: -22, y: -10 }, { command: "lineTo", x: -21, y: -9 }];
var bullits = [];   // spawned bullits from the good guy
var level = [];  // initialized in  init_level()

var tick = 0;
const dtick = 0.1;

function cute_invader_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 6, -s * 6, 2 * s * 6, 2 * s * 6);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.fillRect(-4 * s, -6 * s, 8 * s, 2 * s);
    dc.fillRect(-5 * s, -5 * s, 10 * s, 9 * s);
    var xx = s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, 2 * s, 4 * s, 5 * s);
    dc.fillRect(xx + 6 * s, 2 * s, s * 4, s * 5);
    dc.fillStyle = "WHITE";
    dc.fillRect(-3 * s, -4 * s, 2 * s, 4 * s);
    dc.fillRect(1 * s, -4 * s, 2 * s, 4 * s);
    dc.fillStyle = "BLACK";
    dc.fillRect(-3 * s, -2 * s, s, 2 * s);
    dc.fillRect(1 * s, -2 * s, s, 2 * s);
    dc.restore();
}

function ufo_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.fillRect(-4 * s, -2 * s, 8 * s, 2 * s);
    dc.fillRect(-5 * s, -1 * s, 10 * s, s);
    dc.fillRect(-7 * s, -0 * s, 14 * s, 2 * s);
    dc.fillRect(-5 * s, 2 * s, 10 * s, s);
    dc.fillRect(-4 * s, 2 * s, 8 * s, 2 * s);
    dc.fillStyle = "BLACK";
    dc.fillRect(-4 * s, 0 * s, 8 * s, 2 * s);
    dc.fillStyle = "WHITE";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, 0 * s, 2 * s, 2 * s);
    dc.restore();
}

function hunter_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.strokeStyle = grad;
    }
    else {
        dc.strokeStyle = colorA;
    }
    dc.lineWidth = 5.0;
    dc.fillStyle = "black";
    dc.beginPath();
    dc.moveTo(-4 * s, -6 * s);
    dc.lineTo(0, 6 * s);
    dc.lineTo(4 * s, -6 * s);
    dc.lineTo(0 * s, -5 * s);
    dc.closePath();
    dc.fill();
    dc.stroke();
    dc.restore();
}

function tumbler_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.strokeStyle = grad;
    }
    else {
        dc.strokeStyle = colorA;
    }
    dc.lineWidth = 5.0;
    var da = 2 * Math.PI / 7;
    var a = 0;
    dc.beginPath();
    for (var i = 0; i < 7; i++) {
        var x = 6 * s * Math.cos(i * da);
        var y = 6 * s * Math.sin(i * da);
        if (i === 0) {
            dc.moveTo(x, y);
        }
        else {
            dc.lineTo(x, y);
        }
    }
    dc.closePath();
    dc.stroke();
    dc.fillStyle = "YELLOW";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, -1 * s, 2 * s, 2 * s);

    dc.restore();
}

function star_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.strokeStyle = grad;
    }
    else {
        dc.strokeStyle = colorA;
    }
    dc.lineWidth = 5.0;
    var da = 2 * Math.PI / 7 * 3;
    dc.beginPath();
    for (var i = 0; i < 7; i++) {
        var x = 6 * s * Math.cos(i * da);
        var y = 6 * s * Math.sin(i * da);
        if (i === 0) {
            dc.moveTo(x, y);
        }
        else {
            dc.lineTo(x, y);
        }
    }
    dc.closePath();
    dc.stroke();
    dc.restore();
}

function power_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.fillRect(-4 * s, -8 * s, 8 * s, 2 * s);
    dc.fillRect(-5 * s, -7 * s, 10 * s, 7 * s);
    dc.fillRect(-6 * s, -5 * s, 12 * s, 5 * s);
    dc.fillRect(-7 * s, -0 * s, 14 * s, 2 * s);
    dc.fillRect(-5 * s, 2 * s, 10 * s, s);
    dc.fillRect(-4 * s, 2 * s, 8 * s, 2 * s);
    dc.fillStyle = "BLACK";
    dc.fillRect(-4 * s, -4 * s, 8 * s, 2 * s);
    dc.fillStyle = "PINK";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, -4 * s, 2 * s, 2 * s);
    dc.restore();
}

function rookie_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.beginPath();
    dc.arc(0, 0, 5 * s, 0, 2 * Math.PI, true);
    dc.fill();
    dc.fillRect(-7 * s, -1 * s, 2 * s, 2 * s);
    dc.fillRect(5 * s, -1 * s, 2 * s, 2 * s);
    dc.fillStyle = "BLACK";
    dc.fillRect(-4 * s, -1 * s, 8 * s, 2 * s);
    dc.fillStyle = "YELLOW";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, -1 * s, 2 * s, 2 * s);
    dc.restore();
}

function sergent_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.strokeStyle = colorB;
    dc.lineWidth = 5.0;
    var da = 2 * Math.PI / 7 * 3;
    var a = 0;
    dc.beginPath();
    for (var i = 0; i < 7; i++) {
        var x = 6 * s * Math.cos(i * da);
        var y = 6 * s * Math.sin(i * da);
        if (i === 0) {
            dc.moveTo(x, y);
        }
        else {
            dc.lineTo(x, y);
        }
    }
    dc.closePath();
    dc.stroke();

    dc.rotate(-tick / 8);
    dc.beginPath();
    dc.arc(0, 0, 5 * s, 0, 2 * Math.PI, true);
    dc.fill();
    dc.fillStyle = "BLACK";
    dc.fillRect(-4 * s, -1 * s, 8 * s, 2 * s);
    dc.fillStyle = "YELLOW";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, -1 * s, 2 * s, 2 * s);
    dc.restore();
}

function sergent_hunter_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.lineWidth = 5.0;
    dc.beginPath();
    dc.moveTo(-4 * s, -6 * s);
    dc.lineTo(0, 6 * s);
    dc.lineTo(4 * s, -6 * s);
    dc.lineTo(0 * s, -5 * s);
    dc.closePath();
    dc.fill();
    dc.fillStyle = "BLACK";
    dc.fillRect(-1 * s, -4 * s, 2 * s, 6 * s);
    dc.fillStyle = "green";
    var xx = 3 * s + s * 2 * Math.sin(tick) - 5 * s;
    dc.fillRect(-1 * s, xx, 2 * s, 2 * s);
    dc.restore();
}

function square_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 6, -s * 6, 2 * s * 6, 2 * s * 6);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }
    dc.fillRect(-6 * s, -6 * s, 12 * s, 12 * s);
    dc.rotate(-tick / 2);
    dc.fillStyle = "BLACK";
    dc.fillRect(-4 * s, -1 * s, 8 * s, 2 * s);
    dc.fillStyle = "YELLOW";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, -1 * s, 2 * s, 2 * s);
    dc.restore();
}

function triangle_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.strokeStyle = grad;
    }
    else {
        dc.strokeStyle = colorA;
    }
    dc.lineWidth = 5.0;
    var da = 2 * Math.PI / 3;
    var a = 0;
    dc.beginPath();
    for (var i = 0; i < 3; i++) {
        var x = 8 * s * Math.cos(i * da);
        var y = 8 * s * Math.sin(i * da);
        if (i === 0) {
            dc.moveTo(x, y);
        }
        else {
            dc.lineTo(x, y);
        }
    }
    dc.closePath();
    dc.stroke();
    dc.rotate(-tick / 4);
    dc.fillStyle = "YELLOW";
    var xx = 4 * s + s * 3 * Math.sin(tick) - 5 * s;
    dc.fillRect(xx, -1 * s, 2 * s, 2 * s);
    dc.restore();
}

function basic_bot(x, y, angle, scale, colormode, colorA, colorB) {
    dc.save();
    var s = 5;
    dc.translate(x, y);
    dc.scale(scale, scale);
    dc.rotate(angle);
    if (colormode === 'gradient') {
        var grad = dc.createLinearGradient(-s * 8, -s * 8, 2 * s * 8, 2 * s * 8);
        grad.addColorStop(0, colorA);
        grad.addColorStop(1, colorB);
        dc.fillStyle = grad;
    }
    else {
        dc.fillStyle = colorA;
    }

    dc.restore();
}


function init_level() {
    level = [];
    var p = 0;
    var s = level_scale;
    var sequence = sequence2;
    for (var i = 1; i < sequence.length; i++) {
        if (sequence[i].command != 'moveTo') {
            level[p++] = {
                color: "white",
                type: "line",
                x1: sequence[i - 1].x * s,
                y1: sequence[i - 1].y * s,
                x2: sequence[i].x * s,
                y2: sequence[i].y * s,
                refelct_x: 1,
                refelct_y: -1,
            };

        }
    }

    for (var i = 0; i < level.length; i++) {
        switch (level[i].type) {
            case 'line':
                level[i].a = level[i].y2 - level[i].y1;
                level[i].b = level[i].x2 - level[i].x1;
                level[i].c = level[i].x2 * level[i].y1 - level[i].x1 * level[i].y2;
                level[i].l = Math.sqrt(level[i].a * level[i].a + level[i].b * level[i].b);
                level[i].n2 = -level[i].b / level[i].l;
                level[i].n1 = level[i].a / level[i].l;
                break;
        }
    }
}

function animateloop() {
    tick += dtick;

    dc.clearRect(0, 0, width, height);

    var dx = mouse.x - good_boi.x;
    var dy = mouse.y - good_boi.y;

    dc.fillStyle = 'white';
    var xxx = good_boi.x - good_boi.tx;
    var yyy = good_boi.y - good_boi.ty;
    dc.fillText("xxx:" + xxx + ', ' + yyy, good_boi.x + 100, good_boi.y);
    dc.fillText("t:" + good_boi.tx + ', ' + good_boi.ty, good_boi.x + 100, good_boi.y + 40);

    // for W - thruster control
    if ((kup) && (good_boi.velo < 2)) {
        good_boi.velo += good_boi.acc;
        good_boi.vvx += good_boi.velo * good_boi.vx;
        good_boi.vvy += good_boi.velo * good_boi.vy;
        // måske skal vvx og vvy abs-es?
    } else if ((good_boi.velo > 0) || (Math.abs(good_boi.vvx) > 0) || (Math.abs(good_boi.vvy) > 0)) {
        good_boi.velo -= good_boi.dacc;
        if (good_boi.velo < 0) good_boi.velo = 0;
        good_boi.vvx *= 0.95;
        good_boi.vvy *= 0.95;
    }
    good_boi.tx -= good_boi.vvx;
    good_boi.ty -= good_boi.vvy;

    dc.translate(good_boi.tx, good_boi.ty);

    // render the bullits from the good guy
    var i = bullits.length;
    while (i--) {
        dc.fillStyle = bullits[i].color;
        dc.fillRect(bullits[i].x, bullits[i].y, bullits[i].s, bullits[i].s);
        bullits[i].x += bullits[i].dx;
        bullits[i].y += bullits[i].dy;
        if ((--bullits[i].range) === 0) {
            bullits.splice(i, 1);
        }
    }

    // render the level
    var sequence = sequence2;
    var s = level_scale;
    dc.lineWidth = 20.0;
    dc.strokeStyle = 'white';
    dc.beginPath();
    for (var i = 0; i < sequence.length; i++) {
        var px = sequence[i].x * s;
        var py = sequence[i].y * s;
        if (sequence[i].command === 'moveTo') {
            dc.moveTo(px, py);
        }
        else if (sequence[i].command === 'lineTo') {
            dc.lineTo(px, py);
        }
    }
    dc.stroke();

    // collision detection of bullits on walls
    for (var i = 0; i < level.length; i++) {
        switch (level[i].type) {
            case 'line':
                for (var j = 0; j < bullits.length; j++) {
                    var a1 = level[i].x1 - bullits[j].x;
                    var b1 = level[i].y1 - bullits[j].y;
                    var z1 = Math.sqrt(a1 * a1 + b1 * b1);
                    var a2 = level[i].x2 - bullits[j].x;
                    var b2 = level[i].y2 - bullits[j].y;
                    var z2 = Math.sqrt(a2 * a2 + b2 * b2);
                    var dist = Math.abs(level[i].a * bullits[j].x - level[i].b * bullits[j].y + level[i].c) / level[i].l;
                    if ((level[i].l > z1) && (level[i].l > z2) && (dist < 10.0)) {
                        var dot = bullits[j].dx * level[i].n1 + bullits[j].dy * level[i].n2;
                        bullits[j].dx = bullits[j].dx - 2 * dot * level[i].n1;
                        bullits[j].dy = bullits[j].dy - 2 * dot * level[i].n2;
                    }
                }
                var xxx = good_boi.x - good_boi.tx;
                var yyy = good_boi.y - good_boi.ty;
                var dist = Math.abs(level[i].a * xxx - level[i].b * yyy + level[i].c) / level[i].l;
                var a1 = level[i].x1 - xxx;
                var b1 = level[i].y1 - yyy;
                var z1 = Math.sqrt(a1 * a1 + b1 * b1);
                var a2 = level[i].x2 - xxx;
                var b2 = level[i].y2 - yyy;
                var z2 = Math.sqrt(a2 * a2 + b2 * b2);
                if ((level[i].l > z1) && (level[i].l > z2) && (dist < 40.0)) {
                    var dot = good_boi.vvx * level[i].n1 + good_boi.vvy * level[i].n2;
                    good_boi.vvx = good_boi.vvx - 2 * dot * level[i].n1;
                    good_boi.vvy = good_boi.vvy - 2 * dot * level[i].n2;
                }
                break;
        }
    }

    /*     tumbler_bot(100, 100, 0.0, 1, 'normal', 'white', 0);
        tumbler_bot(100, 200, tick / 2, 1, 'normal', 'red', 0);
        tumbler_bot(100, 300, tick / 3, 1, 'normal', 'white', 0);
        power_bot(100, 400, 0.0, 1, 'normal', 'gray', 0);
        star_bot(100, 500, tick / 2, 1, 'normal', 'white', 0);
     
        rookie_bot(200, 100, tick / 6, 1, 'normal', 'white', 0);
        sergent_bot(200, 200, tick / 6, 1, 'gradient', 'white', 'red');
        sergent_hunter_bot(200, 300, tick / 5, 1, 'gradient', 'blue', 'black');
        square_bot(200, 400, tick / 2, 1, 'gradient', 'red', 'blue');
        triangle_bot(200, 500, tick / 5, 1, 'normal', 'white', 0);
        triangle_bot(200, 600, tick / 5, 1, 'gradient', 'red', 'yellow');
     
        cute_invader_bot(500, 100, 0.0, 1, 'normal', 'red', 0);
        cute_invader_bot(500, 200, 0.0, 1, 'normal', 'orange', 0);
        cute_invader_bot(500, 300, 0.0, 1, 'gradient', 'red', 'yellow');
     
        ufo_bot(600, 100, 0.0, 1, 'normal', 'red', 0);
        ufo_bot(600, 200, 0.0, 1, 'normal', 'orange', 0);
        ufo_bot(600, 300, tick / 5, 1, 'gradient', 'red', 'yellow');
     
        hunter_bot(700, 100, 0.0, 1, 'normal', 'white', 0);
        hunter_bot(700, 200, 0.0, 1, 'normal', 'orange', 0);
        hunter_bot(700, 300, tick / 6, 1, 'gradient', 'red', 'yellow');
     */
    dc.translate(-good_boi.tx, -good_boi.ty);
    var len = Math.sqrt(dx * dx + dy * dy);

    if (len > 1) {
        good_boi.vx = dx / len;
        good_boi.vy = dy / len;
        good_boi.angle = (Math.asin(good_boi.vy) < 0) ? Math.PI / 2 - Math.acos(good_boi.vx) + Math.PI : Math.PI / 2 + Math.acos(good_boi.vx) + Math.PI;
        hunter_bot(good_boi.x, good_boi.y, good_boi.angle, 1.0, 'normal', 'yellow', 0);
    }


    // render crosshair
    dc.fillStyle = "rgb(200,200,200)";
    dc.fillRect(mouse.x - 8, mouse.y - 1, 6, 2);
    dc.fillRect(mouse.x + 2, mouse.y - 1, 6, 2);
    dc.fillRect(mouse.x - 1, mouse.y - 8, 2, 6);
    dc.fillRect(mouse.x - 1, mouse.y + 2, 2, 6);

    if (auto_fire_trigger != 0) {
        console.log(auto_fire_mode % 2);
        switch (auto_fire_mode % 2) {
            case 0: // single shot
                if (auto_fire_count === 0) {
                    fire_buillit();
                    auto_fire_count = 10;
                }
                break;
            case 1: // auto fire
                if (auto_fire_count === 0) {
                    fire_buillit();
                    auto_fire_count = 1;
                }
                auto_fire_count--;
                break;
        }
    }

}

var kdown = false;
var kup = false;
var kleft = false;
var krigth = false;

function canvas_key_down(e) {
    //    console.log(e.keyCode);
    switch (e.keyCode) {
        case 65:
            kleft = true;
            break;
        case 68:
            krigth = true;
            break;
        case 87:
            kup = true;
            break;
        case 83:
            kdown = true;
            break;
        case 49: // toggle bullit mode
            bullit_mode++;
            break;
        case 50: // toggle bullit mode
            auto_fire_mode++;
            break;
    }
}

function canvas_key_up(e) {
    switch (e.keyCode) {
        case 65:
            kleft = false;
            break;
        case 68:
            krigth = false;
            break;
        case 87:
            kup = false;
            break;
        case 83:
            kdown = false;
            break;
    }
}

var bullit_mode = 0;
var auto_fire_trigger = 0;
var auto_fire_mode = 0;
var auto_fire_count = 0;

function fire_buillit() {
    switch (bullit_mode % 4) {
        case 0: // single
            var bul = {
                x: good_boi.x - good_boi.tx + 25 * good_boi.vx,
                y: good_boi.y - good_boi.ty + 25 * good_boi.vy,
                dx: good_boi.vx * 10,
                dy: good_boi.vy * 10,
                s: 5,
                range: 200,
                color: "yellow"
            };
            bullits.push(bul);
            break;

        case 1:// lazer
            for (var j = 0; j < 10; j++) {
                var vel = 2 + Math.random() * 15
                var bul = {
                    x: good_boi.x - good_boi.tx + 25 * good_boi.vx,
                    y: good_boi.y - good_boi.ty + 25 * good_boi.vy,
                    dx: good_boi.vx * vel,
                    dy: good_boi.vy * vel,
                    s: 5,
                    range: 50 + Math.floor(50 * Math.random()),
                    color: "yellow"
                };

                bullits.push(bul);
            }
            break;

        case 2:// shutgun
            for (var j = 0; j < 10; j++) {
                var vel = 2 + Math.random() * 15
                var ax = 0.2 - 0.4 * Math.random();
                var ay = 0.2 - 0.4 * Math.random();
                var bul = {
                    x: good_boi.x - good_boi.tx + 25 * good_boi.vx,
                    y: good_boi.y - good_boi.ty + 25 * good_boi.vy,
                    dx: (good_boi.vx + ax) * vel,
                    dy: (good_boi.vy - ay) * vel,
                    s: 5,
                    range: 20 + Math.floor(20 * Math.random()),
                    color: "yellow"
                };

                bullits.push(bul);
            }
            break;

        case 3:// Sol
            for (var j = 0; j < 10; j++) {
                var vel = 2 + Math.random() * 15
                var angle = Math.random() * 2 * Math.PI;
                var vx = Math.cos(angle);
                var vy = Math.sin(angle);
                var bul = {
                    x: good_boi.x - good_boi.tx + 35 * vx * Math.random(),
                    y: good_boi.y - good_boi.ty + 35 * vy * Math.random(),
                    dx: vel * vx,
                    dy: vel * vy,
                    s: 5,
                    range: 50 + Math.floor(50 * Math.random()),
                    color: "yellow"
                };

                bullits.push(bul);
            }
            break;
    }
}

function click_obj_canvas(ev) {
}

function mouseup_obj_canvas(ev) {
    auto_fire_trigger = 0;
}

function mousedown_obj_canvas(ev) {
    auto_fire_trigger = 1;
    auto_fire_count = 0;
}


function canvas_mouse_move(ev) {
    mouse.x = ev.offsetX;
    mouse.y = ev.offsetY;
};


// ===================================================
// Main - Program starts here
// ===================================================


const level_scale = 150;
const canvas = document.querySelector("canvas");
const width = canvas.width = window.innerWidth - 10;
const height = canvas.height = window.innerHeight - 10;
const dc = canvas.getContext("2d");
good_boi.x = width / 2;
good_boi.y = height / 2;
good_boi.tx = 1280 - 1920 / 2 + width / 2;
good_boi.ty = -170 - 1080 / 2 + height / 2;

init_level();
canvas.oncontextmenu = function (e) {
    e.preventDefault();
};
document.addEventListener("keydown", canvas_key_down, false);
document.addEventListener("keyup", canvas_key_up, false);
window.setInterval(animateloop, 1000 / 60);

