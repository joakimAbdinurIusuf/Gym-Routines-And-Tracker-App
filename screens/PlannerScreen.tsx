import { useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

/* Navigation has the NativeStackerHeaderProps type. Gives you its' functions. */
export default function PlannerScreen({navigation}: NativeStackHeaderProps) {

  useEffect(() => {
    console.log("Planner screen");
  }, []);

  return (
    <View>
      <Text>Planner</Text>
      <Button 
        title="Go to Home" 
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}
  
const styles = StyleSheet.create({
});