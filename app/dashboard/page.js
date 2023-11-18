import Image from 'next/image'
import { lusitana } from '@/app/ui/font'
import DashboardLayout from './layout'
import Trow from '../ui/trow'
import Sidebar from '../ui/sidebar'

 async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.
 
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

export default async function Dashmain() {
 
 
  const data = await getData()
 
   
  return (
      <div >
        <table className='table-auto'>
          <thead >
            <tr >
              <th className='p-2' >Id</th>
              <th className='p-2'>Name</th>
              <th className='p-2'>username</th>
              <th className='p-2'>city</th>
              <th className='p-2'>lat</th>
              <th className='p-2'>long</th>
              <th className='p-2'>website</th>
            </tr>
          </thead>
          <tbody>
            {
              data.map((user)=>{
                return (<Trow user={user} key={user.id}/>);
              })
            }
            <button ></button>
          </tbody>
        </table>
      </div>
  )
}