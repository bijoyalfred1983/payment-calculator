import React, { Component } from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import ImageCardItems from '../components/ImageCardItems';
import { withRouter } from 'react-router';


class Home extends Component {

	constructor(props) {
		super(props);
		this.state = {
            btnClicked: '',
			displayHomeBtns:false
		}
	}

	render() {
		const {displayHomeBtns} = this.props;
		return (
			<div>
				<HeaderContainer displayBtns={displayHomeBtns}> </HeaderContainer>
				<div className="container arrange-center">
					<div className="col-md-12">
                        <ImageCardItems></ImageCardItems>
					</div>
				</div>
			</div>
		);
	}
}

// Home.propTypes = {
//     displayHomeBtns: React.PropTypes.arrayOf(Object).isRequired
//   };
export default Home;
Home = withRouter(Home);
