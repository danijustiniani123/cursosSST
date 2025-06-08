(window["webpackJsonpb9c7a6f2_6c70_4aef_9c32_fb5a9c1a0d2f_0_0_1"] = window["webpackJsonpb9c7a6f2_6c70_4aef_9c32_fb5a9c1a0d2f_0_0_1"] || []).push([[1],{

/***/ "/QYM":
/*!*************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Modal/Modal.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Modal.module.scss */ "vpDj");


var Modal = function (_a) {
    var isOpen = _a.isOpen, onClose = _a.onClose, title = _a.title, description = _a.description, imageSrc = _a.imageSrc;
    if (!isOpen)
        return null;
    var handleOverlayClick = function (e) {
        if (e.target === e.currentTarget)
            onClose();
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].overlay, onClick: handleOverlayClick },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].modal },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].closeButton, onClick: onClose, "aria-label": "Cerrar modal" }, "\u00D7"),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].content },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].texto },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, title),
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, description)),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _Modal_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].imagen },
                    react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: imageSrc, alt: "Descripci\u00F3n visual" }))))));
};
/* harmony default export */ __webpack_exports__["e"] = (Modal);


/***/ }),

/***/ "0KAl":
/*!*************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/TituloDualAnimado/TituloDualAnimado.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TituloDualAnimado_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TituloDualAnimado.module.scss */ "ckmv");


var TituloDualAnimado = function (_a) {
    var tituloIzquierdo = _a.tituloIzquierdo, tituloDerecho = _a.tituloDerecho;
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TituloDualAnimado_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].contenedor },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TituloDualAnimado_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].filaTitulos },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _TituloDualAnimado_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].textoIzquierdo }, tituloIzquierdo),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("span", { className: _TituloDualAnimado_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].textoDerecho }, tituloDerecho)),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _TituloDualAnimado_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].lineaAnimada })));
};
/* harmony default export */ __webpack_exports__["e"] = (TituloDualAnimado);


/***/ }),

/***/ "3V7V":
/*!***************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/Presentacion/Presentacion.module.css ***!
  \***************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./Presentacion.module.css */ "DvF1");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "3mZ+":
/*!*******************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/Presentacion/Presentacion.module.scss.js ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./Presentacion.module.css */ "3V7V");
var styles = {
    container: 'container_242bc231',
    content: 'content_242bc231',
    titulo: 'titulo_242bc231',
    subtitulo: 'subtitulo_242bc231',
    botonCentrado: 'botonCentrado_242bc231'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "5bTV":
/*!***************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Button/Button.js ***!
  \***************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Button.module.scss */ "sXy6");
/* harmony import */ var _utils_cn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../utils/cn */ "ZLfG");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __rest = (undefined && undefined.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};


 // Utilidad para unir clases opcionalmente
var Button = function (_a) {
    var children = _a.children, _b = _a.variant, variant = _b === void 0 ? 'primary' : _b, iconLeft = _a.iconLeft, iconRight = _a.iconRight, ariaLabel = _a.ariaLabel, _c = _a.className, className = _c === void 0 ? '' : _c, props = __rest(_a, ["children", "variant", "iconLeft", "iconRight", "ariaLabel", "className"]);
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", __assign({ className: Object(_utils_cn__WEBPACK_IMPORTED_MODULE_2__[/* cn */ "e"])(_Button_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].button, _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"][variant], className), "aria-label": ariaLabel }, props),
        iconLeft && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].iconLeft }, iconLeft),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].label }, children),
        iconRight && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", { className: _Button_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].iconRight }, iconRight)));
};
/* harmony default export */ __webpack_exports__["e"] = (Button);


/***/ }),

/***/ "72az":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/Burbujas/Burbujas.module.css ***!
  \******************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".burbuja_cc0387bb{animation-fill-mode:both;background:radial-gradient(circle at 30% 30%,var(--color-interno),var(--color-externo));border-radius:50%;box-shadow:inset -8px -8px 15px hsla(0,0%,100%,.6),inset 8px 8px 15px rgba(0,0,0,.2),0 5px 20px rgba(0,0,0,.3);pointer-events:none;position:absolute;transition:transform .3s ease-in-out;will-change:transform,opacity}:root.modo-oscuro_cc0387bb .burbuja_cc0387bb{box-shadow:inset -5px -5px 15px hsla(0,0%,100%,.15),inset 8px 8px 15px rgba(0,0,0,.5),0 8px 20px rgba(0,0,0,.6)}.vertical_cc0387bb{animation-name:subir-burbuja_cc0387bb;animation-timing-function:ease-in-out}.oscilacion_cc0387bb{animation-direction:alternate;animation-duration:4s;animation-iteration-count:infinite;animation-name:oscilacionVertical_cc0387bb;animation-timing-function:ease-in-out}@keyframes subir-burbuja_cc0387bb{0%{opacity:.8;transform:translateY(100vh) scale(1)}to{opacity:.1;transform:translateY(-100vh) scale(1.2)}}.scale_cc0387bb{animation-name:escalar-burbuja_cc0387bb}@keyframes escalar-burbuja_cc0387bb{0%,to{transform:scale(1)}50%{transform:scale(1.4)}}.fade_cc0387bb{animation-name:fade-burbuja_cc0387bb}@keyframes fade-burbuja_cc0387bb{0%,to{opacity:.1;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}@keyframes oscilacionVertical_cc0387bb{0%{transform:translateY(0)}to{transform:translateY(10px)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "7nQI":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/Modal/Modal.module.css ***!
  \***************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".overlay_6dd47827{-ms-flex-pack:center;-ms-flex-align:center;align-items:center;background:hsla(0,0%,4%,.6);display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;position:absolute;top:0;width:100%;z-index:9999}.modal_6dd47827{background:#fff;border-radius:20px;box-shadow:0 10px 30px rgba(0,0,0,.3);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;max-height:90vh;max-width:900px;overflow:visible;padding:30px;position:relative;width:90%;z-index:10000}.closeButton_6dd47827{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:#ff5252;border:2px solid #fff;border-radius:50%;box-shadow:0 0 12px rgba(255,82,82,.6);color:#fff;cursor:pointer;display:-ms-flexbox;display:flex;font-size:28px;font-weight:700;height:50px;justify-content:center;position:absolute;right:-20px;top:-20px;transition:transform .2s ease,background .2s ease;width:50px;z-index:10001}.closeButton_6dd47827:hover{background-color:#ff1744;box-shadow:0 0 16px rgba(255,23,68,.9);transform:scale(1.2)}.content_6dd47827{-ms-flex-align:center;-ms-flex-pack:justify;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;gap:20px;justify-content:space-between}.texto_6dd47827{-ms-flex:1;flex:1}.texto_6dd47827 h2{color:#005d9d;font-size:1.8rem;margin-bottom:10px}.texto_6dd47827 p{color:#333;font-size:1.2rem}.imagen_6dd47827{-ms-flex:1;flex:1}.imagen_6dd47827 img{border-radius:10px;height:auto;max-height:300px;object-fit:contain;width:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "AJ40":
/*!************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/TresCuadrantes/TresCuadrantes.scss.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./TresCuadrantes.css */ "cVkH");
var styles = {};
/* unused harmony default export */ var _unused_webpack_default_export = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "DvF1":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/cursos/escalerafija/pantallas/Presentacion/Presentacion.module.css ***!
  \*********************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container_242bc231{height:100vh;overflow:hidden;position:relative;width:100%;z-index:10}.content_242bc231{-ms-flex-pack:center;-ms-flex-align:center;align-items:center;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:100%;justify-content:center;padding:0;position:relative;z-index:20}.titulo_242bc231{font-size:var(--font-size-titulo);margin-bottom:1rem;padding-left:var(--padding-left-titulo)}.subtitulo_242bc231,.titulo_242bc231{-ms-flex-item-align:start;align-self:flex-start;color:var(--letra-titulo);text-align:left}.subtitulo_242bc231{font-size:var(--font-size-subtitulo);margin-bottom:2rem;padding-left:var(--padding-left-subtitulo)}.botonCentrado_242bc231{-ms-flex-pack:center;display:-ms-flexbox;display:flex;justify-content:center;margin-top:2rem}@media (max-width:768px){.subtitulo_242bc231,.titulo_242bc231{padding-left:var(--padding-left-mobile)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "E+ed":
/*!*************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/CuadroInteractivo/CuadroInteractivo.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CuadroInteractivo.module.scss */ "oQgH");


var imagenesPorCurso = {
    escalerafija: [
        __webpack_require__(/*! ../../../assets/image/Muestra1.png */ "UgAA"),
        __webpack_require__(/*! ../../../assets/image/muestra2.jpg */ "GhQJ"),
        __webpack_require__(/*! ../../../assets/image/muestra3.jpg */ "TePz"),
        __webpack_require__(/*! ../../../assets/image/muestra4.png */ "p5t+"),
    ],
    otroCurso: [
        __webpack_require__(/*! ../../../assets/image/Muestra1.png */ "UgAA"),
        __webpack_require__(/*! ../../../assets/image/muestra2.jpg */ "GhQJ"),
        __webpack_require__(/*! ../../../assets/image/muestra3.jpg */ "TePz"),
        __webpack_require__(/*! ../../../assets/image/muestra4.png */ "p5t+"),
    ],
};
var CuadroInteractivo = function (_a) {
    var curso = _a.curso;
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](null), zoomImg = _b[0], setZoomImg = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), zoomVisible = _c[0], setZoomVisible = _c[1];
    var imagenes = imagenesPorCurso[curso] || imagenesPorCurso['escalerafija'];
    var handleClick = function (src) {
        setZoomImg(src);
        setZoomVisible(true);
    };
    var handleCerrarZoom = function () {
        setZoomVisible(false);
        setZoomImg(null);
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].contenedorPrincipal },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].cuadrosGrid }, imagenes.map(function (src, index) { return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { key: index, className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].cuadroNegro, onClick: function () { return handleClick(src); }, tabIndex: 0, role: "button", onKeyDown: function (e) {
                    if (e.key === 'Enter' || e.key === ' ')
                        handleClick(src);
                } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: src, alt: "Imagen ".concat(index + 1), className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].imagen }),
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].hoverOverlay }))); }))),
        zoomVisible && zoomImg && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].zoomOverlay, onClick: handleCerrarZoom },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", { src: zoomImg, alt: "Imagen ampliada", className: _CuadroInteractivo_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].zoomImage })))));
};
/* harmony default export */ __webpack_exports__["e"] = (CuadroInteractivo);


/***/ }),

/***/ "EENU":
/*!*************************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/TerceraPantalla/TerceraPantalla.module.scss.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./TerceraPantalla.module.css */ "ccIX");
var styles = {
    container: 'container_96ed60e7',
    titulo: 'titulo_96ed60e7',
    fadeIn: 'fadeIn_96ed60e7'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "GbI5":
/*!*************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/FlechasNavegacion/FlechasNavegacion.module.scss.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./FlechasNavegacion.module.css */ "pMTT");
var styles = {
    flecha: 'flecha_1c65a11e',
    izquierda: 'izquierda_1c65a11e',
    derecha: 'derecha_1c65a11e'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "Gbqo":
/*!*****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/Button/Button.module.css ***!
  \*****************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".button_7f1141b2{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:transparent;border:2px solid;border-radius:25px;cursor:pointer;display:-ms-inline-flexbox;display:inline-flex;font-size:1.2rem;font-weight:600;gap:.5rem;justify-content:center;overflow:hidden;padding:.8rem 2rem;position:relative;text-align:center;transform:scale(1);transition:all .3s ease;z-index:50}.label_7f1141b2{display:inline-block}.iconLeft_7f1141b2,.iconRight_7f1141b2{-ms-flex-align:center;align-items:center;display:-ms-inline-flexbox;display:inline-flex;font-size:1.2em}.primary_7f1141b2{border-color:var(--color-primario);color:var(--color-primario)}.primary_7f1141b2:before{background:var(--color-primario-claro);content:\"\";inset:0;opacity:0;position:absolute;transition:opacity .3s ease;z-index:-1}.primary_7f1141b2:hover{box-shadow:0 4px 12px rgba(0,0,0,.1);color:var(--color-texto-invertido);transform:scale(.95)}.primary_7f1141b2:hover:before{opacity:1}.secondary_7f1141b2{border-color:var(--color-secundario);color:var(--color-secundario)}.secondary_7f1141b2:before{background:var(--color-secundario-claro)}.secondary_7f1141b2:hover{color:var(--color-texto-invertido);transform:scale(.95)}.secondary_7f1141b2:hover:before{opacity:1}.success_7f1141b2{border-color:var(--verde);color:var(--verde)}.success_7f1141b2:before{background:var(--verde-claro)}.success_7f1141b2:hover{color:#fff;transform:scale(.95)}.success_7f1141b2:hover:before{opacity:1}.danger_7f1141b2{border-color:var(--rojo);color:var(--rojo)}.danger_7f1141b2:before{background:var(--rojo-claro)}.danger_7f1141b2:hover{color:#fff;transform:scale(.95)}.danger_7f1141b2:hover:before{opacity:1}.modo-oscuro .primary_7f1141b2{border-color:var(--color-texto-claro);color:var(--color-texto-claro)}.modo-oscuro .primary_7f1141b2:before{background:var(--color-primario-oscuro)}.modo-oscuro .primary_7f1141b2:hover{box-shadow:0 4px 12px rgba(0,0,0,.3);color:var(--color-texto-invertido)}.modo-oscuro .danger_7f1141b2:before,.modo-oscuro .secondary_7f1141b2:before,.modo-oscuro .success_7f1141b2:before{background:hsla(0,0%,100%,.1)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "GhQJ":
/*!**********************************************************!*\
  !*** ./lib/webparts/cursosSst/assets/image/muestra2.jpg ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "muestra2_790e5ce2b5b0bcb10b7533d6838de137.jpg";

/***/ }),

/***/ "HAFI":
/*!*******************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/Presentacion/Presentacion.js ***!
  \*******************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Presentacion_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Presentacion.module.scss */ "3mZ+");
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "ATyU");
/* harmony import */ var _components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ui/Button/Button */ "5bTV");
/* harmony import */ var _context_FondoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_context/FondoContext */ "c9Tw");
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lucide-react */ "Lnyi");
/* harmony import */ var _components_Burbujas_Burbujas__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../components/Burbujas/Burbujas */ "xcgO");








// 🎯 BurbujaConfig desde aquí, como parte del control visual del curso
var burbujasConfig = [
    {
        top: '15%',
        left: '10%',
        size: 100,
        duration: '2s',
        delay: '0s',
        colors: ['var(--burbuja-azul-1)', 'var(--burbuja-azul-2)'],
        animationType: 'oscilacion',
    },
    {
        top: '40%',
        left: '50%',
        size: 80,
        duration: '1s',
        delay: '1.5s',
        colors: ['var(--burbuja-azul-3)', 'var(--burbuja-azul-4)'],
        animationType: 'oscilacion',
    },
    {
        top: '70%',
        left: '80%',
        size: 60,
        duration: '1.5s',
        delay: '3s',
        colors: ['var(--burbuja-azul-oscuro)', 'var(--burbuja-azul-brillante)'],
        animationType: 'oscilacion',
    },
];
var Presentacion = function (_a) {
    var onIniciar = _a.onIniciar;
    var setFondoActivo = Object(_context_FondoContext__WEBPACK_IMPORTED_MODULE_4__[/* useFondo */ "t"])().setFondoActivo;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        setFondoActivo('escalerafijaPresentacion');
    }, [setFondoActivo]);
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Presentacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].container, style: { position: 'relative', overflow: 'hidden' } },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_Burbujas_Burbujas__WEBPACK_IMPORTED_MODULE_6__[/* default */ "e"], { burbujas: burbujasConfig, modoOscuro: false }),
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: _Presentacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].content, style: { position: 'relative', zIndex: 2 } },
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](framer_motion__WEBPACK_IMPORTED_MODULE_2__[/* motion */ "e"].h1, { className: _Presentacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].titulo, initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 } }, "\u00A1Escaleras fijas!"),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](framer_motion__WEBPACK_IMPORTED_MODULE_2__[/* motion */ "e"].p, { className: _Presentacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].subtitulo, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.5, duration: 0.8 } }, "Ca\u00EDdas a distinto nivel."),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](framer_motion__WEBPACK_IMPORTED_MODULE_2__[/* motion */ "e"].div, { className: _Presentacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].botonCentrado, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 1, duration: 0.8 } },
                react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"], { variant: "success", iconLeft: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](lucide_react__WEBPACK_IMPORTED_MODULE_5__[/* default */ "e"], { size: 20 }), onClick: onIniciar }, "Iniciar")))));
};
/* harmony default export */ __webpack_exports__["e"] = (Presentacion);


/***/ }),

/***/ "Hqdw":
/*!*************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_ui_TituloDualAnimado_TituloDualAnimado__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/ui/TituloDualAnimado/TituloDualAnimado */ "0KAl");
/* harmony import */ var _components_ui_CuadroInteractivo_CuadroInteractivo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ui/CuadroInteractivo/CuadroInteractivo */ "E+ed");
/* harmony import */ var _components_ui_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/ui/Modal/Modal */ "/QYM");
/* harmony import */ var _components_ui_FlechasNavegacion_FlechasNavegacion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ui/FlechasNavegacion/FlechasNavegacion */ "llVO");
/* harmony import */ var _pantallas_Presentacion_Presentacion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pantallas/Presentacion/Presentacion */ "HAFI");
/* harmony import */ var _pantallas_SegundaPantalla_SegundaPantalla__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pantallas/SegundaPantalla/SegundaPantalla */ "UBjb");
/* harmony import */ var _pantallas_TerceraPantalla_TerceraPantalla__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pantallas/TerceraPantalla/TerceraPantalla */ "aTUw");
/* harmony import */ var _components_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ui/Loader/Loader */ "boAb");









var EscalerafijaCurso = function (props) {
    var _a = react__WEBPACK_IMPORTED_MODULE_0__["useState"](1), pantalla = _a[0], setPantalla = _a[1];
    var _b = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), mostrarModal = _b[0], setMostrarModal = _b[1];
    var _c = react__WEBPACK_IMPORTED_MODULE_0__["useState"](false), mostrarDesplegable = _c[0], setMostrarDesplegable = _c[1];
    var isDarkTheme = props.isDarkTheme;
    var renderPantallaActual = function () {
        switch (pantalla) {
            case 1:
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pantallas_Presentacion_Presentacion__WEBPACK_IMPORTED_MODULE_5__[/* default */ "e"], { onIniciar: function () { return setPantalla(2); } }));
            case 2:
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_TituloDualAnimado_TituloDualAnimado__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"], { key: pantalla, isDarkTheme: isDarkTheme, tituloIzquierdo: "Escaleras fijas", tituloDerecho: "Ca\u00EDda al mismo nivel" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pantallas_SegundaPantalla_SegundaPantalla__WEBPACK_IMPORTED_MODULE_6__[/* default */ "e"], { isDarkTheme: isDarkTheme, sp: props.sp, onAbrirModal: function () { return setMostrarModal(true); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_CuadroInteractivo_CuadroInteractivo__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"], { curso: "escalerafija" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_FlechasNavegacion_FlechasNavegacion__WEBPACK_IMPORTED_MODULE_4__[/* default */ "e"], { isDarkMode: isDarkTheme, onAnteriorClick: function () { return setPantalla(1); }, onSiguienteClick: function () { return setPantalla(3); } })));
            case 3:
                return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_TituloDualAnimado_TituloDualAnimado__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"], { key: pantalla, isDarkTheme: isDarkTheme, tituloIzquierdo: "Escaleras fijas", tituloDerecho: "Ca\u00EDda al mismo nivel" }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_pantallas_TerceraPantalla_TerceraPantalla__WEBPACK_IMPORTED_MODULE_7__[/* default */ "e"], { onMostrarDesplegable: function () { return setMostrarDesplegable(true); }, onOcultarDesplegable: function () { return setMostrarDesplegable(false); } }),
                    react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_FlechasNavegacion_FlechasNavegacion__WEBPACK_IMPORTED_MODULE_4__[/* default */ "e"], { isDarkMode: isDarkTheme, onAnteriorClick: function () { return setPantalla(2); }, onSiguienteClick: function () { return setPantalla(4); } })));
            default:
                return react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", null, "Pantalla no disponible");
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Suspense"], { fallback: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_Loader_Loader__WEBPACK_IMPORTED_MODULE_8__[/* default */ "e"], null) },
        react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null,
            renderPantallaActual(),
            react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_components_ui_Modal_Modal__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"], { isOpen: mostrarModal, onClose: function () { return setMostrarModal(false); }, title: "Nuestra Metodolog\u00EDa", description: "Combinamos teor\u00EDa y pr\u00E1ctica con elementos visuales y actividades interactivas para maximizar el aprendizaje.", imageSrc: __webpack_require__(/*! ../../assets/image/Muestra1.png */ "UgAA") }),
            mostrarDesplegable && (react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("div", { className: "overlayGeneral" // Esto debe estar bien estilizado en el global.scss o clases locales
                , onClick: function () { return setMostrarDesplegable(false); } })))));
};
/* harmony default export */ __webpack_exports__["default"] = (EscalerafijaCurso);


/***/ }),

/***/ "IjCG":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/cursos/escalerafija/pantallas/SegundaPantalla/SegundaPantalla.module.css ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container_5b541530{box-sizing:border-box;overflow:visible;padding:60px 20px;position:relative;width:100%}.content_5b541530{margin:0 auto;max-width:1200px;text-align:center;z-index:2}.textDark_5b541530{color:#005d9d}.textLight_5b541530{color:#fff}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "P6LW":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/CuadroInteractivo/CuadroInteractivo.module.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@keyframes zoomIn_790c4db8{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes aparecerDesdeCentro_790c4db8{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}.contenedorPrincipal_790c4db8{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background:rgba(0,93,157,.3);border:3px solid #fff;border-radius:16px;box-sizing:border-box;display:-ms-flexbox;display:flex;height:500px;justify-content:center;margin-bottom:80px;margin-left:auto;margin-right:20px;padding:16px;position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:500px}.contenedorPrincipal_790c4db8,.cuadrosGrid_790c4db8{animation:aparecerDesdeCentro_790c4db8 .6s ease forwards}.cuadrosGrid_790c4db8{animation-delay:.3s;animation-fill-mode:backwards;display:grid;gap:8px;grid-template-columns:repeat(2,1fr);grid-template-rows:repeat(2,1fr);height:100%;width:100%}.cuadroNegro_790c4db8{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background:#000;border-radius:16px;cursor:pointer;display:-ms-flexbox;display:flex;justify-content:center;outline-offset:4px;overflow:hidden;position:relative;transition:box-shadow .3s ease}.cuadroNegro_790c4db8:hover .hoverOverlay_790c4db8{opacity:.3}.cuadroNegro_790c4db8:focus{outline:2px solid var(--color-acento)}.imagen_790c4db8{display:block;height:100%;object-fit:cover;transition:transform .3s ease;width:100%}.hoverOverlay_790c4db8{background:#000;inset:0;opacity:0;pointer-events:none;position:absolute;transition:opacity .3s ease}.zoomOverlay_790c4db8{-ms-flex-pack:center;-ms-flex-align:center;align-items:center;animation:zoomIn_790c4db8 .4s ease forwards;background:rgba(0,0,0,.8);border-radius:16px;box-sizing:border-box;cursor:zoom-out;display:-ms-flexbox;display:flex;height:100%;justify-content:center;left:0;padding:32px;position:absolute;top:0;width:100%;z-index:9999}.zoomImage_790c4db8{border-radius:20px;box-shadow:0 0 15px #fff;max-height:90%;max-width:90%;object-fit:contain;pointer-events:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "REnU":
/*!*******************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/TresCuadrantes/TresCuadrantes.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TresCuadrantes_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TresCuadrantes.scss */ "AJ40");


var cuadrantesData = [
    {
        titulo: "Título 1",
        texto: "Aquí va el texto del primer cuadrante.",
        descripcion: "Esta es la descripción desplegable del primer cuadrante.",
        imagen: "https://via.placeholder.com/300x180?text=Imagen+1",
    },
    {
        titulo: "Título 2",
        texto: "Aquí va el texto del segundo cuadrante.",
        descripcion: "Descripción desplegable del segundo cuadrante.",
        imagen: "https://via.placeholder.com/300x180?text=Imagen+2",
    },
    {
        titulo: "Título 3",
        texto: "Aquí va el texto del tercer cuadrante.",
        descripcion: "Descripción desplegable del tercer cuadrante.",
        imagen: "https://via.placeholder.com/300x180?text=Imagen+3",
    },
];
var TresCuadrantes = function (_a) {
    var setOverlayActivo = _a.setOverlayActivo;
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null), abierto = _b[0], setAbierto = _b[1];
    var toggleDesplegable = function (index) {
        var nuevoEstado = abierto === index ? null : index;
        setAbierto(nuevoEstado);
        setOverlayActivo(nuevoEstado !== null); // 👉 activa o desactiva el overlay
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tres-cuadrantes-container" },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "tres-cuadrantes" }, cuadrantesData.map(function (item, idx) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "cuadrante", key: idx },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", { className: "titulo" }, item.titulo),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", { className: "texto" }, item.texto),
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "boton-toggle", onClick: function () { return toggleDesplegable(idx); } }, abierto === idx ? "×" : "+"),
            abierto === idx && (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: "desplegable" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "boton-cerrar", onClick: function () { return toggleDesplegable(idx); } }, "\u00D7"),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", { src: item.imagen, alt: "Imagen de ".concat(item.titulo) }),
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, item.descripcion))))); }))));
};
/* harmony default export */ __webpack_exports__["e"] = (TresCuadrantes);


/***/ }),

/***/ "TePz":
/*!**********************************************************!*\
  !*** ./lib/webparts/cursosSst/assets/image/muestra3.jpg ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "muestra3_f5515da15ef91129158fcd23728be0c1.jpg";

/***/ }),

/***/ "UBjb":
/*!*************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/SegundaPantalla/SegundaPantalla.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SegundaPantalla.module.scss */ "X5cv");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ "ATyU");
/* harmony import */ var _components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ui/Button/Button */ "5bTV");
/* harmony import */ var _context_FondoContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../_context/FondoContext */ "c9Tw");





var SegundaPantalla = function (_a) {
    var isDarkTheme = _a.isDarkTheme, onAbrirModal = _a.onAbrirModal;
    var setFondoActivo = Object(_context_FondoContext__WEBPACK_IMPORTED_MODULE_4__[/* useFondo */ "t"])().setFondoActivo;
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
        console.log("SegundaPantalla cargada");
        setFondoActivo('escalerafijaSegundaPantalla');
    }, [setFondoActivo]);
    return (react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"].container },
        react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", { className: _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"].content },
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__[/* motion */ "e"].h2, { className: isDarkTheme ? _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"].textLight : _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"].textDark, initial: { opacity: 0, y: -30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 1 } }, "Nuestra Metodolog\u00EDa de Ense\u00F1anza"),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(framer_motion__WEBPACK_IMPORTED_MODULE_2__[/* motion */ "e"].p, { className: isDarkTheme ? _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"].textLight : _SegundaPantalla_module_scss__WEBPACK_IMPORTED_MODULE_0__[/* default */ "e"].textDark, initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 1.5 } }, "En este curso interactivo, aprender\u00E1s mediante recursos visuales, ejemplos reales y din\u00E1micas de participaci\u00F3n activa."),
            react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ui_Button_Button__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"], { onClick: onAbrirModal }, "+ info"))));
};
/* harmony default export */ __webpack_exports__["e"] = (SegundaPantalla);


/***/ }),

/***/ "UbF1":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/FlechasNavegacion/FlechasNavegacion.module.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".flecha_1c65a11e{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;background-color:rgba(0,93,157,.2);border:none;border-radius:10px;cursor:pointer;display:-ms-flexbox;display:flex;height:40px;justify-content:center;outline:0;position:absolute;top:50%;transform:translateY(-50%);transition:background-color .3s ease;width:40px;z-index:9}.flecha_1c65a11e:hover{background-color:rgba(0,93,157,.4)}.izquierda_1c65a11e{left:10px}.derecha_1c65a11e{right:10px}.flecha_1c65a11e[data-tooltip]:hover:after{background-color:rgba(0,0,0,.7);border-radius:6px;color:#fff;content:attr(data-tooltip);font-size:.85rem;padding:5px 10px;pointer-events:none;position:absolute;top:50%;transform:translateY(-50%);white-space:nowrap;z-index:1100}.izquierda_1c65a11e[data-tooltip]:hover:after{left:60px}.derecha_1c65a11e[data-tooltip]:hover:after{right:60px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "UgAA":
/*!**********************************************************!*\
  !*** ./lib/webparts/cursosSst/assets/image/Muestra1.png ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "Muestra1_4fec5f6f9b40f1d0e21d491a8de845e3.png";

/***/ }),

/***/ "Ve/E":
/*!************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Burbujas/Burbujas.module.css ***!
  \************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../node_modules/css-loader/dist/cjs.js!../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./Burbujas.module.css */ "72az");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "X5cv":
/*!*************************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/SegundaPantalla/SegundaPantalla.module.scss.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./SegundaPantalla.module.css */ "vn1d");
var styles = {
    container: 'container_5b541530',
    content: 'content_5b541530',
    textDark: 'textDark_5b541530',
    textLight: 'textLight_5b541530'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "ZLfG":
/*!********************************************!*\
  !*** ./lib/webparts/cursosSst/utils/cn.js ***!
  \********************************************/
/*! exports provided: cn */
/*! exports used: cn */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return cn; });
var cn = function () {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    return classes.filter(Boolean).join(' ');
};


/***/ }),

/***/ "aTUw":
/*!*************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/TerceraPantalla/TerceraPantalla.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context_FondoContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../_context/FondoContext */ "c9Tw");
/* harmony import */ var _TerceraPantalla_module_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TerceraPantalla.module.scss */ "EENU");
/* harmony import */ var _components_ui_TresCuadrantes_TresCuadrantes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/ui/TresCuadrantes/TresCuadrantes */ "REnU");




var TercerPantalla = function (_a) {
    var onMostrarDesplegable = _a.onMostrarDesplegable, onOcultarDesplegable = _a.onOcultarDesplegable;
    var setFondoActivo = Object(_context_FondoContext__WEBPACK_IMPORTED_MODULE_1__[/* useFondo */ "t"])().setFondoActivo;
    // ✅ Establecer fondo específico al cargar esta pantalla
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        console.log("TerceraPantalla cargada");
        setFondoActivo('escalerafijaTerceraPantalla');
    }, [setFondoActivo]);
    // 🔄 función para pasar directamente al componente
    var setOverlayActivo = function (activo) {
        if (activo) {
            onMostrarDesplegable();
        }
        else {
            onOcultarDesplegable();
        }
    };
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { className: _TerceraPantalla_module_scss__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"].container },
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", { className: _TerceraPantalla_module_scss__WEBPACK_IMPORTED_MODULE_2__[/* default */ "e"].titulo }, "Describe el tema y los contenidos que vas a tratar en clase y no olvides recalcar por qu\u00E9 el tema es interesante"),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ui_TresCuadrantes_TresCuadrantes__WEBPACK_IMPORTED_MODULE_3__[/* default */ "e"], { setOverlayActivo: setOverlayActivo })));
};
/* harmony default export */ __webpack_exports__["e"] = (TercerPantalla);


/***/ }),

/***/ "cVkH":
/*!********************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/TresCuadrantes/TresCuadrantes.css ***!
  \********************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./TresCuadrantes.css */ "xffk");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ccIX":
/*!*********************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/TerceraPantalla/TerceraPantalla.module.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./TerceraPantalla.module.css */ "opwe");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "ckmv":
/*!*************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/TituloDualAnimado/TituloDualAnimado.module.scss.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./TituloDualAnimado.module.css */ "gnWD");
var styles = {
    contenedor: 'contenedor_0f77d540',
    filaTitulos: 'filaTitulos_0f77d540',
    textoIzquierdo: 'textoIzquierdo_0f77d540',
    izquierdaDesdeCentro: 'izquierdaDesdeCentro_0f77d540',
    textoDerecho: 'textoDerecho_0f77d540',
    derechaDesdeCentro: 'derechaDesdeCentro_0f77d540',
    lineaAnimada: 'lineaAnimada_0f77d540',
    expandirLinea: 'expandirLinea_0f77d540'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "fQCM":
/*!****************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Burbujas/Burbujas.module.scss.js ***!
  \****************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./Burbujas.module.css */ "Ve/E");
var styles = {
    burbuja: 'burbuja_cc0387bb',
    'modo-oscuro': 'modo-oscuro_cc0387bb',
    vertical: 'vertical_cc0387bb',
    'subir-burbuja': 'subir-burbuja_cc0387bb',
    oscilacion: 'oscilacion_cc0387bb',
    oscilacionVertical: 'oscilacionVertical_cc0387bb',
    scale: 'scale_cc0387bb',
    'escalar-burbuja': 'escalar-burbuja_cc0387bb',
    fade: 'fade_cc0387bb',
    'fade-burbuja': 'fade-burbuja_cc0387bb'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "gnWD":
/*!*********************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/TituloDualAnimado/TituloDualAnimado.module.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./TituloDualAnimado.module.css */ "nOId");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "llVO":
/*!*************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/FlechasNavegacion/FlechasNavegacion.js ***!
  \*************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FlechasNavegacion_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FlechasNavegacion.module.scss */ "GbI5");


var FlechasNavegacion = function (_a) {
    var isDarkMode = _a.isDarkMode, onAnteriorClick = _a.onAnteriorClick, onSiguienteClick = _a.onSiguienteClick;
    var color = isDarkMode ? '#FFFFFF' : '#005d9d'; // blanco en oscuro, azul corporativo en claro
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "".concat(_FlechasNavegacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].flecha, " ").concat(_FlechasNavegacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].izquierda), onClick: onAnteriorClick, "aria-label": "P\u00E1gina anterior", "data-tooltip": "P\u00E1gina anterior" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: "30", height: "30", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", { points: "15 18 9 12 15 6" }))),
        react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", { className: "".concat(_FlechasNavegacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].flecha, " ").concat(_FlechasNavegacion_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].derecha), onClick: onSiguienteClick, "aria-label": "P\u00E1gina siguiente", "data-tooltip": "P\u00E1gina siguiente" },
            react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("svg", { width: "30", height: "30", viewBox: "0 0 24 24", fill: "none", stroke: color, strokeWidth: "3", strokeLinecap: "round", strokeLinejoin: "round" },
                react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("polyline", { points: "9 18 15 12 9 6" })))));
};
/* harmony default export */ __webpack_exports__["e"] = (FlechasNavegacion);


/***/ }),

/***/ "nOId":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/TituloDualAnimado/TituloDualAnimado.module.css ***!
  \***************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".contenedor_0f77d540{-ms-flex-pack:center;-ms-flex-direction:column;flex-direction:column;justify-content:center;overflow:visible;padding-top:.5cm;position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none}.contenedor_0f77d540,.filaTitulos_0f77d540{-ms-flex-align:center;align-items:center;box-sizing:border-box;display:-ms-flexbox;display:flex;width:100%}.filaTitulos_0f77d540{-ms-flex-pack:justify;justify-content:space-between;padding:0 2rem}.textoIzquierdo_0f77d540{animation:izquierdaDesdeCentro_0f77d540 1.2s forwards;font-size:2rem;font-weight:700;text-align:left}.textoDerecho_0f77d540,.textoIzquierdo_0f77d540{color:var(--letra-titulo);-ms-flex:1;flex:1;white-space:nowrap}.textoDerecho_0f77d540{animation:derechaDesdeCentro_0f77d540 1.2s forwards;font-size:1.4rem;font-style:italic;font-weight:500;text-align:right}.lineaAnimada_0f77d540{animation:expandirLinea_0f77d540 1s ease-in-out forwards;background-color:var(--letra-titulo);border-radius:1px;height:2px;left:50%;pointer-events:none;position:absolute;top:calc(.5cm + 2.5rem);transform:translateX(-50%) scaleX(0);transform-origin:center;width:92%;z-index:10}@keyframes expandirLinea_0f77d540{to{transform:translateX(-50%) scaleX(1)}}@keyframes izquierdaDesdeCentro_0f77d540{0%{opacity:0;transform:translateX(50%)}to{opacity:1;transform:translateX(0)}}@keyframes derechaDesdeCentro_0f77d540{0%{opacity:0;transform:translateX(-50%)}to{opacity:1;transform:translateX(0)}}.modo-oscuro .textoDerecho_0f77d540,.modo-oscuro .textoIzquierdo_0f77d540{color:var(--letra-titulo)}.modo-oscuro .lineaAnimada_0f77d540{background-color:var(--letra-titulo)}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "oQgH":
/*!*************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/CuadroInteractivo/CuadroInteractivo.module.scss.js ***!
  \*************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./CuadroInteractivo.module.css */ "wfSI");
var styles = {
    contenedorPrincipal: 'contenedorPrincipal_790c4db8',
    aparecerDesdeCentro: 'aparecerDesdeCentro_790c4db8',
    cuadrosGrid: 'cuadrosGrid_790c4db8',
    cuadroNegro: 'cuadroNegro_790c4db8',
    hoverOverlay: 'hoverOverlay_790c4db8',
    imagen: 'imagen_790c4db8',
    zoomOverlay: 'zoomOverlay_790c4db8',
    zoomIn: 'zoomIn_790c4db8',
    zoomImage: 'zoomImage_790c4db8'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "opwe":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/cursos/escalerafija/pantallas/TerceraPantalla/TerceraPantalla.module.css ***!
  \***************************************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".container_96ed60e7{-ms-flex-pack:center;-ms-flex-align:center;align-items:center;background:0 0;display:-ms-flexbox;display:flex;height:100%;justify-content:center;min-height:100vh;position:relative;width:100%}.titulo_96ed60e7{animation:fadeIn_96ed60e7 1.5s ease forwards;color:#fff;font-family:Fira Sans,Source Sans Pro,sans-serif;font-size:36px;font-weight:700;letter-spacing:0;line-height:1.2;max-width:740px;padding:0;text-align:center;-webkit-user-select:none;-ms-user-select:none;user-select:none}@keyframes fadeIn_96ed60e7{0%{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "oyyb":
/*!***********************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Button/Button.module.css ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./Button.module.css */ "Gbqo");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "p5t+":
/*!**********************************************************!*\
  !*** ./lib/webparts/cursosSst/assets/image/muestra4.png ***!
  \**********************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "muestra4_c659498dab4eafbb78dbc69124cbbb23.png";

/***/ }),

/***/ "pMTT":
/*!*********************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/FlechasNavegacion/FlechasNavegacion.module.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./FlechasNavegacion.module.css */ "UbF1");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "sXy6":
/*!***************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Button/Button.module.scss.js ***!
  \***************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./Button.module.css */ "oyyb");
var styles = {
    button: 'button_7f1141b2',
    label: 'label_7f1141b2',
    iconLeft: 'iconLeft_7f1141b2',
    iconRight: 'iconRight_7f1141b2',
    primary: 'primary_7f1141b2',
    secondary: 'secondary_7f1141b2',
    success: 'success_7f1141b2',
    danger: 'danger_7f1141b2'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "vn1d":
/*!*********************************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/cursos/escalerafija/pantallas/SegundaPantalla/SegundaPantalla.module.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./SegundaPantalla.module.css */ "IjCG");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "vpDj":
/*!*************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Modal/Modal.module.scss.js ***!
  \*************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* tslint:disable */
__webpack_require__(/*! ./Modal.module.css */ "xDhZ");
var styles = {
    overlay: 'overlay_6dd47827',
    modal: 'modal_6dd47827',
    closeButton: 'closeButton_6dd47827',
    content: 'content_6dd47827',
    texto: 'texto_6dd47827',
    imagen: 'imagen_6dd47827'
};
/* harmony default export */ __webpack_exports__["e"] = (styles);
/* tslint:enable */ 


/***/ }),

/***/ "wfSI":
/*!*********************************************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/CuadroInteractivo/CuadroInteractivo.module.css ***!
  \*********************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./CuadroInteractivo.module.css */ "P6LW");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "xDhZ":
/*!*********************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/ui/Modal/Modal.module.css ***!
  \*********************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js!../../../../../../node_modules/postcss-loader/dist/cjs.js??ref--6-2!./Modal.module.css */ "7nQI");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/load-themed-styles/lib/index.js */ "xMn6");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "xcgO":
/*!****************************************************************!*\
  !*** ./lib/webparts/cursosSst/components/Burbujas/Burbujas.js ***!
  \****************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Burbujas_module_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Burbujas.module.scss */ "fQCM");


var Burbujas = function (_a) {
    var burbujas = _a.burbujas;
    return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, burbujas.map(function (b, index) { return (react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", { key: index, className: "".concat(_Burbujas_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"].burbuja, " ").concat(_Burbujas_module_scss__WEBPACK_IMPORTED_MODULE_1__[/* default */ "e"][b.animationType]), style: {
            top: b.top,
            left: b.left,
            width: b.size,
            height: b.size,
            animationDuration: b.duration,
            animationDelay: b.delay,
            background: "radial-gradient(circle at 30% 30%, ".concat(b.colors[0], ", ").concat(b.colors[1], ")")
        } })); })));
};
/* harmony default export */ __webpack_exports__["e"] = (Burbujas);


/***/ }),

/***/ "xffk":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ref--6-2!./lib/webparts/cursosSst/components/ui/TresCuadrantes/TresCuadrantes.css ***!
  \**************************************************************************************************************************************************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ":root{--color-primario:#005d9d;--color-primario-claro:#3390c9;--color-primario-muy-claro:#99c7e5;--color-primario-oscuro:#004070;--color-acento:#85bf00;--color-acento-claro:#b5db4d;--color-acento-oscuro:#6c9a00;--color-verde-suave:#b5db4d;--color-fondo:#fff;--color-texto:#333;--color-texto-invertido:#fff;--color-bordes:#e0e0e0;--toggle-claro-fondo:#e6eff6;--toggle-claro-thumb:#fff;--toggle-claro-icono:var(--color-primario);--letra-titulo:var(--color-primario);--font-size-titulo:3rem;--font-size-subtitulo:2rem;--padding-left-titulo:6rem;--padding-left-subtitulo:12rem;--padding-left-mobile:2rem;--button-padding-vertical:0.75rem;--button-padding-horizontal:2rem;--button-font-size:1.1rem;--button-border-radius:9999px;--button-box-shadow:0 6px 15px rgba(0,0,0,.2);--button-hover-bg:rgba(0,0,0,.1);--bubble-color:rgba(0,93,157,.2);--bubble-size:40px;--fondo-gradiente:linear-gradient(135deg,#f0f5fa,#d9e6f5 50%,#b0cce7)}.modo-oscuro{--color-fondo:#121212;--color-texto:#f5f5f5;--color-texto-invertido:#121212;--color-bordes:#444;--color-primario:#3390c9;--color-primario-oscuro:#004070;--color-verde-suave:#a2c039;--color-acento:#6c9a00;--letra-titulo:#f5f5f5;--button-hover-bg:hsla(0,0%,100%,.1);--color-borde-boton:var(--color-primario);--bubble-color:rgba(51,144,255,.1)}.tres-cuadrantes-container{backdrop-filter:blur(10px);background:var(--color-fondo-translucido);border:1px solid var(--color-bordes);border-radius:10px;color:var(--color-texto);font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;margin:20px auto;position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:900px;z-index:1}.tres-cuadrantes{height:300px;z-index:10}.cuadrante,.tres-cuadrantes{display:-ms-flexbox;display:flex;position:relative}.cuadrante{-ms-flex-align:center;align-items:center;background:0 0;-ms-flex:1;flex:1;-ms-flex-direction:column;flex-direction:column;padding:20px}.cuadrante:not(:last-child):after{background:var(--color-blanco);border-radius:2px;bottom:20px;content:\"\";opacity:.7;position:absolute;right:0;top:20px;width:2px}.cuadrante .desplegable{-ms-flex-align:center;-ms-flex-pack:center;align-items:center;backdrop-filter:blur(5px);background-color:hsla(0,0%,100%,.95);border-radius:10px 10px 0 0;bottom:0;box-shadow:0 -5px 15px rgba(0,0,0,.2);display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;height:600px;justify-content:center;left:0;padding:20px;position:absolute;width:100%;z-index:10000}.cuadrante .desplegable img{border-radius:8px;margin-bottom:15px;max-height:200px;object-fit:cover;width:90%}.cuadrante .desplegable p{color:var(--color-texto);font-size:1rem;margin:0;text-align:center}.cuadrante .boton-cerrar{background-color:var(--color-primario);border:none;border-radius:50%;color:var(--color-blanco);cursor:pointer;font-size:20px;font-weight:700;height:32px;line-height:32px;position:absolute;right:10px;text-align:center;top:10px;transition:background-color .3s;width:32px;z-index:10500}.cuadrante .boton-cerrar:hover{background-color:var(--color-primario-claro)}.titulo{color:var(--color-primario);font-size:1.3rem;font-weight:700;margin-bottom:8px}.texto,.titulo{text-align:center}.texto{-ms-flex-positive:1;color:var(--color-texto);flex-grow:1;font-size:1rem}.boton-toggle{background-color:var(--color-primario);border:none;border-radius:50%;color:var(--color-blanco);cursor:pointer;font-size:24px;font-weight:900;height:36px;line-height:36px;margin-top:15px;text-align:center;transition:background-color .3s ease;width:36px}.boton-toggle:hover{background-color:var(--color-primario-claro)}.modo-oscuro .tres-cuadrantes-container{background:var(--color-fondo-translucido);border-color:var(--color-bordes);color:var(--color-texto)}.modo-oscuro .cuadrante .overlay{background:rgba(0,0,0,.4)}.modo-oscuro .cuadrante .desplegable{background-color:hsla(0,0%,8%,.95);box-shadow:0 -5px 12px hsla(0,0%,100%,.15);color:var(--color-texto)}.modo-oscuro .cuadrante .boton-cerrar{background-color:var(--color-primario-claro);color:var(--color-texto)}.modo-oscuro .cuadrante .boton-cerrar:hover{background-color:var(--color-primario)}", ""]);
// Exports
module.exports = exports;


/***/ })

}]);
//# sourceMappingURL=chunk.1.js.map