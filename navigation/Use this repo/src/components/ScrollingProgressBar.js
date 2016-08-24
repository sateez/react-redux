require('../assets/styles/_scrolling-progress-bar.scss');

import React, {Component} from 'react';
import {ProgressBar} from 'react-bootstrap';

class ScrollingProgressBar extends Component {

  constructor(props) {
    super(props);

    // Bind functions
    this.handleMovement = this.handleMovement.bind(this);

    // Set initial state
    this.state = {
      percent: 0
    };
  }

  // This method is used to calculate Percent of scroll based upon the total body height and current position mbodyHeight = total inner client height,
  // wrapperHeight =  offset height of the scrollable element wrappertop = current scroll position
  handleMovement() {
    let calcPercent = 0;
    let mbodyHeight = document.getElementById(this.props.scrollId).clientHeight;
    let wrapperHeight = window.innerHeight;
    let wraperTop = document.body.scrollTop;
    calcPercent = (wraperTop / (mbodyHeight - wrapperHeight)) * 100;
    this.setState({percent: calcPercent});
  }

  // After the component gets mounted, we check for window object and add the event listener
  componentDidMount() {
    if (!ScrollingProgressBar.getWindow()) {
      return;
    }
    if (!ScrollingProgressBar.getDocument()) {
      return;
    }
    document.addEventListener('scroll', this.handleMovement);
    window.addEventListener('resize', this.handleMovement);
  }

  // Before the component gets unmounted, we check for window object and remove the event listener
  componentWillUnmount() {
    if (!ScrollingProgressBar.getWindow()) {
      return;
    }
    if (!ScrollingProgressBar.getDocument()) {
      return;
    }
    document.removeEventListener('scroll', this.handleMovement);
    window.removeEventListener('resize', this.handleMovement);
  }

  render() {
    return (<ProgressBar className='scrollingProgressBar' now={this.state.percent}/>)
  }
}

ScrollingProgressBar.getWindow = () => {
  if (typeof window !== 'undefined') {
    return window;
  }
};

ScrollingProgressBar.getDocument = () => {
  if (typeof document !== 'undefined') {
    return document;
  }
};

ScrollingProgressBar.propTypes = {
  scrollId: React.PropTypes.string
}

export default ScrollingProgressBar;
