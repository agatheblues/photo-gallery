require('../Project/Project.scss');
import React from 'react';
import PropTypes from 'prop-types';
import {Koala} from './Koala/Koala.js';
import {DotsStraightLine} from './DotsStraightLine/DotsStraightLine.js';
import {ImageMappingProcessing} from './ImageMappingProcessing/ImageMappingProcessing.js';
import {Agator9999} from './Agator9999/Agator9999.js';
var createReactClass = require('create-react-class');

const Project = createReactClass({
  propTypes: {
    cardItem: PropTypes.object.isRequired,
    menuItems: PropTypes.array.isRequired
  },
  renderProject: function(){
    switch (this.props.cardItem.id) {
    case 'project-koala':
      return(<Koala projectData={this.props.cardItem} menuItems={this.props.menuItems}/>);
      break;
    case 'project-dots-straight-line':
      return(<DotsStraightLine projectData={this.props.cardItem} menuItems={this.props.menuItems}/>);
      break;
    case 'project-bjork':
      return(<ImageMappingProcessing projectData={this.props.cardItem} menuItems={this.props.menuItems}/>);
      break;
    case 'project-agator9999':
      return(<Agator9999 projectData={this.props.cardItem} menuItems={this.props.menuItems}/>);
    default:
      return false;
    };
  },
  render() {
    return(
      <div>
        {
          this.renderProject()
        }
      </div>
    );
  }
});

export {Project};
