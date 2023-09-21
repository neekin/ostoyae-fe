import { getProviders, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import authOptions from '@/lib/nextauth-options'
import SignBtn from "./components/signBtn";
import { redirect } from 'next/navigation'
export default async function SignIn() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect('/')
  }
  const providers = await getProviders();
  const getButton = () => {
    return (
      <>
        {providers && Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <SignBtn id={provider.id} name={provider.name}></SignBtn>
          </div>
        ))}
      </>
    );
  };
  return <>{getButton()}</>;
}

// export async function getServerSideProps(context) {
//   const session = await getServerSession(context.req, context.res, authOptions);

//   // If the user is already logged in, redirect.
//   // Note: Make sure not to redirect to the same page
//   // To avoid an infinite loop!
//   if (session) {
//     return { redirect: { destination: "/" } };
//   }

//   const providers = await getProviders();

//   return {
//     props: { providers: providers ?? [] },
//   };
// }
