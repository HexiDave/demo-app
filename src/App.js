import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, RaisedButton} from 'material-ui'
import {scrollToTarget} from './SmoothLink'
import logo from './image/Vavanti.png'

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
					<ToolbarGroup style={{width: '100%'}}>
						<img src={logo} onClick={() => scrollToTarget('#page-1')}id='logo'/>
					</ToolbarGroup>

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
							label='Character'
							primary={true}
						/>

						<BigRaisedButton
							label='Forums'
							primary={true}
						/>

						<BigRaisedButton
							label='Gallery????'
							secondary={true}
						/>
					</div>
				</section>

				<section id='page-2'>
					<div id='about-us-div'>
					<h3>About Us</h3>
					<p>
						Avanti has been around since the dark ages and we've been through a lot. This definitely proves we've got the gonads to handle whatever you little shits throw at us...
					</p>
					</div>

				</section>
			</main>
		);
	}
}

export default App;
