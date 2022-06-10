import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import NavBar from '../NavBar/NavBar';
import './Contact.css'


const ContactMe = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const formId = 'Rt4GJYeV';
    const formSparkUrl = `https://submit-form.com/${formId}`
    const submitForm = async (data) => {
        // event.preventDefault();
        ;

        const formInput = {
            email: data.email,
            name: data.name,
            message: data.message
        }
        console.log(formInput);
        alert('Message sent')
        if (data.email === true) {
            toast.success('Message sent successfully')
        };
        reset()

        const postSubmission = async () => {
            const payLoad = {
                ...formInput
            };
            try {
                const result = await axios.post(formSparkUrl, payLoad)
                console.log(result)
            }
            catch (error) {
                console.log(error);
            }
        }
        await postSubmission()
    }



    return (
        <div className='contact'>

            <div className='h-screen flex justify-center flex-col'>
                {/* <NavBar></NavBar> */}
                <div className='w-1/3 m-auto p-8 shadow-lg border-2 border-white'>
                    <h1 className='text-4xl font-bold  flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white transform rotate-45" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg><span className='text-white'>Contact</span>
                    </h1>
                    <form className='text-black' onSubmit={handleSubmit(submitForm)}>
                        <div className='my-2 flex flex-col' >
                            <label className='text-white' htmlFor="name">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="border-2 p-2"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: 'Description Required'
                                    },
                                })}
                            />
                            <label className='text-white' htmlFor="name">Email</label>
                            <input
                                type="text"
                                placeholder="Your Email"
                                className="border-2 p-2 text-black"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Description Required'
                                    },
                                })}
                            />
                            <label className='text-white' htmlFor="name">Message</label>
                            <textarea
                                type="text-area"
                                placeholder="Your message"
                                className="border-2 p-2"
                                {...register("message", {
                                    required: {
                                        value: true,
                                        message: 'Description Required'
                                    },
                                })}
                            />
                        </div>
                        <button className='btn btn-primary mt-5 rounded-none btn-sm w-full'>Submit</button>
                    </form>
                </div>


            </div>
        </div>
    );
};

export default ContactMe;