import GlobalNav from '@/components/dashboardpageUI/Globalnav'
import About from '@/components/aboutpageUI/About'

const page = () => {
  return (
    <div className='h-screen overflow-y-hidden ' >
        <GlobalNav/>
        <About/>
        {/* <Footer/> */}
    </div>
  )
}

export default page
