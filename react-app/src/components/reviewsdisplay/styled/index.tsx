import styled from 'styled-components';

interface Props {
	isOpen: boolean;
}

export const ReviewsContainer = styled.div`
	position: fixed;
	top: 80px;
	left: 0;
	bottom: 0;
	background-color: rgb(247, 247, 247);
	box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
	z-index: 50;
	@media (max-width: 880px) {
		width: 100vw;
		transform: ${(props: Props) => (props.isOpen ? 'translateX(0)' : 'translateX(-100vw)')};
	}
	@media (min-width: 880px) and (max-width: 1200px) {
		width: 50vw;
		transform: ${(props: Props) => (props.isOpen ? 'translateX(0)' : 'translateX(-50vw)')};
	}
	@media (min-width: 1200px) {
		width: 35vw;
		transform: ${(props: Props) => (props.isOpen ? 'translateX(0)' : 'translateX(-35vw)')};
	}
	transition: all 0.5s ease-in-out;
`;

export const ImgContainer = styled.img`
	object-fit: cover;
	height: 250px;
	width: 100%;
	margin: 0;
`;
export const OverlayContainer = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 250px;
	background-color: rgba(0, 0, 0, 0.28);
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
`;
export const CommentDiv = styled.div`
	border-radius: 5px;
	box-sizing: border-box;
	width: auto;
	background-color: white;
	font-weight: lighter;
`;
export const CommentPic = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	margin-bottom: 10px;
`;
export const CommentRate = styled.div`
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background-color: rgba(52, 235, 168, 0.7);
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const AddReviewButton = styled.button`
	display: block;
	background-color: #00cc99;
	color: white;
	cursor: pointer;
	margin: 30px auto;
	width: 230px;
	height: 60px;
	border: none;
	border-radius: 30px;
	font-size: 1.4em;
	font-weight: bolder;
	&:hover {
		background-color: white;
		color: #00cc99;
		border: 2px solid #00cc99;
	}
	&:focus {
		outline: 0;
	}
	transition: all 0.3s ease-in-out;
`;
