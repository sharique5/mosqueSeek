import { View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { commonStyles } from '@/stylesheets/common';
import { mosqueCardStyles } from '@/stylesheets/mosqueCard';

const MosqueCard = () => {
  return (
    <View style={[commonStyles.flexCenter, mosqueCardStyles.container]}>
      <View style={mosqueCardStyles.image}>
        <Image
          style={mosqueCardStyles.imageStyle}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={mosqueCardStyles.details}>
        <Text style={mosqueCardStyles.name}>Name goes here</Text>
        <Text style={mosqueCardStyles.distance}>X kms</Text>
      </View>
      <View style={[mosqueCardStyles.navigate, commonStyles.flexCenter]}>
        <Ionicons name="navigate-circle-outline" size={48} color="blue" />
      </View>
    </View>
  );
}

export default MosqueCard;