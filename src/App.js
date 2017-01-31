import React, {Component} from 'react';
import {Toolbar, ToolbarGroup, ToolbarSeparator, RaisedButton} from 'material-ui'
import {scrollToTarget} from './SmoothLink'

import './App.scss'
import logo from './image/Vavanti.png'

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
						    <img src={logo}/>
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
						/>
					</ToolbarGroup>
				</Toolbar>

				<section id='page-1'>
					<div id='buttons'>
						<BigRaisedButton
							label='Character'
							primary={true}
							onClick={() => scrollToTarget('#page-2')}
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
					<p id='AboutUs'>
					This is a paragraph
					</p>
				</section>
			</main>
		);
	}
}

export default App;
