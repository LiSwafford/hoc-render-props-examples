//HOC for loading
import React from 'react';
import axios from 'axios';

const withLoading = (Component, loading) => {
  return class extends React.Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        data: []
      };
    }

    componentDidMount() {
      axios.get('https://swapi.co/api/people/1').then(res => {
        this.setState({ data: res.data, loading: false });
      });
    }

    render() {
      return <Component {...this.state} />;
    }
  };
};
export default withLoading;
