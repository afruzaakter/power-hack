import React from 'react';
import { useForm } from 'react-hook-form';
const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        console.log(data);
        const email = data.email;
        const password = data.password;
        const user = {email, password}
        console.log(user);

        fetch('https://arrogant-minister-82959.herokuapp.com/user',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
            // toast.success(`Successfully Add New Bill`);
            // refetch();
            console.log(data);
        })
    }

    return (
        <div className='mt-16'>
            <div className='flex justify-center items-center  '>

                <div className="card w-96   login-continer">
                    <div className="card-body">
                        <h2 className="text-center text-primary text-2xl font-bold mb-5">Add Product</h2>
                        <form className='d-flex flex-column'
                            onSubmit={handleSubmit(onSubmit)}>


                            <input className='mb-2 w-full p-3 border-2 border-primary rounded-md' placeholder='Email' type="email" {...register("email")} />
                            <input className='mb-2 w-full p-3 text-dark border-2 border-primary rounded-md' placeholder='Password' type="password" {...register("password")} />

                            <input className='w-full btn btn-primary' type="submit" value="Login" />
                        </form>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;