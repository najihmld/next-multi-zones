'use client';

import { Button } from "@packages/ui";
import { getCookieJWT, removeCookieJWT } from "@/utils/auth";
import { redirect, useRouter } from "next/navigation";


export default function DashboardPage() {
    const token = getCookieJWT();
    const {replace} = useRouter();

    if(!token && typeof window !== 'undefined') {
        redirect('/login')
    }

  return (
    <div className="bg-green-300">
      <h1>Dashboard</h1>
      <div>{JSON.stringify(token)}</div>

      <Button
      onClick={()=> {
        removeCookieJWT();
        replace('/login')
      }}
      >Logout</Button>
    </div>
  );
}
