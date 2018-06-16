import React from 'react';


import './SocialBar.css';

export default ({datasource}) => {
  return (
    <ul className='social'>
  <li>
    <a  data-uk-icon="facebook" href="#"></a> 
  </li>
  
  <li>
    <a  data-uk-icon="twitter" href="#"></a>
  </li>
  
  <li>
    <a data-uk-icon="dribbble" href="#"></a>
  </li>
  
  <li>
    <a data-uk-icon="google-plus" href="#"></a> 
  </li>
  
</ul>
  )
}
