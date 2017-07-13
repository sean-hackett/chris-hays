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

var s = document.createElement('script');
s.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyDN1Cyr9vplNuUCSAZo3wVEBJ9hTsiYrE8&callback=initMap";
s.type = "text/javascript";
s.async = false;
document.getElementsByTagName('head')[0].appendChild(s);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = [
	{
		"lat": 46.12486,
		"lng": -96.57216
	},
	{
		"lat": 46.21554,
		"lng": -96.59199
	},
	{
		"lat": 46.32698,
		"lng": -96.60042
	},
	{
		"lat": 46.41556,
		"lng": -96.69318
	},
	{
		"lat": 46.4675,
		"lng": -96.71908
	},
	{
		"lat": 46.52548,
		"lng": -96.73971
	},
	{
		"lat": 46.57556,
		"lng": -96.75432
	},
	{
		"lat": 46.6189,
		"lng": -96.78652
	},
	{
		"lat": 46.80371,
		"lng": -96.79675
	},
	{
		"lat": 47.14864,
		"lng": -96.83533
	},
	{
		"lat": 47.21724,
		"lng": -96.83662
	},
	{
		"lat": 47.28515,
		"lng": -96.84191
	},
	{
		"lat": 47.37287,
		"lng": -96.83686
	},
	{
		"lat": 47.44293,
		"lng": -96.85824
	},
	{
		"lat": 47.51493,
		"lng": -96.85894
	},
	{
		"lat": 47.59587,
		"lng": -96.85885
	},
	{
		"lat": 47.71572,
		"lng": -96.93103
	},
	{
		"lat": 47.80794,
		"lng": -96.99136
	},
	{
		"lat": 47.90646,
		"lng": -97.01554
	},
	{
		"lat": 48.17704,
		"lng": -97.13601
	},
	{
		"lat": 48.45813,
		"lng": -97.12893
	},
	{
		"lat": 48.61319,
		"lng": -97.13104
	},
	{
		"lat": 48.7473,
		"lng": -97.13643
	},
	{
		"lat": 48.83509,
		"lng": -97.17801
	},
	{
		"lat": 48.96428,
		"lng": -97.23062
	},
	{
		"lat": 49.00068,
		"lng": -97.22739
	},
	{
		"lat": 48.99998,
		"lng": -96.80016
	},
	{
		"lat": 48.99998,
		"lng": -96.25029
	},
	{
		"lat": 48.99975,
		"lng": -95.85602
	},
	{
		"lat": 48.99944,
		"lng": -95.65843
	},
	{
		"lat": 48.99893,
		"lng": -95.3754
	},
	{
		"lat": 49.24573,
		"lng": -95.15338
	},
	{
		"lat": 49.36931,
		"lng": -95.15329
	},
	{
		"lat": 49.36754,
		"lng": -94.97427
	},
	{
		"lat": 48.86383,
		"lng": -94.69035
	},
	{
		"lat": 48.77344,
		"lng": -94.68236
	},
	{
		"lat": 48.71748,
		"lng": -94.58753
	},
	{
		"lat": 48.69349,
		"lng": -94.44406
	},
	{
		"lat": 48.70394,
		"lng": -94.33316
	},
	{
		"lat": 48.64995,
		"lng": -94.18861
	},
	{
		"lat": 48.63752,
		"lng": -93.97652
	},
	{
		"lat": 48.63087,
		"lng": -93.8879
	},
	{
		"lat": 48.58493,
		"lng": -93.81207
	},
	{
		"lat": 48.51546,
		"lng": -93.78465
	},
	{
		"lat": 48.51784,
		"lng": -93.71423
	},
	{
		"lat": 48.53058,
		"lng": -93.63118
	},
	{
		"lat": 48.52897,
		"lng": -93.58968
	},
	{
		"lat": 48.54183,
		"lng": -93.49543
	},
	{
		"lat": 48.59213,
		"lng": -93.4597
	},
	{
		"lat": 48.6028,
		"lng": -93.42127
	},
	{
		"lat": 48.60336,
		"lng": -93.39395
	},
	{
		"lat": 48.61654,
		"lng": -93.35276
	},
	{
		"lat": 48.62482,
		"lng": -93.14451
	},
	{
		"lat": 48.54083,
		"lng": -92.71255
	},
	{
		"lat": 48.49936,
		"lng": -92.63735
	},
	{
		"lat": 48.44018,
		"lng": -92.66327
	},
	{
		"lat": 48.42745,
		"lng": -92.48163
	},
	{
		"lat": 48.3297,
		"lng": -92.45383
	},
	{
		"lat": 48.25904,
		"lng": -92.39305
	},
	{
		"lat": 48.24709,
		"lng": -92.3877
	},
	{
		"lat": 48.23581,
		"lng": -92.37944
	},
	{
		"lat": 48.22359,
		"lng": -92.37313
	},
	{
		"lat": 48.22359,
		"lng": -92.36817
	},
	{
		"lat": 48.2291,
		"lng": -92.35383
	},
	{
		"lat": 48.2348,
		"lng": -92.33717
	},
	{
		"lat": 48.23731,
		"lng": -92.32175
	},
	{
		"lat": 48.28861,
		"lng": -92.30145
	},
	{
		"lat": 48.34861,
		"lng": -92.19357
	},
	{
		"lat": 48.33474,
		"lng": -92.04656
	},
	{
		"lat": 48.24758,
		"lng": -91.98016
	},
	{
		"lat": 48.24556,
		"lng": -91.97444
	},
	{
		"lat": 48.25223,
		"lng": -91.9564
	},
	{
		"lat": 48.23202,
		"lng": -91.94071
	},
	{
		"lat": 48.23741,
		"lng": -91.90642
	},
	{
		"lat": 48.2191,
		"lng": -91.86788
	},
	{
		"lat": 48.2098,
		"lng": -91.8344
	},
	{
		"lat": 48.1973,
		"lng": -91.78504
	},
	{
		"lat": 48.20376,
		"lng": -91.75519
	},
	{
		"lat": 48.19534,
		"lng": -91.71147
	},
	{
		"lat": 48.15271,
		"lng": -91.70851
	},
	{
		"lat": 48.14116,
		"lng": -91.69826
	},
	{
		"lat": 48.11667,
		"lng": -91.69252
	},
	{
		"lat": 48.10724,
		"lng": -91.66566
	},
	{
		"lat": 48.09995,
		"lng": -91.62512
	},
	{
		"lat": 48.07224,
		"lng": -91.5743
	},
	{
		"lat": 48.06866,
		"lng": -91.4513
	},
	{
		"lat": 48.05174,
		"lng": -91.43809
	},
	{
		"lat": 48.06629,
		"lng": -91.37766
	},
	{
		"lat": 48.06933,
		"lng": -91.33386
	},
	{
		"lat": 48.07379,
		"lng": -91.29359
	},
	{
		"lat": 48.15117,
		"lng": -91.13788
	},
	{
		"lat": 48.17855,
		"lng": -91.0868
	},
	{
		"lat": 48.18875,
		"lng": -91.04614
	},
	{
		"lat": 48.19276,
		"lng": -91.02156
	},
	{
		"lat": 48.24047,
		"lng": -90.88146
	},
	{
		"lat": 48.22413,
		"lng": -90.83719
	},
	{
		"lat": 48.17682,
		"lng": -90.83615
	},
	{
		"lat": 48.17965,
		"lng": -90.81109
	},
	{
		"lat": 48.15999,
		"lng": -90.79043
	},
	{
		"lat": 48.14872,
		"lng": -90.77803
	},
	{
		"lat": 48.1357,
		"lng": -90.78739
	},
	{
		"lat": 48.1281,
		"lng": -90.78402
	},
	{
		"lat": 48.11763,
		"lng": -90.77312
	},
	{
		"lat": 48.10999,
		"lng": -90.63019
	},
	{
		"lat": 48.11982,
		"lng": -90.55791
	},
	{
		"lat": 48.10546,
		"lng": -90.47763
	},
	{
		"lat": 48.09121,
		"lng": -90.37582
	},
	{
		"lat": 48.1053,
		"lng": -90.30693
	},
	{
		"lat": 48.11182,
		"lng": -90.14479
	},
	{
		"lat": 48.0968,
		"lng": -90.05966
	},
	{
		"lat": 48.03777,
		"lng": -89.99647
	},
	{
		"lat": 48.02382,
		"lng": -89.97881
	},
	{
		"lat": 48.0157,
		"lng": -89.94916
	},
	{
		"lat": 48.00181,
		"lng": -89.92642
	},
	{
		"lat": 47.98641,
		"lng": -89.88071
	},
	{
		"lat": 48.00265,
		"lng": -89.84505
	},
	{
		"lat": 48.01108,
		"lng": -89.82402
	},
	{
		"lat": 48.01782,
		"lng": -89.78573
	},
	{
		"lat": 48.0218,
		"lng": -89.74601
	},
	{
		"lat": 48.01818,
		"lng": -89.71965
	},
	{
		"lat": 48.00993,
		"lng": -89.70753
	},
	{
		"lat": 48.00801,
		"lng": -89.66875
	},
	{
		"lat": 48.00744,
		"lng": -89.63813
	},
	{
		"lat": 48.01075,
		"lng": -89.60912
	},
	{
		"lat": 48.00102,
		"lng": -89.58569
	},
	{
		"lat": 48.01453,
		"lng": -89.4892
	},
	{
		"lat": 48.01372,
		"lng": -89.48338
	},
	{
		"lat": 48.00558,
		"lng": -89.48886
	},
	{
		"lat": 47.99989,
		"lng": -89.49214
	},
	{
		"lat": 47.98854,
		"lng": -89.50009
	},
	{
		"lat": 47.91636,
		"lng": -89.54816
	},
	{
		"lat": 47.87488,
		"lng": -89.57552
	},
	{
		"lat": 47.79955,
		"lng": -89.62517
	},
	{
		"lat": 47.77511,
		"lng": -89.64102
	},
	{
		"lat": 47.7499,
		"lng": -89.65745
	},
	{
		"lat": 47.71455,
		"lng": -89.68073
	},
	{
		"lat": 47.67166,
		"lng": -89.70864
	},
	{
		"lat": 47.6249,
		"lng": -89.73907
	},
	{
		"lat": 47.60824,
		"lng": -89.75011
	},
	{
		"lat": 47.54291,
		"lng": -89.79228
	},
	{
		"lat": 47.49991,
		"lng": -89.82003
	},
	{
		"lat": 47.47358,
		"lng": -89.83731
	},
	{
		"lat": 47.3946,
		"lng": -89.88916
	},
	{
		"lat": 47.36828,
		"lng": -89.90644
	},
	{
		"lat": 47.35284,
		"lng": -89.91657
	},
	{
		"lat": 47.30654,
		"lng": -89.94697
	},
	{
		"lat": 47.2911,
		"lng": -89.9571
	},
	{
		"lat": 47.29148,
		"lng": -89.96571
	},
	{
		"lat": 46.7062,
		"lng": -92.20092
	},
	{
		"lat": 46.63861,
		"lng": -92.29165
	},
	{
		"lat": 46.31767,
		"lng": -92.29258
	},
	{
		"lat": 46.07835,
		"lng": -92.29407
	},
	{
		"lat": 46.01591,
		"lng": -92.37599
	},
	{
		"lat": 45.96895,
		"lng": -92.54859
	},
	{
		"lat": 45.90582,
		"lng": -92.67735
	},
	{
		"lat": 45.79523,
		"lng": -92.77206
	},
	{
		"lat": 45.68135,
		"lng": -92.87649
	},
	{
		"lat": 45.56645,
		"lng": -92.84598
	},
	{
		"lat": 45.46357,
		"lng": -92.67877
	},
	{
		"lat": 45.39338,
		"lng": -92.66392
	},
	{
		"lat": 45.34242,
		"lng": -92.69952
	},
	{
		"lat": 45.21248,
		"lng": -92.75436
	},
	{
		"lat": 45.08186,
		"lng": -92.78804
	},
	{
		"lat": 44.85841,
		"lng": -92.76951
	},
	{
		"lat": 44.68862,
		"lng": -92.69432
	},
	{
		"lat": 44.57147,
		"lng": -92.55146
	},
	{
		"lat": 44.55918,
		"lng": -92.3683
	},
	{
		"lat": 44.38641,
		"lng": -92.03226
	},
	{
		"lat": 44.14754,
		"lng": -91.77449
	},
	{
		"lat": 44.00925,
		"lng": -91.46522
	},
	{
		"lat": 43.86434,
		"lng": -91.30682
	},
	{
		"lat": 43.772,
		"lng": -91.24419
	},
	{
		"lat": 43.50073,
		"lng": -91.21771
	},
	{
		"lat": 43.50055,
		"lng": -91.21771
	},
	{
		"lat": 43.50055,
		"lng": -91.21777
	},
	{
		"lat": 43.50074,
		"lng": -91.32771
	},
	{
		"lat": 43.50068,
		"lng": -91.59098
	},
	{
		"lat": 43.50068,
		"lng": -91.80709
	},
	{
		"lat": 43.50067,
		"lng": -91.97891
	},
	{
		"lat": 43.50071,
		"lng": -92.1557
	},
	{
		"lat": 43.50058,
		"lng": -92.35243
	},
	{
		"lat": 43.50023,
		"lng": -92.53622
	},
	{
		"lat": 43.50004,
		"lng": -92.732
	},
	{
		"lat": 43.49978,
		"lng": -92.94434
	},
	{
		"lat": 43.4996,
		"lng": -93.14917
	},
	{
		"lat": 43.49954,
		"lng": -93.41061
	},
	{
		"lat": 43.49963,
		"lng": -93.5688
	},
	{
		"lat": 43.49979,
		"lng": -93.90833
	},
	{
		"lat": 43.50009,
		"lng": -94.18803
	},
	{
		"lat": 43.50032,
		"lng": -94.40023
	},
	{
		"lat": 43.50079,
		"lng": -94.66761
	},
	{
		"lat": 43.50097,
		"lng": -94.87268
	},
	{
		"lat": 43.50098,
		"lng": -95.05815
	},
	{
		"lat": 43.50095,
		"lng": -95.22238
	},
	{
		"lat": 43.50065,
		"lng": -95.45461
	},
	{
		"lat": 43.4999,
		"lng": -95.6825
	},
	{
		"lat": 43.50002,
		"lng": -95.84386
	},
	{
		"lat": 43.50019,
		"lng": -96.11641
	},
	{
		"lat": 43.50026,
		"lng": -96.24365
	},
	{
		"lat": 43.50039,
		"lng": -96.45325
	},
	{
		"lat": 43.50039,
		"lng": -96.45326
	},
	{
		"lat": 43.52445,
		"lng": -96.45329
	},
	{
		"lat": 43.67232,
		"lng": -96.45344
	},
	{
		"lat": 43.78183,
		"lng": -96.45327
	},
	{
		"lat": 43.83963,
		"lng": -96.453
	},
	{
		"lat": 43.88682,
		"lng": -96.45331
	},
	{
		"lat": 43.96645,
		"lng": -96.45323
	},
	{
		"lat": 44.08393,
		"lng": -96.45315
	},
	{
		"lat": 44.17617,
		"lng": -96.45274
	},
	{
		"lat": 44.27176,
		"lng": -96.45247
	},
	{
		"lat": 44.44334,
		"lng": -96.45193
	},
	{
		"lat": 44.60543,
		"lng": -96.45166
	},
	{
		"lat": 44.73996,
		"lng": -96.45139
	},
	{
		"lat": 44.87258,
		"lng": -96.45166
	},
	{
		"lat": 44.99072,
		"lng": -96.45203
	},
	{
		"lat": 45.16768,
		"lng": -96.45238
	},
	{
		"lat": 45.17154,
		"lng": -96.45238
	},
	{
		"lat": 45.30185,
		"lng": -96.45448
	},
	{
		"lat": 45.38213,
		"lng": -96.54928
	},
	{
		"lat": 45.4136,
		"lng": -96.68714
	},
	{
		"lat": 45.5246,
		"lng": -96.76906
	},
	{
		"lat": 45.60272,
		"lng": -96.85387
	},
	{
		"lat": 45.67943,
		"lng": -96.77795
	},
	{
		"lat": 45.77372,
		"lng": -96.63671
	},
	{
		"lat": 45.83751,
		"lng": -96.57752
	},
	{
		"lat": 45.88695,
		"lng": -96.57112
	},
	{
		"lat": 45.91334,
		"lng": -96.57002
	},
	{
		"lat": 45.93524,
		"lng": -96.56367
	},
	{
		"lat": 46.12457,
		"lng": -96.572
	}
];

/***/ })
/******/ ]);