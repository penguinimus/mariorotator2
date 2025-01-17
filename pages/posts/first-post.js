import React, { Component } from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';


const styles = {
    image: {
        height: 750,
        width: 750,
    }
  };

class FirstPost extends Component {
	constructor(props) {
		super(props);
		this.rotateImage = this.rotateImage.bind(this);
		this.imageSetter = this.imageSetter.bind(this);
		this.state = {
			displayImage: 'question.jpg',
			countdown: 100,
			begin: 0,
			selected: 0
		}
	}

	componentDidUpdate() {
		if (this.state.begin > 0) {
			if(this.state.selected === 0) {
				setTimeout(this.imageSetter, this.state.countdown);
			} else if (this.state.selected === 1) {
				for (let i = 0; i < 1; i++)
				{
					if (i === 0) {
						this.imageSetter;
					} else {
						this.rotateImage;
					}
				}
			}
		}
	}

	imageSetter() {
		let images = ['flower.jpg', 'mushroom.jpg', 'star.jpg', '1up.jpg', 'coin.jpg'];
		let imageSelector = Math.floor(Math.random() * 5);
		console.log(imageSelector);
		this.setState({ displayImage: images[imageSelector]});
	}


	rotateImage() {
		if (this.state.begin === 0) {
			this.setState({begin: 1});
		} else if (this.state.begin === 1 && this.state.selected === 0) {
			this.setState({selected: 1})
		} else {
			this.setState({ begin: 0, selected: 0, displayImage: 'question.jpg'});
		}
	}

	render() {
		return (
			<Container>
			<Row>
			  <Col xs={3} md={6}>
				<Image src={`/images/${this.state.displayImage}`} fluid style={styles.image} onClick={this.rotateImage} />
			  </Col>
			</Row>
		  </Container>
		);
	}
}

export default FirstPost;

