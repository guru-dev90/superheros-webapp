import React from "react"
import { Header } from "../components"
import * as ROUTES from "../constants/routes"

export default function header(){
    return(
      <Header>
          <Header.Frame>
              <Header.Group>
                <Header.Home to={ROUTES.HOME} src={process.env.PUBLIC_URL + '/images/header/house.svg'} alt="Home"/>
                <Header.Bookings to={ROUTES.BOOKINGS} src={process.env.PUBLIC_URL + '/images/header/calendar.svg'} alt="Bookings"/>
                <Header.Notification src={process.env.PUBLIC_URL + '/images/header/bell.svg'} alt="Notification"/>
                <Header.ProfilePicture src={process.env.PUBLIC_URL + '/images/header/profile-picture.jpg'} alt="Profile Picture"/>
              </Header.Group>
          </Header.Frame>
      </Header>
    )
}