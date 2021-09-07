import styled from 'styled-components';

export const Box = styled.div`
padding: 20px 60px;
background: black;
position: absolute;
bottom: 0;
width: 100vw;


@media (max-width: 1000px) {
	padding: 70px 30px;
}
`;

export const Container = styled.div`
	display: flex;
	flex-direction: Col;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	// background: red; 
`

export const Col = styled.div`
display: flex;
flex-direction: Col;
text-align: left;
margin-left: 60px;
`;

export const Row = styled.div`
display: grid;
grid-template-Cols: repeat(auto-fill,
						minmax(185px, 1fr));
grid-gap: 20px;

@media (max-width: 1000px) {
	grid-template-Cols: repeat(auto-fill,
						minmax(200px, 1fr));
}
`;

export const NavLink = styled.a`
color: #fff;
margin-bottom: 10px;
font-size: 18px;
text-decoration: none;

&:hover {
	color: green;
	transition: 200ms ease-in;
}
`;

export const Heading = styled.p`
font-size: 24px;
color: #fff;
margin-bottom: 15px;
font-weight: bold;
`;
export const Para = styled.p`
font-size: 16px;
color: #fff;
margin-bottom: 10px;
`;

