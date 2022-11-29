/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/vue-loader/dist/exportHelper.js":
/*!******************************************************!*\
  !*** ./node_modules/vue-loader/dist/exportHelper.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
// runtime helper for setting properties on components
// in a tree-shakable way
exports["default"] = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ "./src/AboutUs/Editor.vue":
/*!********************************!*\
  !*** ./src/AboutUs/Editor.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_e51ae66c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=e51ae66c */ "./src/AboutUs/Editor.vue?vue&type=template&id=e51ae66c");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/AboutUs/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_e51ae66c__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/AboutUs/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Editor.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editor',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

// Your block logic here...
const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const features = new Collection(block.data.features, {
    icon: 'fas fa-globe-europe',
    title: 'GREAT',
});

const __returned__ = { defineProps, inject, props, block, Contenteditable, WysiwygEditor, FontIcon, Collection, Actions, features }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/AboutUs/Manager.vue":
/*!*********************************!*\
  !*** ./src/AboutUs/Manager.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_6104d520__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=6104d520 */ "./src/AboutUs/Manager.vue?vue&type=template&id=6104d520");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/AboutUs/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_6104d520__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/AboutUs/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Manager.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Manager',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const Select = block.control('Select');

const choices = {
    'yes': 'Yes',
    'no': 'No',
};

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block, translator, Select, choices }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/AboutUs/Render.vue":
/*!********************************!*\
  !*** ./src/AboutUs/Render.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_31637073__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=31637073 */ "./src/AboutUs/Render.vue?vue&type=template&id=31637073");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/AboutUs/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_31637073__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/AboutUs/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Render.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Render.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Render',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CallToAction/Editor.vue":
/*!*************************************!*\
  !*** ./src/CallToAction/Editor.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=684a11a4 */ "./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CallToAction/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editor',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

// Your block logic here...
const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const BackgroundImage = block.extension('BackgroundImage');

const __returned__ = { defineProps, inject, props, block, Contenteditable, WysiwygEditor, FontIcon, BackgroundImage }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CallToAction/Manager.vue":
/*!**************************************!*\
  !*** ./src/CallToAction/Manager.vue ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=3dc428f4 */ "./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CallToAction/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Manager',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const Range = block.control('Input.Range');

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block, translator, Range }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/CallToAction/Render.vue":
/*!*************************************!*\
  !*** ./src/CallToAction/Render.vue ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=0c3af54d */ "./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/CallToAction/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Render',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const BackgroundImage = block.extension('BackgroundImage');
const image = new BackgroundImage(block, () => block.data.backgroundImage, 'background');

const __returned__ = { defineProps, inject, props, block, BackgroundImage, image }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Contact/Editor.vue":
/*!********************************!*\
  !*** ./src/Contact/Editor.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_432f5895__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=432f5895 */ "./src/Contact/Editor.vue?vue&type=template&id=432f5895");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/Contact/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_432f5895__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Contact/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Editor.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editor',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);
const translator = inject('translator');

// Your block logic here...
const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const elements = new Collection(block.data.contactDetails, {
    icon: 'fas fa-rocket',
    title: 'SMOOTH EXECUTION',
    description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
});

const __returned__ = { defineProps, inject, props, block, translator, Contenteditable, WysiwygEditor, FontIcon, Collection, Actions, elements }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Contact/Manager.vue":
/*!*********************************!*\
  !*** ./src/Contact/Manager.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_62e182b5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=62e182b5 */ "./src/Contact/Manager.vue?vue&type=template&id=62e182b5");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/Contact/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_62e182b5__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Contact/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Manager.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Manager',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

const FormSelect = block.control('FormSelect');

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block, translator, FormSelect }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Contact/Render.vue":
/*!********************************!*\
  !*** ./src/Contact/Render.vue ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_31bf8784__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=31bf8784 */ "./src/Contact/Render.vue?vue&type=template&id=31bf8784");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/Contact/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_31bf8784__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Contact/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Render.vue?vue&type=script&setup=true&lang=js":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Render.vue?vue&type=script&setup=true&lang=js ***!
  \***************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Render',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Features/Editor.vue":
/*!*********************************!*\
  !*** ./src/Features/Editor.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Editor_vue_vue_type_template_id_627c6d36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Editor.vue?vue&type=template&id=627c6d36 */ "./src/Features/Editor.vue?vue&type=template&id=627c6d36");
/* harmony import */ var _Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Editor.vue?vue&type=script&setup=true&lang=js */ "./src/Features/Editor.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Editor_vue_vue_type_template_id_627c6d36__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Features/Editor.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Editor.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Editor',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').editor(props);

// Your block logic here...

const Contenteditable = block.extension('Contenteditable');
const WysiwygEditor = block.extension('WysiwygEditor');
const FontIcon = block.extension('FontIcon');
const Collection = block.extension('Collection');
const Actions = block.extension('Collection.Actions');

const features = new Collection(block.data.features, {
    icon: 'fas fa-rocket',
    title: 'SMOOTH EXECUTION',
    description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
});

const __returned__ = { defineProps, inject, props, block, Contenteditable, WysiwygEditor, FontIcon, Collection, Actions, features }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Features/Manager.vue":
/*!**********************************!*\
  !*** ./src/Features/Manager.vue ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Manager_vue_vue_type_template_id_2d370234__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Manager.vue?vue&type=template&id=2d370234 */ "./src/Features/Manager.vue?vue&type=template&id=2d370234");
/* harmony import */ var _Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Manager.vue?vue&type=script&setup=true&lang=js */ "./src/Features/Manager.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Manager_vue_vue_type_template_id_2d370234__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Features/Manager.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Manager',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').manager(props);
const translator = inject('translator');

block.on('created', () => {
    block.expectsFullWidthSection();
});

const __returned__ = { defineProps, inject, props, block, translator }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/Features/Render.vue":
/*!*********************************!*\
  !*** ./src/Features/Render.vue ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Render_vue_vue_type_template_id_066d50df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Render.vue?vue&type=template&id=066d50df */ "./src/Features/Render.vue?vue&type=template&id=066d50df");
/* harmony import */ var _Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Render.vue?vue&type=script&setup=true&lang=js */ "./src/Features/Render.vue?vue&type=script&setup=true&lang=js");
/* harmony import */ var _home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;
const __exports__ = /*#__PURE__*/(0,_home_adam_projects_tuliacms_development_tuliacms_extension_theme_Templatemo_Breezed_Resources_public_tulia_editor_blocks_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__["default"])(_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_Render_vue_vue_type_template_id_066d50df__WEBPACK_IMPORTED_MODULE_0__.render],['__file',"src/Features/Render.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Render.vue?vue&type=script&setup=true&lang=js":
/*!****************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Render.vue?vue&type=script&setup=true&lang=js ***!
  \****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  __name: 'Render',
  props: ['block'],
  setup(__props, { expose }) {
  expose();

const props = __props

const { defineProps, inject } = __webpack_require__(/*! vue */ "vue");

const block = inject('blocks.instance').render(props);

const __returned__ = { defineProps, inject, props, block }
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
return __returned__
}

});

/***/ }),

/***/ "./src/AboutUs/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************!*\
  !*** ./src/AboutUs/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/AboutUs/Manager.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************!*\
  !*** ./src/AboutUs/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/AboutUs/Render.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************!*\
  !*** ./src/AboutUs/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*************************************************************************!*\
  !*** ./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js":
/*!************************************************************************!*\
  !*** ./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Contact/Editor.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************!*\
  !*** ./src/Contact/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Contact/Manager.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************!*\
  !*** ./src/Contact/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Contact/Render.vue?vue&type=script&setup=true&lang=js":
/*!*******************************************************************!*\
  !*** ./src/Contact/Render.vue?vue&type=script&setup=true&lang=js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Features/Editor.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************!*\
  !*** ./src/Features/Editor.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Editor.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Features/Manager.vue?vue&type=script&setup=true&lang=js":
/*!*********************************************************************!*\
  !*** ./src/Features/Manager.vue?vue&type=script&setup=true&lang=js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Manager.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/Features/Render.vue?vue&type=script&setup=true&lang=js":
/*!********************************************************************!*\
  !*** ./src/Features/Render.vue?vue&type=script&setup=true&lang=js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_script_setup_true_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=script&setup=true&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Render.vue?vue&type=script&setup=true&lang=js");
 

/***/ }),

/***/ "./src/AboutUs/Editor.vue?vue&type=template&id=e51ae66c":
/*!**************************************************************!*\
  !*** ./src/AboutUs/Editor.vue?vue&type=template&id=e51ae66c ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_e51ae66c__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_e51ae66c__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=e51ae66c */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Editor.vue?vue&type=template&id=e51ae66c");


/***/ }),

/***/ "./src/AboutUs/Manager.vue?vue&type=template&id=6104d520":
/*!***************************************************************!*\
  !*** ./src/AboutUs/Manager.vue?vue&type=template&id=6104d520 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_6104d520__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_6104d520__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=6104d520 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Manager.vue?vue&type=template&id=6104d520");


/***/ }),

/***/ "./src/AboutUs/Render.vue?vue&type=template&id=31637073":
/*!**************************************************************!*\
  !*** ./src/AboutUs/Render.vue?vue&type=template&id=31637073 ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_31637073__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_31637073__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=31637073 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Render.vue?vue&type=template&id=31637073");


/***/ }),

/***/ "./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4":
/*!*******************************************************************!*\
  !*** ./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4 ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_684a11a4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=684a11a4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4");


/***/ }),

/***/ "./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4":
/*!********************************************************************!*\
  !*** ./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4 ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_3dc428f4__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=3dc428f4 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4");


/***/ }),

/***/ "./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d":
/*!*******************************************************************!*\
  !*** ./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_0c3af54d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=0c3af54d */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d");


/***/ }),

/***/ "./src/Contact/Editor.vue?vue&type=template&id=432f5895":
/*!**************************************************************!*\
  !*** ./src/Contact/Editor.vue?vue&type=template&id=432f5895 ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_432f5895__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_432f5895__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=432f5895 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Editor.vue?vue&type=template&id=432f5895");


/***/ }),

/***/ "./src/Contact/Manager.vue?vue&type=template&id=62e182b5":
/*!***************************************************************!*\
  !*** ./src/Contact/Manager.vue?vue&type=template&id=62e182b5 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_62e182b5__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_62e182b5__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=62e182b5 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Manager.vue?vue&type=template&id=62e182b5");


/***/ }),

/***/ "./src/Contact/Render.vue?vue&type=template&id=31bf8784":
/*!**************************************************************!*\
  !*** ./src/Contact/Render.vue?vue&type=template&id=31bf8784 ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_31bf8784__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_31bf8784__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=31bf8784 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Render.vue?vue&type=template&id=31bf8784");


/***/ }),

/***/ "./src/Features/Editor.vue?vue&type=template&id=627c6d36":
/*!***************************************************************!*\
  !*** ./src/Features/Editor.vue?vue&type=template&id=627c6d36 ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_627c6d36__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Editor_vue_vue_type_template_id_627c6d36__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Editor.vue?vue&type=template&id=627c6d36 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Editor.vue?vue&type=template&id=627c6d36");


/***/ }),

/***/ "./src/Features/Manager.vue?vue&type=template&id=2d370234":
/*!****************************************************************!*\
  !*** ./src/Features/Manager.vue?vue&type=template&id=2d370234 ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_2d370234__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Manager_vue_vue_type_template_id_2d370234__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Manager.vue?vue&type=template&id=2d370234 */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Manager.vue?vue&type=template&id=2d370234");


/***/ }),

/***/ "./src/Features/Render.vue?vue&type=template&id=066d50df":
/*!***************************************************************!*\
  !*** ./src/Features/Render.vue?vue&type=template&id=066d50df ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_066d50df__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_4_use_0_Render_vue_vue_type_template_id_066d50df__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./Render.vue?vue&type=template&id=066d50df */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Render.vue?vue&type=template&id=066d50df");


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Editor.vue?vue&type=template&id=e51ae66c":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Editor.vue?vue&type=template&id=e51ae66c ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "about" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-lg-6 col-md-6 col-xs-12" }
const _hoisted_5 = { class: "left-text-content" }
const _hoisted_6 = { class: "section-heading" }
const _hoisted_7 = { class: "row" }
const _hoisted_8 = { class: "service-item" }
const _hoisted_9 = { class: "service-icon" }
const _hoisted_10 = { class: "col-12 col-lg-4 service-column pt-4" }
const _hoisted_11 = {
  key: 0,
  class: "row"
}
const _hoisted_12 = { class: "col-md-12" }
const _hoisted_13 = {
  href: "#",
  class: "main-button-icon"
}
const _hoisted_14 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()
const _hoisted_15 = { class: "col-lg-6 col-md-6 col-xs-12" }
const _hoisted_16 = { class: "right-text-content" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.label,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.label) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.title,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.title) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.features.collection, (item) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                  key: item.id,
                  class: "col-md-6 col-sm-6"
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                        modelValue: item.icon,
                        "onUpdate:modelValue": $event => ((item.icon) = $event)
                      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                        modelValue: item.title,
                        "onUpdate:modelValue": $event => ((item.title) = $event)
                      }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                      actions: "moveBackward,moveForward,remove",
                      collection: $setup.features,
                      item: item
                    }, null, 8 /* PROPS */, ["collection", "item"])
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                  actions: "add",
                  collection: $setup.features
                }, null, 8 /* PROPS */, ["collection"])
              ])
            ]),
            ($setup.block.data.showButton === 'yes')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_11, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_13, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                        modelValue: $setup.block.data.buttonLabel,
                        "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.buttonLabel) = $event))
                      }, null, 8 /* PROPS */, ["modelValue"]),
                      _hoisted_14,
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                        modelValue: $setup.block.data.buttonIcon,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.block.data.buttonIcon) = $event))
                      }, null, 8 /* PROPS */, ["modelValue"])
                    ])
                  ])
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_16, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["WysiwygEditor"], {
              modelValue: $setup.block.data.content,
              "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.block.data.content) = $event))
            }, null, 8 /* PROPS */, ["modelValue"])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Manager.vue?vue&type=template&id=6104d520":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Manager.vue?vue&type=template&id=6104d520 ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "alert alert-info" }, [
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("Hash to this section: "),
  /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("code", null, "#about")
], -1 /* HOISTED */)

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    _hoisted_1,
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Select"], {
      modelValue: $setup.block.data.showButton,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.showButton) = $event)),
      choices: $setup.choices,
      label: $setup.translator.trans('Show button', 'Templatemo/Breezed')
    }, null, 8 /* PROPS */, ["modelValue", "label"])
  ], 64 /* STABLE_FRAGMENT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Render.vue?vue&type=template&id=31637073":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/AboutUs/Render.vue?vue&type=template&id=31637073 ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "about" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-lg-6 col-md-6 col-xs-12" }
const _hoisted_5 = { class: "left-text-content" }
const _hoisted_6 = { class: "section-heading" }
const _hoisted_7 = { class: "row" }
const _hoisted_8 = { class: "service-item" }
const _hoisted_9 = { class: "service-icon" }
const _hoisted_10 = {
  key: 0,
  class: "row"
}
const _hoisted_11 = { class: "col-md-12" }
const _hoisted_12 = {
  href: "#",
  class: "main-button-icon"
}
const _hoisted_13 = { class: "col-lg-6 col-md-6 col-xs-12" }
const _hoisted_14 = ["innerHTML"]

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.label), 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.title), 1 /* TEXT */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.features, (item) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                  key: item.id,
                  class: "col-md-6 col-sm-6"
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(item.icon)
                      }, null, 2 /* CLASS */)
                    ]),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1 /* TEXT */)
                  ])
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ]),
            ($setup.block.data.showButton === 'yes')
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_12, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.buttonLabel) + " ", 1 /* TEXT */),
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                        class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.block.data.buttonIcon)
                      }, null, 2 /* CLASS */)
                    ])
                  ])
                ]))
              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            class: "right-text-content",
            innerHTML: $setup.block.data.content
          }, null, 8 /* PROPS */, _hoisted_14)
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Editor.vue?vue&type=template&id=684a11a4 ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "container" }
const _hoisted_2 = { class: "row" }
const _hoisted_3 = { class: "col-lg-8 offset-lg-2" }
const _hoisted_4 = { class: "section-heading" }
const _hoisted_5 = { class: "subscribe-content" }
const _hoisted_6 = { class: "subscribe-form text-center" }
const _hoisted_7 = { class: "main-button-icon" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["BackgroundImage"], {
    class: "subscribe block-image block-image-main",
    modelValue: $setup.block.data.backgroundImage,
    "onUpdate:modelValue": _cache[5] || (_cache[5] = $event => (($setup.block.data.backgroundImage) = $event)),
    placement: "background"
  }, {
    default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "subscribe-overlay",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ opacity: $setup.block.data.overlayOpacity })
      }, null, 4 /* STYLE */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.label,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.label) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.title,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.title) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["WysiwygEditor"], {
                modelValue: $setup.block.data.content,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.content) = $event))
              }, null, 8 /* PROPS */, ["modelValue"]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_7, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: $setup.block.data.buttonLabel,
                    "onUpdate:modelValue": _cache[3] || (_cache[3] = $event => (($setup.block.data.buttonLabel) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"]),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                    modelValue: $setup.block.data.buttonIcon,
                    "onUpdate:modelValue": _cache[4] || (_cache[4] = $event => (($setup.block.data.buttonIcon) = $event))
                  }, null, 8 /* PROPS */, ["modelValue"])
                ])
              ])
            ])
          ])
        ])
      ])
    ]),
    _: 1 /* STABLE */
  }, 8 /* PROPS */, ["modelValue"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4":
/*!**************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Manager.vue?vue&type=template&id=3dc428f4 ***!
  \**************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["Range"], {
    modelValue: $setup.block.data.overlayOpacity,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.overlayOpacity) = $event)),
    min: "0",
    max: "1",
    step: "0.1",
    label: $setup.translator.trans('Background overlay opacity', 'Templatemo/Breezed')
  }, null, 8 /* PROPS */, ["modelValue", "label"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/CallToAction/Render.vue?vue&type=template&id=0c3af54d ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "subscribe" }
const _hoisted_2 = ["id"]
const _hoisted_3 = { class: "container" }
const _hoisted_4 = { class: "row" }
const _hoisted_5 = { class: "col-lg-8 offset-lg-2" }
const _hoisted_6 = { class: "section-heading" }
const _hoisted_7 = { class: "subscribe-content" }
const _hoisted_8 = ["innerHTML"]
const _hoisted_9 = { class: "subscribe-form text-center" }
const _hoisted_10 = { class: "main-button-icon" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
      class: "subscribe",
      id: $setup.image.id
    }, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
        class: "subscribe-overlay",
        style: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeStyle)({ opacity: $setup.block.data.overlayOpacity })
      }, null, 4 /* STYLE */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.label), 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.title), 1 /* TEXT */)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
                innerHTML: $setup.block.data.content
              }, null, 8 /* PROPS */, _hoisted_8),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("a", _hoisted_10, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.buttonLabel) + " ", 1 /* TEXT */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)($setup.block.data.buttonIcon)
                  }, null, 2 /* CLASS */)
                ])
              ])
            ])
          ])
        ])
      ])
    ], 8 /* PROPS */, _hoisted_2)
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Editor.vue?vue&type=template&id=432f5895":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Editor.vue?vue&type=template&id=432f5895 ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "contact-us" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-lg-4 col-md-4 col-xs-12" }
const _hoisted_5 = { class: "left-text-content" }
const _hoisted_6 = { class: "section-heading" }
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "mb-4" }, null, -1 /* HOISTED */)
const _hoisted_8 = { class: "contact-info" }
const _hoisted_9 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)()
const _hoisted_10 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("br", null, null, -1 /* HOISTED */)
const _hoisted_11 = { class: "col-lg-8 col-md-8 col-xs-12" }
const _hoisted_12 = { class: "contact-form" }
const _hoisted_13 = { class: "card" }
const _hoisted_14 = { class: "card-body" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.label,
                  "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.label) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                  modelValue: $setup.block.data.title,
                  "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($setup.block.data.title) = $event))
                }, null, 8 /* PROPS */, ["modelValue"])
              ]),
              _hoisted_7,
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["WysiwygEditor"], {
                modelValue: $setup.block.data.description,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($setup.block.data.description) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_8, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.elements.collection, (item) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                  key: item.id
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                    modelValue: item.icon,
                    "onUpdate:modelValue": $event => ((item.icon) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
                  _hoisted_9,
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: item.text,
                    "onUpdate:modelValue": $event => ((item.text) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"]),
                  _hoisted_10,
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                    actions: "moveUp,moveDown,remove",
                    collection: $setup.elements,
                    item: item
                  }, null, 8 /* PROPS */, ["collection", "item"])
                ]))
              }), 128 /* KEYED_FRAGMENT */)),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("li", null, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                  actions: "add",
                  collection: $setup.elements
                }, null, 8 /* PROPS */, ["collection"])
              ])
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_13, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.translator.trans('Here will be rendered form.', 'TuliaLisa')), 1 /* TEXT */)
            ])
          ])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Manager.vue?vue&type=template&id=62e182b5":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Manager.vue?vue&type=template&id=62e182b5 ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)($setup["FormSelect"], {
    modelValue: $setup.block.data.contactFormId,
    "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($setup.block.data.contactFormId) = $event)),
    label: $setup.translator.trans('Contact form', 'Templatemo/Breezed')
  }, null, 8 /* PROPS */, ["modelValue", "label"]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Render.vue?vue&type=template&id=31bf8784":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Contact/Render.vue?vue&type=template&id=31bf8784 ***!
  \********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "contact-us" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "col-lg-4 col-md-4 col-xs-12" }
const _hoisted_5 = { class: "left-text-content" }
const _hoisted_6 = { class: "section-heading" }
const _hoisted_7 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "mb-4" }, null, -1 /* HOISTED */)
const _hoisted_8 = ["innerHTML"]
const _hoisted_9 = { class: "contact-info" }
const _hoisted_10 = { class: "col-lg-8 col-md-8 col-xs-12" }
const _hoisted_11 = { class: "contact-form" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h6", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.label), 1 /* TEXT */),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h2", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.title), 1 /* TEXT */),
              _hoisted_7,
              ($setup.block.data.description != '')
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                    key: 0,
                    innerHTML: $setup.block.data.description
                  }, null, 8 /* PROPS */, _hoisted_8))
                : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("ul", _hoisted_9, [
              ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.contactDetails, (item) => {
                return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("li", {
                  key: item.id
                }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(item.icon)
                  }, null, 2 /* CLASS */),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(" " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.text), 1 /* TEXT */)
                ]))
              }), 128 /* KEYED_FRAGMENT */))
            ])
          ])
        ]),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, " [contact_form id=\"" + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.block.data.contactFormId) + "\"] ", 1 /* TEXT */)
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Editor.vue?vue&type=template&id=627c6d36":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Editor.vue?vue&type=template&id=627c6d36 ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "features" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "features-item" }
const _hoisted_5 = { class: "features-icon" }
const _hoisted_6 = { class: "features-content" }
const _hoisted_7 = { class: "col-12 col-lg-4 service-column pt-4" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.features.collection, (item) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: item.id,
            class: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["FontIcon"], {
                  modelValue: item.icon,
                  "onUpdate:modelValue": $event => ((item.icon) = $event)
                }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: item.title,
                    "onUpdate:modelValue": $event => ((item.title) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Contenteditable"], {
                    modelValue: item.description,
                    "onUpdate:modelValue": $event => ((item.description) = $event)
                  }, null, 8 /* PROPS */, ["modelValue", "onUpdate:modelValue"])
                ]),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
                  actions: "moveBackward,moveForward,remove",
                  collection: $setup.features,
                  item: item
                }, null, 8 /* PROPS */, ["collection", "item"])
              ])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */)),
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)($setup["Actions"], {
            actions: "add",
            collection: $setup.features
          }, null, 8 /* PROPS */, ["collection"])
        ])
      ])
    ])
  ]))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Manager.vue?vue&type=template&id=2d370234":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Manager.vue?vue&type=template&id=2d370234 ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "text-muted text-uppercase" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($setup.translator.trans('noEditOptionsForThisElement')), 1 /* TEXT */))
}

/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Render.vue?vue&type=template&id=066d50df":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[4].use[0]!./src/Features/Render.vue?vue&type=template&id=066d50df ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { id: "features" }
const _hoisted_2 = { class: "container" }
const _hoisted_3 = { class: "row" }
const _hoisted_4 = { class: "features-item" }
const _hoisted_5 = { class: "features-icon" }
const _hoisted_6 = { class: "features-content" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
        ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($setup.block.data.features, (item) => {
          return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            key: item.id,
            class: "col-lg-4 col-md-6 col-sm-12 col-xs-12"
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_4, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_5, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("i", {
                  class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)(item.icon)
                }, null, 2 /* CLASS */)
              ]),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("h4", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.title), 1 /* TEXT */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("p", null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.description), 1 /* TEXT */)
              ])
            ])
          ]))
        }), 128 /* KEYED_FRAGMENT */))
      ])
    ])
  ]))
}

/***/ }),

/***/ "./src/AboutUs/AboutUs.js":
/*!********************************!*\
  !*** ./src/AboutUs/AboutUs.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/AboutUs/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/AboutUs/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/AboutUs/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'AboutUs',
    name: 'AboutUs',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        buttonLabel: 'Learn more',
        buttonIcon: 'fas fa-chevron-right',
        showButton: 'yes',
        label: 'ABOUT US',
        title: 'We work with top brands and startups',
        content: '<p>Breezed HTML Template is provided by TemplateMo for absolutely free of charge. You can download, edit and use this for your non-commercial and commercial websites.</p><p>Redistributing this template as a downloadable ZIP file on any template collection website is strictly prohibited. You will need to talk to us if you want to redistribute this template. Thank you.</p><p>This is a Bootstrap v4.3.1 CSS layout. Do you like it? You can feel free to talk to us if you have anything.</p>',
        features: [{
            id: '1',
            icon: 'fas fa-rocket',
            title: 'TOP NOTCH',
        },{
            id: '2',
            icon: 'fas fa-globe-europe',
            title: 'ROBUST',
        },{
            id: '3',
            icon: 'fas fa-rocket',
            title: 'RELIABLE',
        },{
            id: '4',
            icon: 'fas fa-globe-europe',
            title: 'UP-TO-DATE',
        }]
    }
});


/***/ }),

/***/ "./src/CallToAction/CallToAction.js":
/*!******************************************!*\
  !*** ./src/CallToAction/CallToAction.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/CallToAction/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/CallToAction/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/CallToAction/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'CallToAction',
    name: 'CallToAction',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        label: 'NEVER MISS NEW THINGS',
        title: 'Don’t miss this chance!',
        content: '<p>Vivamus suscipit blandit nibh, in cursus mi. Proin vel blandit metus, et auctor elit. Vivamus tincidunt tristique convallis. Ut nec odio vel arcu euismod semper nec ac sem.</p>',
        buttonLabel: 'GET INFORMED',
        buttonIcon: 'fas fa-rocket',
        buttonLink: '#',
        overlayOpacity: 0.4,
        backgroundImage: {
            id: null,
            filename: null,
        },
    }
});


/***/ }),

/***/ "./src/Contact/Contact.js":
/*!********************************!*\
  !*** ./src/Contact/Contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/Contact/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/Contact/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/Contact/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'Contact',
    name: 'Contact',
    icon: 'data:image/png;base64,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',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        label: 'CONTACT US',
        title: 'Feel free to keep in touch with us!',
        description: '',
        contactFormId: null,
        contactDetails: [{
            id: '1',
            icon: 'fas fa-phone',
            text: '010-020-0860'
        },{
            id: '2',
            icon: 'fas fa-envelope',
            text: 'info@company.com'
        },{
            id: '3',
            icon: 'fas fa-globe',
            text: 'www.company.com'
        }]
    }
});


/***/ }),

/***/ "./src/Features/Features.js":
/*!**********************************!*\
  !*** ./src/Features/Features.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Editor = (__webpack_require__(/*! ./Editor.vue */ "./src/Features/Editor.vue")["default"]);
const Render = (__webpack_require__(/*! ./Render.vue */ "./src/Features/Render.vue")["default"]);
const Manager = (__webpack_require__(/*! ./Manager.vue */ "./src/Features/Manager.vue")["default"]);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    theme: 'Templatemo/Breezed',
    framework: 'bootstrap-5',
    code: 'Features',
    name: 'Features',
    icon: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAABuCAMAAAA5xf5aAAAAilBMVEX////39vbe3+Ds6urm5uju7+9ztJzj4eDR09fX1dTi3tnJztPd1s/Y2tulzbns5eDd2dekp6p+uqXRzMnt9vfX6+jLx8PEvLaclpHX4OitqaessbiCgYG+w8e2usCIjZTk8Pe11NKSxbO0s7Kgn5+Yy8CVnaV0c3XQ4tXD5ePB28tncHrI095MVl4lcCa3AAAEQklEQVR42uzBgQAAAACAoP2pF6kCAAAAAAAAmN05pgEAAIEYOOGA928VEwwk3AloCgAA8EYlq7nq64vDLLksuQ0CUbTxjChHaHAajQHxjASW7JHy/78XPLErVVkpKRZzig0Lbp1L9wPCKaU3+KTXg7HOesMSdGZOJgftkcE/cOaC88uzfDPLoA/Zaxu91kRnCzKYt4TG5jefw38oogpRIctY/Nqty8qaWSILQUVU2Ee5/+M5vXw8c1V00erBuhmh0au2rXP25yvspxFi4u/X6f1xXZZ5QT2r19U7R1ycwUW96HWZ9RLHtLf5H8WuPF5L0qbkmN0oIywqmgEQy3EkL+uPvb0LJfexTt8DSUw1ikljIfWDwm89Ywz2UyxHgCsfH9bHF3vwxnZN9jIQCSl5L09qM162R4M7ev+l2KEcfIcHE05DfxpalCzgMW0qgJQdtpsisIcr/Y2AWghKz6X4ywRVqK/4hAvxGXuGWtzTuLiQ6esqPplo4QYVp15Kk5Ff6iqKG1TnSu8rCtX4oPfSZLpVVPzFTr3rNBQDQRie2dnR2j5xcpSEIl2g5P0fEAScgptIkZK/tGTvJ63k4/H+S99+uutdn9s/+OnxzsTjFbh/z4/E1qGnrQRNp1NMdpiyBIwru0QJ1LzUWZYJsn1Z0v5pv+0InCGlBZGSJVtB2xLICXVbIhGrJdkGOM63EfmZaGB35ekn4gl/dshWMYKt8tTGZTQugVoqoqjTuWruFgVqF5eYXjISGYHfYyi01Oo5elSrw+wKr22mchdJtf46J5W9amS1GOTabyRGG7kRR8R8I/afiCtuiDQJWrRJFhJikoRoJmUQZopIFE1a+D0CeL/9/gxMkWkCpIyPMUiLFLezm4kg4zNR34imhf/+e2mnjnXcBmIggJLDIUiuJUiAL0U6//9XxvJhm/hgR7lUAR9WJFUsMYWgL7geVW2+m/u9mKio3G00mT4nlTc4935St2O/zqulKpPPjd+K6CcjToELF0Qm99TIwpXcgGsBtV+Ex29uT6nlRoRljSp5SVHpFdjv1TdcsyBWIyPtPpuM+7wktlypQC2o8jMRL4WFHEAVsvYU4iliyp9QgqQdBUI1buZBmoXT40MFBjWhw83oCy3kNbMAaUHQxMJhwiCUFnSKWsDdlUbhwPaT9DMRjxTmg1QL0sdXESGtvfP03elsf8n422X97kbqv4xoSbeRJeph+OGKMAWwD2QVGJX8qIIABbi8h52OkZBdUwFxQAdRQK1Ixrqn7cgPjxWIcxFXA1wrzIH1ETFBnow42YqBhdtNiVEGK6h7BBcvcEtEEqDpBXBA3lLbV1wIk90QWBVpEmR5RXqsyQ3HcBsgMfxsRMKu0M2jHhGxJc9GnExE57mXo81xnkeb/S31ueRR5/N8HuVkxHleRmyttdZaa6211lprrbXWWmuttdZaa6211lprrf2/fgGOlz1ojsCkRgAAAABJRU5ErkJggg==',
    manager: Manager,
    editor: Editor,
    render: Render,
    defaults: {
        features: [{
            id: '1',
            icon: 'fas fa-rocket',
            title: 'INITIAL WORK',
            description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
        },{
            id: '2',
            icon: 'fas fa-globe-europe',
            title: 'MASTER PLANNING',
            description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
        },{
            id: '3',
            icon: 'fas fa-rocket',
            title: 'SMOOTH EXECUTION',
            description: 'Proin euismod sem ut diam ultricies, ut faucibus velit ultricies. Nam eu turpis quam. Duis ac condimentum eros.',
        }]
    }
});


/***/ }),

/***/ "TuliaEditor":
/*!******************************!*\
  !*** external "TuliaEditor" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = window["TuliaEditor"];

/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = window["Vue"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
const TuliaEditor = __webpack_require__(/*! TuliaEditor */ "TuliaEditor");

TuliaEditor.trans('pl', 'Templatemo/Breezed', {
    'Show button': 'Pokaż przycisk',
    'Contact form': 'Formularz kontaktowy',
    'Here will be rendered form.': 'Tutaj będzie miejsce na formularz.',
    'Background overlay opacity': 'Przezroczystość nakładki tła',
});

TuliaEditor.block((__webpack_require__(/*! ./AboutUs/AboutUs.js */ "./src/AboutUs/AboutUs.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./Features/Features.js */ "./src/Features/Features.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./Contact/Contact.js */ "./src/Contact/Contact.js")["default"]));
TuliaEditor.block((__webpack_require__(/*! ./CallToAction/CallToAction.js */ "./src/CallToAction/CallToAction.js")["default"]));

})();

window.ThemeTuliaEditorBlocks = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=theme-tulia-editor-blocks.js.map