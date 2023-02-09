'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _CampaignFactory = require('./build/CampaignFactory.json');

var _CampaignFactory2 = _interopRequireDefault(_CampaignFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// We are not accessing the web3 library here, we are getting the instance that we created.
var instance = new _web2.default.eth.Contract(JSON.parse(_CampaignFactory2.default.interface), 0x78c7Ae5190525C4848d7908a6364ca6B0B8BbeA5);
// ABI defined in CampaignFactory.json file
exports.default = instance;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFxmYWN0b3J5LmpzIl0sIm5hbWVzIjpbIndlYjMiLCJDYW1wYWlnbkZhY3RvcnkiLCJpbnN0YW5jZSIsImV0aCIsIkNvbnRyYWN0IiwiSlNPTiIsInBhcnNlIiwiaW50ZXJmYWNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxBQUFPLEFBQVU7Ozs7QUFFakIsQUFBTyxBQUFxQjs7Ozs7O0FBSDVCO0FBS0EsSUFBTSxXQUFTLElBQUksY0FBQSxBQUFLLElBQVQsQUFBYSxTQUFTLEtBQUEsQUFBSyxNQUFNLDBCQUFqQyxBQUFzQixBQUEyQixZQUFoRSxBQUFlLEFBQTZELEFBRTVFO0FBTEE7a0JBS0EsQUFBZSIsImZpbGUiOiJmYWN0b3J5LmpzIiwic291cmNlUm9vdCI6IkM6L1VzZXJzL3RhbmRvL0Rvd25sb2Fkcy9CYWNrdXAvUHJvamVjdHMva2lja3N0YXJ0In0=