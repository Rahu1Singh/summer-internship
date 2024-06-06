import {MdMail} from "react-icons/md"

const ContactForm = () => {
    return (
        <div className="relative flex w-full justify-center lg:py-36">
            <div className="hidden lg:flex flex-col justify-around items-start min-h-[466px] overflow-hidden w-full z-20 p-2 rounded-md lg:max-w-xl">
                <div className='flex flex-col w-3/4'>
                    <h1 className='text-2xl font-medium py-2'>Let's get in touch</h1>
                    <p>Send us your queries, suggestions & comment and we'll respond as soon as we can. We would love to hear from you!</p>
                </div>
                <div className='flex flex-col w-3/4'>
                    <span className="flex flex-row items-center my-1"><MdMail size={16}/><p className="inline-block mx-3">sales@ingeniumiae.com</p></span>
                    <span className="flex flex-row items-center my-1"><MdMail size={16}/><p className="inline-block mx-3">enquiry@ingeniumiae.com</p></span>
                </div>
            </div>
            <div className="flex flex-col justify-center lg:items-start min-h-[466px] overflow-hidden w-2/3 md:1/2 lg:w-full z-20 p-2 rounded-md lg:max-w-xl">
            <h1 className="block lg:hidden text-3xl font-semibold text-center text-b-700">
                Contact Form
            </h1>
            <form className="mt-6">
                <div className="mb-2 md:flex w-full">
                    <label className='flex-1 mr-2'>
                        <span className="text-gray-700">Your name</span>
                        <input type="text" name="name" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name"/>
                    </label>
                    <label className='flex-1 ml-2'>
                        <span className="text-gray-700">Email address</span>
                        <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="example@mail.com" required />
                    </label>
                </div>
                <div className="mb-2 md:flex w-full">
                    <label className='flex-1 mr-2'>
                        <span className="text-gray-700">Phone Number</span>
                        <input name="phone" type="phone" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="1234567890" required />
                    </label>
                    <label className='flex-1 ml-2'>
                        <span className="text-gray-700">Subject</span>
                        <input type="text" name="subject" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Subject" />
                    </label>
                </div>
                <div className="mb-2 w-full">
                    <label>
                        <span className="text-gray-700">Message</span>
                        <textarea name="message" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" rows="5"></textarea>
                    </label>
                </div>
                <div className="mb-6">
                    <button type="submit" className="my-3 h-10 px-5 text-indigo-100 bg-b-700 rounded-lg transition-colors duration-150 focus:shadow-outline hover:bg-b-800">
                        Contact Us
                    </button>
                </div>
            </form>
        </div>

        <div className="absolute top-0 left-0 hidden md:block w-2/5 bg-g-100 h-full"/>
		<div className="absolute top-0 right-0 w-full md:w-3/5 bg-b-100 h-full"/>
        <div className='absolute max-md:hidden right-0 top-0 bg-b-400 h-full w-[70px] lg:w-[90px]' />
        <div className='absolute max-md:hidden right-[70px] xl:right-[90px] top-0 bg-b-300 h-full w-[70px] xl:w-[90px]' />
        <div className='absolute max-md:hidden left-0 top-0 bg-g-400 h-full w-[70px] lg:w-[90px]' />
        <div className='absolute max-md:hidden left-[70px] xl:left-[90px] top-0 bg-g-300 h-full w-[70px] xl:w-[90px]' />
    </div>
  );
}

export default ContactForm
