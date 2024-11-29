import GlobalNav from '@/components/dashboardpageUI/Globalnav'
import UserProfile from '@/components/userprofilepageUI/Userprofile'

const page = () => {
    return (
      <div className='h-screen overflow-y-hidden ' >
          <GlobalNav/>
          <UserProfile/>
      </div>
    )
  }
  
  export default page