// import { Text, View } from "react-native";View

// export default function Index() {
//   return (
//     <View
//       style={{
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <Text>Edit app/index.tsx to edit this screen.</Text>
//     </View>
//   );
// }

import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import App from './navigation/AppNavigator';

registerRootComponent(App);
