import { Stack } from "expo-router";
import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'


const publishableKey =process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY

if(!publishableKey){
  throw new Error(
    'Missing Publishable key'
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey}>
    <ClerkLoaded>
   <SafeAreaProvider>
      <SafeAreaView  style={{
        flex:1,
        backgroundColor:"black"
      }}>
    <Stack screenOptions={{headerShown:false}}/>
      
    </SafeAreaView>
    </SafeAreaProvider>
    </ClerkLoaded>
    </ClerkProvider>
 
    
  );
}
