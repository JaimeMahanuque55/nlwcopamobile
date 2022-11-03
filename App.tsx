import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider, VStack, Center, Text } from "native-base";

export default function App() {
  return (
    <NativeBaseProvider>
      <Center flex={1} bgColor="black" >
        <Text color="white" fontSize={24}>Hello react native</Text>
        <StatusBar style="auto" />
      </Center>
    </NativeBaseProvider>
  );
}