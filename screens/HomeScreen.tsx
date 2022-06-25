import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function HomeScreen({navigation}: any) {
  useEffect(() => {
    console.log("Home screen");
  }, []);
  
  return (
    <View>
      <Text>Home</Text>
      <Button 
        title="Go to Planner" 
        onPress={() => navigation.push("Planner")}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
});
  