import React, { Component } from 'react';

import { storage } from '../../config/firebase';
import FileUploader from 'react-firebase-file-uploader';

import './PhotoUploader.css';

class PhotoUploader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      photo: '',
      isUploading: false,
      progress: 0,
      photoURL: ''
    };
    this.storageRef = storage.ref();
  }

  
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = (progress) => this.setState({ progress });
  handleUploadError = (error) => {
    this.setState({ isUploading: false });
    console.error(error);
  }
  handleUploadSuccess = (filename) => {
    this.setState({ photo: filename, progress: 100, isUploading: false });
    this.storageRef.child(filename).getDownloadURL().then(url => {
      this.setState({ photoURL: url });
      this.props.onSuccess(this.state.photoURL);
    }
    );

  };



  render() {
    return (



<React.Fragment>
<div className="photo-uploader">
        
          
        <form>

          
              <img src={(this.state.photoURL) ? this.state.photoURL : this.props.placeholder} alt=""/>
            <div className="photo-actions">
            <label  data-uk-tooltip={'title: Upload a photo;delay: 250;animation: uk-animation-slide-top-small'} data-uk-icon="image"><FileUploader
              accept="image/*"
              name="photo"
              randomizeFilename
              storageRef={this.storageRef}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
              hidden
            /></label>
            
            </div>
          

        </form>
       
          
        <progress  className={(this.state.isUploading)? `uk-progress loading` :`uk-progress`} value={this.state.progress} max="100"></progress>

</div>

 
 


              
</React.Fragment>
      
    )
  }
}


export default PhotoUploader;




