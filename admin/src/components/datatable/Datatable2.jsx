import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumnsP } from "../../datatbalesourceP";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';

import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";
import axios from "axios";

const DatatableP = () => {

  // const [data, setData] = useState([]);


  // useEffect(() => {
  //   const fetchData = async () => {
  //     let list = [];
  //     try {
  //       const querySnapshot = await getDocs(collection(db, "products"));
  //       querySnapshot.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setData(list);
  //       console.log(list);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };
  //   fetchData();

  //   //LISTEN (REALTIME)

  //   const unsub = onSnapshot(
  //     collection(db, "products"),
  //     (snapShot) => {
  //       let list = [];
  //       snapShot.docs.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setData(list);
  //     },
  //     (error) => {
  //       console.log(error);
  //     }
  //   );

  //   return () => {
  //     unsub();
  //   };
  // }, []);

  // console.log(data  , "dar")
  
  const [values , setValues] = useState([]);

  useEffect ( () => {
    axios.get(`http://localhost:8080/api/product?category=All`).then((response) => {
      setValues (response.data);
    })
  },[values])

  console.log(values)


  const handleDelete = async (productId) => {
    try {
      await axios.delete(`http://localhost:8080/api/product/delete/${productId}`);
      console.log('Product deleted successfully');
      // Perform any necessary UI updates or fetch updated data
    } catch (error) {
      console.error('Failed to delete product:', error);
      // Handle the error and display an error message to the user if needed
    }
  };

  // delete 
  // const actionColumn = [
  //   {
  //     field: "action",
  //     headerName: "Action",
  //     width: 200,
  //     renderCell: (params) => {
  //       return (
  //         <div className="cellAction">
            
  //           <div
  //             className="deleteButton"
  //             onClick={() => handleDelete(params.row.id)}
  //           >
  //             Delete
  //           </div>
  //         </div>
  //       );
  //     },
  //   },
  // ];

  const userColumnsP = [
    {
      field: '_id',
      headerName: 'ID',
      width: 70,
    },
    {
      field: 'Name',
      headerName: 'Product',
      width: 230,
    },
    {
      field: 'Category',
      headerName: 'Category',
      width: 230,
    },
    {
      field: 'Price',
      headerName: 'Price',
      width: 100,
    },
    {
      field: 'Quantity',
      headerName: 'Stock',
      width: 160,
    },
  ];
    const actionColumn = [
       {
      renderCell: (params) => (
        <div className="deleteButton">
          <button onClick={() => handleDelete(params.row._id)} color="secondary" size="small" className="deleteButton" >
            Delete
          </button>
        </div>
      ),
    },
  ];
  

const rowsData = values.map((data) => ({
  id: data._id,
  _id: data._id,
  Name: data.Name,
  Category: data.Category,
  Price: data.Price,
  Quantity: data.Quantity,
  Images: data.Images
}));

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New Product
        <Link to="/products/newP" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={rowsData}
        columns={userColumnsP.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default DatatableP;
