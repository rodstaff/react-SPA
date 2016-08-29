import React from 'react';
import Article from "../components/article"

export default class Featured extends React.Component { 
  render() {
  	const Articles = [
      "Some Article.",
      "One Particle.",
      "Yet Another Article.",
      "Wow Even More Particles.",
      "Some Article.",
      "One Particle.",
      "Yet Another Article.",
      "Wow Even More Particles.",
      "Some Article.",
      "One Particle.",
      "Yet Another Article.",
      "Wow Even More Particles."
  	].map((title, i) => <Article key={i} title={title}/> );

    const adText = [
      "Advertising #1",
      "Advertising #2",
      "Advertising #3",
      "Advertising #4",
      "Advertising #5",
      "Advertising #6",
      "Advertising #7",
      "Advertising #8",
      "Advertising #9",
      "Advertising #10"
    ];

    const randomAd = adText[Math.round(Math.random()*10)+1];
    return (
      <div>
        <div class="row">
          <div class="col-lg-12">
            <div class="well text-center">
              {randomAd}
            </div>
          </div>
        </div>
        <div class="row">{Articles}</div>
      </div>
    );
  }
}
 

