'use client';

import { Button } from '@packages/ui';
import {setCookieJWT } from "@/utils/auth";
import { useRouter } from 'next/navigation';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjJUZ1V0OElyT3BqSlZOSlc4N1BLbk5CMEJkSyIsInVzZXJUeXBlIjoiQ1JFQVRPUiIsImNyZWF0ZWRBdCI6IjIwMjMtMDgtMDhUMDM6MTM6NDguMDAwWiIsImlkT3JnYW5pemF0aW9uIjoiMlRnZW12QmY4OTlVTUNyQlFSekpMY21QYWpQIiwiaXNEZW1vIjpmYWxzZSwiaWF0IjoxNzQ5MzcxOTM5LCJleHAiOjE3NDk5NzY3Mzl9.fE2_sb_uR84RLLhFP2gC3mXpLDRj73qAtjOVKX6MTus"

export default function LoginPage() {
    const {replace} = useRouter();

  return (
    <div className="bg-green-300">
      <h1>Login</h1>
      <Button
      onClick={()=> {
        setCookieJWT(token);
        replace('/dashboard')
      }}
      >Login</Button>
    </div>
  );
}
