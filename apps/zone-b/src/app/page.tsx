import Image from "next/image";
import { Button } from '@packages/ui'

export default function Home() {
  return (
    <div className="bg-green-300">
      <div className="text-orange-200">Zone B</div>
      <Button className="bg-red-600">Button</Button>
      <Button variant="outline">Button 2</Button>
    </div>
  );
}
