import React, { useState } from 'react'
import InputView from './inputView'
import SuccessView from './successView'
import PaytmLOGO from 'assets/paytm.png'
import GokwikLOGO from 'assets/gokwik.jpeg'

import './../styles/main.css'

const MainPage = (props) => {
    const userMobile = localStorage.getItem('user_mobile')
    const [toggle, toggleView] = useState(false)

    const onToggleView = () => {
        toggleView(true)
    }
    return (
        <React.Fragment>
            <div className="flex  flex-wrap w-full">
                <div className="w-full lg:w-1/2 bg-black py-10">
                    <div className="py-2 lg:py-10 w-full ">
                        <div className="text-xl lg:text-2xl font-bold header-txt">
                            Congratulations
                        </div>
                    </div>
                    <div className=" -mb-20 mt-20 lg:my-10 card align-middle">
                        <div className="text-md lg:text-3xl">
                            <img
                                className="mx-auto"
                                width={80}
                                height={80}
                                src={PaytmLOGO}
                            />
                        </div>
                        <div className=" text-lg lg:text-3xl mt-6 italic">
                            Gift card Rs.200{' '}
                        </div>
                    </div>
                </div>
                <div
                    className="w-full lg:w-1/2 
                mt-6 lg:mt-2 
                px-4 lg:px-0
                "
                >
                    {userMobile && userMobile.length === 10 ? (
                        <SuccessView />
                    ) : (
                        <InputView onToggleView={onToggleView} />
                    )}

                    <div className=" py-4 lg:py-10 flex items-center justify-center">
                        <span className="text-xs text-gray-600">
                            Powered by
                        </span>
                        <img
                            className="ml-4"
                            width={90}
                            height={90}
                            src={GokwikLOGO}
                        />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default MainPage
