import BookTable from './components/bookTable'
import VerticalTabs from './components/verticalTabs'

const AdminTab1 = () => {
  return (
    <>
    {/* <div className="grid lg:grid-cols-4 w-full">
        <div className="lg:col-span-1 border rounded-lg p-10">
            <VerticalTabs />
        </div> */}
        <div className="lg:col-span-3"><BookTable /></div>
    {/* </div> */}
    </>
  )
}

export default AdminTab1