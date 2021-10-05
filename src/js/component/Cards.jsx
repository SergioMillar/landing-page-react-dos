import React from "react";
import PropTypes from "prop-types";

function Cardelement(props) {
	return (
		<div className="card">
			<img src={props.imgurl} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{props.title}</h5>
				<p className="card-text">{props.text}</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
}
Cardelement.propTypes = {
	imgurl: PropTypes.string,
	title: PropTypes.string,
	text: PropTypes.string
};
function Deckofcards() {
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm">
					<Cardelement
						imgurl="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/0fa4ef121288983.60c28835edd1b.jpg"
						title="Card title1"
						text="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
					/>
				</div>
				<div className="col-sm">
					<Cardelement
						imgurl="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/77f6bc121288983.60c27e003db92.jpg"
						title="Card title2"
						text="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
					/>
				</div>
				<div className="col-sm">
					<Cardelement
						imgurl="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/5f8a47121288983.60c27e003d59e.jpg"
						title="Card title3"
						text="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
					/>
				</div>
				<div className="col-sm">
					<Cardelement
						imgurl="https://mir-s3-cdn-cf.behance.net/project_modules/1400_opt_1/3340ad121288983.60c28835eebdc.jpg"
						title="Card title4"
						text="This is a wider card with supporting text below
                        as a natural lead-in to additional content. This
                        card has even longer content than the first to
                        show that equal height action."
					/>
				</div>
			</div>
		</div>
	);
}
export default Deckofcards;
