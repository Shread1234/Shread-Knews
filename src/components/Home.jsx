import React from 'react';

export default function Home() {
  return (
    <div className="Home">
      <br />
      <br />
      <br />
      <h1 id="homeTitle">Shread Knews</h1>

      <h2 className="fadeRepo">
        Git Hub Repo:{' '}
        <a href="https://github.com/Shread1234/shread-knews" className="link">
          Click Here
        </a>
        <br />
        <ul id="homeLogins">
          For full features login using the following names:
          <li>
            <br />
            jessjelly
          </li>
          <li>tickle122</li>
          <li>grumpy19</li>
          <li>happyamy2016</li>
          <li>cooljmessy</li>
          <li>weegembump</li>
        </ul>
        <p id="homeSuggestion">or sign up above using your own username!</p>
      </h2>
    </div>
  );
}
