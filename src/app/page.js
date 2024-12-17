
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "./auth";
export default  async function Home() {
  const session = await auth();
  if(!session)
    redirect("api/auth/signin")
  return (
   
         
         
    <div className="max-w-xl mx-auto mt-20">
      <div className="text-4xl text-gray-800 text-center uppercase">
        welcome
      </div>
      <div>

        <Link href="/api/auth/signout"   className="px-2 py-2 text-center flex justify-center bg-blue-700 text-white rounded-lg mt-5">Logout</Link>
      </div>
    </div>
  );
}
