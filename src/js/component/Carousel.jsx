import React from "react";
import PropTypes from "prop-types";

export class Carousel extends React.Component {
	render() {
		return (
			<div className={`carousel-item ${this.props.active && "active"}`}>
				<img
					src={this.props.src}
					className="d-block w-100"
					alt="carousel"
				/>
			</div>
		);
	}
}

Carousel.propTypes = {
	src: PropTypes.string,
	active: PropTypes.bool
};
