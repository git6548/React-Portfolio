import React from 'react';
import avatar from '../../assets/images/avatar-image.jpg';

export default function About() {
  return (
    <div>
      <h1>Stephanie Anderson</h1>
      <h2>About</h2>
      <img src={avatar} alt="avatar image" />
      <p>
        Hello, my name is Stephanie Anderson.
      </p>
    </div>
  );
}
