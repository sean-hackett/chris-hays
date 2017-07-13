/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var coordinates = __webpack_require__(2);

function initMap() {
  var mnCenter = {lat: 46.459, lng: -93.685};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: mnCenter
  });
  var marker = new google.maps.Marker({
    position: mnCenter,
    map: map
  });
  var testCoords = new google.maps.Polygon({
    paths: coordinates,
    strokeColor: '#FF0000',
    strokeOpacity: 0.8,
    strokeWeight: 10,
    fillColor: '#FF0000',
    fillOpacity: 0.35
  });
  testCoords.setMap(map);
}

window.initMap = initMap;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [
	{
		"lat": -96.57216,
		"lng": 46.12486
	},
	{
		"lat": -96.59199,
		"lng": 46.21554
	},
	{
		"lat": -96.60042,
		"lng": 46.32698
	},
	{
		"lat": -96.69318,
		"lng": 46.41556
	},
	{
		"lat": -96.71908,
		"lng": 46.4675
	},
	{
		"lat": -96.73971,
		"lng": 46.52548
	},
	{
		"lat": -96.75432,
		"lng": 46.57556
	},
	{
		"lat": -96.78652,
		"lng": 46.6189
	},
	{
		"lat": -96.79675,
		"lng": 46.80371
	},
	{
		"lat": -96.83533,
		"lng": 47.14864
	},
	{
		"lat": -96.83662,
		"lng": 47.21724
	},
	{
		"lat": -96.84191,
		"lng": 47.28515
	},
	{
		"lat": -96.83686,
		"lng": 47.37287
	},
	{
		"lat": -96.85824,
		"lng": 47.44293
	},
	{
		"lat": -96.85894,
		"lng": 47.51493
	},
	{
		"lat": -96.85885,
		"lng": 47.59587
	},
	{
		"lat": -96.93103,
		"lng": 47.71572
	},
	{
		"lat": -96.99136,
		"lng": 47.80794
	},
	{
		"lat": -97.01554,
		"lng": 47.90646
	},
	{
		"lat": -97.13601,
		"lng": 48.17704
	},
	{
		"lat": -97.12893,
		"lng": 48.45813
	},
	{
		"lat": -97.13104,
		"lng": 48.61319
	},
	{
		"lat": -97.13643,
		"lng": 48.7473
	},
	{
		"lat": -97.17801,
		"lng": 48.83509
	},
	{
		"lat": -97.23062,
		"lng": 48.96428
	},
	{
		"lat": -97.22739,
		"lng": 49.00068
	},
	{
		"lat": -96.80016,
		"lng": 48.99998
	},
	{
		"lat": -96.25029,
		"lng": 48.99998
	},
	{
		"lat": -95.85602,
		"lng": 48.99975
	},
	{
		"lat": -95.65843,
		"lng": 48.99944
	},
	{
		"lat": -95.3754,
		"lng": 48.99893
	},
	{
		"lat": -95.15338,
		"lng": 49.24573
	},
	{
		"lat": -95.15329,
		"lng": 49.36931
	},
	{
		"lat": -94.97427,
		"lng": 49.36754
	},
	{
		"lat": -94.69035,
		"lng": 48.86383
	},
	{
		"lat": -94.68236,
		"lng": 48.77344
	},
	{
		"lat": -94.58753,
		"lng": 48.71748
	},
	{
		"lat": -94.44406,
		"lng": 48.69349
	},
	{
		"lat": -94.33316,
		"lng": 48.70394
	},
	{
		"lat": -94.18861,
		"lng": 48.64995
	},
	{
		"lat": -93.97652,
		"lng": 48.63752
	},
	{
		"lat": -93.8879,
		"lng": 48.63087
	},
	{
		"lat": -93.81207,
		"lng": 48.58493
	},
	{
		"lat": -93.78465,
		"lng": 48.51546
	},
	{
		"lat": -93.71423,
		"lng": 48.51784
	},
	{
		"lat": -93.63118,
		"lng": 48.53058
	},
	{
		"lat": -93.58968,
		"lng": 48.52897
	},
	{
		"lat": -93.49543,
		"lng": 48.54183
	},
	{
		"lat": -93.4597,
		"lng": 48.59213
	},
	{
		"lat": -93.42127,
		"lng": 48.6028
	},
	{
		"lat": -93.39395,
		"lng": 48.60336
	},
	{
		"lat": -93.35276,
		"lng": 48.61654
	},
	{
		"lat": -93.14451,
		"lng": 48.62482
	},
	{
		"lat": -92.71255,
		"lng": 48.54083
	},
	{
		"lat": -92.63735,
		"lng": 48.49936
	},
	{
		"lat": -92.66327,
		"lng": 48.44018
	},
	{
		"lat": -92.48163,
		"lng": 48.42745
	},
	{
		"lat": -92.45383,
		"lng": 48.3297
	},
	{
		"lat": -92.39305,
		"lng": 48.25904
	},
	{
		"lat": -92.3877,
		"lng": 48.24709
	},
	{
		"lat": -92.37944,
		"lng": 48.23581
	},
	{
		"lat": -92.37313,
		"lng": 48.22359
	},
	{
		"lat": -92.36817,
		"lng": 48.22359
	},
	{
		"lat": -92.35383,
		"lng": 48.2291
	},
	{
		"lat": -92.33717,
		"lng": 48.2348
	},
	{
		"lat": -92.32175,
		"lng": 48.23731
	},
	{
		"lat": -92.30145,
		"lng": 48.28861
	},
	{
		"lat": -92.19357,
		"lng": 48.34861
	},
	{
		"lat": -92.04656,
		"lng": 48.33474
	},
	{
		"lat": -91.98016,
		"lng": 48.24758
	},
	{
		"lat": -91.97444,
		"lng": 48.24556
	},
	{
		"lat": -91.9564,
		"lng": 48.25223
	},
	{
		"lat": -91.94071,
		"lng": 48.23202
	},
	{
		"lat": -91.90642,
		"lng": 48.23741
	},
	{
		"lat": -91.86788,
		"lng": 48.2191
	},
	{
		"lat": -91.8344,
		"lng": 48.2098
	},
	{
		"lat": -91.78504,
		"lng": 48.1973
	},
	{
		"lat": -91.75519,
		"lng": 48.20376
	},
	{
		"lat": -91.71147,
		"lng": 48.19534
	},
	{
		"lat": -91.70851,
		"lng": 48.15271
	},
	{
		"lat": -91.69826,
		"lng": 48.14116
	},
	{
		"lat": -91.69252,
		"lng": 48.11667
	},
	{
		"lat": -91.66566,
		"lng": 48.10724
	},
	{
		"lat": -91.62512,
		"lng": 48.09995
	},
	{
		"lat": -91.5743,
		"lng": 48.07224
	},
	{
		"lat": -91.4513,
		"lng": 48.06866
	},
	{
		"lat": -91.43809,
		"lng": 48.05174
	},
	{
		"lat": -91.37766,
		"lng": 48.06629
	},
	{
		"lat": -91.33386,
		"lng": 48.06933
	},
	{
		"lat": -91.29359,
		"lng": 48.07379
	},
	{
		"lat": -91.13788,
		"lng": 48.15117
	},
	{
		"lat": -91.0868,
		"lng": 48.17855
	},
	{
		"lat": -91.04614,
		"lng": 48.18875
	},
	{
		"lat": -91.02156,
		"lng": 48.19276
	},
	{
		"lat": -90.88146,
		"lng": 48.24047
	},
	{
		"lat": -90.83719,
		"lng": 48.22413
	},
	{
		"lat": -90.83615,
		"lng": 48.17682
	},
	{
		"lat": -90.81109,
		"lng": 48.17965
	},
	{
		"lat": -90.79043,
		"lng": 48.15999
	},
	{
		"lat": -90.77803,
		"lng": 48.14872
	},
	{
		"lat": -90.78739,
		"lng": 48.1357
	},
	{
		"lat": -90.78402,
		"lng": 48.1281
	},
	{
		"lat": -90.77312,
		"lng": 48.11763
	},
	{
		"lat": -90.63019,
		"lng": 48.10999
	},
	{
		"lat": -90.55791,
		"lng": 48.11982
	},
	{
		"lat": -90.47763,
		"lng": 48.10546
	},
	{
		"lat": -90.37582,
		"lng": 48.09121
	},
	{
		"lat": -90.30693,
		"lng": 48.1053
	},
	{
		"lat": -90.14479,
		"lng": 48.11182
	},
	{
		"lat": -90.05966,
		"lng": 48.0968
	},
	{
		"lat": -89.99647,
		"lng": 48.03777
	},
	{
		"lat": -89.97881,
		"lng": 48.02382
	},
	{
		"lat": -89.94916,
		"lng": 48.0157
	},
	{
		"lat": -89.92642,
		"lng": 48.00181
	},
	{
		"lat": -89.88071,
		"lng": 47.98641
	},
	{
		"lat": -89.84505,
		"lng": 48.00265
	},
	{
		"lat": -89.82402,
		"lng": 48.01108
	},
	{
		"lat": -89.78573,
		"lng": 48.01782
	},
	{
		"lat": -89.74601,
		"lng": 48.0218
	},
	{
		"lat": -89.71965,
		"lng": 48.01818
	},
	{
		"lat": -89.70753,
		"lng": 48.00993
	},
	{
		"lat": -89.66875,
		"lng": 48.00801
	},
	{
		"lat": -89.63813,
		"lng": 48.00744
	},
	{
		"lat": -89.60912,
		"lng": 48.01075
	},
	{
		"lat": -89.58569,
		"lng": 48.00102
	},
	{
		"lat": -89.4892,
		"lng": 48.01453
	},
	{
		"lat": -89.48338,
		"lng": 48.01372
	},
	{
		"lat": -89.48886,
		"lng": 48.00558
	},
	{
		"lat": -89.49214,
		"lng": 47.99989
	},
	{
		"lat": -89.50009,
		"lng": 47.98854
	},
	{
		"lat": -89.54816,
		"lng": 47.91636
	},
	{
		"lat": -89.57552,
		"lng": 47.87488
	},
	{
		"lat": -89.62517,
		"lng": 47.79955
	},
	{
		"lat": -89.64102,
		"lng": 47.77511
	},
	{
		"lat": -89.65745,
		"lng": 47.7499
	},
	{
		"lat": -89.68073,
		"lng": 47.71455
	},
	{
		"lat": -89.70864,
		"lng": 47.67166
	},
	{
		"lat": -89.73907,
		"lng": 47.6249
	},
	{
		"lat": -89.75011,
		"lng": 47.60824
	},
	{
		"lat": -89.79228,
		"lng": 47.54291
	},
	{
		"lat": -89.82003,
		"lng": 47.49991
	},
	{
		"lat": -89.83731,
		"lng": 47.47358
	},
	{
		"lat": -89.88916,
		"lng": 47.3946
	},
	{
		"lat": -89.90644,
		"lng": 47.36828
	},
	{
		"lat": -89.91657,
		"lng": 47.35284
	},
	{
		"lat": -89.94697,
		"lng": 47.30654
	},
	{
		"lat": -89.9571,
		"lng": 47.2911
	},
	{
		"lat": -89.96571,
		"lng": 47.29148
	},
	{
		"lat": -92.20092,
		"lng": 46.7062
	},
	{
		"lat": -92.29165,
		"lng": 46.63861
	},
	{
		"lat": -92.29258,
		"lng": 46.31767
	},
	{
		"lat": -92.29407,
		"lng": 46.07835
	},
	{
		"lat": -92.37599,
		"lng": 46.01591
	},
	{
		"lat": -92.54859,
		"lng": 45.96895
	},
	{
		"lat": -92.67735,
		"lng": 45.90582
	},
	{
		"lat": -92.77206,
		"lng": 45.79523
	},
	{
		"lat": -92.87649,
		"lng": 45.68135
	},
	{
		"lat": -92.84598,
		"lng": 45.56645
	},
	{
		"lat": -92.67877,
		"lng": 45.46357
	},
	{
		"lat": -92.66392,
		"lng": 45.39338
	},
	{
		"lat": -92.69952,
		"lng": 45.34242
	},
	{
		"lat": -92.75436,
		"lng": 45.21248
	},
	{
		"lat": -92.78804,
		"lng": 45.08186
	},
	{
		"lat": -92.76951,
		"lng": 44.85841
	},
	{
		"lat": -92.69432,
		"lng": 44.68862
	},
	{
		"lat": -92.55146,
		"lng": 44.57147
	},
	{
		"lat": -92.3683,
		"lng": 44.55918
	},
	{
		"lat": -92.03226,
		"lng": 44.38641
	},
	{
		"lat": -91.77449,
		"lng": 44.14754
	},
	{
		"lat": -91.46522,
		"lng": 44.00925
	},
	{
		"lat": -91.30682,
		"lng": 43.86434
	},
	{
		"lat": -91.24419,
		"lng": 43.772
	},
	{
		"lat": -91.21771,
		"lng": 43.50073
	},
	{
		"lat": -91.21771,
		"lng": 43.50055
	},
	{
		"lat": -91.21777,
		"lng": 43.50055
	},
	{
		"lat": -91.32771,
		"lng": 43.50074
	},
	{
		"lat": -91.59098,
		"lng": 43.50068
	},
	{
		"lat": -91.80709,
		"lng": 43.50068
	},
	{
		"lat": -91.97891,
		"lng": 43.50067
	},
	{
		"lat": -92.1557,
		"lng": 43.50071
	},
	{
		"lat": -92.35243,
		"lng": 43.50058
	},
	{
		"lat": -92.53622,
		"lng": 43.50023
	},
	{
		"lat": -92.732,
		"lng": 43.50004
	},
	{
		"lat": -92.94434,
		"lng": 43.49978
	},
	{
		"lat": -93.14917,
		"lng": 43.4996
	},
	{
		"lat": -93.41061,
		"lng": 43.49954
	},
	{
		"lat": -93.5688,
		"lng": 43.49963
	},
	{
		"lat": -93.90833,
		"lng": 43.49979
	},
	{
		"lat": -94.18803,
		"lng": 43.50009
	},
	{
		"lat": -94.40023,
		"lng": 43.50032
	},
	{
		"lat": -94.66761,
		"lng": 43.50079
	},
	{
		"lat": -94.87268,
		"lng": 43.50097
	},
	{
		"lat": -95.05815,
		"lng": 43.50098
	},
	{
		"lat": -95.22238,
		"lng": 43.50095
	},
	{
		"lat": -95.45461,
		"lng": 43.50065
	},
	{
		"lat": -95.6825,
		"lng": 43.4999
	},
	{
		"lat": -95.84386,
		"lng": 43.50002
	},
	{
		"lat": -96.11641,
		"lng": 43.50019
	},
	{
		"lat": -96.24365,
		"lng": 43.50026
	},
	{
		"lat": -96.45325,
		"lng": 43.50039
	},
	{
		"lat": -96.45326,
		"lng": 43.50039
	},
	{
		"lat": -96.45329,
		"lng": 43.52445
	},
	{
		"lat": -96.45344,
		"lng": 43.67232
	},
	{
		"lat": -96.45327,
		"lng": 43.78183
	},
	{
		"lat": -96.453,
		"lng": 43.83963
	},
	{
		"lat": -96.45331,
		"lng": 43.88682
	},
	{
		"lat": -96.45323,
		"lng": 43.96645
	},
	{
		"lat": -96.45315,
		"lng": 44.08393
	},
	{
		"lat": -96.45274,
		"lng": 44.17617
	},
	{
		"lat": -96.45247,
		"lng": 44.27176
	},
	{
		"lat": -96.45193,
		"lng": 44.44334
	},
	{
		"lat": -96.45166,
		"lng": 44.60543
	},
	{
		"lat": -96.45139,
		"lng": 44.73996
	},
	{
		"lat": -96.45166,
		"lng": 44.87258
	},
	{
		"lat": -96.45203,
		"lng": 44.99072
	},
	{
		"lat": -96.45238,
		"lng": 45.16768
	},
	{
		"lat": -96.45238,
		"lng": 45.17154
	},
	{
		"lat": -96.45448,
		"lng": 45.30185
	},
	{
		"lat": -96.54928,
		"lng": 45.38213
	},
	{
		"lat": -96.68714,
		"lng": 45.4136
	},
	{
		"lat": -96.76906,
		"lng": 45.5246
	},
	{
		"lat": -96.85387,
		"lng": 45.60272
	},
	{
		"lat": -96.77795,
		"lng": 45.67943
	},
	{
		"lat": -96.63671,
		"lng": 45.77372
	},
	{
		"lat": -96.57752,
		"lng": 45.83751
	},
	{
		"lat": -96.57112,
		"lng": 45.88695
	},
	{
		"lat": -96.57002,
		"lng": 45.91334
	},
	{
		"lat": -96.56367,
		"lng": 45.93524
	},
	{
		"lat": -96.572,
		"lng": 46.12457
	}
];

/***/ })
/******/ ]);