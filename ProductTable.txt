import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductTable = () => {
    const [products, setProducts] = useState([]);
    const [tableRows, setTableRows] = useState([]);
    const [date, setDate] = useState('');
    const [customerName, setCustomerName] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');

    useEffect(() => {
        // Fetch data from the API endpoint
        axios.get('https://658d9f197c48dce9473980df.mockapi.io/product')
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

    useEffect(() => {
        // Add three default rows when component mounts
        setTableRows([
            { id: Date.now(), productId: '', quantity: 1, selectedProduct: null },
            { id: Date.now() + 1, productId: '', quantity: 1, selectedProduct: null },
            { id: Date.now() + 2, productId: '', quantity: 1, selectedProduct: null },
        ]);
    }, []); // Empty dependency array ensures this effect runs only once

    const handleProductChange = (productId, rowId) => {
        const updatedRows = tableRows.map(row => {
            if (row.id === rowId) {
                const selectedProduct = products.find(product => product.id === productId);
                return { ...row, productId, selectedProduct };
            }
            return row;
        });
        setTableRows(updatedRows);
    };

    const handleQuantityChange = (quantity, rowId) => {
        const updatedRows = tableRows.map(row => {
            if (row.id === rowId) {
                return { ...row, quantity };
            }
            return row;
        });
        setTableRows(updatedRows);
    };

    const calculateSubtotal = (price, gst, quantity) => {
        return ((parseInt(price) + (parseInt(price) * parseInt(gst)) / 100) * quantity);
    };

    const calculateTotal = () => {
        let totalPrice = 0;
        let totalGST = 0;
        let overallSubtotal = 0;

        tableRows.forEach(row => {
            if (row.selectedProduct) {
                const price = parseFloat(row.selectedProduct.price);
                const gst = parseFloat(row.selectedProduct.gst);
                const quantity = parseInt(row.quantity);

                totalPrice += price * quantity;
                totalGST += (price * gst * quantity) / 100;
                overallSubtotal += calculateSubtotal(price, gst, quantity);
            }
        });

        return {
            totalPrice: totalPrice.toFixed(2),
            totalGST: totalGST.toFixed(2),
            overallSubtotal: overallSubtotal.toFixed(2),
        };
    };

    const handleAddRow = () => {
        setTableRows([...tableRows, { id: Date.now(), productId: '', quantity: 1, selectedProduct: null }]);
    };

    const handleRemoveRow = (rowId) => {
        setTableRows(tableRows.filter(row => row.id !== rowId));
    };

    const handleSubmit = () => {
        // Prepare the data to be sent to the server
        const saleData = {
            id: Date.now(),
            date,
            customerName,
            mobileNo: mobileNumber,
            totalPrice: parseFloat(calculateTotal().totalPrice),
            totalGST: parseFloat(calculateTotal().totalGST),
            overallSubtotal: parseFloat(calculateTotal().overallSubtotal),
            products: tableRows.map(row => ({
                id: row.id,
                quantity: row.quantity,
                name: row.selectedProduct?.name || '',
                price: parseFloat(row.selectedProduct?.price),
                gst: parseFloat(row.selectedProduct?.gst),
            })),
        };

        // Send the data to the server using Axios
        axios.post('https://658d9f197c48dce9473980df.mockapi.io/sale', saleData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                // Optionally, you can reset the form or perform any other actions after successful submission.
            })
            .catch(error => {
                console.error('Error sending data:', error);
            });
    };

    return (
        <div className="container">

            <div className="row">
                <div className="col-lg-4 mb-3">
                    <label htmlFor="date" className="form-label">Date:</label>
                    <input
                        type="date"
                        className="form-control"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div className="col-lg-4 mb-3">
                    <label htmlFor="customerName" className="form-label">Customer Name:</label>
                    <input
                        type="text"
                        className="form-control"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                    />
                </div>
                <div className="col-lg-4 mb-3">
                    <label htmlFor="mobileNumber" className="form-label">Mobile Number:</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="mobileNumber"
                        value={mobileNumber}
                        onChange={(e) => setMobileNumber(e.target.value)}
                    />
                </div>
            </div>

            <button className="btn btn-primary mb-3" onClick={handleAddRow}>Add Row</button>
            <table className="table">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>GST</th>
                        <th>Subtotal</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {tableRows.map(row => (
                        <tr key={row.id}>
                            <td>
                                <select
                                    className="form-select"
                                    onChange={(e) => handleProductChange(e.target.value, row.id)}
                                    value={row.productId}
                                >
                                    <option value="" disabled>Select a product</option>
                                    {products.map(product => (
                                        <option key={product.id} value={product.id}>{product.name}</option>
                                    ))}
                                </select>
                            </td>
                            <td>{row.selectedProduct?.price || ''}</td>
                            <td>
                                <input
                                    type="number"
                                    min="1"
                                    value={row.quantity}
                                    onChange={(e) => handleQuantityChange(e.target.value, row.id)}
                                    className="form-control"
                                />
                            </td>
                            <td>{row.selectedProduct?.gst || ''}%</td>
                            <td>{calculateSubtotal(row.selectedProduct?.price, row.selectedProduct?.gst, row.quantity)}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleRemoveRow(row.id)}
                                >
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <button className="btn btn-success" onClick={handleSubmit}>Submit Data</button>

            <hr />
            {/* Total section */}
            <div className="mt-5">
                <h4>Total Price: {calculateTotal().totalPrice}</h4>
                <h4>Total GST: {calculateTotal().totalGST}</h4>
                <h4>Overall Subtotal: {calculateTotal().overallSubtotal}</h4>
            </div>
        </div>
    );
};

export default ProductTable;
