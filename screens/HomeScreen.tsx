import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Home screen");
  }, []);
  
  return (
    <View>
      <Text>Home</Text>
      <Button 
        title="Go to Planner" 
        onPress={() => navigation.navigate("Planner")}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
});
  