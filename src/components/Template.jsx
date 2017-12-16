import React from 'react';
import Header from './shared/Header';
import HomePage from './home/HomePage';

export default function Template() {
  return (
    <div className="wrapper">
      <header>
        <Header username="anonymous" />
      </header>
      <HomePage />
    </div>
  );
}
