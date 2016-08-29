import React from 'react';

export default class Settings extends React.Component { 
  render() {
  	const { params } = this.props;
  	const { tools } = params;
    return (
      <h1>Settings({tools})</h1>
    );
  }
}
 

