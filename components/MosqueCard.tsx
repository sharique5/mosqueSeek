import { View, Image, Text } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { commonStyles } from '@/stylesheets/common';
import { mosqueCardStyles } from '@/stylesheets/mosqueCard';

interface IMosqueCardProps {
  name: string;
  distance: string;
  icon: string;
  photo: string;
}

const MosqueCard = (props: IMosqueCardProps) => {
  return (
    <View style={[commonStyles.flexCenter, mosqueCardStyles.container]}>
      <View style={mosqueCardStyles.image}>
        <Image
          style={mosqueCardStyles.imageStyle}
          source={{
            uri: props?.photo ?? props?.icon ?? 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
      <View style={mosqueCardStyles.details}>
        <Text style={mosqueCardStyles.name} numberOfLines={1} ellipsizeMode="tail">{props?.name}</Text>
        <Text style={mosqueCardStyles.distance}>{props?.distance}</Text>
      </View>
      <View style={[mosqueCardStyles.navigate, commonStyles.flexCenter]}>
        <Ionicons name="navigate-circle-outline" size={48} color="blue" />
      </View>
    </View>
  );
}

export default MosqueCard;