import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';
const EditBill = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const {id} = useParams();
    const navigate = useNavigate();
    const onSubmit = (data) =>{
        // console.log(data);
        const name = data.name;
        const email = data.email;
        const phone = data.phone;
        const amount = data.amount;
        const update = {name,email,phone,amount}
        const url = `http://localhost:5000/bill/${id}`;
    // console.log(url);

    fetch(url, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(update)
    })
      .then(res => res.json())
      .then(data => {
        console.log('success', data);
        alert('Bill Data  Edit successfully!!!');
       data.target.reset();
      })
      navigate('/paidTotal');
    }
    return (
        <div className='mt-28'>
            <h1>UPdate data</h1>
            
            <div className='flex justify-center items-center  '>

<div className="card w-96   login-continer">
    <div className="card-body">
        <h2 className="text-center text-primary text-2xl font-bold mb-5">Add Product</h2>
        <form className='d-flex flex-column'
         onSubmit={handleSubmit(onSubmit)}>
            <input className='mb-2 p-3 border-2 border-primary rounded-md w-full' placeholder='Full Name' {...register("name", { required: true, maxLength: 20 })} />

            <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Email' type="email" {...register("email")} />
            <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Phone' type="number" {...register("phone", { required: true, maxLength: 11 })} />
            <input className='mb-2 w-full Available Quantity p-3 border-2 border-primary rounded-md' placeholder='Paid Amount' type="number" {...register("amount")} />
            <input className='w-full btn btn-primary' type="submit" value="Add New Bill" />
        </form>


    </div>
</div>
</div>
        </div>
    );
};

export default EditBill;