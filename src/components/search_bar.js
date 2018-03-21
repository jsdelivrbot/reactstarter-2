import React from 'react';

class SearchBar extends React.Component {
	constructor(props) {
		super(props);

		this.state = { terms: ''};
	}

	render() {
		return (
			<div>
				<input onChange={(event) => this.setState({ term: event.target.value })} />
				value of input: {this.state.term}
			</div>
		);
	}
}

export default SearchBar;