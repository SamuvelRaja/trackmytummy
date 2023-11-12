import Image from 'next/image'
import { lusitana } from '@/app/ui/font'
import DashboardLayout from './layout'
import Trow from '../ui/trow'
import Sidebar from '../ui/sidebar'


export default function Dashmain() {
  return (
    <DashboardLayout>
      <div >
        <table className='table-auto'>
          <thead>
            <tr>
              <th>foodies</th>
              <th>mon</th>
              <th>tues</th>
              <th>wed</th>
              <th>thurs</th>
              <th>fri</th>
              <th>sat</th>
            </tr>
          </thead>
          <tbody>
            <Trow></Trow>
          </tbody>
        </table>
      </div>
    </DashboardLayout>
  )
}