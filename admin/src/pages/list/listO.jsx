import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DatatableO from "../../components/datatable/DatatableO"

const ListO = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DatatableO/>
      </div>
    </div>
  )
}

export default ListO