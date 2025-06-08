'use client';

import { Button } from '@packages/ui'
import { useRouter } from 'next/navigation';
import {getCookieJWT} from '@/utils/auth'

export default function Home() {
const {push} = useRouter();

const token = getCookieJWT();

  return (
    <div className="bg-blue-200">
      <div>Landing Page</div>

      <div>token: {JSON.stringify(token)}</div>
      
      <Button
      onClick={()=> {
        push('/login')
      }}
      >Goto Dashboard</Button>
    </div>
  );
}
