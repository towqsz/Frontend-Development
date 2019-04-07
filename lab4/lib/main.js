"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PhoneManager =
/*#__PURE__*/
function () {
  function PhoneManager() {
    _classCallCheck(this, PhoneManager);

    this._databaase = [];
  }

  _createClass(PhoneManager, [{
    key: "database",
    get: function get() {
      return this._databaase;
    }
  }], [{
    key: "create_phone",
    value: function create_phone(model, submodel, battery, ram, touch_screen) {
      var os = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
      var os_version = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;

      if (os) {
        return new SmartPhone(model, submodel, battery, ram, touch_screen, os);
      } else {
        return new Phone(model, submodel, battery, ram, touch_screen, os);
      }
    }
  }]);

  return PhoneManager;
}();

var Phone =
/*#__PURE__*/
function () {
  function Phone(model, submodel, battery, ram, touch_screen, os) {
    _classCallCheck(this, Phone);

    this._model = model;
    this._submodel = submodel;
    this._battery = battery;
    this._ram = ram;
    this._touch_screen = touch_screen;
    this._os = os;
  }

  _createClass(Phone, [{
    key: "show_parameters",
    value: function show_parameters() {
      console.log(this.battery);
      console.log(this.ram);
      console.log(this.touch_screen);
    }
  }, {
    key: "show",
    value: function show() {
      console.log(this.model);
      console.log(this.submodel);
    }
  }, {
    key: "get_parameters",
    value: function get_parameters() {
      return {
        model: this._model = model,
        submodel: this._submodel = submodel,
        battery: this._battery = battery,
        ram: this._ram = ram,
        touch_screen: this._touch_screen = touch_screen,
        os: this._os = os
      };
    }
  }, {
    key: "model",
    get: function get() {
      return this._model;
    }
  }, {
    key: "sumbodel",
    get: function get() {
      return this._submodel;
    }
  }, {
    key: "battery",
    get: function get() {
      return this._battery;
    }
  }, {
    key: "ram",
    get: function get() {
      return this._ram;
    }
  }, {
    key: "touch_screen",
    get: function get() {
      return this._touch_screen;
    }
  }]);

  return Phone;
}();

var SmartPhone =
/*#__PURE__*/
function (_Phone) {
  _inherits(SmartPhone, _Phone);

  function SmartPhone() {
    _classCallCheck(this, SmartPhone);

    return _possibleConstructorReturn(this, _getPrototypeOf(SmartPhone).apply(this, arguments));
  }

  _createClass(SmartPhone, [{
    key: "update_os",
    value: function update_os(new_os) {
      if (new_os >= this.os) {
        this._os = new_os;
      }
    }
  }]);

  return SmartPhone;
}(Phone);