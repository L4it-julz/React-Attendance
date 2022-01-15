import React from 'react';
import Camera from 'react-html5-camera-photo';
import 'react-html5-camera-photo/build/css/index.css';

const GetCamera = (props) => {
  const handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    console.log('takePhoto');
  }

  return (
    <Camera
      onTakePhoto = { (dataUri) => { handleTakePhoto(dataUri); } }
    />
    // <h1>hi</h1>
  );
}

export default GetCamera;