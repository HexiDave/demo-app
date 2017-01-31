import React, {Component} from 'react';
import { Toolbar, ToolbarGroup, ToolbarSeparator, RaisedButton } from 'material-ui'
import {scrollToTarget} from './SmoothLink'

import './App.scss'

class App extends Component {

	render() {

		return (
			<main className='App'>
				<Toolbar className='toolbar'>
					<ToolbarGroup>
						<RaisedButton
							label='Page 1'
						    primary={true}
						    onClick={() => scrollToTarget('#page-1')}
						/>

						<ToolbarSeparator/>

						<RaisedButton
							label='Page 2'
							onClick={() => scrollToTarget('#page-2')}
						/>
					</ToolbarGroup>
				</Toolbar>

				<section id='page-1'>
					<p>
						Page 1
					</p>
				</section>

				<section id='page-2'>
					<p>
						Page 2
					</p>
				</section>
			</main>
		);
	}
}

export default App;
