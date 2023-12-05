"use client"

import appName from "utils/appName";
import { useState } from "react"

export const TermsConditions = () => {
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
                Terms of Service
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
                    <h1 className="text-2xl font-bold mb-4">Terms &amp; Conditions</h1>
                    <p className="mb-4">
                      Welcome to {appName}!
                      <br />
                        These terms and conditions outline the rules and regulations for the use of {appName}&apos;s Website.
                        <br />
                          By accessing this website, we assume you accept these terms and conditions. Do not continue to use {appName} if you do not agree to take all of the terms and conditions stated on this page.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Cookies</h3>
                        <p className="mb-4">
                          We employ the use of cookies. By accessing {appName}, you agreed to use cookies in agreement with {appName}&apos;s Privacy Policy.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">License</h3>
                        <p className="mb-4">
                          Unless otherwise stated, {appName} and/or its licensors own the intellectual property rights for all material on {appName}. All intellectual property rights are reserved.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">You must not:</h3>
                        <ul className="list-disc pl-5 mb-4">
                          <li>Republish material from {appName}</li>
                          <li>Sell, rent, or sub-license material from {appName}</li>
                          <li>Reproduce, duplicate, or copy material from {appName}</li>
                          <li>Redistribute content from {appName}</li>
                        </ul>
                        <h3 className="text-xl font-semibold mb-2">User Comments</h3>
                        <p className="mb-4">
                          This Agreement shall begin on the date hereof.
                          <br />
                            Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas of the website. {appName} does not filter, edit, publish, or review comments prior to their presence on the website. Comments do not reflect the views and opinions of {appName}, its agents, and/or affiliates. Comments reflect the views and opinions of the person who posts their views and opinions. To the extent permitted by applicable laws, {appName} shall not be liable for the comments or for any liability, damages, or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the comments on this website.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Purchasing and Delivery</h3>
                        <p className="mb-4">
                          {appName} reserves the rights to accept or deny any order placed by a customer for any reason. Prices for goods are subject to change without notice. We reserve the right at any time to modify or discontinue the product (or any part or content thereof) without notice.
                          <br />
                            We shall not be liable to any customer or to any third-party for any modification, price change, suspension, or discontinuance of the product.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Return, Exchange &amp; Refund</h3>
                        <p className="mb-4">
                          Provide information about your return, exchange, and refund policies.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Limitation of Liability</h3>
                        <p className="mb-4">
                          In no event shall {appName}, nor any of its officers, directors, and employees be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. {appName}, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this Website.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Indemnification</h3>
                        <p className="mb-4">
                          You hereby indemnify to the fullest extent {appName} from and against any and/or all liabilities, costs, demands, causes of action, damages, and expenses arising in any way related to your breach of any of the provisions of these Terms.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Severability</h3>
                        <p className="mb-4">
                          If any provision of these Terms is found to be invalid under any applicable law, such provisions shall be deleted without affecting the remaining provisions herein.
                        </p>
                        <h3 className="text-xl font-semibold mb-2">Variation of Terms</h3>
                        <p className="mb-4">
                          {appName} is permitted to revise these Terms at any time as it sees fit, and by using this Website, you are expected to review these Terms on a regular basis.
                        </p>
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