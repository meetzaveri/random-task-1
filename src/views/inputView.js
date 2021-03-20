import React, { useState } from 'react'
import RightArrowSVG from 'assets/right_arrow.svg'

const InputView = (props) => {
    const [number, setNumber] = useState('')

    const onChangeText = (e) => {
        const reg = /^\d+$/ // regex for testing number pattern
        const value = e.target.value

        if (value.length < 11 && reg.test(value)) {
            setNumber(value)
        } else if (value === '') {
            setNumber(value)
        }
    }

    const setMobile = () => {
        if (number.length === 10) {
            localStorage.setItem('user_mobile', number)
            props.onToggleView()
        }
    }

    return (
        <React.Fragment>
            <div className="pt-20">
                You've WON Paytm Gift Card of Rs 200 for{' '}
                <span className="font-bold">
                    placing the order on Man matters
                </span>
            </div>

            <div className="mt-8">
                <input
                    className="px-5 py-1 lg:px-5 lg:py-4 input-box text-center text-lg lg:text-xl "
                    type="text"
                    value={number}
                    placeholder="Enter mobile number"
                    onChange={onChangeText}
                />
                <div className="mt-2 text-xs">
                    {number.length === 10
                        ? ``
                        : `Enter the same number used on man matters`}
                </div>
            </div>
            <div className="mt-8">
                <button
                    className={
                        number.length === 10
                            ? `mx-auto focus:outline-none transition ease-in-out duration-300 px-8 py-2 lg:px-8 lg:py-4 text-md lg:text-lg bg-blue-600 rounded-full text-white font-bold flex items-center justify-center shadow-xl`
                            : `mx-auto focus:outline-none transition ease-in-out duration-300 px-8 py-2 lg:px-8 lg:py-4 text-md lg:text-lg bg-gray-400 rounded-full text-white font-bold flex items-center justify-center shadow-none`
                    }
                    disabled={number.length === 10 ? false : true}
                    onClick={setMobile}
                >
                    <span>Wow! Get my Paytm Gift Card</span>
                    <span className="ml-2">
                        <img
                            alt="right-arrow"
                            width={25}
                            height={25}
                            src={RightArrowSVG}
                        />
                    </span>
                </button>
            </div>
        </React.Fragment>
    )
}

export default InputView
