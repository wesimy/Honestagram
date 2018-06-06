import React, { Component } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import { storage } from '../../config/firebase';
import FileUploader from 'react-firebase-file-uploader';
class FileUpload extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            avatar: '',
            isUploading: false,
            progress: 0,
            avatarURL: ''
        };


        this.storageRef = storage.ref();



    }

    handleChangeUsername = (event) => this.setState({ username: event.target.value });
    handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
    handleProgress = (progress) => this.setState({ progress });
    handleUploadError = (error) => {
        this.setState({ isUploading: false });
        console.error(error);
    }
    handleUploadSuccess = (filename) => {
        this.setState({ avatar: filename, progress: 100, isUploading: false });
        this.storageRef.child(filename).getDownloadURL().then(url => this.setState({ avatarURL: url }));
    };



    render() {
        return (
            <div>
                <form>
                    <label>Username:</label>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleChangeUsername} />
                    <label>Avatar:</label>
                    {this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {this.state.avatarURL &&
                        <img src={this.state.avatarURL} />
                    }
                    <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={this.storageRef}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={this.handleProgress}
                    />
                </form>
            </div>
        )
    }
}


export default FileUpload;




