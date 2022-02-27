import React, { useContext } from 'react';
import { View } from 'react-native';
import { WebView } from 'react-native-webview';
import { AuthContext } from '../../Contexts';

export default function Videoa() {

    const { videoUrl } = useContext(AuthContext);
    const contain = videoUrl

 return (
    <WebView
    source={{
      uri:videoUrl
    }}
    style={{ marginTop: 20 }}
  />
  );
}