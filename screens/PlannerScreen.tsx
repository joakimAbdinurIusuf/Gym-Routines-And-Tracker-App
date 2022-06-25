import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function PlannerScreen({navigation}: any) {
  useEffect(() => {
    console.log("Planner screen");
  }, []);

  return (
    <View>
      <Text>Planner</Text>
      <Button 
        title="Go to Home" 
        onPress={() => navigation.push("Home")}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
});