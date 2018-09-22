import React, { Component } from 'react';
import { CameraRoll, Platform } from 'react-native';
import LibraryScreen from './presenter';

class Container extends Component {
  state = {
    photos: null,
    pickedPhoto: null
  };

  componentWillMount = async () => {
    const rollParams = {
      first: 2000,
      groupTypes: 'SavedPhotos',
      assetType: 'Photos'
    };

    if (Platform.OS == 'android') {
      delete rollParams.groupTypes;
    }

    const { edges } = await CameraRoll.getPhotos(rollParams);

    this.setState({
      photos: edges,
      pickedPhoto: edges[0]
    });
  };

  render() {
    return <LibraryScreen {...this.state} pickPhoto={this._pickPhoto} />;
  }

  _pickPhoto = photo => {
    this.setState({
      pickedPhoto: photo
    });
  };
}

export default Container;
