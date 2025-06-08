import { Button } from '@packages/ui'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="bg-green-300">
      <h1>APP WEB APP</h1>
      <Link href={"/login"}>Login</Link>
      <div className="text-orange-200">Zone B</div>
      <Button className="bg-red-600">Button</Button>
      <Button variant="outline">Button 2</Button>
    </div>
  );
}
