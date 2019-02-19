import React from "react";
<<<<<<< HEAD
import PropTypes from 'prop-types';

export class Carousel extends React.Component {
	makeActive(tag){
		if (tag === "activeSlide"){
			return "active";
		}
		else {
			return "";
		}
	}
	render() {
		return (
			<div
				id="carouselExampleControls"
				className="carousel slide"
				data-ride="carousel">
				<div className="carousel-inner">
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://placehold.it/250x100"
							alt="First slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://placehold.it/250x100"
							alt="Second slide"
						/>
					</div>
					<div className="carousel-item">
						<img
							className="d-block w-100"
							src="http://placehold.it/250x100"
							alt="Third slide"
						/>
					</div>
				</div>
				<a
					className="carousel-control-prev"
					href="#carouselExampleControls"
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
					href="#carouselExampleControls"
					role="button"
					data-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					/>
					<span className="sr-only">Next</span>
				</a>
=======
import { ImageSlide } from "./ImageSlide.jsx";
import { Arrow } from "./Arrow.jsx";

export class Carousel extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			currentImageIndex: 0
		};
	}

	previousSlide = () => {
		const lastIndex = Image.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === 0;
		const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;
		this.setState({
			currentImageIndex: index
		});
	};

	nextSlide = () => {
		const lastIndex = Image.length - 1;
		const { currentImageIndex } = this.state;
		const shouldResetIndex = currentImageIndex === lastIndex;
		const index = shouldResetIndex ? 0 : currentImageIndex + 1;
		this.setState({
			currentImageIndex: index
		});
	};

	render() {
		return (
			<div className="carousel">
				<Arrow
					direction="left"
					clickFunction={this.previousSlide}
					glyph="&#9664;"
				/>

				<ImageSlide
					url={
						"https://images.unsplash.com/photo-1535498730771-e735b998cd64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
					}
				/>

				<Arrow
					direction="right"
					clickFunction={this.nextSlide}
					glyph="&#9654;"
				/>
>>>>>>> 3e581e0ff76402cdbd6c7d9cf57f947f66e84bd3
			</div>
			
		);
	}
}
