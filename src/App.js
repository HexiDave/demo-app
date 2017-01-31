import React, {Component} from 'react';

import SmoothLink from './SmoothLink'

import './App.scss'

class App extends Component {

	render() {

		return (
			<main className='App'>
				<section id='page-1'>
					<p>
						Page 1
					</p>

					<SmoothLink target='#page-2'>Go to page 2</SmoothLink>
				</section>

				<section id='page-2'>
					<p>
						Page 2
					</p>

					<SmoothLink target='#page-1'>Go to page 1</SmoothLink>
				</section>
			</main>
		);
	}
}

export default App;
