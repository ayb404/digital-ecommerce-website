import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const NewP = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  const [data, setData] = useState({});
  const [per, setPerc] = useState(null);
  const navigate = useNavigate()





  // useEffect(() => {
  //   const uploadFile = () => {
  //     const name = new Date().getTime() + file.name;

  //     console.log(name);
  //     const storageRef = ref(storage, file.name);
  //     const uploadTask = uploadBytesResumable(storageRef, file);

  //     uploadTask.on(
  //       "state_changed",
  //       (snapshot) => {
  //         const progress =
  //           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  //         console.log("Upload is " + progress + "% done");
  //         setPerc(progress);
  //         switch (snapshot.state) {
  //           case "paused":
  //             console.log("Upload is paused");
  //             break;
  //           case "running":
  //             console.log("Upload is running");
  //             break;
  //           default:
  //             break;
  //         }
  //       },
  //       (error) => {
  //         console.log(error);
  //       },
  //       () => {
  //         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
  //           setData((prev) => ({ ...prev, img: downloadURL }));
  //         });
  //       }
  //     );
  //   };
  //   file && uploadFile();
  // }, [file]);

  // console.log(data);

  // const handleInput = (e) => {
  //   const id = e.target.id;
  //   const value = e.target.value;

  //   setData({ ...data, [id]: value });
  // };

  // const handleAdd = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const res = await addDoc(collection(db, "products"), {
  //       ...data,
  //       timeStamp: serverTimestamp(),
  //     });
  //     navigate(-1)
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };



  // const [formData, setFormData] = useState({});

  // const handleInputChange = (e) => {

  //   setFormData({...formData , [e.target.name]:e.target.value});
  // };
  // console.log(formData)

  
  // const createproduct1 = async (quote , dispatch) =>  {
  //   // Send form data to the backend server
    
   
  //     try {
  //        await axios.post('http://localhost:8080/api/product', quote)
  //        dispatch(createproductSuccess());
  
  //     }catch(err) {
  //         dispatch(createproductFaillure());
  //     }
  
  // }

  // const dispatch = useContext(ContextContact)
  // console.log(dispatch)

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   createcontact1(formData,dispatch)
  // }

  const [addprod , setaddprod] = useState([])

const handlechange = (e) => {
  let value = e.target.value 
  setaddprod({...addprod,[e.target.name]:value})
}

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await axios.post('http://localhost:8080/api/product', 
      addprod
    );
    console.log(response , "res");
  
  } catch (error) {
    console.log(error);
  }
};

console.log(addprod)

  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          
          <div className="right">
            <form onSubmit={handleSubmit}>

            <div className="left">
                <label>
                  Image:
                  <input  name="Images" type="file"   onChange={handlechange} required />
                </label>
              </div>

                  <label>
                  Name:
                  <input name="Name" type="text"   onChange={handlechange} required />
                </label>

                <br />
                <label>
                  Category:
                  <input  name="Category" type="text"  onChange={handlechange} required />
                </label>
                <br />
                <label>
                  Description:
                  <input  name="Description" type="text"  onChange={handlechange} required />
                </label>
                <br />
                <label>
                  Price:
                  <input name="Price" type="number"  onChange={handlechange} required />
                </label>
                <br />
                <label>
                  Quantity:
                  <input  name="Quantity" type="number"  onChange={handlechange} required />
                </label>
                <br />
                <label>
                  Rates:
                  <input  name="rates" type="number"  onChange={handlechange} required />
                </label>            
                <br />
                <button type="submit">Add Product</button>
             
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewP;
