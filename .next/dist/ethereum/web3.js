'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// The code either runs on the server or the browser. In case of code running on the browser, window is defined hence we could 
// have simply used const web3 =new Web3(window.web3.currentProvider) but in case of next, to render fast the code first runs on 
// the server where window is not defined.

var web3 = void 0;

// First we check if we are in the browser and then we check to see if metamask has already injected web3.
// Create a new instance of web3 that uses the provider that is given to us by metamask.
if (typeof window != 'undefined' && typeof window.web3 != 'undefined') {
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // We are on the server *OR* the user is not running metamask.
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/88e699c6f2994081ae38dd6c3ec61356');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU87Ozs7OztBQUVQO0FBQ0E7QUFDQTs7QUFFQSxJQUFJLFlBQUo7O0FBRUE7QUFUQTtBQVVBLElBQUksT0FBQSxBQUFPLFVBQVAsQUFBZ0IsZUFBZSxPQUFPLE9BQVAsQUFBYyxRQUFqRCxBQUF1RCxhQUFhLEFBQ2hFO1dBQUssQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBckIsQUFBSyxBQUFxQixBQUM3QjtBQUZELE9BRU8sQUFDSDtBQUNBO1FBQU0sV0FBUyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQWxDLEFBQWUsQUFDWCxBQUVKO1dBQUssQUFBSSxrQkFBVCxBQUFLLEFBQVMsQUFDakI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RhbmRvL0Rvd25sb2Fkcy9CYWNrdXAvUHJvamVjdHMva2lja3N0YXJ0In0=