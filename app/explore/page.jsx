import GlobalNav from '@/components/dashboardpageUI/Globalnav'
import Explore from '@/components/explorepageUI/Explore'

const page = () => {
  return (
    <div className='h-screen overflow-y-hidden '>
        <GlobalNav/>
        <Explore/>
    </div>
  )
}

export default page
