import '../ui/globals.css'
import Sidebar from '../ui/sidebar'

export default function DashboardLayout({ 
  children, 
  }) {
  return (
        <div className='flex flex-row'>
          
        <Sidebar/>
          {children}
        </div>
          );
}

