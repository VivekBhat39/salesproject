import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Sales() {

    const [data, setData] = useState([]);
    const [products, setProducts] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        axios.get("https://658d9f197c48dce9473980df.mockapi.io/product")
            .then((res) => {
                console.log(res.data);
                setProducts(res.data)
            });
        addDetail();
    }, []);

    function addDetail() {
        // e.preventDefault();
        let copyDetails = [...details];
        copyDetails.push({
            id: 0,
            productid: 0,
            name: "",
            quantity: 0,
            price: 0,
            subtotal:0,
            gstpercent:0,
            gstamount:0,
            total:0
        });
        setDetails(copyDetails);
    }



    return (
        <div>
            <div className="row">
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <Link to={"/admin/dashboard"} className="breadcrumb-item"><a >Home</a></Link>
                        <Link to={"/admin/sales"} className="breadcrumb-item active" aria-current="page">Sales</Link>
                        <div className="mb-3 col-lg-12 d-flex justify-content-end">
                            <button type="button" className="btn btn-primary ms-2" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Add
                            </button>
                        </div>
                    </ol>
                </nav>


                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4">
                                <label htmlFor="">Date</label>
                                <input className='form-control' type="date" />
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="">Customer</label>
                                <input className='form-control' type="text" />
                            </div>
                            <div className="col-lg-4">
                                <label htmlFor="">Mobile No.</label>
                                <input className='form-control' type="text" />
                            </div>
                        </div>
                    </div>
                </div>


                <div className="card mt-3">
                    <div className="card-body">
                        <div className="row">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Product</th>
                                        <th scope="col">Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col">GST</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        details.map((detail, i) => {
                                            return(
                                            <tr key={i}>
                                                <th scope="row">{ i + 1 }</th>
                                                <td>
                                                    <select style={{ width: "200px" }} value={ detail.productid } className="form-select">
                                                        <option value="0">Select Option</option>
                                                        {
                                                            products.map((product) => {
                                                                return (
                                                                    <>
                                                                        <option value={product.id}>{product.name}</option>
                                                                    </>
                                                                )
                                                            })
                                                        }
                                                    </select>
                                                </td>
                                                <td>
                                                    <input type="number" value={ detail.price } className="form-control"/>
                                                </td>
                                                <td>
                                                    <input type="number" value={ detail.quantity } className="form-control"/>
                                                </td>
                                                <td>
                                                    { detail.subtotal }
                                                </td>
                                                <td>
                                                { detail.gstamount }({ detail.gstpercent } %)
                                                </td>
                                                <td>
                                                    <input type="number" value={ detail.total } className="form-control"/>
                                                </td>
                                            </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <button onClick={(e) => { addDetail() }}>Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
