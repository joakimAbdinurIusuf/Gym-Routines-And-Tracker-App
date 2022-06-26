import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import data from "../data.json";
import { Workout } from '../types/data';

export default function HomeScreen({navigation}: NativeStackHeaderProps) {

  const renderItem = ({item}: {item: Workout}) => {
    return (
      <View>
        <Text>{item.name}</Text>
        <Text>{item.difficulty}</Text>
      </View>
    )
  }
  
  return (
    <View style={styles.container}>
      <FlatList // item is each element in data array, and slug is unique id
        data={data as Array<Workout>}
        renderItem={renderItem}
        keyExtractor={item => item.slug}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
  container: {
    padding: 20
  }
});
  