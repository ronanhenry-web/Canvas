// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"dist/drawings.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.drawing01 = drawing01;
exports.drawing02 = drawing02;
exports.drawing03 = drawing03;
exports.drawing04 = drawing04;
exports.drawing05 = drawing05;
exports.drawing06 = drawing06;
exports.drawing07 = drawing07;
exports.drawing08 = drawing08;
exports.drawing09 = drawing09;
exports.drawing10 = drawing10;
exports.drawing11 = drawing11;
exports.drawing12 = drawing12;
exports.drawing13 = drawing13;
exports.drawing14 = drawing14;
exports.drawing15 = drawing15;

function drawing01(canvas, context) {
  var side = 50;
  var margin = 10;
  context.fillStyle = "rgb(255, 0, 0)";
  context.fillRect(margin, margin, side, side);
}

function drawing02(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var margin = 10;
}

function drawing03(canvas, context) {}

function drawing04(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var side = 150;
  var triangleHeight = width * Math.sqrt(3) / 2;
  var center = [width / 2, height / 2];
  var a = [center[0] - width / 2, center[1] + triangleHeight / 3];
  var b = [center[0] + width / 2, center[1] + triangleHeight / 3];
  var c = [center[0], center[1] - triangleHeight * 2 / 3];
  var radius = 100;
}

function drawing05(canvas, context) {
  var side = 300;
  context.fillStyle = "#d4ce46";
}

function drawing06(canvas, context) {
  var rectWidth = 40;
  var lightColor = "#f4f4f6";
  var darkColor = "#adc8d2";
}

function drawing07(canvas, context) {
  var rectWidth = 40;
  var colorStart = [244, 244, 246];
  var colorEnd = [173, 200, 210];
  var steps = [0, 0, 0];

  for (var i = 0; i < 3; i++) {
    steps[i] = (colorEnd[i] - colorStart[i]) / (canvas.width / rectWidth);
  }
}

function drawing08(canvas, context) {
  var width = canvas.width;
  var height = canvas.height;
  var nbRectangles = 10;
  var colorStart = [244, 244, 246];
  var colorEnd = [173, 200, 210];
}

function drawing09(canvas, context) {
  var center = [canvas.width / 2, canvas.height / 2];
  var radius = 200;
  var nbSteps = 20;
  var colorStart = [244, 244, 246];
  var colorEnd = [173, 200, 210];
}

function drawing10(canvas, context) {
  var center = [canvas.width / 2, canvas.height / 2];
  var pokeballRadius = 200;
  var externalRadius = 50;
  var internalRadius = 30;
  var pokeballRedColor = "#ee343c";
  var pokeballStrokeColor = "#171013";
}

function drawing11(canvas, context) {
  var side = 20;
  var lightColor = "#f4f4f6";
  var darkColor = "#adc8d2";
}

function drawing12(canvas, context) {
  var side = 40;
  var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
  var blueColor = 255;
}

function drawing13(canvas, context) {
  var side = 40;
  var redGreenSteps = [255 / (canvas.width / side), 255 / (canvas.height / side)];
  var blueColor = 255;
  var arcSteps = [Math.PI / (canvas.width / side), Math.PI / (canvas.height / side)];
}

function drawing14(canvas, context) {
  var side = 100;
  var radius = 10;
  var lightColor = "#f4f4f6";
  var darkColor = "#adc8d2";
}

function drawing15(canvas, context) {}
},{}],"dist/expected.js":[function(require,module,exports) {
var _0x180a = ['drawing01', 'drawing05', '#171013', 'beginPath', 'drawing02', 'moveTo', 'height', '__esModule', 'fillStyle', 'strokeStyle', 'rgb(0,\x20255,\x200)', '#ee343c', 'drawing06', 'drawing08', 'drawing04', 'rgb(', 'fill', 'rgb(255,\x20255,\x20255)', 'drawing12', 'rgb(0,\x200,\x20255,\x20.5)', 'drawing09', 'lineWidth', 'drawing15', 'arc', 'rgb(255,\x200,\x200)', '#d4ce46', 'stroke', '#f4f4f6', 'rgb(0,\x20255,\x200,\x20.5)', 'drawing14', 'fillRect', 'sqrt', '#adc8d2', 'rgb(255,\x200,\x200,\x20.5)', 'lineTo', 'drawing10', 'rgb(0,\x200,\x20255)', 'drawing07', 'width', 'drawing03'];

(function (_0x48dfaa, _0x18b764) {
  var _0x180a78 = function _0x180a78(_0xb5694f) {
    while (--_0xb5694f) {
      _0x48dfaa['push'](_0x48dfaa['shift']());
    }
  };

  _0x180a78(++_0x18b764);
})(_0x180a, 0x187);

var _0xb569 = function _0xb569(_0x48dfaa, _0x18b764) {
  _0x48dfaa = _0x48dfaa - 0x170;
  var _0x180a78 = _0x180a[_0x48dfaa];
  return _0x180a78;
};

var _0x3a187a = _0xb569;
'use strict';

exports[_0x3a187a(0x180)] = !![], exports[_0x3a187a(0x18f)] = exports[_0x3a187a(0x196)] = exports['drawing13'] = exports['drawing12'] = exports['drawing11'] = exports[_0x3a187a(0x174)] = exports[_0x3a187a(0x18d)] = exports[_0x3a187a(0x186)] = exports['drawing07'] = exports[_0x3a187a(0x185)] = exports[_0x3a187a(0x17a)] = exports['drawing04'] = exports[_0x3a187a(0x178)] = exports[_0x3a187a(0x17d)] = exports[_0x3a187a(0x179)] = void 0x0;

function drawing01(_0x276be0, _0x45c285) {
  var _0x177641 = _0x3a187a;
  _0x45c285['fillStyle'] = _0x177641(0x191), _0x45c285['fillRect'](0xa, 0xa, 0x32, 0x32), _0x45c285[_0x177641(0x181)] = _0x177641(0x183), _0x45c285['fillRect'](0x46, 0xa, 0x32, 0x32), _0x45c285['fillStyle'] = _0x177641(0x175), _0x45c285[_0x177641(0x197)](0x82, 0xa, 0x32, 0x32);
}

exports['drawing01'] = drawing01;

function drawing02(_0x59ee07, _0x232e91) {
  var _0x4c5dd8 = _0x3a187a,
      _0x2c5ead = (_0x59ee07[_0x4c5dd8(0x177)] - 0x28) / 0x3,
      _0x4050e6 = _0x59ee07[_0x4c5dd8(0x17f)] - 0x14;

  _0x232e91[_0x4c5dd8(0x181)] = 'rgb(255,\x200,\x200)', _0x232e91[_0x4c5dd8(0x197)](0xa, 0xa, _0x2c5ead, _0x4050e6), _0x232e91[_0x4c5dd8(0x181)] = _0x4c5dd8(0x183), _0x232e91[_0x4c5dd8(0x197)](_0x2c5ead + 0x14, 0xa, _0x2c5ead, _0x4050e6), _0x232e91[_0x4c5dd8(0x181)] = _0x4c5dd8(0x175), _0x232e91[_0x4c5dd8(0x197)](_0x2c5ead * 0x2 + 0x1e, 0xa, _0x2c5ead, _0x4050e6);
}

exports[_0x3a187a(0x17d)] = drawing02;

function drawing03(_0x4a1337, _0x4b4acb) {
  var _0x325cb0 = _0x3a187a,
      _0xa2566e = _0x4a1337[_0x325cb0(0x177)] - 0x14,
      _0x1d82d7 = (_0x4a1337[_0x325cb0(0x17f)] - 0x28) / 0x3;

  _0x4b4acb['fillStyle'] = _0x325cb0(0x191), _0x4b4acb[_0x325cb0(0x197)](0xa, 0xa, _0xa2566e, _0x1d82d7), _0x4b4acb[_0x325cb0(0x181)] = 'rgb(0,\x20255,\x200)', _0x4b4acb['fillRect'](0xa, _0x1d82d7 + 0x14, _0xa2566e, _0x1d82d7), _0x4b4acb[_0x325cb0(0x181)] = _0x325cb0(0x175), _0x4b4acb['fillRect'](0xa, _0x1d82d7 * 0x2 + 0x1e, _0xa2566e, _0x1d82d7);
}

exports[_0x3a187a(0x178)] = drawing03;

function drawing04(_0x4f4ff4, _0x1a29ab) {
  var _0x5c6f67 = _0x3a187a,
      _0x250ab8 = 0x96,
      _0x28f6c5 = _0x250ab8 * Math['sqrt'](0x3) / 0x2,
      _0x1b3510 = [_0x4f4ff4[_0x5c6f67(0x177)] / 0x2, _0x4f4ff4[_0x5c6f67(0x17f)] / 0x2],
      _0x44700c = [_0x1b3510[0x0] - _0x250ab8 / 0x2, _0x1b3510[0x1] + _0x28f6c5 / 0x3],
      _0x42f57f = [_0x1b3510[0x0] + _0x250ab8 / 0x2, _0x1b3510[0x1] + _0x28f6c5 / 0x3],
      _0x402572 = [_0x1b3510[0x0], _0x1b3510[0x1] - _0x28f6c5 * 0x2 / 0x3],
      _0x45bfa1 = 0x64;

  _0x1a29ab[_0x5c6f67(0x181)] = _0x5c6f67(0x172), _0x1a29ab[_0x5c6f67(0x17c)](), _0x1a29ab[_0x5c6f67(0x190)](_0x44700c[0x0], _0x44700c[0x1], _0x45bfa1, 0x0, 0x2 * Math['PI']), _0x1a29ab[_0x5c6f67(0x189)](), _0x1a29ab[_0x5c6f67(0x181)] = _0x5c6f67(0x195), _0x1a29ab[_0x5c6f67(0x17c)](), _0x1a29ab[_0x5c6f67(0x190)](_0x42f57f[0x0], _0x42f57f[0x1], _0x45bfa1, 0x0, 0x2 * Math['PI']), _0x1a29ab[_0x5c6f67(0x189)](), _0x1a29ab[_0x5c6f67(0x181)] = _0x5c6f67(0x18c), _0x1a29ab[_0x5c6f67(0x17c)](), _0x1a29ab[_0x5c6f67(0x190)](_0x402572[0x0], _0x402572[0x1], _0x45bfa1, 0x0, 0x2 * Math['PI']), _0x1a29ab[_0x5c6f67(0x189)]();
}

exports[_0x3a187a(0x187)] = drawing04;

function drawing05(_0x20364f, _0x31430f) {
  var _0x5dfc14 = _0x3a187a,
      _0x3ea1f4 = 0x12c,
      _0x2bec25 = _0x3ea1f4 * Math[_0x5dfc14(0x170)](0x3) / 0x2,
      _0x2f550d = [_0x20364f[_0x5dfc14(0x177)] / 0x2, _0x20364f[_0x5dfc14(0x17f)] / 0x2],
      _0x3c43ac = [_0x2f550d[0x0] - _0x3ea1f4 / 0x2, _0x2f550d[0x1] + _0x2bec25 / 0x3],
      _0x2ad43b = [_0x2f550d[0x0] + _0x3ea1f4 / 0x2, _0x2f550d[0x1] + _0x2bec25 / 0x3],
      _0x10ba22 = [_0x2f550d[0x0], _0x2f550d[0x1] - _0x2bec25 * 0x2 / 0x3];

  _0x31430f['fillStyle'] = _0x5dfc14(0x192), _0x31430f[_0x5dfc14(0x17c)](), _0x31430f[_0x5dfc14(0x17e)](_0x3c43ac[0x0], _0x3c43ac[0x1]), _0x31430f[_0x5dfc14(0x173)](_0x2ad43b[0x0], _0x2ad43b[0x1]), _0x31430f[_0x5dfc14(0x173)](_0x10ba22[0x0], _0x10ba22[0x1]), _0x31430f['fill'](), _0x31430f[_0x5dfc14(0x17c)](), _0x31430f[_0x5dfc14(0x181)] = _0x5dfc14(0x18a), _0x31430f[_0x5dfc14(0x17e)]((_0x3c43ac[0x0] + _0x10ba22[0x0]) / 0x2, (_0x3c43ac[0x1] + _0x10ba22[0x1]) / 0x2), _0x31430f[_0x5dfc14(0x173)]((_0x2ad43b[0x0] + _0x10ba22[0x0]) / 0x2, (_0x2ad43b[0x1] + _0x10ba22[0x1]) / 0x2), _0x31430f[_0x5dfc14(0x173)](_0x10ba22[0x0], _0x3c43ac[0x1]), _0x31430f[_0x5dfc14(0x189)]();
}

exports['drawing05'] = drawing05;

function drawing06(_0x81a7a, _0x3a609e) {
  var _0x32a73d = _0x3a187a,
      _0x32b7b7 = 0x28;

  for (var _0x29d884 = 0x0; _0x29d884 < _0x81a7a['width'] / _0x32b7b7; _0x29d884++) {
    _0x29d884 % 0x2 == 0x0 ? _0x3a609e[_0x32a73d(0x181)] = _0x32a73d(0x194) : _0x3a609e[_0x32a73d(0x181)] = '#adc8d2', _0x3a609e[_0x32a73d(0x197)](_0x32b7b7 * _0x29d884, 0x0, _0x32b7b7, _0x81a7a[_0x32a73d(0x17f)]);
  }
}

exports[_0x3a187a(0x185)] = drawing06;

function drawing07(_0x1a0385, _0x1470b9) {
  var _0x2f9d21 = _0x3a187a,
      _0x15d647 = 0x28,
      _0x2ad357 = [0xf4, 0xf4, 0xf6],
      _0x56860a = [0xad, 0xc8, 0xd2],
      _0x2e1878 = [0x0, 0x0, 0x0];

  for (var _0x48e140 = 0x0; _0x48e140 < 0x3; _0x48e140++) {
    _0x2e1878[_0x48e140] = (_0x56860a[_0x48e140] - _0x2ad357[_0x48e140]) / (_0x1a0385['width'] / _0x15d647);
  }

  for (var _0x48e140 = 0x0; _0x48e140 < _0x1a0385[_0x2f9d21(0x177)] / _0x15d647; _0x48e140++) {
    _0x1470b9[_0x2f9d21(0x181)] = _0x2f9d21(0x188) + (_0x2ad357[0x0] + _0x48e140 * _0x2e1878[0x0]) + ',\x20' + (_0x2ad357[0x1] + _0x48e140 * _0x2e1878[0x1]) + ',\x20' + (_0x2ad357[0x2] + _0x48e140 * _0x2e1878[0x2]), _0x1470b9[_0x2f9d21(0x197)](_0x15d647 * _0x48e140, 0x0, _0x15d647, _0x1a0385[_0x2f9d21(0x17f)]);
  }
}

exports[_0x3a187a(0x176)] = drawing07;

function drawing08(_0x3e473d, _0xee7d9c) {
  var _0x18adae = _0x3a187a,
      _0x468b3f = _0x3e473d[_0x18adae(0x177)],
      _0x4513ce = _0x3e473d['height'],
      _0x268965 = 0xa,
      _0x45ea21 = [0xf4, 0xf4, 0xf6],
      _0x11b72d = [0xad, 0xc8, 0xd2],
      _0x2aa07b = [0x0, 0x0, 0x0];

  for (var _0x1e2a94 = 0x0; _0x1e2a94 < 0x3; _0x1e2a94++) {
    _0x2aa07b[_0x1e2a94] = (_0x11b72d[_0x1e2a94] - _0x45ea21[_0x1e2a94]) / _0x268965;
  }

  for (var _0x1e2a94 = 0x0; _0x1e2a94 < _0x268965; _0x1e2a94++) {
    _0xee7d9c[_0x18adae(0x181)] = _0x18adae(0x188) + (_0x45ea21[0x0] + _0x1e2a94 * _0x2aa07b[0x0]) + ',\x20' + (_0x45ea21[0x1] + _0x1e2a94 * _0x2aa07b[0x1]) + ',\x20' + (_0x45ea21[0x2] + _0x1e2a94 * _0x2aa07b[0x2]), _0xee7d9c[_0x18adae(0x197)](0x0, _0x1e2a94 * _0x4513ce / _0x268965, (_0x268965 - _0x1e2a94) / _0x268965 * _0x468b3f, (_0x268965 - _0x1e2a94) / _0x268965 * _0x4513ce);
  }
}

exports[_0x3a187a(0x186)] = drawing08;

function drawing09(_0x5a9faa, _0x2f594c) {
  var _0xfce8b = _0x3a187a,
      _0xc4745 = [_0x5a9faa['width'] / 0x2, _0x5a9faa[_0xfce8b(0x17f)] / 0x2],
      _0x1d1b33 = 0xc8,
      _0x2169d4 = 0x14,
      _0xfccb41 = [0xf4, 0xf4, 0xf6],
      _0x4c63aa = [0xad, 0xc8, 0xd2],
      _0xe1689f = [0x0, 0x0, 0x0];

  for (var _0x2d8c02 = 0x0; _0x2d8c02 < 0x3; _0x2d8c02++) {
    _0xe1689f[_0x2d8c02] = (_0x4c63aa[_0x2d8c02] - _0xfccb41[_0x2d8c02]) / _0x2169d4;
  }

  for (var _0x2d8c02 = 0x0; _0x2d8c02 < _0x2169d4; _0x2d8c02++) {
    _0x2f594c[_0xfce8b(0x181)] = _0xfce8b(0x188) + (_0xfccb41[0x0] + _0x2d8c02 * _0xe1689f[0x0]) + ',\x20' + (_0xfccb41[0x1] + _0x2d8c02 * _0xe1689f[0x1]) + ',\x20' + (_0xfccb41[0x2] + _0x2d8c02 * _0xe1689f[0x2]), _0x2f594c[_0xfce8b(0x17c)](), _0x2f594c['arc'](_0xc4745[0x0], _0xc4745[0x1], _0x1d1b33, _0x2d8c02 * Math['PI'] * 0x2 / _0x2169d4, (_0x2d8c02 + 0x1) * Math['PI'] * 0x2 / _0x2169d4), _0x2f594c[_0xfce8b(0x173)](_0xc4745[0x0], _0xc4745[0x1]), _0x2f594c['fill']();
  }
}

exports[_0x3a187a(0x18d)] = drawing09;

function drawing10(_0x529c15, _0x2032f7) {
  var _0x4e0058 = _0x3a187a,
      _0x34520d = [_0x529c15['width'] / 0x2, _0x529c15['height'] / 0x2],
      _0x5dba4e = 0xc8,
      _0x4b093f = 0x32,
      _0x521d8d = 0x1e;
  _0x2032f7['fillStyle'] = _0x4e0058(0x184), _0x2032f7['beginPath'](), _0x2032f7['arc'](_0x34520d[0x0], _0x34520d[0x1], _0x5dba4e, Math['PI'], Math['PI'] * 0x2), _0x2032f7[_0x4e0058(0x189)](), _0x2032f7[_0x4e0058(0x181)] = _0x4e0058(0x18a), _0x2032f7['beginPath'](), _0x2032f7[_0x4e0058(0x190)](_0x34520d[0x0], _0x34520d[0x1], _0x4b093f, 0x0, Math['PI'] * 0x2), _0x2032f7[_0x4e0058(0x189)](), _0x2032f7[_0x4e0058(0x182)] = _0x4e0058(0x17b), _0x2032f7[_0x4e0058(0x18e)] = 0x5, _0x2032f7[_0x4e0058(0x17c)](), _0x2032f7[_0x4e0058(0x17c)](), _0x2032f7[_0x4e0058(0x190)](_0x34520d[0x0], _0x34520d[0x1], _0x521d8d, 0x0, Math['PI'] * 0x2), _0x2032f7['stroke'](), _0x2032f7[_0x4e0058(0x18e)] = 0xa, _0x2032f7[_0x4e0058(0x17c)](), _0x2032f7[_0x4e0058(0x190)](_0x34520d[0x0], _0x34520d[0x1], _0x5dba4e, 0x0, Math['PI'] * 0x2), _0x2032f7['stroke'](), _0x2032f7[_0x4e0058(0x18e)] = 0xf, _0x2032f7[_0x4e0058(0x17c)](), _0x2032f7['moveTo'](_0x34520d[0x0] - _0x5dba4e, _0x34520d[0x1]), _0x2032f7[_0x4e0058(0x173)](_0x34520d[0x0] - _0x4b093f, _0x34520d[0x1]), _0x2032f7['moveTo'](_0x34520d[0x0] + _0x4b093f, _0x34520d[0x1]), _0x2032f7[_0x4e0058(0x173)](_0x34520d[0x0] + _0x5dba4e, _0x34520d[0x1]), _0x2032f7[_0x4e0058(0x190)](_0x34520d[0x0], _0x34520d[0x1], _0x4b093f, 0x0, Math['PI'] * 0x2), _0x2032f7[_0x4e0058(0x193)]();
}

exports[_0x3a187a(0x174)] = drawing10;

function drawing11(_0x265652, _0x13d145) {
  var _0x74ad3d = _0x3a187a,
      _0x23548e = 0x14;

  for (var _0x495065 = 0x0; _0x495065 < _0x265652[_0x74ad3d(0x177)] / _0x23548e; _0x495065++) {
    for (var _0xbe3550 = 0x0; _0xbe3550 < _0x265652[_0x74ad3d(0x17f)] / _0x23548e; _0xbe3550++) {
      (_0x495065 + _0xbe3550) % 0x2 == 0x0 ? _0x13d145[_0x74ad3d(0x181)] = '#f4f4f6' : _0x13d145['fillStyle'] = '#adc8d2', _0x13d145[_0x74ad3d(0x197)](_0x23548e * _0x495065, _0x23548e * _0xbe3550, _0x23548e, _0x23548e);
    }
  }
}

exports['drawing11'] = drawing11;

function drawing12(_0xf64a9e, _0x39a6b7) {
  var _0x1fa09a = _0x3a187a,
      _0x325f2a = 0x28,
      _0x393fc1 = [0xff / (_0xf64a9e[_0x1fa09a(0x177)] / _0x325f2a), 0xff / (_0xf64a9e[_0x1fa09a(0x17f)] / _0x325f2a)];

  for (var _0x19bced = 0x0; _0x19bced < _0xf64a9e[_0x1fa09a(0x177)] / _0x325f2a; _0x19bced++) {
    for (var _0x583b29 = 0x0; _0x583b29 < _0xf64a9e[_0x1fa09a(0x17f)] / _0x325f2a; _0x583b29++) {
      _0x39a6b7[_0x1fa09a(0x181)] = _0x1fa09a(0x188) + (_0x19bced + 0x1) * _0x393fc1[0x0] + ',\x20' + (_0x583b29 + 0x1) * _0x393fc1[0x1] + ',\x20' + 0xff + ')', _0x39a6b7[_0x1fa09a(0x197)](_0x325f2a * _0x19bced, _0x325f2a * _0x583b29, _0x325f2a, _0x325f2a);
    }
  }
}

exports[_0x3a187a(0x18b)] = drawing12;

function drawing13(_0x567c79, _0x166a09) {
  var _0xb32e3c = _0x3a187a,
      _0x3c1a48 = 0x28,
      _0x46d0f2 = [0xff / (_0x567c79[_0xb32e3c(0x177)] / _0x3c1a48), 0xff / (_0x567c79[_0xb32e3c(0x17f)] / _0x3c1a48)],
      _0x53a25c = [Math['PI'] / (_0x567c79[_0xb32e3c(0x177)] / _0x3c1a48), Math['PI'] / (_0x567c79[_0xb32e3c(0x17f)] / _0x3c1a48)];

  for (var _0x18bbad = 0x0; _0x18bbad < _0x567c79[_0xb32e3c(0x177)] / _0x3c1a48; _0x18bbad++) {
    for (var _0x4b56be = 0x0; _0x4b56be < _0x567c79[_0xb32e3c(0x17f)] / _0x3c1a48; _0x4b56be++) {
      _0x166a09['fillStyle'] = _0xb32e3c(0x188) + _0x18bbad * _0x46d0f2[0x0] + ',\x20' + _0x4b56be * _0x46d0f2[0x1] + ',\x20' + 0xff + ')', _0x166a09['beginPath'](), _0x166a09[_0xb32e3c(0x18e)] = 0x2, _0x166a09[_0xb32e3c(0x190)](_0x18bbad * _0x3c1a48 + _0x3c1a48 / 0x2, _0x4b56be * _0x3c1a48 + _0x3c1a48 / 0x2, _0x3c1a48 * 0x2 / 0x5, 0x0, _0x53a25c[0x0] * _0x18bbad + _0x53a25c[0x1] * _0x4b56be), _0x166a09[_0xb32e3c(0x189)]();
    }
  }
}

exports['drawing13'] = drawing13;

function drawing14(_0x28e9d6, _0x292c2d) {
  var _0x3a8944 = _0x3a187a,
      _0x26ea77 = 0x64,
      _0x1bb747 = 0xa;

  for (var _0x1e118a = 0x0; _0x1e118a < _0x28e9d6[_0x3a8944(0x177)] / _0x26ea77; _0x1e118a++) {
    for (var _0x5eae9e = 0x0; _0x5eae9e < _0x28e9d6[_0x3a8944(0x17f)] / _0x26ea77; _0x5eae9e++) {
      (_0x1e118a + _0x5eae9e) % 0x2 == 0x0 ? _0x292c2d[_0x3a8944(0x181)] = _0x3a8944(0x194) : _0x292c2d[_0x3a8944(0x181)] = _0x3a8944(0x171);

      _0x292c2d[_0x3a8944(0x197)](_0x26ea77 * _0x1e118a, _0x26ea77 * _0x5eae9e, _0x26ea77, _0x26ea77);

      for (var _0x45707d = 0x0; _0x45707d < _0x26ea77 / (_0x1bb747 * 0x2); _0x45707d++) {
        for (var _0x108f8e = 0x0; _0x108f8e < _0x26ea77 / (_0x1bb747 * 0x2); _0x108f8e++) {
          (_0x1e118a + _0x5eae9e) % 0x2 == 0x0 ? _0x45707d == _0x108f8e ? _0x292c2d[_0x3a8944(0x181)] = _0x3a8944(0x194) : _0x292c2d[_0x3a8944(0x181)] = _0x3a8944(0x171) : _0x45707d == _0x108f8e ? _0x292c2d[_0x3a8944(0x181)] = '#adc8d2' : _0x292c2d[_0x3a8944(0x181)] = _0x3a8944(0x194), _0x292c2d[_0x3a8944(0x17c)](), _0x292c2d[_0x3a8944(0x190)](_0x26ea77 * _0x1e118a + _0x1bb747 * 0x2 * _0x45707d + _0x1bb747, _0x26ea77 * _0x5eae9e + _0x1bb747 * 0x2 * _0x108f8e + _0x1bb747, _0x1bb747, 0x0, Math['PI'] * 0x2), _0x292c2d[_0x3a8944(0x189)]();
        }
      }
    }
  }
}

exports['drawing14'] = drawing14;

function drawing15(_0x13608e, _0x2fb8c) {}

exports['drawing15'] = drawing15;
},{}],"dist/index.js":[function(require,module,exports) {
"use strict";

var drawings = _interopRequireWildcard(require("./drawings"));

var expected = _interopRequireWildcard(require("./expected"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var drawingCvs = document.getElementById("drawing");
var expectedCvs = document.getElementById("expected");
var drawingCtx = drawingCvs.getContext("2d");
var expectedCtx = expectedCvs.getContext("2d");
var buttons = document.getElementById("buttons");
var NB_DRAWINGS = 15;
var buttonsString = "";

for (var i = 1; i <= NB_DRAWINGS; i++) {
  buttonsString += "<button id=\"" + i + "\" >Dessin n\xB0" + i + "</button>";
}

var doubleDigitsFormat = new Intl.NumberFormat("en-IN", {
  minimumIntegerDigits: 2
});
buttons.innerHTML = buttonsString;

var _loop_1 = function _loop_1(i) {
  document.getElementById("" + i).onclick = function () {
    eraseCanvas();
    drawings["drawing" + doubleDigitsFormat.format(i)].apply(this, [drawingCvs, drawingCtx]);
    expected["drawing" + doubleDigitsFormat.format(i)].apply(this, [expectedCvs, expectedCtx]);
  };
};

for (var i = 1; i < NB_DRAWINGS; i++) {
  _loop_1(i);
}

document.getElementById("15").onclick = function () {
  eraseCanvas();
  drawings.drawing15(drawingCvs, drawingCtx);
  drawings.drawing15(expectedCvs, expectedCtx);
};

function eraseCanvas() {
  drawingCtx.clearRect(0, 0, drawingCvs.width, drawingCvs.height);
  expectedCtx.clearRect(0, 0, expectedCvs.width, expectedCvs.height);
}
},{"./drawings":"dist/drawings.js","./expected":"dist/expected.js"}],"../../../../../../../.nvm/versions/node/v12.0.0/lib/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "37783" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../../../../.nvm/versions/node/v12.0.0/lib/node_modules/parcel/src/builtins/hmr-runtime.js","dist/index.js"], null)
//# sourceMappingURL=/dist.de44d8ea.js.map