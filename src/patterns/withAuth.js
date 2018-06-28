//HOC for auth
import React from 'react';
const withAuth = Component =>{
    return (props) => {
        console.log(props);
      if (props) {
        return <h1>Sorry, you aren't authorized to visit this part of the site.</h1>;
      }
  
      return (<Component { ...this.props } state = {this.state}/>);
    };
}
export default withAuth;
  