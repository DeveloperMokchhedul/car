import React from 'react'
import ReviewCart from './ReviewCart'
import Title from '../../common/Title'

function RecentReview() {

    return (
      <>
        <div>
          <Title title={"Recent Reviews"} />
          <div className='md:PrimaryContainer px-5 md:px-0 text-center md:text-start mx-auto grid grid-cols-12'>
            <ReviewCart
              image={"/images/reviewcar1.png"}
              title={"2021 Cadilac Escalade"}
              description={"the 2021 Escalade is a tecnological shocase and a wothy claimant of the flagship american luxury vehicle title"}
              name={"Hironaka Hiroe"}
              cimage = "/images/revier1.png"
              role={"Chief Editor"}
              review={"4.91"}
              total={"98"}
            />

            <ReviewCart
              image={"/images/reviewcar2.png"}
              title={"2021 Cadilac Escalade"}
              description={"If developing a car was a marathon technological showcase, Hyundai didn’t run the last mile with the 2021 Elantra. "}
              name={"Debashis Bhuiyan"}
              cimage = "/images/revier2.png"
              role={"News Editor"}
              review={"4.65"}
              total={"93"}
            />


            <ReviewCart
              image={"/images/car3.png"}
              title={"2021 Mercedes-Benz GLA250"}
              description={"The new entry point into Mercedes-Benz’s SUV lineup is bigger and improved, but still features a frustrating powertrain. "}
              name={"Lew Silverton"}
              cimage = "/images/revier3.png"
              role={"Chief Editor"}
              review={"4.55"}
              total={"35"}
            />


          </div>
        </div>

      </>
    )
  }

  export default RecentReview
