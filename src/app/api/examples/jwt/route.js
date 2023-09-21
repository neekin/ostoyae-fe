// This is an example of how to read a JSON Web Token from an API route
import { getToken } from "next-auth/jwt";
import {NextResponse } from 'next/server'
// export default async function handler(req) {
//   // If you don't have the NEXTAUTH_SECRET environment variable set,
//   // you will have to pass your secret as `secret` to `getToken`
//   const token = await getToken({ req });
//   return <>{JSON.stringify(token, null, 2)}</>
// }


export async function GET(request,rep) {
  const token = await getToken({ req:request });
  return NextResponse.json({token})
}