
import MainContent from "../component/MainContent"
import NewsTicker from "../component/NewsTicker"
import SidebarLeft from "../component/SidebarLeft"
import SidebarRight from "../component/SidebarRight"


function Home() {
  return (
    <div className="bg-gray-100">

      <NewsTicker />
      <div className="container mx-auto grid grid-cols-12 gap-4 mt-4">
        <div className="col-span-3">
          <SidebarLeft />
        </div>
        <div className="col-span-6">
          <MainContent />
        </div>
        <div className="col-span-3">
          <SidebarRight />
        </div>
      </div>
    </div>
  )
}

export default Home