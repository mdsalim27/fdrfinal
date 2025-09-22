import React, { useState } from 'react'
import Container from './Container'

const Contact = () => {
    // let [inputtext, setInputtext] = useState("")
    // let [inputpassword, setInputpassword] = useState("")
    return (
        <Container>
            <>
                <section>
                    <div className="w-full max-w-2xl bg-white shadow-lg rounded-2xl p-8 mx-auto m-10 ">
                        <h1 className="text-2xl text-gray-800 mb-2 font-extrabold text-[30px]">Contact / Signup Form</h1>
                        <p className="text-gray-500 mb-6 text-[25px] font-black py-1">Fill in the form below and click Submit.</p>

                        <form id="form" className="space-y-5">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label for="name" className="block text-sm text-[25px] text-gray-700 font-bold">Full Name</label>
                                    <input type="text" id="name" name="name" required
                                        className="mt-1 w-full rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm  px-3 text-[30px] border border-amber-100 ">
                                    </input>
                                </div>
                                <div>
                                    <label for="phone" className="block text-sm text-[25px] font-bold text-gray-700">Phone</label>
                                    <input type="tel" id="phone" name="phone"
                                        className="mt-1 w-full rounded-lg  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm  px-3 text-[30px] border border-amber-100">
                                    </input>
                                </div>
                            </div>
                            <div>
                                <label for="email" className="block text-sm text-[25px] font-bold text-gray-700">Email</label>
                                <input type="email" id="email" name="email" required
                                    className="mt-1 w-full rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm border px-3 text-[30px] border-amber-100">
                                </input>
                            </div>
                            <div>
                                <label for="topic" className="block text-sm text-gray-700 text-[30px] font-bold">Topic</label>
                                <select id="topic" name="topic"
                                    class="mt-1 w-full rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm px-3 text-[30px] border border-amber-100">
                                    <option className='font-bold text-[40px] bg-amber-200' value="">Select an option</option>
                                    <option className='font-bold text-[40px] bg-amber-200'>General</option>
                                    <option className='font-bold text-[40px] bg-amber-200'>Support</option>
                                    <option className='font-bold text-[40px] bg-amber-200'>Sales</option>
                                </select>
                            </div>
                            <div>
                                <label for="message" className="block text-sm font-bold text-[30px] text-gray-700">Message</label>
                                <textarea id="message" name="message" rows="2"
                                    class="mt-1 w-full rounded-lg  focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm  border px-3 text-[30px] border-amber-100"></textarea>
                            </div>
                            <div>
                                <label for="file" className="block text-sm  text-gray-700  text-[30px] font-bold">Attachment</label>
                                <input type="file" id="file" name="file"
                                    className="mt-1 w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 font-extrabold
                                       file:rounded-lg file:border-0 file:text-sm file:font-semibold
                                      file:bg-indigo-50 file:text-indigo-700 hover:file:bg-indigo-100">
                                </input>
                            </div>
                            <div className="flex items-center gap-3">
                                <button type="submit"
                                    className="px-5  bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500  text-[20px] font-bold">
                                    Submit
                                </button>
                                <button type="reset"
                                    className="px-5  bg-gray-200 text-gray-800 rounded-lg shadow hover:bg-gray-300 focus:ring-2 focus:ring-gray-400  text-[20px] font-bold">
                                    Reset
                                </button>
                            </div>
                            <p id="success" className="hidden text-green-600 font-medium">✅ Thanks, your form was submitted!</p>
                        </form>
                    </div>
                </section>

                {/* <div className='flex justify-end'>
                        <label className='ml-3' htmlFor="Username">Username:</label>
                        <input type="text" className='border border-amber-500 '
                            value={inputtext}
                            onChange={(e) => setInputtext(e.target.value)}
                        />
                    </div> */}
                {/* <div>
                        <label className='ml-3' htmlFor="password">password:</label>
                        <input type="password" className='border border-amber-500 '
                            value={inputpassword}
                            onChange={(e) => setInputpassword(e.target.value)}
                        />
                    </div> */}
                {/* <div className='border border-amber-500 mx-auto ' >
                    <h1>username:{inputtext}</h1>
                    <h1>password:{inputpassword}</h1>
                    </div> */}


            </>
        </Container>

    )
}

export default Contact
