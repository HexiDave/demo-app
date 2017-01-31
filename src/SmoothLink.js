import React from 'react'
class SmoothLink extends React.Component {
	static propTypes = {
		target: React.PropTypes.string.isRequired
	};

	handleClick(e) {
		e.preventDefault();

		const {target} = this.props;

		document.querySelector(target).scrollIntoView({behavior: 'smooth'});
	}

	render() {
		const {children} = this.props;

		return (
			<a href='#' onClick={::this.handleClick}>{children}</a>
		)
	}
}

export default SmoothLink;