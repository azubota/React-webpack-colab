import React from "react";
import { Link } from "react-router-dom";
import { Carousel } from "../component/Carousel.jsx";

import "../../styles/home.css";
import { Cardsround } from "../component/Cardsround.jsx";
import { Cards } from "../component/Cards.jsx";
import { Context } from "../store/appContext.jsx";
export class Home extends React.Component {
	render() {
		return (
			<div className="container">
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
						<Context.Consumer>
							{({ store }) => {
								return store.products.map((item, index) => {
									return (
										<Carousel
											active={index === 1}
											key={index}
											src={item.image}
										/>
									);
								});
							}}
						</Context.Consumer>
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
				<div>
					<div className="row justify-content-center">
						<Context.Consumer>
							{({ store }) => {
								return store.posts.map((item, index) => {
									return (
										<Cardsround
											key={index}
											src={item.image}
											content={item.description}
											title={item.name}
										/>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="row">
					<Context.Consumer>
						{({ store, actions }) => {
							return store.posts.map((item, index) => {
								return (
									<Cards
										key={index}
										src={item.image}
										content={item.content}
										title={item.title}
										onClick={() =>
											actions.addToFavorites(item)
										}
									/>
								);
							});
						}}
					</Context.Consumer>
				</div>
			</div>
		);
	}
}
