var _reactNative = require('react-native');

if (_reactNative.Platform.OS === 'android') {
  module.exports = _reactNative.DrawerLayoutAndroid;
} else {
  module.exports = require('./DrawerLayout.ios').default;
}