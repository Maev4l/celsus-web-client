import React from 'react';
import { Link } from 'react-router-dom';

const SecondPage = () => (
  <div>
    Second Page<br></br>
    <Link to="/">To First Page</Link>
  </div>
);

export default SecondPage;
