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

          <label>
              <img src={(this.state.avatarURL) ? this.state.avatarURL : this.props.placeholder} alt=""/>
            <FileUploader
              accept="image/*"
              name="avatar"
              randomizeFilename
              storageRef={this.storageRef}
              onUploadStart={this.handleUploadStart}
              onUploadError={this.handleUploadError}
              onUploadSuccess={this.handleUploadSuccess}
              onProgress={this.handleProgress}
              hidden
            />
            <span data-uk-icon="pencil"></span>
          </label>

        </form>
       
          
        <progress  className={(this.state.isUploading)? `uk-progress loading` :`uk-progress`} value={this.state.progress} max="100"></progress>

</div>

 
 


              
</React.Fragment>
      
    )
  }
}


export default AvatarUploader;




