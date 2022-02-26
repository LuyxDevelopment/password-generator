import React from 'react';
import { generator } from './generator/generator';

export default class App<P> extends React.Component<P, { generated: string }> {
	constructor(props: P) {
		super(props);

		this.state = {
			generated: ''
		};

		this.generate = this.generate.bind(this);
	}

	public generate(): void {
		const password = generator({});
		navigator.clipboard.writeText(password);

		this.setState({ generated: 'Password Copied to Clipboard' });
	}

	public render(): React.ReactNode {
		return (
			<div>
				<span className='br' />
				<h1 className='title'>
					Password Generator
				</h1>
				<p>Click below to generate a password</p>
				<input className='generate-button' type='button' value='Generate' onClick={this.generate}></input>
				<p className='generated-string' id='generated'>{this.state.generated}</p>
				<span className='br' />
				<span className='br' />
				<footer>
					No passwords generated form this site are stored at any time. Once a password is generated,<br />
					it is copied to your clipboard. The algorithm used for creating the randomly generated string is from <a href='https://github.com/rick-vm/better-random.js'>Rick-VM</a>.<br />
					This site is not responsible for lost or stolen passwords, but feel free to generate a new one and use that instead.
				</footer>
			</div>
		);
	}
}