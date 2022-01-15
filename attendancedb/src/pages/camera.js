import React from "react";
import Webcam from "react-webcam";


const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};


const TakePhotos = () => {
    return (
        <div className="App">
        <h1>Image capture test</h1>
        <p>Capture image from USB webcamera and upload to form</p>
        {/* <CameraFeed sendFile={uploadImage} /> */}
        {/* <CameraFeed sendFile={uploadImage} /> */}
        <Webcam />
    </div>
    );
}

export default TakePhotos;