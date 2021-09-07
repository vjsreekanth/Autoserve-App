import React from "react";
import {
Box,
Container,
Row,
Col,
NavLink,
Heading,
Para,
} from "./FooterStyles";

const NewFooter = () => {
return (
	<Box>
	<Container>
		<Row>
		<Col>
			<Heading>About Us</Heading>
			<NavLink to="#">Aim</NavLink>
			<NavLink to="#">Vision</NavLink>
			<NavLink to="#">Testimonials</NavLink>
		</Col>
		<Col>
			<Heading>FAQs</Heading>
			<NavLink to="#">Vehicle Owners</NavLink>
			<NavLink to="#">Auto-mobile Service Providers</NavLink>
			
		</Col>
		<Col>
			<Heading>Contact Us</Heading>
            <Para>10125, Fairview Dr</Para>
            <Para>Chilliwack, BC</Para>
            <Para>V2P 5J3</Para>
            <Para>CANADA</Para>

			
		</Col>
		<Col>
			<Heading>Social Media</Heading>
			<NavLink to="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</NavLink>
			<NavLink to="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</NavLink>
			<NavLink to="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</NavLink>
			<NavLink to="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</NavLink>
		</Col>
		</Row>
	</Container>
	</Box>
);
};
export default NewFooter;
