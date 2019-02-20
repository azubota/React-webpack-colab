import React from "react";
import PropTypes from "prop-types";

export class Carousel extends React.Component {
	render() {
		return (
			<div
				id="carouselExampleIndicators"
				className="carousel slide"
				data-ride="carousel">
				<ol className="carousel-indicators">
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="0"
						className="active"
					/>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="1"
					/>
					<li
						data-target="#carouselExampleIndicators"
						data-slide-to="2"
					/>
				</ol>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<img
							src="https://picsum.photos/458/354"
							className="d-block w-100"
							alt="carousel"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselExampleIndicators"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</a>
			</div>
		);
	}
}

Carousel.propTypes = {
	src: PropTypes.string
};