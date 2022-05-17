import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../iconbutton';
import { ReactComponent as TwitterSVG } from './images/twitter.svg'
import { ReactComponent as FacebookSVG } from './images/facebook.svg'
import { ReactComponent as YoutubeSVG } from './images/youtube.svg'
import { ReactComponent as InstagramSVG } from './images/instagram.svg'
import { Link } from 'react-router-dom'
import Text from '../text'
import Button from '../button';
import { useHistory } from 'react-router-dom';

const Footer = ({ madeBy, text, facebook, instagram, twitter, youtube, tailwind,
    className, variant, feedbackUrl, privacyPolicyPath, tosPath, affiliatePath }) => {

    const history = useHistory()

    const isDarkVariant = variant === 'dark'

    const iconsStyle = `mx-2 text-gray-600 ${isDarkVariant ? 'hover:bg-gray-700' : 'hover:bg-gray-300'}`

    const navigate = (url) => {
        window.location.href = url
    }


    return (
        <div className={`w-full p-8 ${isDarkVariant ? 'bg-gray-800' : 'bg-white'}
        border-t border-gray-300 ${tailwind} ${className}`}>
            {affiliatePath &&
                <Text
                    color
                    size='text-small'
                    tailwind='text-gray-600'
                >Our <a href={affiliatePath} className='underline text-white'>Referral Program</a></Text>
            }

            {feedbackUrl &&
                <Text
                    color
                    size='text-small'
                    tailwind='text-gray-600'
                >Give us <a href={feedbackUrl} className='underline text-white'>Feedback</a></Text>
            }
            
            {madeBy &&
                <Text
                    size='text-small'
                >100% Remote and Bootstrapped. by <a className='underline' href={madeBy.url}>{madeBy.handle}</a></Text>
            }

            <div className={`w-full flex-col-reverse justify-center items-center
        flex md:justify-between md:flex-row `}>
                <Text>
                    {text}
                </Text>

                <div className='flex mb-8 md:mb-0'>
                    {typeof twitter !== 'undefined' &&
                        <IconButton
                            hover
                            onClick={() => navigate(twitter)}
                            color
                            tailwind={iconsStyle}
                            hasBackground={false}
                            src={<TwitterSVG />}
                        />
                    }
                    {typeof facebook !== 'undefined' &&
                        <IconButton
                            color
                            hover
                            onClick={() => navigate(facebook)}
                            tailwind={iconsStyle}
                            hasBackground={false}
                            src={<FacebookSVG />}
                        />
                    }
                    {typeof youtube !== 'undefined' &&
                        <IconButton
                            color
                            hover
                            onClick={() => navigate(youtube)}
                            tailwind={iconsStyle}
                            hasBackground={false}
                            src={<YoutubeSVG />}
                        />
                    }
                    {typeof instagram !== 'undefined' &&
                        <IconButton
                            color
                            hover
                            onClick={() => navigate(instagram)}
                            tailwind={iconsStyle}
                            hasBackground={false}
                            src={<InstagramSVG />}
                        />
                    }
                </div>

            </div>

            <div className='w-full flex justify-center'>
                {tosPath && privacyPolicyPath &&
                    <>
                        <Button
                            onClick={() => history.push(privacyPolicyPath)}
                            size='small'
                            variant='text'
                        >Privacy Policy</Button>

                        <Button
                            onClick={() => history.push(tosPath)}
                            size='small'
                            variant='text'
                        >Terms of Service</Button>
                    </>
                }
            </div>
        </div>
    );
};

Footer.defaultProps = {
    text: '© 2021 Workflow. All rights reserved.',
    variant: 'light'


}
Footer.propTypes = {
    facebook: PropTypes.string,
    instagram: PropTypes.string,
    twitter: PropTypes.string,
    youtube: PropTypes.string,
    madeBy: PropTypes.shape({
        handle: PropTypes.string,
        url: PropTypes.string,
    }),

    variant: PropTypes.oneOf(['dark', 'light']),
    privacyPolicyPath: PropTypes.string,
    tosPath: PropTypes.string,
    feedbackUrl: PropTypes.string,

};

export default Footer;