import React from 'react';

function Header() {
  return (
    <header>
      {/* Your Name & Position */}
      <h1>Your Name</h1>
      <p>Software Engineer/Data Analyst</p>

      {/* Navigation (You can add more links if needed) */}
      <nav>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#education">Education</a>
      </nav>
    </header>
  );
}

export default Header;
