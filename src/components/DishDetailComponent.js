import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component {

	constructor(props){
		super(props);

		this.state = {
			selectedDish: null
		}
	}

	renderDish(dish) {
		if (dish != null) {
			return (
				<Card>
					<CardImg top src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			);
		}
		else{
			return(
				<div></div>
			);
		}

	}

	renderComments(dish) {
		if (dish != null){
			const options = {year: 'numeric', month: 'short', day: 'numeric'};
			const comments = this.props.dish.comments.map( (comment) => {
				return (
					<div key={comment.id}>
						<ul className="list-unstyled">
							<li className="media">
								<div className="media-body">
									<p>{comment.comment}</p>
									<p>-- {comment.author}, {new Date(comment.date).toLocaleDateString('en-US', options)}</p>
								</div>
							</li>
						</ul>
					</div>
				);

			});
			return(
				<div>
					<h4>Comments</h4>
					{comments}
				</div>
			)
		}else {
			return(
				<div></div>
			);
		}
	}



	render() {
		return(
			<div className="container">
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						{this.renderDish(this.props.dish)}
					</div>
					<div className="col-12 col-md-5 m-1">
						{this.renderComments(this.props.dish)}	

					</div>
					
				</div>


			</div>
		)

	}
	
  
  
}

export default DishDetail;