import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export default function Products() {

  const [spinner, setSpinner] = useState(true);

  const [data, setData] = useState({
    name: "",
    price: "",
    gst: ""
  });

  const [newData, setNewData] = useState([]);
  const [id, setId] = useState(undefined);

  function handleChange(e) {
    setData({ ...data, [e.target.id]: e.target.value })
    // console.log(e.target.value);
  };

  function handelSubmit() {

    if (id === undefined) {
      axios.post("https://658d9f197c48dce9473980df.mockapi.io/product", data)
        .then((res) => {
          console.log(res.data);
          setData({
            name: "",
            price: "",
            gst: ""
          })
          loadData();
        })
    } else {
      axios.put("https://658d9f197c48dce9473980df.mockapi.io/product/" + id, data)
        .then((res) => {
          console.log(res.data);
          setData({
            name: "",
            price: "",
            gst: ""
          })
          setId(undefined)
          loadData();
        })
    }

  };

  function loadData() {
    axios.get("https://658d9f197c48dce9473980df.mockapi.io/product")
      .then((res) => {
        console.log(res.data);
        setSpinner(false)
        setNewData(res.data)
      })
  };

  useEffect(() => {
    loadData();
  }, [])

  function handleDelete(e, id) {
    e.preventDefault()
    axios.delete("https://658d9f197c48dce9473980df.mockapi.io/product/" + id)
      .then((res) => {
        console.log(res.data);
        loadData();
      })
  };

  function handleUpdate(e, id) {
    setId(id)
    e.preventDefault()
    setId(id)
    axios.get("https://658d9f197c48dce9473980df.mockapi.io/product/" + id, data)
      .then((res) => {
        console.log(res.data);
        setData({
          name: res.data.name,
          price: res.data.price,
          gst: res.data.gst
        })
      })
  };

  function modalClose(e) {
    e.preventDefault();
    setId(undefined)
    setData({
      name: "",
      price: "",
      gst: ""
    })
    console.log("ajhjk");
  }


  return (
    <div>
      <div className="">
        <div className="row">
          {/* I Input Data */}
          {/* <div className="col-lg-6"></div> */}

          {/* Table Data */}
          {/* <div className="col-lg-6"></div> */}

          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <Link to={"/admin/dashboard"} className="breadcrumb-item"><a >Home</a></Link>
              <Link to={"/admin/products"} className="breadcrumb-item active" aria-current="page">Products</Link>
              <div className="mb-3 col-lg-12 d-flex justify-content-end">
                <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Add
                </button>
              </div>
            </ol>
          </nav>


          {/* <h3 className="card-title">Add Product</h3> */}


          {/* <!-- Horizontal Form --> */}

          {/* <button onClick={handelSubmit} type='button' className='btn btn-primary'>Submit</button> */}
          {/* <button type="button" className="btn btn-success ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add
                  </button> */}



          {/* Modal for Input Data */}
          <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">Add Product</h1>
                  <button type="button" onClick={(e) => modalClose(e)} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <div className="row">
                    <div className="row">
                      <div className="col-lg-1"></div>
                      <div className="mb-3 col-lg-10">
                        <label className="form-label">Product</label>
                        <input id='name' value={data.name} onChange={handleChange} type="text" className="form-control" />
                      </div>
                      <div className="col-lg-1"></div>
                    </div>

                    <div className="row">
                      <div className="col-lg-1"></div>
                      <div className="mb-3 col-lg-10">
                        <label className="form-label">Price</label>
                        <input id='price' value={data.price} onChange={handleChange} type="number" className="form-control" />
                      </div>
                      <div className="col-lg-1"></div>
                    </div>

                    {/* <div className="row">
                      <div className="col-lg-1"></div>
                      <div className="mb-3 col-lg-10">
                        <label className="form-label">GST %</label>
                        <input id='gst' value={data.gst} onChange={handleChange} type="text" className="form-control" />
                      </div>
                      <div className="col-lg-1"></div>
                    </div> */}

                    <div className="row">
                      <div className="col-lg-1"></div>
                      <div className="mb-3 col-lg-10">
                        <label htmlFor="disabledSelect" className="form-label">GST %</label>
                        <select id='gst' value={data.gst} onChange={(e) => handleChange(e)} className="form-select">
                          <option >Choose option</option>
                          <option value={"18"}>18%</option>
                          <option value={"12"}>12%</option>
                        </select>
                      </div>
                      <div className="col-lg-1"></div>
                    </div>

                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" onClick={handelSubmit} className="btn btn-primary" data-bs-dismiss="modal">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Modal for Input Data */}


          {

            spinner

              ?

              //  {/* Spinner */}
              <div className="d-flex justify-content-center">
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>

              :

              // {/* Table Data */ }
              <div div className="card mt-2">
                <div className="card-body">

                  {/* Table Data */}
                  <table table className="table table-striped">
                    <thead>
                      <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">GST %</th>
                        <th scope="col">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        newData.map((eachData, i) => {
                          return (
                            <tr key={i}>
                              <th scope="row">{i + 1}</th>
                              <td>{eachData.name}</td>
                              <td>{eachData.price}</td>
                              <td>{eachData.gst} %</td>
                              <td>
                                {/* <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary me-2' data-bs-toggle="modal" data-bs-target="#exampleModal"><i className="fa-solid fa-pencil"></i></button> */}
                                <button onClick={(e) => handleUpdate(e, eachData.id)} className='btn btn-primary me-2' data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>

                                {/* <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'><i className="fa-solid fa-trash"></i></button> */}
                                <button onClick={(e) => handleDelete(e, eachData.id)} className='btn btn-danger'>Delete</button>
                              </td>
                            </tr>
                          )
                        })
                      }

                    </tbody>
                  </table>

                </div>
              </div>

          }











        </div >
      </div >
    </div >
  )
}
