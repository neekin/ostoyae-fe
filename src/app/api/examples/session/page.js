// This is an example of how to access a session from an API route
import { getServerSession } from "next-auth";
import authOptions from '@/lib/nextauth-options'

export default async function handler() {
  const session = await getServerSession( authOptions);
 return <>{JSON.stringify(session, null, 2)}</> 
}
