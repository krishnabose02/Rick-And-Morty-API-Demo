import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import {Button, Image, Pressable, Text, View} from 'react-native';
import {RootStackParamList} from '../data';
import {Character} from '../models/Character';
import {getCharacterById} from '../services/CharacterService';

interface HomeScreenProps {
  navigation: StackNavigationProp<RootStackParamList>;
  route: RouteProp<RootStackParamList, 'HOME'>;
}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [data, setData] = React.useState<Character>();
  const getData = async (index: number) => {
    try {
      const chr = await getCharacterById(index);
      setData(chr);
    } catch (err) {
      console.log('sorry', err);
    } finally {
    }
  };

  React.useEffect(() => {
    loadRandomCharacter();
  }, []);

  const loadRandomCharacter = () => {
    const index = Math.random() * 671;
    getData(index);
  };
  const goToEpisode = (episode: string) => {
    console.log(JSON.stringify(props));
    const id = parseInt(episode.substr(episode.lastIndexOf('/') + 1));
    props.navigation.navigate('EPISODE', {id});
  };
  return (
    <View style={{flex: 1}}>
      {data !== undefined && (
        <View style={{padding: 20, alignItems: 'center'}}>
          <Image
            style={{
              borderRadius: 200,
              width: 200,
              height: 200,
              resizeMode: 'contain',
            }}
            source={{uri: data.image}}
          />
          <Text>{data.name}</Text>
          <Text>{data.species}</Text>
          <Text>{data.status}</Text>
          <Text style={{marginTop: 10}}>Episodes:</Text>
          {data.episode.map((ep) => (
            <Pressable
              onPress={() => goToEpisode(ep)}
              android_ripple={{borderless: true, radius: 15}}
              style={{padding: 3}}>
              <Text>{ep.substr(ep.lastIndexOf('/') + 1)}</Text>
            </Pressable>
          ))}
        </View>
      )}
      <Button
        onPress={() => loadRandomCharacter()}
        title="load random character"
      />
    </View>
  );
};

export default HomeScreen;
