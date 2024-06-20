import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { MdMail } from "react-icons/md";
import { contactimg } from "../../assets";

const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_n2knc9o', 'template_78rzxc9', form.current, {
        publicKey: 'kh7EpkRiDo81HQVio',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div id="contact-form" className="bg-b-100">
      <div id="header" className='relative left-0 top-0 w-full h-[300px] xl:h-[460px] bg-cover bg-center flex items-center justify-center' style={{ backgroundImage: `url(${contactimg})` }}>
        <h1 className='text-5xl xl:text-[54px] font-bold text-white'>Contact Us</h1>
      </div>
      <section className="relative mx-auto flex justify-center w-[70%] -mt-20 lg:-mt-24 z-30">
        <div className="hidden lg:flex flex-col justify-around items-start min-h-[466px] overflow-hidden z-20 p-2 w-1/3 rounded-l-3xl text-white bg-b-800 px-6">
          <div className='flex flex-col'>
            <h1 className='text-3xl font-medium py-2'>Let's get in touch</h1>
            <p>Send us your queries, suggestions & comments and we'll respond as soon as we can. We would love to hear from you!</p>
          </div>
          <div className='flex flex-col w-3/4'>
            <span className="flex flex-row items-center my-1"><MdMail size={16} /><p className="inline-block mx-3">sales@ingeniumiae.com</p></span>
            <span className="flex flex-row items-center my-1"><MdMail size={16} /><p className="inline-block mx-3">enquiry@ingeniumiae.com</p></span>
            <span className="flex flex-row items-center my-1"><MdMail size={16} /><p className="inline-block mx-3">admin@ingeniumiae.com</p></span>
          </div>
        </div>
        <div className="flex flex-col justify-center lg:items-start min-h-[466px] overflow-hidden w-2/3 md:w-1/2 z-20 p-2 rounded-r-3xl bg-whitebg px-6">
          <h1 className="block lg:hidden text-3xl font-semibold text-center text-b-700">
            Contact Form
          </h1>
          <form className="mt-6 w-full" ref={form} onSubmit={sendEmail}>
            <div className="mb-2 md:flex w-full">
              <label className='flex-1 mr-2'>
                <span className="text-slate-900">Your name</span>
                <input type="text" name="from_name" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Your Name" />
              </label>
              <label className='flex-1 ml-2'>
                <span className="text-slate-900">Email address</span>
                <input name="email" type="email" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="example@mail.com" required />
              </label>
            </div>
            <div className="mb-2 md:flex w-full">
              <label className='flex-1 mr-2'>
                <span className="text-slate-900">Phone Number</span>
                <input name="phone" type="phone" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Phone no." required />
              </label>
              <label className='flex-1 ml-2'>
                <span className="text-slate-900">Subject</span>
                <input type="text" name="subject" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" placeholder="Subject" />
              </label>
            </div>
            <div className="mb-2 w-full">
              <label>
                <span className="text-slate-900">Message</span>
                <textarea name="message" className="block w-full px-4 py-2 mt-2 text-b-700 bg-white border rounded-md focus:border-b-400 focus:ring-b-300 focus:outline-none focus:ring focus:ring-opacity-40" rows="5"></textarea>
              </label>
            </div>
            <div className="mb-6">
              <input type="submit" className="my-3 h-10 px-5 text-white bg-b-800 rounded-lg transition-all duration-150 hover:bg-b-500" value="Contact Us" />
            </div>
          </form>
        </div>
        
      </section>
      
    </div>
  );
}

export default ContactForm;
