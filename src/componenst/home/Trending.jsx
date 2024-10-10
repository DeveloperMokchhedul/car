import React from 'react'
import Title from '../common/Title'
import CarCard from '../common/CarCard'

function Trending() {
    // title,spend,train,engine,many
    return (
        <>
            <div className='md:PrimaryContainer px-5 md:px-0 mx-auto my-16'>
                <Title title={"Trending near you"} />

                <div className='grid grid-cols-12 md:text-start text-center'>
                    <CarCard
                        image="/images/car1.png"
                        title={"Used 2019 Audi S4 Premium Plus"}
                        spend={"11 475 Miles"}
                        train={"AWD"}
                        engine={"4-Cylinder Turbo"}
                        many={"41,400"}
                    />

                    <CarCard
                        image="/images/car2.png"
                        title={"2013 Subaru Forester Premium Plus"}
                        spend={"40 475 Miles"}
                        train={"AWD"}
                        engine={"4-Cylinder Turbo"}
                        many={"22,500"}
                    />

                    <CarCard
                        image="/images/car3.png"
                        title={"Used 2010 BMW X3 Sport package"}
                        spend={"20 850 Miles"}
                        train={"RWD"}
                        engine={"4-Cylinder"}
                        many={"39,200"}
                    />

                </div>


            </div>

        </>
    )
}

export default Trending
