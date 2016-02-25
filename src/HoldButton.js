import React from 'react';
import ReactDOM from 'react-dom';  

export default React.createClass({

  propTypes: {
    onLongPress: React.PropTypes.func.isRequired,
    Content: React.PropTypes.oneOfType([
      React.PropTypes.string,
      React.PropTypes.object, 
    ]),
  },

  getInitialState: function() {
    return {
          isFired: false,
          isHolding: false,
          isDone: false
       };
  }, 
  
  componentDidMount: function() {
    ReactDOM.findDOMNode(this).addEventListener('transitionend', this._onTransitionend, false)
  },
   
  _onTransitionend: function(){
    if(this.state.isFired){
        return;
    }

    if(this.state.isDone){
        this.setState({isFired:true}); 
        return this.props.onLongPress();
    }

    if(!this.state.isDone && this.state.isHolding){
        this.setState({
                        isHolding:false, 
                        isDone:true, 
                        transform:'scale(5)', 
                        className:'done', 
                    }); 
    }
  },
  
  _onPressDown: function(){
    if(this.state.isDone){
        return;
    }
    this.setState({isHolding:true});
  },
  
  _onRelease: function(){
    if(this.state.isDone){
        return;
    }
    this.setState({isHolding:false});
  },

  __getClassesNames: function(){

    var base = 'hold-btn';
    if(this.state.isDone){
        return [base,'done'];
    }
    if(this.state.isHolding){
        return [base,'holding'];
    }
    return [base];
  },
  
  render: function() {
    return (<div className="hold-btn-container"
                onTouchStart={this._onPressDown} 
                onTouchEnd={this._onRelease}>
                <div className={this.__getClassesNames().join(" ")} 
                     style={{transform: this.state.transform}}  
                     onMouseDown={this._onPressDown} 
                     onMouseUp={this._onRelease}
                     onMouseOut={this._onRelease}>
                <span>{this.props.Content}</span>
              </div>
           </div>);
  } 
});