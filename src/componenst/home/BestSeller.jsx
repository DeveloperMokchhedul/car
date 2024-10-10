import React from 'react'
import Title from '../common/Title'
import Commpany from './Company'

function BestSeller() {
    // <div className='grid grid-cols-12 my-10'>
    return (
        <>
            <div className='md:container mx-auto  px-5 md:px-0 '>
                <Title title={"Explore best selling car makes"} />
                <div className='grid grid-cols-12 py-14 gap-y-8 md:gap-x-24    '>
                    <Commpany  image = {"images/company1.png"} title={"Subaru"} from={"40"}/>
                    <Commpany  image = {"images/company2.png"} title={"Volkswagen"} from={"15"}/>
                    <Commpany  image = {"images/company3.png"} title={"Toyota"} from={"27"}/>
                    <Commpany  image = {"images/company4.png"} title={"Mercedes-Benz"} from={"60"}/>
                    <Commpany  image = {"images/company5.png"} title={"Hyundai"} from={"30"}/>
                    <Commpany  image = {"images/company6.png"} title={"Infiniti"} from={"54"}/>
             
                </div>

            </div>

        </>
    )
}

export default BestSeller
