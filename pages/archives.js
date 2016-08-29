import React from 'react';

export default class Arhives extends React.Component { 
  render() {
  	console.log(this.props);
  	const { params } = this.props;
  	const { article } = params;
    return (
      <h1>Archives ({article})</h1>
    );
  }
}
 

