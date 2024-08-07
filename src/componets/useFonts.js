import * as Font from 'expo-font';
import { Inter_400Regular, Inter_500Medium, Inter_700Bold } from '@expo-google-fonts/inter';

export default useFonts = async () =>
  await Font.loadAsync({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });
