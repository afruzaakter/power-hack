import React, { useEffect, useState } from 'react';

const BillTable = () => {
    const [bill, setBill] = useState([]);
    console.log(bill);
    useEffect(() => {
        fetch('http://localhost:5000/bill')
            .then(res => res.json())
            .then(data => setBill(data))
    }, [])
    return (
        <div className='m-10 bg-slate-500 '>
            <h1>Bill table {setBill.length}</h1>
            <div class="overflow-x-auto bg-slate-500 ">
                <table class="table w-full bg-slate-500 ">

                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
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
                            </tr>
                            )
                        }




                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BillTable;