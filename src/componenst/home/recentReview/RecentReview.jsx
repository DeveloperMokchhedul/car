import React from 'react'
import ReviewCart from './ReviewCart'
import Title from '../../common/Title'

function RecentReview() {

    return (
      <>
        <div>
          <Title title={"Recent Reviews"} />
          <div className='PrimaryContainer mx-auto grid grid-cols-12'>
            <ReviewCart
              image={"/images/car1.png"}
              title={"2021 Cadilac Escalade"}
              description={"the 2021 Escalade is a tecnological shocase and a wothy claimant of the flagship american luxury vehicle title"}
              name={"Hironaka Hiroe"}
              role={"Chief Editor"}
              review={"4.91"}
              total={"98"}
            />

            <ReviewCart
              image={"/images/car1.png"}
              title={"2021 Cadilac Escalade"}
              description={"the 2021 Escalade is a tecnological shocase and a wothy claimant of the flagship american luxury vehicle title"}
              name={"Hironaka Hiroe"}
              role={"Chief Editor"}
              review={"4.91"}
              total={"98"}
            />


            <ReviewCart
              image={"/images/car1.png"}
              title={"2021 Cadilac Escalade"}
              description={"the 2021 Escalade is a tecnological shocase and a wothy claimant of the flagship american luxury vehicle title"}
              name={"Hironaka Hiroe"}
              cimage = "/images/logo.png"
              role={"Chief Editor"}
              review={"4.91"}
              total={"98"}
            />


          </div>
        </div>

      </>
    )
  }

  export default RecentReview
