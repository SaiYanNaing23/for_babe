import GlobalNav from '@/components/dashboardpageUI/Globalnav'
import Mymatches from '@/components/mymatchespageUI/Mymatches'

const page = () => {
    return (
      <div className='h-screen overflow-y-hidden' >
          <GlobalNav/>
          <Mymatches/>
      </div>
    )
  }
  
  export default page