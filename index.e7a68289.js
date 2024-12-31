
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

      var $parcel$global = globalThis;
    
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequiref046"];

if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequiref046"] = parcelRequire;
}

var parcelRegister = parcelRequire.register;
parcelRegister("2JpsI", function(module, exports) {

$parcel$export(module.exports, "register", () => $1fd388fe1a0c2157$export$6503ec6e8aabbaf, (v) => $1fd388fe1a0c2157$export$6503ec6e8aabbaf = v);
var $1fd388fe1a0c2157$export$6503ec6e8aabbaf;
var $1fd388fe1a0c2157$export$f7ad0328861e2f03;
"use strict";
var $1fd388fe1a0c2157$var$mapping = new Map();
function $1fd388fe1a0c2157$var$register(baseUrl, manifest) {
    for(var i = 0; i < manifest.length - 1; i += 2)$1fd388fe1a0c2157$var$mapping.set(manifest[i], {
        baseUrl: baseUrl,
        path: manifest[i + 1]
    });
}
function $1fd388fe1a0c2157$var$resolve(id) {
    var resolved = $1fd388fe1a0c2157$var$mapping.get(id);
    if (resolved == null) throw new Error("Could not resolve bundle with id " + id);
    return new URL(resolved.path, resolved.baseUrl).toString();
}
$1fd388fe1a0c2157$export$6503ec6e8aabbaf = $1fd388fe1a0c2157$var$register;
$1fd388fe1a0c2157$export$f7ad0328861e2f03 = $1fd388fe1a0c2157$var$resolve;

});

var $a892b8d97c4c3a19$exports = {};

(parcelRequire("2JpsI")).register(new URL("", import.meta.url).toString(), JSON.parse('["fbElY","index.e7a68289.js","lXgn0","primitives-1-100dpi-001.ac4c7662.png","d5PQp","primitives-1-100dpi-002.7b37be88.png","20r9Z","primitives-1-100dpi-003.0c34c635.png","gMIzQ","primitives-1-100dpi-004.4be888dc.png","1JaO9","primitives-1-100dpi-005.2eff0ce6.png","8vyt0","primitives-1-100dpi-006.d1837eb3.png","cfCk0","primitives-1-100dpi-007.a8dfd42d.png","jwmsK","primitives-1-100dpi-008.79d3d3e2.png","j90QB","primitives-1-100dpi-009.2305d4d2.png","aUo9w","primitives-1-100dpi-010.92ab3f21.png","jYn9I","primitives-1-100dpi-011.be3eae4d.png","4PeWa","primitives-1-100dpi-012.78e9b25f.png","9dGuJ","primitives-1-100dpi-013.ab3a4031.png","lE33U","primitives-1-100dpi-014.a19bab98.png","2nmoZ","primitives-1-100dpi-015.26c5d5ba.png","dWPFw","primitives-1-100dpi-016.31729c24.png","7ilGq","primitives-1-100dpi-017.5c6dd952.png","ixuba","primitives-1-100dpi-018.6ca84d88.png","a1WqC","primitives-1-100dpi-019.436b1f51.png","1YgdI","primitives-1-100dpi-020.cf4f7afe.png","gMOFG","primitives-1-100dpi-021.242276a8.png","dfN1H","primitives-1-100dpi-022.b60ae6ef.png","6EJTV","primitives-1-100dpi-023.3619bbbe.png","jdPYB","primitives-1-100dpi-024.f260742d.png","eAgWq","primitives-1-100dpi-025.a8565bfa.png","ab8jO","primitives-1-100dpi-026.f05c4744.png","9f1LL","primitives-1-100dpi-027.499ff915.png","7IYKr","primitives-1-100dpi-028.d2883ce0.png","3hidM","primitives-1-100dpi-029.b277d6da.png","22tbK","primitives-1-100dpi-030.25b025fc.png","9F5HT","primitives-1-100dpi-031.66cf877c.png","kdCAS","primitives-1-100dpi-032.586e293a.png","6Fic7","primitives-1-100dpi-033.0779240e.png","k75uD","primitives-1-100dpi-034.ce2ca935.png","aWYte","primitives-1-100dpi-035.884be192.png","czvUK","primitives-1-100dpi-036.6c4f6e13.png","bzvFe","primitives-1-100dpi-037.528005b8.png","lL2Qi","primitives-1-100dpi-038.5ad74a00.png","fCNpr","primitives-1-100dpi-039.befbace4.png","1LdJj","primitives-1-100dpi-040.d6038232.png","eze7Q","primitives-1-100dpi-041.1cb370b7.png","1ONmt","primitives-1-100dpi-042.a57ba92f.png","gIhb1","primitives-1-100dpi-043.6e17116b.png","kT8iN","primitives-1-100dpi-044.20b4d3c0.png","gLL7d","primitives-1-100dpi-045.6dad690d.png","fa3qn","primitives-1-100dpi-046.b3cb259d.png","9si4H","primitives-1-100dpi-047.7aac2ee6.png","eKpsh","primitives-1-100dpi-048.8f6c1d43.png","hqLsV","primitives-1-100dpi-049.8e0a5e58.png","cyw7S","primitives-1-100dpi-050.022b500d.png","1709q","primitives-1-100dpi-051.c1e550c3.png","hJ0YH","primitives-1-100dpi-052.8cdb5bb6.png","eFnf3","primitives-1-100dpi-053.19ac73b8.png","foQxe","primitives-1-100dpi-054.19bb5253.png","iK7MP","primitives-1-100dpi-055.58dbfd9d.png","ebsX6","primitives-1-100dpi-056.11719805.png","g0QCo","primitives-1-100dpi-057.625dd72c.png","aeZDe","primitives-1-100dpi-058.37cb0da8.png","fHl2x","primitives-1-100dpi-059.d57ce642.png","c7VJS","primitives-1-100dpi-060.dc345cbf.png","4aGFx","primitives-1-100dpi-061.e68cc452.png","8GiKR","primitives-1-100dpi-062.01bcc528.png","epo9g","primitives-1-100dpi-063.66063a19.png","kTPnh","primitives-1-100dpi-064.b0989534.png","cej3S","primitives-1-100dpi-065.b7fa11a1.png","d8Bq3","primitives-1-100dpi-066.5ad3454e.png","7HYf8","primitives-1-100dpi-067.4f4931fc.png","ce3rA","primitives-1-100dpi-068.7acd9443.png","d6BJs","primitives-1-100dpi-069.66caa8d1.png","fZH1B","primitives-1-100dpi-070.d475b5fc.png","aQLX5","primitives-1-100dpi-071.04281503.png","6bVFn","primitives-1-100dpi-072.2c277b16.png","9Ur58","primitives-1-100dpi-073.65b8b521.png","cRFX2","primitives-1-100dpi-074.1945c79a.png","hpV24","primitives-1-100dpi-075.9b85d149.png","kCNcF","primitives-1-100dpi-076.7688ba85.png","e1qrn","primitives-1-100dpi-077.c56ff041.png","3SaYX","primitives-1-100dpi-078.8b5ee810.png","k2GRr","primitives-1-100dpi-079.b7a240cc.png","g7tml","primitives-1-100dpi-080.df826708.png","2AvAo","primitives-1-100dpi-081.6617879e.png","11cHn","primitives-1-100dpi-082.1b8876d5.png","hFMWc","primitives-1-100dpi-083.25297093.png","dyRtr","primitives-1-100dpi-084.002d517d.png","5Eod2","primitives-1-100dpi-085.65371c49.png","6SQgb","primitives-1-100dpi-086.31517de5.png","hJR3u","primitives-1-100dpi-087.913457ce.png","24s6m","primitives-1-100dpi-088.82fe5cfa.png","8T63p","primitives-1-100dpi-089.1ebb668f.png","aKBes","primitives-1-100dpi-090.47cd1ef1.png","hN9hb","primitives-1-100dpi-091.c7847d56.png","9eFTD","primitives-1-100dpi-092.8443d3b3.png","aO6vG","primitives-1-100dpi-093.58860073.png","cYHjT","primitives-1-100dpi-094.618a2c52.png","lp50G","primitives-1-100dpi-095.4d2475d4.png","1fg3g","primitives-1-100dpi-096.072592ac.png","bvXBz","primitives-1-100dpi-097.6ba97244.png","iUofz","primitives-1-100dpi-098.fc4b3b5f.png","ibsuC","primitives-1-100dpi-099.3d2f8dc0.png","96y5G","primitives-1-100dpi-100.96c35330.png","2tWHS","primitives-1-100dpi-101.43a15f01.png","5l906","primitives-1-100dpi-102.3ff9b375.png","bPx1G","primitives-1-100dpi-103.b4da3752.png","c1KwC","primitives-1-100dpi-104.5817e500.png","XyZsU","primitives-1-100dpi-105.45b4e9db.png","dNnO1","primitives-1-100dpi-106.28e85632.png","3d4JH","primitives-1-100dpi-107.a6e1ddb2.png","1vJt0","primitives-1-100dpi-108.873ecb60.png","1NN5u","primitives-1-100dpi-109.7a02b1fb.png","hvC65","primitives-1-100dpi-110.4203f253.png","etMCL","primitives-1-100dpi-111.65d35a0f.png","5Rx4B","primitives-1-100dpi-112.9027bf2f.png"]'));

function $07fb702027535e1f$export$8cca2b44d6a11240(deg) {
    return deg / 180 * Math.PI;
}
function $07fb702027535e1f$export$af8e0ed3be10fb1(A, B) {
    return A && !B || !A && B;
}
function $07fb702027535e1f$export$488f655523762531(start = 1) {
    let id = start;
    return function() {
        return id++;
    };
}
function $07fb702027535e1f$export$da0c78541a4d928(colorHex) {
    let r = parseInt(colorHex.slice(1, 3), 16);
    let g = parseInt(colorHex.slice(3, 5), 16);
    let b = parseInt(colorHex.slice(5, 7), 16);
    const colors = [
        r,
        g,
        b
    ];
    return colors;
}


class $bd1f8d54d6f1bdec$export$2e2bcd8739ae039 {
    constructor(symOrder = 8, visible = false, divisions = 12, radialInc = 10, orientation = 0, hue = 0, { canvasWidth: canvasWidth = 800, canvasHeight: canvasHeight = 800 } = {}){
        this.symOrder = symOrder; // order of symmetry
        this.divisions = divisions; // no. of divisions in a symmetric sector
        this.radialInc = radialInc; // difference in radii of concentric circles
        this.orientation = orientation; // orientation of the grid itself
        this.hue = hue; // base color of grid
        this.canvasWidth = canvasWidth; // dimensions of canvas that will have grid drawn on
        this.canvasHeight = canvasHeight;
        this.canvas = document.createElement("canvas");
        this.canvas.width = canvasWidth;
        this.canvas.height = canvasHeight;
        this.visible = visible;
        this.draw();
    }
    toggle(state) {
        if (state === undefined) this.visible = !this.visible;
        else this.visible = state;
    }
    draw() {
        const context = this.canvas.getContext("2d");
        context.save();
        // move origin to center of canvas
        context.translate(this.canvas.width / 2, this.canvas.height / 2);
        // draw concentric circles
        for(let r = 0; r < this.canvas.width / 2; r += this.radialInc){
            context.save();
            context.strokeStyle = `hwb(${this.hue} 75% 0%)`;
            context.beginPath();
            context.arc(0, 0, r, 0, (0, $07fb702027535e1f$export$8cca2b44d6a11240)(360));
            context.closePath();
            context.stroke();
            context.restore();
        }
        // minor axes
        for(let i = 0; i < this.symOrder * this.divisions; i++){
            context.save();
            context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(this.orientation - 90) + (0, $07fb702027535e1f$export$8cca2b44d6a11240)(i * (360 / (this.symOrder * this.divisions))));
            context.strokeStyle = `hwb(${this.hue} 50% 0%)`;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(this.canvas.width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        // major axes
        for(let i = 0; i < this.symOrder; i++){
            context.save();
            context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(this.orientation - 90) + (0, $07fb702027535e1f$export$8cca2b44d6a11240)(i * (360 / this.symOrder)));
            context.strokeStyle = `hwb(${this.hue} 0% 50%)`;
            context.beginPath();
            context.moveTo(0, 0);
            context.lineTo(this.canvas.width / 2, 0);
            context.closePath();
            context.stroke();
            context.restore();
        }
        context.restore();
    }
    drawImageTo(canvas) {
        if (!this.visible) return;
        const context = canvas.getContext("2d");
        context.drawImage(this.canvas, 0, 0);
    }
}


// Need to hard-code image URLs as simple strings because
// parcel won't understand anything else during compile time
const $556626034a61e699$var$imageURLs = {};
var $9c2880ee440c2cd6$exports = {};
$9c2880ee440c2cd6$exports = new URL("primitives-1-100dpi-001.ac4c7662.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[1] = new URL($9c2880ee440c2cd6$exports);
var $d883f9083304eb5a$exports = {};
$d883f9083304eb5a$exports = new URL("primitives-1-100dpi-002.7b37be88.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[2] = new URL($d883f9083304eb5a$exports);
var $ee6190f845820f46$exports = {};
$ee6190f845820f46$exports = new URL("primitives-1-100dpi-003.0c34c635.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[3] = new URL($ee6190f845820f46$exports);
var $496beee34f10ae0c$exports = {};
$496beee34f10ae0c$exports = new URL("primitives-1-100dpi-004.4be888dc.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[4] = new URL($496beee34f10ae0c$exports);
var $b8916bfb493d3f11$exports = {};
$b8916bfb493d3f11$exports = new URL("primitives-1-100dpi-005.2eff0ce6.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[5] = new URL($b8916bfb493d3f11$exports);
var $260e2df4527d4916$exports = {};
$260e2df4527d4916$exports = new URL("primitives-1-100dpi-006.d1837eb3.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[6] = new URL($260e2df4527d4916$exports);
var $9a7f675cd8f1c685$exports = {};
$9a7f675cd8f1c685$exports = new URL("primitives-1-100dpi-007.a8dfd42d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[7] = new URL($9a7f675cd8f1c685$exports);
var $ef67e0c54c439247$exports = {};
$ef67e0c54c439247$exports = new URL("primitives-1-100dpi-008.79d3d3e2.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[8] = new URL($ef67e0c54c439247$exports);
var $70029aab7123dc52$exports = {};
$70029aab7123dc52$exports = new URL("primitives-1-100dpi-009.2305d4d2.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[9] = new URL($70029aab7123dc52$exports);
var $4e44af0e10e7ea76$exports = {};
$4e44af0e10e7ea76$exports = new URL("primitives-1-100dpi-010.92ab3f21.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[10] = new URL($4e44af0e10e7ea76$exports);
var $a4befd2c95060505$exports = {};
$a4befd2c95060505$exports = new URL("primitives-1-100dpi-011.be3eae4d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[11] = new URL($a4befd2c95060505$exports);
var $9eb262315107f480$exports = {};
$9eb262315107f480$exports = new URL("primitives-1-100dpi-012.78e9b25f.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[12] = new URL($9eb262315107f480$exports);
var $6ba783a76c058d4d$exports = {};
$6ba783a76c058d4d$exports = new URL("primitives-1-100dpi-013.ab3a4031.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[13] = new URL($6ba783a76c058d4d$exports);
var $dd50a77d9aabb3f0$exports = {};
$dd50a77d9aabb3f0$exports = new URL("primitives-1-100dpi-014.a19bab98.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[14] = new URL($dd50a77d9aabb3f0$exports);
var $eccfa85bbff355ae$exports = {};
$eccfa85bbff355ae$exports = new URL("primitives-1-100dpi-015.26c5d5ba.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[15] = new URL($eccfa85bbff355ae$exports);
var $73c9479de2aa2eca$exports = {};
$73c9479de2aa2eca$exports = new URL("primitives-1-100dpi-016.31729c24.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[16] = new URL($73c9479de2aa2eca$exports);
var $f559b1c8db514d45$exports = {};
$f559b1c8db514d45$exports = new URL("primitives-1-100dpi-017.5c6dd952.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[17] = new URL($f559b1c8db514d45$exports);
var $a994126890bfb2c3$exports = {};
$a994126890bfb2c3$exports = new URL("primitives-1-100dpi-018.6ca84d88.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[18] = new URL($a994126890bfb2c3$exports);
var $43c9bfa4effe7a2b$exports = {};
$43c9bfa4effe7a2b$exports = new URL("primitives-1-100dpi-019.436b1f51.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[19] = new URL($43c9bfa4effe7a2b$exports);
var $312aef3e521f8549$exports = {};
$312aef3e521f8549$exports = new URL("primitives-1-100dpi-020.cf4f7afe.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[20] = new URL($312aef3e521f8549$exports);
var $b6a6fad6411a4e51$exports = {};
$b6a6fad6411a4e51$exports = new URL("primitives-1-100dpi-021.242276a8.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[21] = new URL($b6a6fad6411a4e51$exports);
var $41d6fe93e62423c2$exports = {};
$41d6fe93e62423c2$exports = new URL("primitives-1-100dpi-022.b60ae6ef.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[22] = new URL($41d6fe93e62423c2$exports);
var $ce2008bf0911a274$exports = {};
$ce2008bf0911a274$exports = new URL("primitives-1-100dpi-023.3619bbbe.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[23] = new URL($ce2008bf0911a274$exports);
var $3f1fe4bdf0bde53a$exports = {};
$3f1fe4bdf0bde53a$exports = new URL("primitives-1-100dpi-024.f260742d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[24] = new URL($3f1fe4bdf0bde53a$exports);
var $72bb004c6cdfc819$exports = {};
$72bb004c6cdfc819$exports = new URL("primitives-1-100dpi-025.a8565bfa.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[25] = new URL($72bb004c6cdfc819$exports);
var $e87f5cc7d44d3262$exports = {};
$e87f5cc7d44d3262$exports = new URL("primitives-1-100dpi-026.f05c4744.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[26] = new URL($e87f5cc7d44d3262$exports);
var $f206aa5c71126d99$exports = {};
$f206aa5c71126d99$exports = new URL("primitives-1-100dpi-027.499ff915.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[27] = new URL($f206aa5c71126d99$exports);
var $e43e7b14a2e5726b$exports = {};
$e43e7b14a2e5726b$exports = new URL("primitives-1-100dpi-028.d2883ce0.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[28] = new URL($e43e7b14a2e5726b$exports);
var $78d737f2818d070c$exports = {};
$78d737f2818d070c$exports = new URL("primitives-1-100dpi-029.b277d6da.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[29] = new URL($78d737f2818d070c$exports);
var $304e8be35fae949a$exports = {};
$304e8be35fae949a$exports = new URL("primitives-1-100dpi-030.25b025fc.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[30] = new URL($304e8be35fae949a$exports);
var $c06a3c19a8446b88$exports = {};
$c06a3c19a8446b88$exports = new URL("primitives-1-100dpi-031.66cf877c.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[31] = new URL($c06a3c19a8446b88$exports);
var $db1a50f46c312c0b$exports = {};
$db1a50f46c312c0b$exports = new URL("primitives-1-100dpi-032.586e293a.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[32] = new URL($db1a50f46c312c0b$exports);
var $f79e7f1c540eb2ec$exports = {};
$f79e7f1c540eb2ec$exports = new URL("primitives-1-100dpi-033.0779240e.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[33] = new URL($f79e7f1c540eb2ec$exports);
var $fc92c9d50a602db8$exports = {};
$fc92c9d50a602db8$exports = new URL("primitives-1-100dpi-034.ce2ca935.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[34] = new URL($fc92c9d50a602db8$exports);
var $bf96b51d39e24828$exports = {};
$bf96b51d39e24828$exports = new URL("primitives-1-100dpi-035.884be192.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[35] = new URL($bf96b51d39e24828$exports);
var $c57899221089e1a1$exports = {};
$c57899221089e1a1$exports = new URL("primitives-1-100dpi-036.6c4f6e13.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[36] = new URL($c57899221089e1a1$exports);
var $1988dafdcc1cadd8$exports = {};
$1988dafdcc1cadd8$exports = new URL("primitives-1-100dpi-037.528005b8.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[37] = new URL($1988dafdcc1cadd8$exports);
var $d0b7e57ea807d7f3$exports = {};
$d0b7e57ea807d7f3$exports = new URL("primitives-1-100dpi-038.5ad74a00.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[38] = new URL($d0b7e57ea807d7f3$exports);
var $1e7eac995bee04ed$exports = {};
$1e7eac995bee04ed$exports = new URL("primitives-1-100dpi-039.befbace4.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[39] = new URL($1e7eac995bee04ed$exports);
var $379db7d568dcb6c7$exports = {};
$379db7d568dcb6c7$exports = new URL("primitives-1-100dpi-040.d6038232.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[40] = new URL($379db7d568dcb6c7$exports);
var $af4dcb4654a08726$exports = {};
$af4dcb4654a08726$exports = new URL("primitives-1-100dpi-041.1cb370b7.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[41] = new URL($af4dcb4654a08726$exports);
var $b0c847a6a3da6bd6$exports = {};
$b0c847a6a3da6bd6$exports = new URL("primitives-1-100dpi-042.a57ba92f.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[42] = new URL($b0c847a6a3da6bd6$exports);
var $ec67de8175f5b70c$exports = {};
$ec67de8175f5b70c$exports = new URL("primitives-1-100dpi-043.6e17116b.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[43] = new URL($ec67de8175f5b70c$exports);
var $8305c58221209bff$exports = {};
$8305c58221209bff$exports = new URL("primitives-1-100dpi-044.20b4d3c0.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[44] = new URL($8305c58221209bff$exports);
var $16dd9e8d2bc1bab7$exports = {};
$16dd9e8d2bc1bab7$exports = new URL("primitives-1-100dpi-045.6dad690d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[45] = new URL($16dd9e8d2bc1bab7$exports);
var $424134b1c13128e1$exports = {};
$424134b1c13128e1$exports = new URL("primitives-1-100dpi-046.b3cb259d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[46] = new URL($424134b1c13128e1$exports);
var $4aba4561cd96325e$exports = {};
$4aba4561cd96325e$exports = new URL("primitives-1-100dpi-047.7aac2ee6.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[47] = new URL($4aba4561cd96325e$exports);
var $0ddb4c78c809cdaa$exports = {};
$0ddb4c78c809cdaa$exports = new URL("primitives-1-100dpi-048.8f6c1d43.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[48] = new URL($0ddb4c78c809cdaa$exports);
var $05b2667f68deca27$exports = {};
$05b2667f68deca27$exports = new URL("primitives-1-100dpi-049.8e0a5e58.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[49] = new URL($05b2667f68deca27$exports);
var $98e04bcfce5d0aac$exports = {};
$98e04bcfce5d0aac$exports = new URL("primitives-1-100dpi-050.022b500d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[50] = new URL($98e04bcfce5d0aac$exports);
var $04abee6456080f3c$exports = {};
$04abee6456080f3c$exports = new URL("primitives-1-100dpi-051.c1e550c3.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[51] = new URL($04abee6456080f3c$exports);
var $f84284ae78751b23$exports = {};
$f84284ae78751b23$exports = new URL("primitives-1-100dpi-052.8cdb5bb6.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[52] = new URL($f84284ae78751b23$exports);
var $d89ed2bbd0636fa0$exports = {};
$d89ed2bbd0636fa0$exports = new URL("primitives-1-100dpi-053.19ac73b8.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[53] = new URL($d89ed2bbd0636fa0$exports);
var $9b1c93b8c9d95c99$exports = {};
$9b1c93b8c9d95c99$exports = new URL("primitives-1-100dpi-054.19bb5253.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[54] = new URL($9b1c93b8c9d95c99$exports);
var $d8dbccae96238f56$exports = {};
$d8dbccae96238f56$exports = new URL("primitives-1-100dpi-055.58dbfd9d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[55] = new URL($d8dbccae96238f56$exports);
var $1499def63d7d0c18$exports = {};
$1499def63d7d0c18$exports = new URL("primitives-1-100dpi-056.11719805.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[56] = new URL($1499def63d7d0c18$exports);
var $7ccc8081b94a1d97$exports = {};
$7ccc8081b94a1d97$exports = new URL("primitives-1-100dpi-057.625dd72c.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[57] = new URL($7ccc8081b94a1d97$exports);
var $721f0783ed3f318b$exports = {};
$721f0783ed3f318b$exports = new URL("primitives-1-100dpi-058.37cb0da8.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[58] = new URL($721f0783ed3f318b$exports);
var $06c39aea4a5c8f22$exports = {};
$06c39aea4a5c8f22$exports = new URL("primitives-1-100dpi-059.d57ce642.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[59] = new URL($06c39aea4a5c8f22$exports);
var $e80257cb40702919$exports = {};
$e80257cb40702919$exports = new URL("primitives-1-100dpi-060.dc345cbf.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[60] = new URL($e80257cb40702919$exports);
var $39364ad6b439f24d$exports = {};
$39364ad6b439f24d$exports = new URL("primitives-1-100dpi-061.e68cc452.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[61] = new URL($39364ad6b439f24d$exports);
var $55607bcc98b6a74e$exports = {};
$55607bcc98b6a74e$exports = new URL("primitives-1-100dpi-062.01bcc528.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[62] = new URL($55607bcc98b6a74e$exports);
var $e04f14c6061d5fe3$exports = {};
$e04f14c6061d5fe3$exports = new URL("primitives-1-100dpi-063.66063a19.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[63] = new URL($e04f14c6061d5fe3$exports);
var $c359d140fa22fa2d$exports = {};
$c359d140fa22fa2d$exports = new URL("primitives-1-100dpi-064.b0989534.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[64] = new URL($c359d140fa22fa2d$exports);
var $3cf3cb7e571c1acb$exports = {};
$3cf3cb7e571c1acb$exports = new URL("primitives-1-100dpi-065.b7fa11a1.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[65] = new URL($3cf3cb7e571c1acb$exports);
var $371bb4663227cf89$exports = {};
$371bb4663227cf89$exports = new URL("primitives-1-100dpi-066.5ad3454e.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[66] = new URL($371bb4663227cf89$exports);
var $438ebe51cc18db90$exports = {};
$438ebe51cc18db90$exports = new URL("primitives-1-100dpi-067.4f4931fc.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[67] = new URL($438ebe51cc18db90$exports);
var $4d3cc5df69c503a6$exports = {};
$4d3cc5df69c503a6$exports = new URL("primitives-1-100dpi-068.7acd9443.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[68] = new URL($4d3cc5df69c503a6$exports);
var $5920523e7db44994$exports = {};
$5920523e7db44994$exports = new URL("primitives-1-100dpi-069.66caa8d1.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[69] = new URL($5920523e7db44994$exports);
var $45031646f4b3376f$exports = {};
$45031646f4b3376f$exports = new URL("primitives-1-100dpi-070.d475b5fc.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[70] = new URL($45031646f4b3376f$exports);
var $6c08287e96d13269$exports = {};
$6c08287e96d13269$exports = new URL("primitives-1-100dpi-071.04281503.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[71] = new URL($6c08287e96d13269$exports);
var $ad746d415454a2bc$exports = {};
$ad746d415454a2bc$exports = new URL("primitives-1-100dpi-072.2c277b16.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[72] = new URL($ad746d415454a2bc$exports);
var $f16e1bacb5c49977$exports = {};
$f16e1bacb5c49977$exports = new URL("primitives-1-100dpi-073.65b8b521.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[73] = new URL($f16e1bacb5c49977$exports);
var $69ba6a6f0c536f7e$exports = {};
$69ba6a6f0c536f7e$exports = new URL("primitives-1-100dpi-074.1945c79a.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[74] = new URL($69ba6a6f0c536f7e$exports);
var $e946335b1beaa150$exports = {};
$e946335b1beaa150$exports = new URL("primitives-1-100dpi-075.9b85d149.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[75] = new URL($e946335b1beaa150$exports);
var $2a3e575156b18a06$exports = {};
$2a3e575156b18a06$exports = new URL("primitives-1-100dpi-076.7688ba85.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[76] = new URL($2a3e575156b18a06$exports);
var $1515e2fb90b0688c$exports = {};
$1515e2fb90b0688c$exports = new URL("primitives-1-100dpi-077.c56ff041.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[77] = new URL($1515e2fb90b0688c$exports);
var $b7de3736bfb89d2c$exports = {};
$b7de3736bfb89d2c$exports = new URL("primitives-1-100dpi-078.8b5ee810.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[78] = new URL($b7de3736bfb89d2c$exports);
var $b6c0d8110a599f4c$exports = {};
$b6c0d8110a599f4c$exports = new URL("primitives-1-100dpi-079.b7a240cc.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[79] = new URL($b6c0d8110a599f4c$exports);
var $19fa955e7701819d$exports = {};
$19fa955e7701819d$exports = new URL("primitives-1-100dpi-080.df826708.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[80] = new URL($19fa955e7701819d$exports);
var $e9c9eb71a65807be$exports = {};
$e9c9eb71a65807be$exports = new URL("primitives-1-100dpi-081.6617879e.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[81] = new URL($e9c9eb71a65807be$exports);
var $efed8f55405a728c$exports = {};
$efed8f55405a728c$exports = new URL("primitives-1-100dpi-082.1b8876d5.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[82] = new URL($efed8f55405a728c$exports);
var $b60c19e5eec99e59$exports = {};
$b60c19e5eec99e59$exports = new URL("primitives-1-100dpi-083.25297093.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[83] = new URL($b60c19e5eec99e59$exports);
var $14d96b2cc381c4cf$exports = {};
$14d96b2cc381c4cf$exports = new URL("primitives-1-100dpi-084.002d517d.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[84] = new URL($14d96b2cc381c4cf$exports);
var $046cc1a704296563$exports = {};
$046cc1a704296563$exports = new URL("primitives-1-100dpi-085.65371c49.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[85] = new URL($046cc1a704296563$exports);
var $bf30d3fab140ece3$exports = {};
$bf30d3fab140ece3$exports = new URL("primitives-1-100dpi-086.31517de5.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[86] = new URL($bf30d3fab140ece3$exports);
var $783d2f7d87e4c149$exports = {};
$783d2f7d87e4c149$exports = new URL("primitives-1-100dpi-087.913457ce.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[87] = new URL($783d2f7d87e4c149$exports);
var $4da79bcebd717886$exports = {};
$4da79bcebd717886$exports = new URL("primitives-1-100dpi-088.82fe5cfa.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[88] = new URL($4da79bcebd717886$exports);
var $766a2657c10c1f6a$exports = {};
$766a2657c10c1f6a$exports = new URL("primitives-1-100dpi-089.1ebb668f.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[89] = new URL($766a2657c10c1f6a$exports);
var $f416b9f0ea3697f2$exports = {};
$f416b9f0ea3697f2$exports = new URL("primitives-1-100dpi-090.47cd1ef1.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[90] = new URL($f416b9f0ea3697f2$exports);
var $d3e98adfecac5d56$exports = {};
$d3e98adfecac5d56$exports = new URL("primitives-1-100dpi-091.c7847d56.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[91] = new URL($d3e98adfecac5d56$exports);
var $1f61b648e1b5c477$exports = {};
$1f61b648e1b5c477$exports = new URL("primitives-1-100dpi-092.8443d3b3.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[92] = new URL($1f61b648e1b5c477$exports);
var $42bf568ff827e531$exports = {};
$42bf568ff827e531$exports = new URL("primitives-1-100dpi-093.58860073.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[93] = new URL($42bf568ff827e531$exports);
var $4dcd14171b15dcad$exports = {};
$4dcd14171b15dcad$exports = new URL("primitives-1-100dpi-094.618a2c52.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[94] = new URL($4dcd14171b15dcad$exports);
var $d54a0f443a60b459$exports = {};
$d54a0f443a60b459$exports = new URL("primitives-1-100dpi-095.4d2475d4.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[95] = new URL($d54a0f443a60b459$exports);
var $8244172ee376bf9a$exports = {};
$8244172ee376bf9a$exports = new URL("primitives-1-100dpi-096.072592ac.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[96] = new URL($8244172ee376bf9a$exports);
var $0ca53e37d0c66034$exports = {};
$0ca53e37d0c66034$exports = new URL("primitives-1-100dpi-097.6ba97244.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[97] = new URL($0ca53e37d0c66034$exports);
var $0993df2742e55d3b$exports = {};
$0993df2742e55d3b$exports = new URL("primitives-1-100dpi-098.fc4b3b5f.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[98] = new URL($0993df2742e55d3b$exports);
var $3cf3b4e6b95090cb$exports = {};
$3cf3b4e6b95090cb$exports = new URL("primitives-1-100dpi-099.3d2f8dc0.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[99] = new URL($3cf3b4e6b95090cb$exports);
var $04a882783b72b204$exports = {};
$04a882783b72b204$exports = new URL("primitives-1-100dpi-100.96c35330.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[100] = new URL($04a882783b72b204$exports);
var $282435c76740eb28$exports = {};
$282435c76740eb28$exports = new URL("primitives-1-100dpi-101.43a15f01.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[101] = new URL($282435c76740eb28$exports);
var $a4055892c20748de$exports = {};
$a4055892c20748de$exports = new URL("primitives-1-100dpi-102.3ff9b375.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[102] = new URL($a4055892c20748de$exports);
var $0586e3809be4a13e$exports = {};
$0586e3809be4a13e$exports = new URL("primitives-1-100dpi-103.b4da3752.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[103] = new URL($0586e3809be4a13e$exports);
var $8cee5a699a81e720$exports = {};
$8cee5a699a81e720$exports = new URL("primitives-1-100dpi-104.5817e500.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[104] = new URL($8cee5a699a81e720$exports);
var $1d600d9a1fce7c13$exports = {};
$1d600d9a1fce7c13$exports = new URL("primitives-1-100dpi-105.45b4e9db.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[105] = new URL($1d600d9a1fce7c13$exports);
var $81e0140355c65633$exports = {};
$81e0140355c65633$exports = new URL("primitives-1-100dpi-106.28e85632.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[106] = new URL($81e0140355c65633$exports);
var $462d59ceff04f775$exports = {};
$462d59ceff04f775$exports = new URL("primitives-1-100dpi-107.a6e1ddb2.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[107] = new URL($462d59ceff04f775$exports);
var $c3bcd29364760095$exports = {};
$c3bcd29364760095$exports = new URL("primitives-1-100dpi-108.873ecb60.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[108] = new URL($c3bcd29364760095$exports);
var $902556ca94a81b35$exports = {};
$902556ca94a81b35$exports = new URL("primitives-1-100dpi-109.7a02b1fb.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[109] = new URL($902556ca94a81b35$exports);
var $a9c4f0d28a7fe0f0$exports = {};
$a9c4f0d28a7fe0f0$exports = new URL("primitives-1-100dpi-110.4203f253.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[110] = new URL($a9c4f0d28a7fe0f0$exports);
var $5889fa74483b5d31$exports = {};
$5889fa74483b5d31$exports = new URL("primitives-1-100dpi-111.65d35a0f.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[111] = new URL($5889fa74483b5d31$exports);
var $b1374eae86275d96$exports = {};
$b1374eae86275d96$exports = new URL("primitives-1-100dpi-112.9027bf2f.png", import.meta.url).toString();


$556626034a61e699$var$imageURLs[112] = new URL($b1374eae86275d96$exports);
var $556626034a61e699$export$2e2bcd8739ae039 = $556626034a61e699$var$imageURLs;



class $f6c78f0a19915526$var$Primitive {
    constructor(id, url){
        this.ready = false;
        this.id = id;
        this.url = url;
        this.rawData = new Image();
        this.rawData.src = this.url;
        this.rawData.addEventListener("load", ()=>{
            this.imageData = new Image();
            this.imageData.src = $f6c78f0a19915526$var$processImage(this.rawData);
            this.imageData.addEventListener("load", ()=>{
                this.ready = true;
            });
        });
    }
    draw(canvas, { distance: distance, angle: angle, rotation: rotation, scale: scale, order: order, multiplicity: multiplicity, flip: flip, invert: invert, color: color }, globalInvert, showIDs, symbol) {
        if (!this.ready) return;
        const coloredImage = new Image();
        coloredImage.src = $f6c78f0a19915526$var$colorImage(this.imageData, color);
        coloredImage.addEventListener("load", ()=>{
            const context = canvas.getContext("2d");
            if ((0, $07fb702027535e1f$export$af8e0ed3be10fb1)(invert, globalInvert)) context.filter = "invert(1)";
            else context.filter = "none";
            context.clearRect(0, 0, canvas.width, canvas.height);
            const totalOrder = Math.max(order * multiplicity, 1);
            for(let i = 0; i < totalOrder; ++i){
                let nextAngle = angle + i * 360 / totalOrder;
                context.save();
                context.translate(canvas.width / 2, canvas.height / 2); // translate to center
                context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(-90 + nextAngle)); // rotate about the center (of the canvas)
                context.translate(distance * canvas.width / 2, 0); // move given distance away from the center
                context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(90 + rotation)); // rotate about the new center (of the object)
                if (flip) context.scale(-scale, scale);
                else context.scale(scale, scale);
                context.translate(-coloredImage.width / 2, -coloredImage.height / 2); // offset so that image is drawn at center
                context.drawImage(coloredImage, 0, 0);
                context.restore();
                if (showIDs) {
                    context.font = "bold 16px sans-serif";
                    context.textAlign = "center";
                    context.textBaseline = "middle";
                    context.fillStyle = "red";
                    context.shadowColor = "white";
                    context.shadowBlur = 8;
                    context.save();
                    context.translate(canvas.width / 2, canvas.height / 2); // translate to center
                    context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(-90 + nextAngle)); // rotate about the center (of the canvas)
                    context.translate(distance * canvas.width / 2, 0); // move given distance away from the center
                    context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(90 - nextAngle)); // rotate about the new center (of the object)
                    context.fillText(symbol, 0, 0);
                    context.restore();
                    context.shadowBlur = 0;
                }
            }
        });
    }
    drawP(canvas, { distance: distance, angle: angle, rotation: rotation, scale: scale, order: order, multiplicity: multiplicity, flip: flip, invert: invert, color: color }, globalInvert, showIDs, symbol) {
        return new Promise((resolve, reject)=>{
            if (!this.ready) resolve();
            const coloredImage = new Image();
            coloredImage.src = $f6c78f0a19915526$var$colorImage(this.imageData, color);
            coloredImage.addEventListener("load", ()=>{
                const context = canvas.getContext("2d");
                if ((0, $07fb702027535e1f$export$af8e0ed3be10fb1)(invert, globalInvert)) context.filter = "invert(1)";
                else context.filter = "none";
                context.clearRect(0, 0, canvas.width, canvas.height);
                const totalOrder = Math.max(order * multiplicity, 1);
                for(let i = 0; i < totalOrder; ++i){
                    let nextAngle = angle + i * 360 / totalOrder;
                    context.save();
                    context.translate(canvas.width / 2, canvas.height / 2);
                    context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(-90 + nextAngle));
                    context.translate(distance * canvas.width / 2, 0);
                    context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(90 + rotation));
                    if (flip) context.scale(-scale, scale);
                    else context.scale(scale, scale);
                    context.translate(-coloredImage.width / 2, -coloredImage.height / 2);
                    context.drawImage(coloredImage, 0, 0);
                    context.restore();
                    if (showIDs) {
                        context.font = "bold 16px sans-serif";
                        context.textAlign = "center";
                        context.textBaseline = "middle";
                        context.fillStyle = "red";
                        context.shadowColor = "white";
                        context.shadowBlur = 8;
                        context.save();
                        context.translate(canvas.width / 2, canvas.height / 2);
                        context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(-90 + nextAngle));
                        context.translate(distance * canvas.width / 2, 0);
                        context.rotate((0, $07fb702027535e1f$export$8cca2b44d6a11240)(90 - nextAngle));
                        context.fillText(symbol, 0, 0);
                        context.restore();
                        context.shadowBlur = 0;
                    }
                }
                resolve();
            });
        });
    }
}
function $f6c78f0a19915526$var$processImage(image) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    context.drawImage(image, 0, 0);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for(let y = 0; y < imageData.height; ++y)for(let x = 0; x < imageData.width; ++x){
        let index = y * imageData.width * 4 + x * 4;
        let [r, g, b] = imageData.data.slice(index, index + 3);
        imageData.data[index + 3] = 255 - (r + g + b) / 3;
    }
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}
function $f6c78f0a19915526$var$colorImage(image, color) {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    canvas.width = image.width;
    canvas.height = image.height;
    let [r, g, b] = (0, $07fb702027535e1f$export$da0c78541a4d928)(color);
    context.drawImage(image, 0, 0);
    let imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    for(let y = 0; y < imageData.height; ++y)for(let x = 0; x < imageData.width; ++x){
        let index = y * imageData.width * 4 + x * 4;
        imageData.data[index + 0] = r;
        imageData.data[index + 1] = g;
        imageData.data[index + 2] = b;
    }
    context.putImageData(imageData, 0, 0);
    return canvas.toDataURL();
}
const $f6c78f0a19915526$var$primitives = {};
for(const id in 0, $556626034a61e699$export$2e2bcd8739ae039)$f6c78f0a19915526$var$primitives[id] = new $f6c78f0a19915526$var$Primitive(id, (0, $556626034a61e699$export$2e2bcd8739ae039)[id]);
function $f6c78f0a19915526$export$59a9c9ef65470628(id, dataURL) {
    $f6c78f0a19915526$var$primitives[id] = new $f6c78f0a19915526$var$Primitive(id, dataURL);
}
var $f6c78f0a19915526$export$2e2bcd8739ae039 = $f6c78f0a19915526$var$primitives;




class $359cce6af0fe8cc1$export$2255d92a85eab347 {
    constructor(){
        this.selectedPrimitive = null;
    }
    getState() {
        return this.selectedPrimitive;
    }
    changeState(symbol) {
        this.selectedPrimitive = symbol;
    }
}
class $359cce6af0fe8cc1$export$d9ec315994dbf675 {
    constructor(order = 8, { canvasWidth: canvasWidth = 800, canvasHeight: canvasHeight = 800 } = {}){
        this.primitiveGroup = new Map();
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.mandalaCanvas = document.querySelector("canvas");
        this.mandalaCanvas.width = canvasWidth;
        this.mandalaCanvas.height = canvasHeight;
        this.symmetryOrder = order;
        this.globalInvert = false;
        this.IDsVisible = false;
    }
    addPrimitive(symbol, primitive, { distance: distance = 0.9, angle: angle = 0, rotation: rotation = 0, scale: scale = 0.25, multiplicity: multiplicity = 1, flip: flip = false, invert: invert = false, color: color = "#000000" } = {}) {
        const offCanvas = document.createElement("canvas");
        offCanvas.width = this.canvasWidth;
        offCanvas.height = this.canvasHeight;
        this.primitiveGroup.set(symbol, {
            primitive: primitive,
            props: {
                distance: distance,
                angle: angle,
                rotation: rotation,
                scale: scale,
                order: this.symmetryOrder,
                multiplicity: multiplicity,
                flip: flip,
                invert: invert,
                id: symbol,
                color: color
            },
            offCanvas: offCanvas
        });
        $359cce6af0fe8cc1$var$drawPrimitive(this.primitiveGroup, symbol, this.globalInvert, this.IDsVisible);
    }
    addPrimitiveP(symbol, primitive, { distance: distance = 0.9, angle: angle = 0, rotation: rotation = 0, scale: scale = 0.25, multiplicity: multiplicity = 1, flip: flip = false, invert: invert = false, color: color = "#000000" } = {}) {
        return new Promise((resolve, reject)=>{
            const offCanvas = document.createElement("canvas");
            offCanvas.width = this.canvasWidth;
            offCanvas.height = this.canvasHeight;
            this.primitiveGroup.set(symbol, {
                primitive: primitive,
                props: {
                    distance: distance,
                    angle: angle,
                    rotation: rotation,
                    scale: scale,
                    order: this.symmetryOrder,
                    multiplicity: multiplicity,
                    flip: flip,
                    invert: invert,
                    id: symbol,
                    color: color
                },
                offCanvas: offCanvas
            });
            $359cce6af0fe8cc1$var$drawPrimitiveP(this.primitiveGroup, symbol, this.globalInvert, this.IDsVisible).then(()=>{
                resolve();
            });
        });
    }
    removePrimitive(symbol) {
        return this.primitiveGroup.delete(symbol);
    }
    getPrimitiveState(symbol) {
        return this.primitiveGroup.get(symbol);
    }
    updatePrimitiveState(symbol, { distance: distance, angle: angle, rotation: rotation, scale: scale, multiplicity: multiplicity, flip: flip, invert: invert, color: color } = {}) {
        const oldProps = this.primitiveGroup.get(symbol).props;
        const newProps = {};
        newProps.distance = distance ?? oldProps.distance;
        newProps.angle = angle ?? oldProps.angle;
        newProps.rotation = rotation ?? oldProps.rotation;
        newProps.scale = scale ?? oldProps.scale;
        newProps.order = oldProps.order;
        newProps.multiplicity = multiplicity ?? oldProps.multiplicity;
        newProps.flip = flip ?? oldProps.flip;
        newProps.invert = invert ?? oldProps.invert;
        newProps.color = color ?? oldProps.color;
        this.primitiveGroup.get(symbol).props = newProps;
        $359cce6af0fe8cc1$var$drawPrimitive(this.primitiveGroup, symbol, this.globalInvert, this.IDsVisible);
    }
    updatePrimitiveStateP(symbol, { distance: distance, angle: angle, rotation: rotation, scale: scale, multiplicity: multiplicity, flip: flip, invert: invert, color: color } = {}) {
        return new Promise((resolve, reject)=>{
            const oldProps = this.primitiveGroup.get(symbol).props;
            const newProps = {};
            newProps.distance = distance ?? oldProps.distance;
            newProps.angle = angle ?? oldProps.angle;
            newProps.rotation = rotation ?? oldProps.rotation;
            newProps.scale = scale ?? oldProps.scale;
            newProps.order = oldProps.order;
            newProps.multiplicity = multiplicity ?? oldProps.multiplicity;
            newProps.flip = flip ?? oldProps.flip;
            newProps.invert = invert ?? oldProps.invert;
            newProps.color = color ?? oldProps.color;
            this.primitiveGroup.get(symbol).props = newProps;
            $359cce6af0fe8cc1$var$drawPrimitiveP(this.primitiveGroup, symbol, this.globalInvert, this.IDsVisible).then(()=>{
                resolve();
            });
        });
    }
    invertColor(status) {
        this.globalInvert = status;
        this.primitiveGroup.forEach((val, key)=>{
            $359cce6af0fe8cc1$var$drawPrimitive(this.primitiveGroup, key, this.globalInvert, this.IDsVisible);
        });
    }
    showIDs(status) {
        this.IDsVisible = status;
        this.primitiveGroup.forEach((val, key)=>{
            $359cce6af0fe8cc1$var$drawPrimitive(this.primitiveGroup, key, this.globalInvert, this.IDsVisible);
        });
    }
    reset() {
        this.primitiveGroup = new Map();
    }
    drawImageTo(canvas) {
        const context = canvas.getContext("2d");
        this.primitiveGroup.forEach(({ offCanvas: offCanvas })=>{
            context.drawImage(offCanvas, 0, 0);
        });
    }
    getPrimitiveStateAsJSON() {
        const usedPrimitives = Array.from(this.primitiveGroup.entries());
        const primitiveList = usedPrimitives.map(([key, { primitive: primitive, props: props }])=>{
            const obj = {
                id: primitive.id,
                polarRadius: props.distance,
                polarAngle: props.angle,
                selfRotation: props.rotation,
                size: props.scale,
                multiplicity: props.multiplicity,
                flip: props.flip,
                invert: props.invert,
                color: props.color
            };
            return obj;
        });
        return JSON.stringify({
            order: this.symmetryOrder,
            invert: this.globalInvert,
            primitiveList: primitiveList
        }, null, 2);
    }
}
function $359cce6af0fe8cc1$var$drawPrimitive(primitives, symbol, globalInvert, showIDs) {
    const { primitive: primitive, props: props, offCanvas: offCanvas } = primitives.get(symbol);
    primitive.draw(offCanvas, props, globalInvert, showIDs, symbol);
}
function $359cce6af0fe8cc1$var$drawPrimitiveP(primitives, symbol, globalInvert, showIDs) {
    const { primitive: primitive, props: props, offCanvas: offCanvas } = primitives.get(symbol);
    return new Promise((resolve, reject)=>{
        primitive.drawP(offCanvas, props, globalInvert, showIDs, symbol).then(()=>{
            resolve();
        });
    });
}
class $359cce6af0fe8cc1$var$AppState {
    constructor(canvasWidth, canvasHeight){
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.grid = new (0, $bd1f8d54d6f1bdec$export$2e2bcd8739ae039)();
        this.gridVisibility = false;
        this.invertCanvas = false;
        this.selection = null;
        this.primitiveGroup = new Map();
    }
    getSelection() {
        return this.selection;
    }
    changeSelection(symbol) {
        this.selection = symbol;
    }
    getInvertStatus() {
        return this.invertCanvas;
    }
    changeInvertStatus(status) {
        this.invertCanvas = status;
    }
    addPrimitive(symbol, primitive, props = {}) {
        const offCanvas = document.createElement("canvas");
        [offCanvas.width, offCanvas.height] = [
            this.canvasWidth,
            this.canvasHeight
        ];
        props.polarRadius ??= 0.9;
        props.polarAngle ??= 0;
        props.selfRotation ??= 0;
        props.size ??= 0.1;
        props.multiplicity ??= 1;
        props.flip ??= false;
        props.invertColor ??= false;
        props.color ??= "#000000";
        this.primitiveGroup.set(symbol, {
            primitive: primitive,
            props: props,
            offCanvas: offCanvas
        });
        $359cce6af0fe8cc1$var$drawPrimitive(this.primitiveGroup, symbol);
    }
    updatePrimitive(symbol, props = {}) {
        const oldProps = this.primitiveGroup.get(symbol).props;
        props.polarRadius ??= oldProps.polarRadius;
        props.polarAngle ??= oldProps.polarAngle;
        props.selfRotation ??= oldProps.selfRotation;
        props.size ??= oldProps.size;
        props.multiplicity ??= oldProps.multiplicity;
        props.flip ??= oldProps.flip;
        props.invertColor ??= oldProps.invertColor;
        props.color ??= oldProps.color;
        this.primitiveGroup.get(symbol).props = props;
        $359cce6af0fe8cc1$var$drawPrimitive(this.primitiveGroup, symbol);
    }
    removePrimitive(symbol) {
        return this.primitiveGroup.delete(symbol);
    }
    draw(canvas, invert) {
        const context = canvas.getContext("2d");
        this.primitiveGroup.forEach(({ offCanvas: offCanvas })=>{
            context.drawImage(offCanvas, 0, 0);
        });
    }
}



/* Misc Controls */ function $73231556861487e8$export$f4ce56603491bfb6(handler) {
    const gridToggle = document.querySelector("#grid-toggle");
    gridToggle.checked = false;
    gridToggle.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function $73231556861487e8$export$bbfe99e6c7483f74(handler) {
    const saveButton = document.querySelector("#save-button");
    saveButton.addEventListener("click", (ev)=>{
        handler();
    });
}
function $73231556861487e8$export$aa0ba8553791ce9e(handler) {
    const saveSerialButton = document.querySelector("#save-button-serial");
    saveSerialButton.addEventListener("click", (ev)=>{
        handler();
    });
}
function $73231556861487e8$export$ee69feea793d9927(handler, inputHandler) {
    const loadSerialButton = document.querySelector("#load-button-serial");
    const fileInput = document.querySelector("#hidden-file-input");
    fileInput.addEventListener("input", (ev)=>{
        inputHandler(ev.target.files[0]);
    });
    loadSerialButton.addEventListener("click", (ev)=>{
        const answer = handler();
        if (answer) fileInput.click();
    });
}
function $73231556861487e8$export$a48ae69edeaeddf8(handler) {
    const orderButton = document.querySelector("#order-button");
    orderButton.addEventListener("click", (ev)=>{
        const orderSelect = document.querySelector("#grid-order");
        const order = +orderSelect.value;
        handler(order);
    });
}
function $73231556861487e8$export$9ee2b41e4dcbaae6(handler) {
    const invertToggle = document.querySelector("#invert-toggle");
    invertToggle.checked = false;
    invertToggle.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function $73231556861487e8$export$6131e0b448720216(flag) {
    const invertToggle = document.querySelector("#invert-toggle");
    invertToggle.checked = flag;
}
function $73231556861487e8$export$b212597baa61b030(handler) {
    const showIDToggle = document.querySelector("#checkbox-show-id");
    showIDToggle.checked = false;
    showIDToggle.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
/* Add Primitives */ function $73231556861487e8$export$fdf9dbee0c02fe1(primitive, clickHandler, selectionHandler, deletionHandler) {
    const primitiveOptionBox = document.querySelector("#prim-option-box");
    const primitiveButton = document.createElement("button");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = primitive.url;
    primitiveButton.appendChild(primitiveIcon);
    primitiveButton.classList.add("image-button");
    primitiveButton.addEventListener("click", ()=>{
        const symbol = clickHandler();
        $73231556861487e8$export$915d9fced37c99fd(primitive, symbol, selectionHandler, deletionHandler);
    });
    primitiveOptionBox.appendChild(primitiveButton);
    return primitiveButton;
}
function $73231556861487e8$export$4e21a61e973c1a4b(handler) {
    const addCustomPrimitiveButton = document.querySelector("#add-custom-button");
    const primitiveInput = document.querySelector("#hidden-primitive-input");
    primitiveInput.addEventListener("input", (ev)=>{
        for (const file of ev.target.files)handler(file);
    });
    addCustomPrimitiveButton.addEventListener("click", (ev)=>{
        primitiveInput.click();
    });
}
/* Used Primitives */ function $73231556861487e8$export$915d9fced37c99fd(primitive, symbol, selectHandler, deleteHandler) {
    const usedPrimitivesBox = document.querySelector("#prim-used-box");
    const primitiveEntry = document.createElement("div");
    const primitiveIcon = document.createElement("img");
    primitiveIcon.classList.add("image-icon");
    primitiveIcon.src = primitive.url;
    primitiveEntry.appendChild(primitiveIcon);
    const symbolSpan = document.createElement("span");
    symbolSpan.textContent = `ID: ${symbol}`;
    primitiveEntry.appendChild(symbolSpan);
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", (ev)=>{
        ev.stopPropagation();
        deleteHandler(symbol);
        primitiveEntry.remove();
    });
    primitiveEntry.appendChild(deleteButton);
    primitiveEntry.classList.add("prim-entry");
    primitiveEntry.addEventListener("click", ()=>{
        selectHandler(symbol);
    });
    usedPrimitivesBox.appendChild(primitiveEntry);
}
function $73231556861487e8$export$b9d80e390f2aa489() {
    const usedPrimitivesBox = document.querySelector("#prim-used-box");
    const length = usedPrimitivesBox.children.length;
    for(let i = 0; i < length; i++)usedPrimitivesBox.children.item(0).remove();
}
/* Parameters */ function $73231556861487e8$var$getControls() {
    const sliderControls = {
        distance: document.querySelector("#slider-distance"),
        angle: document.querySelector("#slider-angle"),
        rotation: document.querySelector("#slider-rotation"),
        scale: document.querySelector("#slider-scale"),
        multiplicity: document.querySelector("#slider-multiplicity")
    };
    const numberControls = {
        distance: document.querySelector("#number-distance"),
        angle: document.querySelector("#number-angle"),
        rotation: document.querySelector("#number-rotation"),
        scale: document.querySelector("#number-scale"),
        multiplicity: document.querySelector("#number-multiplicity")
    };
    return [
        sliderControls,
        numberControls
    ];
}
function $73231556861487e8$export$3ea35af12150feed(parameter, { min: min, max: max, step: step, initial: initial }, inputHandler) {
    const [sliderControls, numberControls] = $73231556861487e8$var$getControls();
    [
        sliderControls,
        numberControls
    ].forEach((controls)=>{
        controls[parameter].min = min;
        controls[parameter].max = max;
        controls[parameter].step = step;
        controls[parameter].value = initial;
    });
    sliderControls[parameter].addEventListener("input", (ev)=>{
        inputHandler(+ev.target.value);
    });
    numberControls[parameter].addEventListener("input", (ev)=>{
        ev.target.classList.remove("invalid");
    });
    numberControls[parameter].addEventListener("change", (ev)=>{
        const value = parameter == "multiplicity" ? Number.parseInt(ev.target.value) : Number.parseFloat(ev.target.value);
        if (Number.isFinite(value) && value >= min & value <= max) inputHandler(value);
        else ev.target.classList.add("invalid");
    });
}
function $73231556861487e8$export$c4cb4c0f4b881acc(handler) {
    const flipCheckbox = document.querySelector("#checkbox-flip");
    flipCheckbox.checked = false;
    flipCheckbox.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function $73231556861487e8$export$95bab07a9b863a39(flag = true) {
    const controlSet = document.querySelector("#fieldset-controls");
    if (flag) controlSet.classList.remove("hidden");
    else controlSet.classList.add("hidden");
}
function $73231556861487e8$export$5f9a34449e981849(parameterName, newValue) {
    $73231556861487e8$var$getControls().forEach((controls)=>{
        controls[parameterName].value = newValue;
    });
}
function $73231556861487e8$export$4578028efb63ded9(flag) {
    const flipCheckbox = document.querySelector("#checkbox-flip");
    flipCheckbox.checked = flag;
}
function $73231556861487e8$export$84e039264230ecb6(handler) {
    const invertCheckbox = document.querySelector("#checkbox-invert");
    invertCheckbox.checked = false;
    invertCheckbox.addEventListener("change", (ev)=>{
        handler(ev.target.checked);
    });
}
function $73231556861487e8$export$1cf87c88d8a5cdeb(flag) {
    const invertCheckbox = document.querySelector("#checkbox-invert");
    invertCheckbox.checked = flag;
}
function $73231556861487e8$export$cd866fae0018b4e5(handler) {
    const colorButton = document.querySelector("#color-button");
    colorButton.addEventListener("change", (ev)=>{
        handler(ev.target.value);
    });
}
function $73231556861487e8$export$971eed6488a2a11d(color) {
    const colorButton = document.querySelector("#color-button");
    colorButton.value = color;
}



/* Setup state */ let $203735a0703e5edf$var$order = 8;
let $203735a0703e5edf$var$invert = false;
let $203735a0703e5edf$var$showIDs = false;
const $203735a0703e5edf$var$parameters = [
    {
        name: "distance",
        min: "0",
        max: "1",
        step: "0.001",
        initial: "0.9"
    },
    {
        name: "angle",
        min: "-180",
        max: "180",
        step: "0.001",
        initial: "0"
    },
    {
        name: "rotation",
        min: "-180",
        max: "180",
        step: "0.001",
        initial: "0"
    },
    {
        name: "scale",
        min: "0",
        max: "4",
        step: "0.001",
        initial: "0.5"
    },
    {
        name: "multiplicity",
        min: "0",
        max: "1024",
        step: "1",
        initial: "1"
    }
];
const [$203735a0703e5edf$var$canvasWidth, $203735a0703e5edf$var$canvasHeight] = [
    800,
    800
];
const $203735a0703e5edf$var$mainCanvas = document.querySelector("#main-canvas");
[$203735a0703e5edf$var$mainCanvas.width, $203735a0703e5edf$var$mainCanvas.height] = [
    $203735a0703e5edf$var$canvasWidth,
    $203735a0703e5edf$var$canvasHeight
];
const $203735a0703e5edf$var$selectionState = new (0, $359cce6af0fe8cc1$export$2255d92a85eab347)();
let $203735a0703e5edf$var$mandalaState = new (0, $359cce6af0fe8cc1$export$d9ec315994dbf675)();
let $203735a0703e5edf$var$getID = (0, $07fb702027535e1f$export$488f655523762531)();
let $203735a0703e5edf$var$createPrimitiveID = (0, $07fb702027535e1f$export$488f655523762531)();
let $203735a0703e5edf$var$grid = new (0, $bd1f8d54d6f1bdec$export$2e2bcd8739ae039)();
/* Image */ /* Clear the canvas */ function $203735a0703e5edf$var$clear(canvas) {
    const context = canvas.getContext("2d");
    context.fillStyle = $203735a0703e5edf$var$invert ? "black" : "white";
    context.fillRect(0, 0, canvas.width, canvas.height);
}
/* Events */ /* Top-level drawing function */ /*

let tick = 0;

function draw() {
  ++tick;
  if (tick >= 5) {
    clear(mainCanvas, invert);
    grid.drawImageTo(mainCanvas);
    mandalaState.drawImageTo(mainCanvas, invert);
    tick = 0;
  }
  requestAnimationFrame(draw);
}
  */ function $203735a0703e5edf$var$draw() {
    $203735a0703e5edf$var$clear($203735a0703e5edf$var$mainCanvas, $203735a0703e5edf$var$invert);
    $203735a0703e5edf$var$grid.drawImageTo($203735a0703e5edf$var$mainCanvas);
    $203735a0703e5edf$var$mandalaState.drawImageTo($203735a0703e5edf$var$mainCanvas, $203735a0703e5edf$var$invert);
    setTimeout($203735a0703e5edf$var$draw, 100);
}
/* Setup UI when the page has loaded */ window.addEventListener("load", function() {
    window.requestAnimationFrame($203735a0703e5edf$var$draw);
    $73231556861487e8$export$a48ae69edeaeddf8((gridOrder)=>{
        const answer = confirm("This will erase the existing mandala on the canvas. Do you want to continue?");
        if (answer) {
            const prevVisible = $203735a0703e5edf$var$grid.visible;
            $203735a0703e5edf$var$grid = new (0, $bd1f8d54d6f1bdec$export$2e2bcd8739ae039)(gridOrder, prevVisible);
            $203735a0703e5edf$var$order = gridOrder;
            $203735a0703e5edf$var$mandalaState = new (0, $359cce6af0fe8cc1$export$d9ec315994dbf675)(gridOrder);
            $73231556861487e8$export$b9d80e390f2aa489();
            $73231556861487e8$export$95bab07a9b863a39(false);
            $203735a0703e5edf$var$getID = (0, $07fb702027535e1f$export$488f655523762531)(1);
            $203735a0703e5edf$var$mandalaState.showIDs($203735a0703e5edf$var$showIDs);
            $203735a0703e5edf$var$changeSelection(null);
        // requestAnimationFrame(draw);
        }
    });
    $73231556861487e8$export$f4ce56603491bfb6((flag)=>{
        $203735a0703e5edf$var$grid.visible = flag;
    // requestAnimationFrame(draw);
    });
    $73231556861487e8$export$bbfe99e6c7483f74(()=>{
        const saveCanvas = document.createElement("canvas");
        saveCanvas.width = $203735a0703e5edf$var$canvasWidth;
        saveCanvas.height = $203735a0703e5edf$var$canvasHeight;
        $203735a0703e5edf$var$mandalaState.drawImageTo(saveCanvas);
        saveCanvas.toBlob((blob)=>{
            const downloadLink = document.createElement("a");
            const downloadURL = URL.createObjectURL(blob);
            downloadLink.href = downloadURL;
            downloadLink.download = "mandala.png";
            downloadLink.classList.add("hidden");
            document.body.appendChild(downloadLink);
            downloadLink.click();
            document.body.removeChild(downloadLink);
            URL.revokeObjectURL(downloadURL);
        });
    });
    $73231556861487e8$export$aa0ba8553791ce9e(()=>{
        const blob = new Blob([
            $203735a0703e5edf$var$mandalaState.getPrimitiveStateAsJSON()
        ], {
            type: "application/json",
            endings: "native"
        });
        const downloadLink = document.createElement("a");
        const downloadURL = URL.createObjectURL(blob);
        downloadLink.href = downloadURL;
        downloadLink.download = "mandala.json";
        downloadLink.classList.add("hidden");
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
        URL.revokeObjectURL(downloadURL);
    });
    $73231556861487e8$export$ee69feea793d9927(()=>{
        return confirm("This will erase the existing mandala on the canvas. Do you want to continue?");
    }, (file)=>{
        if (file.type === "application/json") {
            const fileReader = new FileReader();
            fileReader.addEventListener("load", (ev2)=>{
                try {
                    const jsonObj = JSON.parse(ev2.target.result);
                    if (!$203735a0703e5edf$var$validateJSON(jsonObj)) alert("The object in JSON file does not seem to have proper structure.");
                    else {
                        const state = $203735a0703e5edf$var$createMandalaStateFromJSON(jsonObj);
                        if (state === null || jsonObj.order < 3) alert("The JSON file does not state a valid symmetry order");
                        else {
                            const prevVisible = $203735a0703e5edf$var$grid.visible;
                            $203735a0703e5edf$var$grid = new (0, $bd1f8d54d6f1bdec$export$2e2bcd8739ae039)(jsonObj.order, prevVisible);
                            $203735a0703e5edf$var$order = jsonObj.order;
                            $203735a0703e5edf$var$invert = jsonObj.invert;
                            $73231556861487e8$export$6131e0b448720216($203735a0703e5edf$var$invert);
                            $203735a0703e5edf$var$mandalaState = state;
                            $73231556861487e8$export$b9d80e390f2aa489();
                            $203735a0703e5edf$var$mandalaState.showIDs($203735a0703e5edf$var$showIDs);
                            $203735a0703e5edf$var$mandalaState.invertColor($203735a0703e5edf$var$invert);
                            $203735a0703e5edf$var$mandalaState.primitiveGroup.forEach((val, key)=>{
                                function selectHandler() {
                                    $203735a0703e5edf$var$changeSelection(key);
                                }
                                function deleteHandler() {
                                    $203735a0703e5edf$var$mandalaState.removePrimitive(key);
                                    $203735a0703e5edf$var$changeSelection(null);
                                }
                                $73231556861487e8$export$915d9fced37c99fd(val.primitive, key, selectHandler, deleteHandler);
                            });
                            $73231556861487e8$export$95bab07a9b863a39(false);
                            $203735a0703e5edf$var$changeSelection(null);
                        // requestAnimationFrame(draw);
                        }
                    }
                } catch (error) {
                    console.error(error);
                    alert("Error occured on parsing the file. Check the console for more details.");
                }
            });
            fileReader.addEventListener("error", ()=>{
                alert("Error occured on reading the file.");
            });
            fileReader.readAsText(file);
        } else alert(`The file ${file.name} does not seem to be a valid JSON file.`);
    });
    $73231556861487e8$export$4e21a61e973c1a4b((file)=>{
        const fileReader = new FileReader();
        fileReader.addEventListener("load", (ev2)=>{
            const dataURL = ev2.target.result;
            const primitiveID = `custom-${$203735a0703e5edf$var$createPrimitiveID()}`;
            (0, $f6c78f0a19915526$export$59a9c9ef65470628)(primitiveID, dataURL);
            function clickHandler() {
                const symbol = $203735a0703e5edf$var$getID();
                $203735a0703e5edf$var$mandalaState.addPrimitive(symbol, (0, $f6c78f0a19915526$export$2e2bcd8739ae039)[primitiveID]);
                $203735a0703e5edf$var$changeSelection(symbol);
                return symbol;
            }
            function selectHandler(symbol) {
                $203735a0703e5edf$var$changeSelection(symbol);
            }
            function deleteHandler(symbol) {
                $203735a0703e5edf$var$mandalaState.removePrimitive(symbol);
                $203735a0703e5edf$var$changeSelection(null);
            }
            $73231556861487e8$export$fdf9dbee0c02fe1((0, $f6c78f0a19915526$export$2e2bcd8739ae039)[primitiveID], clickHandler, selectHandler, deleteHandler);
        });
        fileReader.addEventListener("error", ()=>{
            alert("Error occured on reading the file");
        });
        fileReader.readAsDataURL(file);
    });
    $73231556861487e8$export$9ee2b41e4dcbaae6((status)=>{
        $203735a0703e5edf$var$invert = status;
        $203735a0703e5edf$var$mandalaState.invertColor(status);
    // requestAnimationFrame(draw);
    });
    $73231556861487e8$export$b212597baa61b030((status)=>{
        $203735a0703e5edf$var$showIDs = status;
        $203735a0703e5edf$var$mandalaState.showIDs(status);
    // requestAnimationFrame(draw);
    });
    for(const id in 0, $f6c78f0a19915526$export$2e2bcd8739ae039){
        function clickHandler() {
            const symbol = $203735a0703e5edf$var$getID();
            $203735a0703e5edf$var$mandalaState.addPrimitive(symbol, (0, $f6c78f0a19915526$export$2e2bcd8739ae039)[id]);
            $203735a0703e5edf$var$changeSelection(symbol);
            return symbol;
        }
        function selectHandler(symbol) {
            $203735a0703e5edf$var$changeSelection(symbol);
        }
        function deleteHandler(symbol) {
            $203735a0703e5edf$var$mandalaState.removePrimitive(symbol);
            $203735a0703e5edf$var$changeSelection(null);
        }
        $73231556861487e8$export$fdf9dbee0c02fe1((0, $f6c78f0a19915526$export$2e2bcd8739ae039)[id], clickHandler, selectHandler, deleteHandler);
    }
    $203735a0703e5edf$var$parameters.forEach(({ name: name, min: min, max: max, step: step, initial: initial })=>{
        function inputHandler(value) {
            const props = {};
            props[name] = value;
            $203735a0703e5edf$var$mandalaState.updatePrimitiveState($203735a0703e5edf$var$selectionState.getState(), props);
            $73231556861487e8$export$5f9a34449e981849(name, value);
        // requestAnimationFrame(draw);
        }
        $73231556861487e8$export$3ea35af12150feed(name, {
            min: min,
            max: max,
            step: step,
            initial: initial
        }, inputHandler);
    });
    $73231556861487e8$export$c4cb4c0f4b881acc((flag)=>{
        $203735a0703e5edf$var$mandalaState.updatePrimitiveState($203735a0703e5edf$var$selectionState.getState(), {
            flip: flag
        });
        $73231556861487e8$export$4578028efb63ded9(flag);
    // requestAnimationFrame(draw);
    });
    $73231556861487e8$export$84e039264230ecb6((flag)=>{
        $203735a0703e5edf$var$mandalaState.updatePrimitiveState($203735a0703e5edf$var$selectionState.getState(), {
            invert: flag
        });
        $73231556861487e8$export$1cf87c88d8a5cdeb(flag);
    // requestAnimationFrame(draw);
    });
    $73231556861487e8$export$cd866fae0018b4e5((color)=>{
        $203735a0703e5edf$var$mandalaState.updatePrimitiveState($203735a0703e5edf$var$selectionState.getState(), {
            color: color
        });
    // this.requestAnimationFrame(draw);
    });
});
/* Helpers */ function $203735a0703e5edf$var$changeSelection(symbol) {
    $203735a0703e5edf$var$selectionState.changeState(symbol);
    $73231556861487e8$export$95bab07a9b863a39(symbol !== null);
    if (symbol !== null) {
        const props = $203735a0703e5edf$var$mandalaState.getPrimitiveState(symbol).props;
        $203735a0703e5edf$var$parameters.forEach((parameter)=>{
            $73231556861487e8$export$5f9a34449e981849(parameter.name, props[parameter.name]);
        });
        $73231556861487e8$export$4578028efb63ded9(props.flip);
        $73231556861487e8$export$1cf87c88d8a5cdeb(props.invert);
        $73231556861487e8$export$971eed6488a2a11d(props.color);
    }
// requestAnimationFrame(draw);
}
function $203735a0703e5edf$var$createMandalaStateFromJSON(jsonObj) {
    if (jsonObj.order === undefined) return null;
    const state = new (0, $359cce6af0fe8cc1$export$d9ec315994dbf675)(jsonObj.order);
    $203735a0703e5edf$var$getID = (0, $07fb702027535e1f$export$488f655523762531)(1);
    if (jsonObj.primitiveList) for (const { id: id, polarRadius: polarRadius, polarAngle: polarAngle, selfRotation: selfRotation, size: size, multiplicity: multiplicity, flip: flip, invert: invert, color: color = "black" } of jsonObj.primitiveList)state.addPrimitive($203735a0703e5edf$var$getID(), (0, $f6c78f0a19915526$export$2e2bcd8739ae039)[id], {
        distance: polarRadius,
        angle: $203735a0703e5edf$var$bringWithinRange(polarAngle, -180, 180),
        rotation: $203735a0703e5edf$var$bringWithinRange(selfRotation, -180, 180),
        scale: size,
        multiplicity: multiplicity,
        flip: flip,
        invert: invert,
        color: color
    });
    return state;
}
function $203735a0703e5edf$var$validateJSON(loadedJSON) {
    if (loadedJSON.order === undefined || loadedJSON.primitiveList === undefined || loadedJSON.invert === undefined) return false;
    const props = [
        "id",
        "polarRadius",
        "polarAngle",
        "selfRotation",
        "size",
        "multiplicity",
        "flip",
        "invert"
    ];
    const floats = [
        {
            name: "polarRadius",
            min: 0,
            max: 1
        },
        {
            name: "size",
            min: 0,
            max: 1
        }
    ];
    const numbers = [
        {
            name: "polarAngle"
        },
        {
            name: "selfRotation"
        }
    ];
    const booleans = [
        {
            name: "flip"
        },
        {
            name: "invert"
        }
    ];
    for (const primitive of loadedJSON.primitiveList){
        for (const prop of props)if (!prop in primitive) return false;
        for (const { name: name, min: min, max: max } of floats){
            const value = primitive[name];
            if (!Number.isFinite(value) || value < min || value > max) return false;
        }
        for (const { name: name } of numbers){
            const value = primitive[name];
            if (!Number.isFinite(value)) return false;
        }
        for (const { name: name } of booleans){
            const value = primitive[name];
            if (value !== true && value !== false) return false;
        }
        const multiplicity = primitive["multiplicity"];
        if (!Number.isInteger(multiplicity) || multiplicity < 0 || multiplicity > 1024) return false;
    }
    return true;
}
function $203735a0703e5edf$var$bringWithinRange(val, min, max) {
    const range = max - min;
    const shiftedVal = val - min;
    const inRangeVal = shiftedVal - Math.floor(shiftedVal / range) * range;
    const finalInRangeVal = inRangeVal + min;
    return finalInRangeVal;
}


