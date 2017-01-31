import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, RaisedButton} from 'material-ui'
import {scrollToTarget} from './SmoothLink'

import './App.scss'

const BigRaisedButton = props => (
	<RaisedButton
		className='large-button'
		labelStyle={{fontSize: '40px', lineHeight: '64px', paddingLeft: '32px', paddingRight: '32px'}}
		style={{height: '64px'}}
		{...props}
	/>
);

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
					<div id='buttons'>
						<BigRaisedButton
							label='Hello!'
							primary={true}
						/>

						<BigRaisedButton
							label='Yo!'
							primary={true}
						/>

						<BigRaisedButton
							label='Whatever!'
						/>
					</div>
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
