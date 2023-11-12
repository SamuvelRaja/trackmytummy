import Image from 'next/image'
import { lusitana } from '@/app/ui/font'
import Link from 'next/link'


export default function Home() {
  return (
      <div>
          <h1 className='text-3xl font-'>welcome </h1>
          <Link href="/dashboard" className='text'>go to dashboard</Link>
      </div>
  )
}
