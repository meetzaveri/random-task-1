import React from 'react'
import NoteSVG from 'assets/note.svg'

const SuccessView = (props) => {
    const faqs = [
        {
            question: 'Where will I get the gift card',
            answer: 'You will receive it on Whatsapp/SMS on your mobile',
        },
        {
            question: 'When will I receive the gift card',
            answer: 'Within 48 hours, when your man matters order is delivered',
        },
        {
            question: 'What if I cancel the order',
            answer: 'The voucher will not be delivered if you cancel the order',
        },
    ]
    const renderFAQ = () => {
        return faqs.map((item, index) => (
            <React.Fragment key={index}>
                <div className="table px-0 lg:px-20 pb-10">
                    <div className="table-cell align-middle">
                        <img src={NoteSVG} width={30} height={30} />
                    </div>
                    <div className="table-cell pl-6 lg:pl-20 ">
                        <div className="text-left">{item.question}</div>
                        <div className="mt-1 text-left">{item.answer}</div>
                    </div>
                </div>
            </React.Fragment>
        ))
    }
    return <div className="pt-20">{renderFAQ()}</div>
}

export default SuccessView
