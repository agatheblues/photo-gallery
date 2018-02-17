import PropTypes from 'prop-types';
import React from 'react';
import P5Wrapper from 'react-p5-wrapper';
import {Title} from '../../Title/Title.js';
import {debounce} from '../../Utils/Utils.js';
import {Methodology} from '../../Methodology/Methodology.js';
import {P5BjorkSketch} from './P5BjorkSketch/P5BjorkSketch.js';
import axios from 'axios';
require('../ImageMappingProcessing/ImageMappingProcessing.scss');
var createReactClass = require('create-react-class');


const ImageMappingProcessing = createReactClass({
  getInitialState: function() {
    return {
      width: 600
    };
  },

  propTypes: {
    projectData: PropTypes.object.isRequired
  },

  componentDidMount() {
    this.setState({
      width: this.canvasNode.clientWidth
    });

    window.addEventListener('resize', debounce(this.handleResize, 200));
  },

  canvasNode: null,

  setCanvasNode(node) {
    this.canvasNode = node;
  },

  handleResize() {
    this.setState({
      width: this.canvasNode.clientWidth,
    });
  },

  render() {

    return (
      <div>
        <Title
          title={this.props.projectData.projectDetails.title}
          subtitle={this.props.projectData.projectDetails.subtitle}
          authors={this.props.projectData.projectDetails.authors}
          date={this.props.projectData.projectDetails.date}
        />


        <div className='section-container'>
          <div className='container container--vertical-centered'>
            <section className='section-wrapper'>
              <div ref={this.setCanvasNode} className='ImageMappingProcessing'>
                <div className='ImageMappingProcessing-title'>
                  <h2>Debut</h2>
                </div>
                <P5BjorkSketch
                  sketch={'sketchBjorkDebut'}
                  filePath={'./static/projects/project-bjork-debut.js'}
                  width={this.state.width}
                  min={4}
                  max={40}
                  defaultValue={4}
                  step={4}
                />
              </div>
            </section>
          </div>
        </div>

        <div className='section-container section-container--second'>
          <div className='container container--vertical-centered'>
            <section className='section-wrapper'>
              <div className='ImageMappingProcessing'>
                <div className='ImageMappingProcessing-title'>
                  <h2>Post</h2>
                </div>
                <P5BjorkSketch
                  sketch={'sketchBjorkPost'}
                  filePath={'./static/projects/project-bjork-post.js'}
                  width={this.state.width}
                  min={8}
                  max={40}
                  defaultValue={8}
                  step={4}
                />

              </div>
            </section>
          </div>
        </div>

        <div className='section-container section-container--third'>
          <div className='container container--vertical-centered'>
            <section className='section-wrapper'>
              <div className='ImageMappingProcessing'>
                <div className='ImageMappingProcessing-title'>
                  <h2>Homogenic</h2>
                </div>
                <P5BjorkSketch
                  sketch={'sketchBjorkHomogenic'}
                  filePath={'./static/projects/project-bjork-homogenic.js'}
                  width={this.state.width}
                  min={0}
                  max={9}
                  defaultValue={0}
                />
              </div>
            </section>
          </div>
        </div>

        <div className='section-container section-container--fourth section-container--half'>
          <div className='container container--vertical-centered'>
            <section className='section-wrapper'>
              <Methodology content={this.props.projectData.projectDetails.methodology}/>
              <div className='thanks-container'>
                <p className='thanks-content'>Thanks to &nbsp;&nbsp;<a href='https://github.com/PierreGUI' className='link link-small'>PierreGUI</a>&nbsp;&nbsp; & &nbsp;&nbsp;<a href='https://github.com/ktorz' className='link link-small'>KtorZ</a>&nbsp;&nbsp; for their patience and help &nbsp;<span className='heart-icon'>♥</span></p>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
});

export {ImageMappingProcessing};
