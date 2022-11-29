
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native';
import { TextInput } from 'react-native';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native';
import { Pressable } from 'react-native';
import Login1 from './android/app/src/Login1';
import Login2 from './android/app/src/Login2';
/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const App=()=>{
  return (
   <View>
      <Login1/>
      {/* <Login2/> */}
   </View>

  );
}

export default App;
