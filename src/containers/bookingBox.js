import React from "react"
import { Bookingbox } from "../components"

export default function bookingbox(){
    return(
      <Bookingbox>
        <Bookingbox.Grid>
          <Bookingbox.Frame>
            <Bookingbox.Image src={process.env.PUBLIC_URL + '/images/dashboard/activityPhoto.jpg'}></Bookingbox.Image>
          </Bookingbox.Frame>
          <Bookingbox.Frame>
            <Bookingbox.Title>a</Bookingbox.Title>
          </Bookingbox.Frame>
          <Bookingbox.Frame>
            <Bookingbox.Duration>a</Bookingbox.Duration>
          </Bookingbox.Frame>
          <Bookingbox.Frame>
            <Bookingbox.ActivityTime>a</Bookingbox.ActivityTime>
          </Bookingbox.Frame>
          <Bookingbox.Frame>
            <Bookingbox.Button></Bookingbox.Button>
          </Bookingbox.Frame>
          <Bookingbox.Frame>
            {">"}
          </Bookingbox.Frame>
        </Bookingbox.Grid>
      </Bookingbox>
    )
}