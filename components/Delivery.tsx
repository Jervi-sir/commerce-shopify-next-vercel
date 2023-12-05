"use client"

import { useState } from "react"
import appName from "utils/appName";

export const Delivery = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <p onClick={() => setIsOpen(true)} className="mb-10 text-xl font-medium tracking-tight max-w-prose text-white cursor-pointer">
        Feel free to read it, Please click here in this sentence
      </p>
      <div className={`${isOpen ? 'sticky' : 'hidden'} top-0 left-0 right-0 z-50 w-full p-4 md:inset-0`}>
        <div className="relative w-full max-w-2xl">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                Delivery
              </h3>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6 overflow-y-auto" style={{maxHeight: '300px'}}>
              <div className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                <div className="flex justify-center">
                  <div id="content" className="mx-auto">
                    <h1 className="text-2xl font-bold mb-4">Delivery</h1>
                      <p className="mb-4">
                        At {appName}, we’re committed to delivering your Halloween essentials in a timely and efficient manner.
                        <br /> 
                        We understand the importance of fast, reliable delivery to ensure your items arrive ready for the season.
                      </p>
                        <h3 className="text-xl font-semibold mb-2">Processing Time:</h3>
                        <p className="mb-4">
                        All orders are subject to a handling period before they are dispatched. 
                        <br />
                        99% of orders leave the warehouse within 5-20 days of payment. 
                        <br />
                        We will notify you by email when your items have been shipped.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Shipping Times:</h3>
                        <ul className="list-disc pl-5 mb-4">
                          <li>Standard Shipping: We offer shipping nationwide with an expected delivery time of 5-20 business days after dispatch.</li>
                          <li>Express Shipping: Not Available yet</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2">Order Tracking:</h3>
                        <p className="mb-4">
                          Once your order has been shipped, you will receive an email with tracking information. 
                          <br />
                          You can also track your package directly on any tacking delivery website.
                        </p>

                        <h3 className="text-xl font-semibold mb-2">Delivery Policies:</h3>
                        <ul className="list-disc pl-5 mb-4">
                          <li>If we are experiencing a high volume of orders, shipments may be delayed by a few days. Please allow additional days in transit for delivery.</li>
                          <li>We do not ship on weekends or public holidays.</li>
                          <li>If there will be a significant delay in shipment of your order, we will contact you via email or telephone.</li>
                        </ul>

                        <h3 className="text-xl font-semibold mb-2">Order Issues:</h3>
                        <p className="mb-4">
                          If you have any problems with your order (not received, not what you were expecting, etc.), please contact us 
                        </p>

                        
                        <h6 className="text-xl font-semibold mb-2">Thank you for your Trust.</h6>

                      </div>
                  </div>
              </div>
            </div>
            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
              <button onClick={() => setIsOpen(false)} className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Hide</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}