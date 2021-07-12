import React from "react"
import Select,{ components } from "react-select";

import { Footer } from "../components"

export default function footer(){

    const languages = [
        { label: 'ITA', value: 'ITA' },
      ];

    const customSelectStyles = {

        control: (styles) => ({
              ...styles,
              borderTop: '0px hidden white',
              borderBottom: '1px hidden white',
              borderRight: '0px hidden white',
              borderLeft: '0px hidden white',
              borderRadius: '0px',
              borderColor: 'black !important ',
              boxShadow: 'none',
              width: '70px',
        }),
        indicatorContainer: (styles) => ({
          ...styles,
          color: '#053968'
        }),
        indicatorSeparator: (styles) => ({
          ...styles,
          display: 'none'
        }),
        singleValue: (styles) => ({
          ...styles,
          fontSize: '0.8rem',
          color: '#053968',
          fontWeight: '700'
        }),
        option: (styles) => ({
          ...styles,
          display: 'flex',
          textAlign: 'center', 
          fontSize: '0.8rem',
          color: '#053968',
          fontWeight: 'bold'
        })
    }

    const Option = props => {
        const {data} = props;
        return (
          <components.Option {...props}>
            <Footer.FlagIcon src={process.env.PUBLIC_URL + '/images/footer/italy-flag-icon.png'}/>
            {data.label}
          </components.Option>
        );
    };

    return(
      <Footer>
          <Footer.Frame>
              <Footer.Group width="115px">
                <Footer.InstagramIcon to="#" src={process.env.PUBLIC_URL + '/images/footer/instagram-icon.jpg'} alt="Instagram"/>
                <Footer.FacebookIcon to="#" src={process.env.PUBLIC_URL + '/images/footer/facebook-icon.png'} alt="Facebook"/>
                <Footer.YoutubeIcon to="#" src={process.env.PUBLIC_URL + '/images/footer/youtube-icon.png'} alt="Youtube"/>
              </Footer.Group>
              <Footer.Group width="50px">
                {/*<Footer.FlagIcon src={process.env.PUBLIC_URL + '/images/footer/youtube.svg'} alt="Youtube"/>*/}
                <Select 
                    defaultValue={{ label: "ITA", value: "ITA" }}
                    styles={customSelectStyles} 
                    options={languages} 
                    components={{Option}}
                />
              </Footer.Group>
              <Footer.Group width="115px">
                <Footer.Text>Made by <b>PED</b></Footer.Text>
              </Footer.Group>
          </Footer.Frame>
      </Footer>
    )
}