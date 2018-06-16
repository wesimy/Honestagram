import React from 'react'
import './PageContent.css';
import Loader from '../../componenets/loader/loader';

const PageContent = (props) => {
  
  return (
    <div className="app-content bg-grey-bg">
      {
        (props.loading) ?
          <Loader />
          :
            props.children
      }

    </div>
  )
}

export default PageContent;