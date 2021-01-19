// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  * @flow strict-local
//  */

// import React, { useState } from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';
// import Colorpicker from "./components/Colorpicker";
// import Fontsize from "./components/Fontsize";
// import TodoList from "./components/TodoList";

// const App = () => {
//   const [color, setColor] = useState('#000');
//   const [size, setSize] = useState(0);
//   const handleChooseColor = (colorChoose) => {
//     setColor(colorChoose);
//   }
//   const handleChooseSize = (sizeChoose) => {
//     setSize(sizeChoose);
//   }
//   return (
//     <View style={{ flex: 1 }}>

//       <View style={{ height: 40, backgroundColor: 'red' }}>
//         <Text>Header</Text>
//       </View>
//       <ScrollView>
//         <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20, marginBottom: 20 }}>
//           <Colorpicker handleChooseColor={handleChooseColor} />
//           <Fontsize size={size} handleChooseSize={handleChooseSize} />
//         </View>

//         <TodoList size={size} color={color} />
//       </ScrollView>

//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;

import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import RootStackScreen from './components/RootStackScreen';
import { NavigationContainer } from '@react-navigation/native';

const App =()=>{
  return(
    <NavigationContainer>
      <RootStackScreen />
    </NavigationContainer>
  )
}

export default App;