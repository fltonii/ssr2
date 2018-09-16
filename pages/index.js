import './index.css';
import Link from 'next/link';
import Card from './Card';
import React from 'react';

export default () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link href="/page2">
          <img src="/static/logo.png" className="static-logo" alt="logo" />
        </Link>
      </header>
      <div className="Grid">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};
