import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import axios from 'axios';
import * as React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {RootStackParamList} from '../data';
import {Episode} from '../models/Episode';

interface EpisodeScreenProps {
  navigation: StackNavigationProp<RootStackParamList, 'EPISODE'>;
  route: RouteProp<RootStackParamList, 'EPISODE'>;
}

const EpisodeScreen: React.FC<EpisodeScreenProps> = (props) => {
  const [episode, setEpisode] = React.useState<Episode>();
  const getData = async () => {
    const res = await axios.get(
      'https://rickandmortyapi.com/api/episode/' + props.route.params.id,
    );
    setEpisode(res.data);
  };
  React.useEffect(() => {
    getData();
    return () => {
      console.log('page is destroyed');
    };
  }, []);
  return (
    <View style={{flex: 1}}>
      <Text>episode id is {props.route.params.id}</Text>
      {episode != undefined && (
        <>
          <Text>{episode.air_date}</Text>
          <Text>{episode.name}</Text>
          <Text>{episode.url}</Text>
          <Text>{JSON.stringify(episode.air_date)}</Text>
        </>
      )}
      <Button onPress={() => props.navigation.goBack()} title="go back" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default EpisodeScreen;
