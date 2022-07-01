import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import Pagination from './Pagination';


const BillTable = () => {
    const [bill, setBill] = useState([]);
    
    console.log(bill);

    useEffect(() => {
        fetch('https://arrogant-minister-82959.herokuapp.com/bill')
            .then(res => res.json())
            .then(data => setBill(data))
    }, []);
    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure?')
        if (proceed) {
            const url = `https://arrogant-minister-82959.herokuapp.com/bill/${id}`
            console.log(url);

            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const remaining = bill.filter(bills=> bills._id !== id)
                    setBill(remaining);
                    // toast.success(`Successfully data delete`);
                    // alert('Bill Data  Edit successfully!!!');

                    // refetch();
                })

        }
    }
    return (
        <div className='m-10 bg-slate-500 p-5 rounded-md'>
            
            <div class="overflow-x-auto  ">
                <table class="table w-full  ">

                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            bill?.map((bills, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{bills.name}</td>
                                <td>{bills.email}</td>
                                <td>{bills.phone}</td>
                                <td>{bills.amount}</td>
                                <td>
                                    <Link to={`/editBill/${bills._id}`} className='btn btn-success btn-sm mr-3' >Edit</Link>
                                {/* <button >Edit</button> */}
                                <button onClick={() => handleDelete(bills._id)} className='btn btn-error btn-sm'>Delete</button>
                                </td>
                                                                                         
                            </tr>
                            )
                        }




                    </tbody>
                    <Pagination></Pagination>
                </table>
            </div>
        </div>
    );
};

export default BillTable;