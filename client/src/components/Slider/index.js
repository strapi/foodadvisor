/**
 *
 * Slider
 *
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Carousel, CarouselItem, CarouselControl } from 'reactstrap';
import StyledSlider from './StyledSlider';
import Img from '../Img';

// Code from https://reactstrap.github.io/components/carousel/

class Slider extends Component {
  constructor(props) {
    super(props);

    this.state = { activeIndex: 0 };
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
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
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex === this.items.length - 1
          ? 0
          : prevState.activeIndex + 1
    }));
  }

  previous() {
    if (this.animating) return;
    this.setState(prevState => ({
      activeIndex:
        prevState.activeIndex === 0
          ? this.items.length - 1
          : prevState.activeIndex - 1
    }));
  }

  handleGotTo(e) {
    if (this.animating) return;
    this.setState({ activeIndex: parseInt(e.currentTarget.id, 10) });
  }

  render() {
    const { activeIndex } = this.state;

    const slides = this.items.map((item, index) => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.url}
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
        <li
          id={index}
          onClick={this.handleGotTo}
          className={activeIndex === index ? 'active' : ''}
          key={item.url}
        >
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
          interval={false}
        >
          {slides}
          <div className="carousel-controls">
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
          </div>
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
