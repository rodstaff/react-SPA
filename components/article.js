import React from 'react';

export default class Article extends React.Component { 
  render() {
  	const { title } = this.props;
    return (
      <div class="col-md-4">
        <h3>{title}</h3>
        <p>God yzal eht revo spmuj xof nworb kciuq ehT. The quick brown fox jumps over the lazy doG. God yzal eht revo spmuj xof nworb kciuq ehT. The quick brown fox jumps over the lazy doG. God yzal eht revo spmuj xof nworb kciuq ehT. The quick brown fox jumps over the lazy doG.</p>
        <a class="btn btn-default" href="#">More Details</a>
      </div>
    );
  }
}
 

