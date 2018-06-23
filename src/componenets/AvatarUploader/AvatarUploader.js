import React, { Component } from 'react';

import { storage } from '../../config/firebase';
import FileUploader from 'react-firebase-file-uploader';

import './AvatarUploader.css';

class AvatarUploader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      avatar: '',
      isUploading: false,
      progress: 0,
      avatarURL: ''
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
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    this.storageRef.child(filename).getDownloadURL().then(url => {
      this.setState({ avatarURL: url });
      this.props.onSuccess(this.state.avatarURL);
    }
    );

  };



  render() {
    return (



<React.Fragment>
<div className="avatar-uploader">
        
          
        <form>

          
              <img src={(this.state.avatarURL) ? this.state.avatarURL : this.props.placeholder} alt=""/>
            <div className="avatar-actions">
            <label  data-uk-tooltip={'title: Upload your own avatar;delay: 250;animation: uk-animation-slide-top-small'} data-uk-icon="image"><FileUploader
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={this.storageRef}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
              hidden
            /></label>
            <a onClick={this.props.getRandomAvatar} data-uk-icon="refresh" data-uk-tooltip={'title: Get a random avatar;delay: 250;animation: uk-animation-slide-top-small'}></a>
            </div>
          

        </form>
       
          
        <progress  className={(this.state.isUploading)? `uk-progress loading` :`uk-progress`} value={this.state.progress} max="100"></progress>

</div>

 
 


              
</React.Fragment>
      
    )
  }
}


export default AvatarUploader;




