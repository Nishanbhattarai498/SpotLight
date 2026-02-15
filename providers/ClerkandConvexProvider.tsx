
import React, { Children } from 'react'
import { ClerkLoaded, ClerkProvider ,useAuth } from '@clerk/clerk-expo'
import { tokenCache } from '@/cache'
import { ConvexProviderWithClerk } from "convex/react-clerk";
import {ConvexReactClient} from "convex/react"


const convex = new ConvexReactClient(process.env.CONVEX_URL!,{
    unsavedChangesWarning:false
});

const publishableKey=process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!;
if(!publishableKey){
  throw new Error(
    "Missing EXPO PUBLISHABLE KEY"
  );

}

export default function ClerkandConvexProvider({children}:{children:React.ReactNode}) {
  return (
    <ClerkProvider tokenCache={tokenCache} publishableKey={publishableKey}>
        <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
            <ClerkLoaded>
                {children}
            </ClerkLoaded>

      </ConvexProviderWithClerk>
        

    </ClerkProvider>
  )
}