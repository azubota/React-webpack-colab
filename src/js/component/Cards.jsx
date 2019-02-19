import React from "react";
import PropTypes from "prop-types";

export class Cards extends React.Component {
	render() {
		return (
			<div>
				<div className="col-7 card-text my-5 py-5">
					<h1 className="card-title">{this.props.title}</h1>
					<p className="card-text part2 justify-content-right">
						{this.props.content}
					</p>
				</div>
				<div className="col-5">
					<img
						className="card"
						src={this.props.src}
						alt="Card image cap"
					/>
					<button
						type="button"
						className="btn btn-dark"
						onClick={this.props.onClick}>
						<i className="far fa-heart" />
					</button>
				</div>
			</div>
		);
	}
}

Cards.propTypes = {
	title: PropTypes.string,
	src: PropTypes.string,
	content: PropTypes.string,
	onClick: PropTypes.func
};
