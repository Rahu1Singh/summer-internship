import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (id) => {
    setOpenAccordion((prev) => (prev === id ? null : id));
  };

  return (
    <section className='w-1/2 rounded-xl overflow-clip my-10'>
      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-b-800 hover:bg-b-900 gap-3 transition-all" onClick={() => toggleAccordion(1)} aria-expanded={openAccordion === 1} aria-controls="accordion-collapse-body-1">
            <span className='text-xl text-white'>Data Centers</span>
            <svg data-accordion-icon className={`w-4 h-4 ${openAccordion !== 1 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <AnimatePresence initial={false}>
          {openAccordion === 1 && (
            <motion.div id="accordion-collapse-body-1" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} aria-labelledby="accordion-collapse-heading-1" className="overflow-hidden">
              <div className="px-10 py-5 bg-b-200">
                <p className='my-2 text-lg'>Digital Realty Data Centre, Hong Kong</p>
                <p className='my-2 text-lg'>Princeton Data Centre, SG1, Singapore</p>
                <p className='my-2 text-lg'>Singapore Power Data Center, Singapore</p>
                <p className='my-2 text-lg'>Bridge Data Center MY 02, Cyber Java, Malaysia</p>
                <p className='my-2 text-lg'>Bridge Data Center, Mumbai, India</p>
                <p className='my-2 text-lg'>Digital Realty SIN11 Data Center, Singapore</p>
                <p className='my-2 text-lg'>Digital Realty KIX10 Data Center, Osaka, Japan</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <h2 id="accordion-collapse-heading-2">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-b-800 hover:bg-b-900 gap-3 transition-all" onClick={() => toggleAccordion(2)} aria-expanded={openAccordion === 2} aria-controls="accordion-collapse-body-2">
            <span className='text-xl text-white'>Healthcare</span>
            <svg data-accordion-icon className={`w-4 h-4 ${openAccordion !== 2 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5" />
            </svg>
          </button>
        </h2>
        <AnimatePresence initial={false}>
          {openAccordion === 2 && (
            <motion.div id="accordion-collapse-body-2" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} aria-labelledby="accordion-collapse-heading-2" className="overflow-hidden">
              <div className="px-10 py-5 bg-b-200">
                <p className='my-2 text-lg'>GSK Biological Plant, Singapore</p>
                <p className='my-2 text-lg'>Tan Tock Seng Hospital, SOC Clinic, Singapore</p>
                <p className='my-2 text-lg'>Novartis Tablet Plant, Singapore</p>
                <p className='my-2 text-lg'>Roche Genentech, Singapore</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <h2 id="accordion-collapse-heading-3">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-b-800 hover:bg-b-900 gap-3 transition-all" onClick={() => toggleAccordion(3)} aria-expanded={openAccordion === 3} aria-controls="accordion-collapse-body-3">
            <span className='text-xl text-white'>Airports</span>
            <svg data-accordion-icon className={`w-4 h-4 ${openAccordion !== 3 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <AnimatePresence initial={false}>
          {openAccordion === 3 && (
            <motion.div id="accordion-collapse-body-3" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} aria-labelledby="accordion-collapse-heading-3" className="overflow-hidden">
              <div className="px-10 py-5 bg-b-200">
                <p className='my-2 text-lg'>Changi Airport Terminal 1, 2, 3 and 4, Singapore</p>
                <p className='my-2 text-lg'>Changi Airport Contol Tower, Singapore</p>
                <p className='my-2 text-lg'>Changi Airport Air Traffic Command Centre</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <h2 id="accordion-collapse-heading-4">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-b-800 hover:bg-b-900 gap-3 transition-all" onClick={() => toggleAccordion(4)} aria-expanded={openAccordion === 4} aria-controls="accordion-collapse-body-4">
            <span className='text-xl text-white'>Commercial Estates</span>
            <svg data-accordion-icon className={`w-4 h-4 ${openAccordion !== 4 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <AnimatePresence initial={false}>
          {openAccordion === 4 && (
            <motion.div id="accordion-collapse-body-4" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} aria-labelledby="accordion-collapse-heading-4" className="overflow-hidden">
              <div className="px-10 py-5 bg-b-200">
                <p className='my-2 text-lg'>MRF Track Watering System, Tamil Nadu, India</p>
                <p className='my-2 text-lg'>Shell, Brunei</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <h2 id="accordion-collapse-heading-5">
          <button type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right bg-b-800 hover:bg-b-900 gap-3 transition-all" onClick={() => toggleAccordion(5)} aria-expanded={openAccordion === 5} aria-controls="accordion-collapse-body-5">
            <span className='text-xl text-white'>Others</span>
            <svg data-accordion-icon className={`w-4 h-4 ${openAccordion !== 5 ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
              <path stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
            </svg>
          </button>
        </h2>
        <AnimatePresence initial={false}>
          {openAccordion === 5 && (
            <motion.div id="accordion-collapse-body-5" initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} aria-labelledby="accordion-collapse-heading-5" className="overflow-hidden">
              <div className="px-10 py-5 bg-b-200">
                <p className='my-2 text-lg'>Data Logger Bacnet IP for V Hotel, Singapore</p>
                <p className='my-2 text-lg'>Data Logger Bacnet IP for Singapore Polytechic</p>
                <p className='my-2 text-lg'>Data Logger Bacnet IP for NGee Ann Polytechnic</p>
                <p className='my-2 text-lg'>Hydraulic Pump Skid, SEA</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

export default Projects;
