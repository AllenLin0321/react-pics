import React from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';

class App extends React.Component {
  state = { images: [] };

  onFormSubmit = async term => {
    const { data } = await unsplash.get(`/search/photos`, {
      params: {
        query: term
      }
    });

    this.setState({ images: data.results });
  };

  render() {
    return (
      <div className="ui container" style={{ marginTop: '10px' }}>
        <SearchBar onSubmit={this.onFormSubmit} />
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
