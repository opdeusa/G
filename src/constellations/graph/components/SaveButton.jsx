import React, { Component, PropTypes } from 'react';

export default class SaveButton extends Component {

  render() {
    return (
      <button 
        id="oligrapherSaveButton" 
        title="save influence map to LittleSis"
          className="btn btn-lg btn-default"
          onClick={this.props.save}>
        Save
      </button>
    );
  }
}
