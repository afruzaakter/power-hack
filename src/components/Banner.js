import React from 'react';
import Modal from './Modal';

const Banner = () => {
    return (
        <div className='mt-28 p-6 bg-slate-500 m-10'>
        <div className='flex justify-around'>
            
            <div className='flex '>
                <h1 className='text-xl mr-5'>Billings</h1>
                <input className='p-2 rounded-sm  text-xl' type="text" placeholder='Search' />
            </div>
            <div>
             {/* <button className='btn btn-primary'>Add new bill</button> */}
             <Modal></Modal>
            </div>
        </div>
    </div>
    );
};

export default Banner;