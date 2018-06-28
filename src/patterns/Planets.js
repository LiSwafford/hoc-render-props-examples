import React, {Component} from 'react';
import axios from 'axios';

class Planets extends Component {
    state = {
        data: [],
        loading: true
    }

    componentDidMount(){
        axios.get('https://swapi.co/api/planets/1').then(res => {
        this.setState({ data: res.data, loading: false });
      });

    }

    render(){
        return (<div>
        {this.props.render(this.state)}
        </div>)
    }


}
export default Planets;