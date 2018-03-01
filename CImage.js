import React, { Component } from 'react';
import { View, Image } from 'react-native';
class CImage extends Component {
    render() {
        let pic = { uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg' };
        return (
            <View>
                {/* On iOS, a React Native Image uses a native UIImageView.*/}
                {/* On Android, it uses a native ImageView. */}
                <Image source={pic} style={{ width: 193, height: 110 }} />
            </View>
        );
    }
}

export default CImage;