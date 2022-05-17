import React from 'react';
import DescriptionList from '..'
import DescItem from '../desc-item';

const Demo = () => {
    return (
      
         <DescriptionList
         invert
         heading='Application Information'
         subHeading='Personal details and application'
          > 
          <DescItem
          title='Full name'
          content='Margot foster'
           />  
           <DescItem
          title='Application for'
          content='Backend Developer'
           />
           <DescItem
          title='Email address'
          content='afrocoderzm@gmail.com'
           />
           <DescItem
          title='Salary'
          content='$120.000'
           />
           <DescItem
          title='About'
          content={ ` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`}
           />
        </DescriptionList>
    );
};

export default Demo;