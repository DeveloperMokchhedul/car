import React from 'react'
import Title from '../common/Title'
import Common from './Company'

function BestSeller() {
    // <div className='grid grid-cols-12 my-10'>
    return (
        <>
            <div className='container mx-auto  '>
                <Title title={"Explore best selling car makes"} />
                <div className='grid grid-cols-12 py-14 gap-y-8   '>
                    <Common />
                    <Common />
                    <Common />
                    <Common />
                    <Common />
                    <Common />
                </div>

            </div>

        </>
    )
}

export default BestSeller
