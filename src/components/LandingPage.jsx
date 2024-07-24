import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PieChart from './charts/PieChart';
import BarChart from './charts/BarChart';

export default function LandingPage() {


    const [productCount, setProductCount] = useState(undefined);
    const [saleExpenseCount, setSaleExpenseCount] = useState(undefined);

    function productData() {
        axios.get("https://658d9f197c48dce9473980df.mockapi.io/product")
            .then((res) => {
                // console.log(res.data.length);
                setProductCount(res.data.length);
            })
    };

    function saleExpenseData(){
        fetch('https://658d9f197c48dce9473980df.mockapi.io/sale')
        .then(response => response.json())
        .then(response => {
            // console.log(response.length);
            setSaleExpenseCount(response.length);
        });
    };

    useEffect(() => {
        productData();
        saleExpenseData()
    });

    return (
        <div>
            <div className="card">
                <div className="card-body">

                    <div className="row">
                        <div className="card m-4" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Products <span>| Today</span></h5>

                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        {/* <i className="bi bi-cart"></i> */}
                                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "#3163b9" }}></i>
                                    </div>
                                    <div className="ps-3">
                                        <h3 style={{ color: "#0066CC" }}>{productCount}</h3>
                                        <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card m-4" style={{ width: "18rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">Sales <span>| Today</span></h5>

                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        {/* <i className="bi bi-cart"></i> */}
                                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "#3163b9" }}></i>
                                    </div>
                                    <div className="ps-3">
                                        <h3 style={{ color: "#0066CC" }}>{saleExpenseCount}</h3>
                                        <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card m-4" style={{ width: "18rem" }}>
                            {/* <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div> */}
                            <div className="card-body">
                                <h5 className="card-title">Sales <span>| Today</span></h5>

                                <div className="d-flex align-items-center">
                                    <div className="card-icon rounded-circle d-flex align-items-center justify-content-center">
                                        {/* <i className="bi bi-cart"></i> */}
                                        <i className="fa-solid fa-cart-shopping fa-2xl" style={{ color: "#3163b9" }}></i>
                                    </div>
                                    <div className="ps-3">
                                        <h3 style={{ color: "#0066CC" }}>{productCount}</h3>
                                        <span className="text-success small pt-1 fw-bold">12%</span> <span className="text-muted small pt-2 ps-1">increase</span>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            {/* Chart */}

            <div className="card mt-1">
                <div className="card-body">
                    <h1>Chart</h1>
                    {/* <PieChart/> */}
                    {/* <BarChart/> */}
                </div>
            </div>
        </div>
    )
}
