'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'HoldButton',


  propTypes: {
    onLongPress: _react2.default.PropTypes.func.isRequired,
    Content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
  },

  getInitialState: function getInitialState() {
    return {
      isFired: false,
      isHolding: false,
      isDone: false
    };
  },
  componentDidMount: function componentDidMount() {
    _reactDom2.default.findDOMNode(this).addEventListener('transitionend', this._onTransitionend, false);
  },
  _onTransitionend: function _onTransitionend() {
    if (this.state.isFired) {
      return;
    }

    if (this.state.isDone) {
      this.setState({ isFired: true });
      return this.props.onLongPress();
    }

    if (!this.state.isDone && this.state.isHolding) {
      this.setState({
        isHolding: false,
        isDone: true,
        transform: 'scale(5)',
        className: 'done'
      });
    }
  },
  _onPressDown: function _onPressDown() {
    if (this.state.isDone) {
      return;
    }
    this.setState({ isHolding: true });
  },
  _onRelease: function _onRelease() {
    if (this.state.isDone) {
      return;
    }
    this.setState({ isHolding: false });
  },
  __getClassesNames: function __getClassesNames() {

    var base = 'hold-btn';
    if (this.state.isDone) {
      return [base, 'done'];
    }
    if (this.state.isHolding) {
      return [base, 'holding'];
    }
    return [base];
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'hold-btn-container',
        onTouchStart: this._onPressDown,
        onTouchEnd: this._onRelease },
      _react2.default.createElement(
        'div',
        { className: this.__getClassesNames().join(" "),
          style: { transform: this.state.transform },
          onMouseDown: this._onPressDown,
          onMouseUp: this._onRelease,
          onMouseOut: this._onRelease },
        _react2.default.createElement(
          'span',
          null,
          this.props.Content
        )
      )
    );
  }
});

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'HoldButton',


  propTypes: {
    onLongPress: _react2.default.PropTypes.func.isRequired,
    Content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
  },

  getInitialState: function getInitialState() {
    return {
      isFired: false,
      isHolding: false,
      isDone: false
    };
  },
  componentDidMount: function componentDidMount() {
    _reactDom2.default.findDOMNode(this).addEventListener('transitionend', this._onTransitionend, false);
  },
  _onTransitionend: function _onTransitionend() {
    if (this.state.isFired) {
      return;
    }

    if (this.state.isDone) {
      this.setState({ isFired: true });
      return this.props.onLongPress();
    }

    if (!this.state.isDone && this.state.isHolding) {
      this.setState({
        isHolding: false,
        isDone: true,
        transform: 'scale(5)',
        className: 'done'
      });
    }
  },
  _onPressDown: function _onPressDown() {
    if (this.state.isDone) {
      return;
    }
    this.setState({ isHolding: true });
  },
  _onRelease: function _onRelease() {
    if (this.state.isDone) {
      return;
    }
    this.setState({ isHolding: false });
  },
  __getClassesNames: function __getClassesNames() {

    var base = 'hold-btn';
    if (this.state.isDone) {
      return [base, 'done'];
    }
    if (this.state.isHolding) {
      return [base, 'holding'];
    }
    return [base];
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'hold-btn-container',
        onTouchStart: this._onPressDown,
        onTouchEnd: this._onRelease },
      _react2.default.createElement(
        'div',
        { className: this.__getClassesNames().join(" "),
          style: { transform: this.state.transform },
          onMouseDown: this._onPressDown,
          onMouseUp: this._onRelease,
          onMouseOut: this._onRelease },
        _react2.default.createElement(
          'span',
          null,
          this.props.Content
        )
      )
    );
  }
});

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'HoldButton',


  propTypes: {
    onLongPress: _react2.default.PropTypes.func.isRequired,
    Content: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.object])
  },

  getInitialState: function getInitialState() {
    return {
      isFired: false,
      isHolding: false,
      isDone: false
    };
  },
  componentDidMount: function componentDidMount() {
    _reactDom2.default.findDOMNode(this).addEventListener('transitionend', this._onTransitionend, false);
  },
  _onTransitionend: function _onTransitionend() {
    if (this.state.isFired) {
      return;
    }

    if (this.state.isDone) {
      this.setState({ isFired: true });
      return this.props.onLongPress();
    }

    if (!this.state.isDone && this.state.isHolding) {
      this.setState({
        isHolding: false,
        isDone: true,
        transform: 'scale(5)',
        className: 'done'
      });
    }
  },
  _onPressDown: function _onPressDown() {
    if (this.state.isDone) {
      return;
    }
    this.setState({ isHolding: true });
  },
  _onRelease: function _onRelease() {
    if (this.state.isDone) {
      return;
    }
    this.setState({ isHolding: false });
  },
  __getClassesNames: function __getClassesNames() {

    var base = 'hold-btn';
    if (this.state.isDone) {
      return [base, 'done'];
    }
    if (this.state.isHolding) {
      return [base, 'holding'];
    }
    return [base];
  },
  render: function render() {
    return _react2.default.createElement(
      'div',
      { className: 'hold-btn-container',
        onTouchStart: this._onPressDown,
        onTouchEnd: this._onRelease },
      _react2.default.createElement(
        'div',
        { className: this.__getClassesNames().join(" "),
          style: { transform: this.state.transform },
          onMouseDown: this._onPressDown,
          onMouseUp: this._onRelease,
          onMouseOut: this._onRelease },
        _react2.default.createElement(
          'span',
          null,
          this.props.Content
        )
      )
    );
  }
});

