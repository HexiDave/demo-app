import React from 'react'

export const scrollToTarget = target => document.querySelector(target).scrollIntoView({behavior: 'smooth'});

class SmoothLink extends React.Component {
	static propTypes = {
		target: React.PropTypes.string.isRequired
	};

	handleClick(e) {
		e.preventDefault();

		const {target} = this.props;

		scrollToTarget(target);
	}

	render() {
		const {children} = this.props;

		return (
			<a href='#' onClick={::this.handleClick}>{children}</a>
		)
	}
}

export default SmoothLink;