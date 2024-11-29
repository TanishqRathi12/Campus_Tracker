import { Stack } from 'expo-router';
 import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

// export default function DrawerFunc() {
//   return (
//     <GestureHandlerRootView style={{ flex: 1 }}>
//       <Drawer />
//     </GestureHandlerRootView>
//   );
// }

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
        
        <Stack.Screen name="(tab)" options={{headerShown:false}}/>
        <Stack.Screen name="index" options={{title:"Welcome", headerTitleAlign:'center' ,headerShown:true}}/>
        <Stack.Screen name="(Auth)" options={{title:"Authentication", headerTitleAlign:'center' ,headerShown:false}}/>
    </Stack>
  );
}
