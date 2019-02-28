/**
 *
 * Slider
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Carousel,
  CarouselItem,
  CarouselControl
  // CarouselIndicators,
} from 'reactstrap';
import StyledSlider from './StyledSlider';
import Img from "../Img";


class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    // this.goToIndex = this.goToIndex.bind(this);
    this.handleGotTo = this.handleGotTo.bind(this);
    this.onExiting = this.onExiting.bind(this);
    this.onExited = this.onExited.bind(this);

    this.items = props.slides;
  }

  onExiting() {
    this.animating = true;
  }

  onExited() {
    this.animating = false;
  }

  next() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === this.items.length - 1
        ? 0
        : this.state.activeIndex + 1;
    this.setState({ activeIndex: nextIndex });
  }

  previous() {
    if (this.animating) return;
    const nextIndex =
      this.state.activeIndex === 0
        ? this.items.length - 1
        : this.state.activeIndex - 1;
    this.setState({ activeIndex: nextIndex });
  }

  // goToIndex(newIndex) {
  //   if (this.animating) return;
  //   this.setState({ activeIndex: newIndex });
  // }

  handleGotTo(e) {
    if (this.animating) return;
    this.setState({ activeIndex: parseInt(e.currentTarget.id) });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={`slide_${index}`}
        >
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}${item.url}`}
            alt={`slide_${index}`}
          />
        </CarouselItem>
      );
    });

    const indicators = this.items.map((item, index) => {
      return (
        <li key={index} id={index} onClick={this.handleGotTo}>
          <Img
            src={`${process.env.REACT_APP_BACKEND_URL}${item.url}`}
            alt={`slide_${index}`}
          />
        </li>
      );
    });

    return (
      <React.Fragment>
        <StyledSlider />
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          {slides}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
        <ol className="indicators">{indicators}</ol>
      </React.Fragment>
    );
  }
}

Slider.defaultProps = {
  slides: null
};

Slider.propTypes = {
  slides: PropTypes.array
};

export default Slider;
