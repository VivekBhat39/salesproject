import axios from 'axios';
import React, { useState, useEffect } from 'react';

export default function SaleTable() {
    const [salesData, setSalesData] = useState([]);
    const [totalOverallSubtotal, setTotalOverallSubtotal] = useState(0);

    function loadData() {
        fetch('https://658d9f197c48dce9473980df.mockapi.io/sale')
            .then(response => response.json())
            .then(data => {
                setSalesData(data);
                calculateTotalOverallSubtotal(data);
                console.log(data);
            });
    };

    useEffect(() => {
        // Fetch data from your API
        loadData()
    }, []);

    const calculateTotalOverallSubtotal = (data) => {
        const total = data.reduce((acc, sale) => acc + sale.overallSubtotal, 0);
        setTotalOverallSubtotal(total);
    };

    const handleEdit = (saleId) => {
        // Handle edit logic here
        console.log(`Editing sale with ID ${saleId}`);
    };

    const handleDelete = (e, id) => {
        e.preventDefault();
        // Handle delete logic here
        // console.log(`Deleting sale with ID ${saleId}`);
        axios.delete("https://658d9f197c48dce9473980df.mockapi.io/sale/" + id)
            .then((res) => {
                console.log(res.data);
                loadData()
            })
    };

    return (
        <div className="container mt-2">
            <h2>Sale Expense Table</h2>
            <div className="card">
                <div className="card-body">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Customer Name</th>
                                <th>Mobile No</th>
                                <th>Total Price</th>
                                <th>Total GST</th>
                                <th>Overall Subtotal</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {salesData.map(sale => (
                                <tr key={sale.id}>
                                    <td>{sale.date}</td>
                                    <td>{sale.customerName}</td>
                                    <td>{sale.mobileNo}</td>
                                    <td>{sale.totalPrice}</td>
                                    <td>{sale.totalGST}</td>
                                    <td>{sale.overallSubtotal}</td>
                                    <td>
                                        <button className="btn btn-primary me-2" onClick={(e) => handleEdit(e, sale.id)}>Edit</button>
                                        <button className="btn btn-danger ml-2" onClick={(e) => handleDelete(e, sale.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="mt-3">
                        <strong><h5>Total Overall Subtotal: {totalOverallSubtotal}.00 /-</h5></strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

