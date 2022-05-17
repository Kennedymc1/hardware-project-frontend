import React from 'react';
import Text from '../../text';
import Container from '../../container';
import Button from '../../button';
import PropTypes from 'prop-types'

const CTA = ({ onSecondaryButtonClicked, onPrimaryButtonClicked,
    primaryButtonText, secondaryButtonText, showSecondaryButton,content,title }) => {
    return (
        // <Container tailwind='flex items-center flex-col w-full'>
        //     <Text type='heading-medium'>{title}</Text>
        //     <Text
        //         tailwind=' -mt-4'
        //         type='heading-medium'>{content}</Text>
        //
        //     <div className='flex my-8 flex-col md:flex-row justify-stretch md:justify-center w-full'>
        //         <Button
        //             onClick={onPrimaryButtonClicked}
        //             tailwind='m-2'>{primaryButtonText}</Button>
        //
        //         {showSecondaryButton &&
        //             <Button
        //                 color
        //                 tailwind='text-indigo-600 m-2'
        //                 onClick={onSecondaryButtonClicked}
        //                 variant='secondary'>{secondaryButtonText}</Button>
        //         }
        //     </div>
        // </Container>

      <div className="bg-gray-900">
          <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
              <h2
                className="text-3xl leading-9 font-extrabold tracking-tight text-white sm:text-4xl sm:leading-10">
                  {title}
                  <br/>
                  <span className="text-indigo-600">{content}</span>
              </h2>
              <div className="mt-8 flex lg:flex-shrink-0 lg:mt-0">
                  <div className="inline-flex rounded-md shadow">
                      <a onClick={onPrimaryButtonClicked}
                        // href="#"
                         className="cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                          {primaryButtonText}
                      </a>
                  </div>
                  {/* <div className="ml-3 inline-flex rounded-md shadow">
                      {showSecondaryButton &&
                      <a onClick={onSecondaryButtonClicked}
                        // href="#"
                         className="cursor-pointer inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-indigo-600 bg-white hover:text-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                          {secondaryButtonText}
                      </a>
                      }
                  </div> */}
              </div>
          </div>
      </div>

);
};

CTA.defaultProps = {
    // primaryButtonText: 'Get Refmonkey',
    primaryButtonText: 'Get Refmonkey',
    secondaryButtonText: 'Learn more',
    showSecondaryButton: true,

    // content: 'Start you free trial today',
    // title:'Ready to dive in?'
}
CTA.propTypes = {
    onPrimaryButtonClicked: PropTypes.func,
    onSecondaryButtonClicked: PropTypes.func,

}

export default CTA;
