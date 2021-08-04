import React from "react"
import { Header } from "../components"

export default function HeaderContainer(){
    return(
      <Header>
          <Header.Frame>
              <Header.Logo src={process.env.PUBLIC_URL + '/images/assets/logo/logo.svg'} alt="Logo"/>
          </Header.Frame>
      </Header>
    )
}