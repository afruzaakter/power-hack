import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';
const Modal = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();


    const onSubmit = (data, refetch) => {
            const name = data.name;
            const email = data.email;
            const phone = data.phone;
            const amount = data.amount;
            const user = {name,email,phone,amount}
              console.log(user);
        fetch('http://localhost:5000/bill',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // toast.success(`Successfully Add New Bill`);
            refetch();
            console.log(data);
        })

        navigate('/paidTotal');

    }
    return (
        <div>

            <label for="my-modal" class="btn modal-button">Add New Bill</label>
            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">

                   
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
                    <div class="modal-action">
                        <label for="my-modal" class="btn">Ok!</label>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Modal;