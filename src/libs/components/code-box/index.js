import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import GrayCode from './gray-code'
import IconButton from 'libs/components/iconbutton'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import Notification from 'libs/components/notification'
import Tab from 'libs/components/tab'
import { ClipboardCopyIcon } from '@heroicons/react/outline';

const Wrapper = styled.div`
 background-color: #f5f5f5;
    border: 1px solid #ccc;
   
    padding: 9.5px;
    overflow-x: scroll;
    max-width: 100%;
    margin: 0 0 10px;
    box-sizing: inherit;
`
const Text = styled.pre`
    display: block;
    font-size: 13px;
    line-height: 1.42857143;
    color: #333;
    word-break: break-all; 
    font-family: monospace,monospace;
    white-space: pre;    
    font-weight: 400;
    font-kerning: normal;
    font-feature-settings: "kern", "liga", "clig", "calt";
    font-stretch: normal;
    font: 87.5%/1.6 'Open Sans','Helvetica',sans-serif;
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
`

const CodeBox = ({ children, tailwind, className, script, showCopy, copyText, tabs, onTabSelected }) => {
    const [showCopied, setShowCopied] = useState(false)
    const [tabSelectedIndex, setTabSelectedIndex] = useState(0)
    const [showScript, setShowScript] = useState(script)
    const [textToCopy, setTextToCopy] = useState(copyText)
    const [text, setText] = useState(children)


    useEffect(() => {
        setTextToCopy(copyText)
    }, [copyText])

    useEffect(() => {
        if (!tabs) {
            setText(children)
        }
    }, [children])

    useEffect(() => {
        if (tabs) {
            const tab = tabs[tabSelectedIndex]
            setShowScript(tab.script !== 'undefined' ? tab.script : script)
            setTextToCopy(tab.copyText !== 'undefined' ? tab.copyText : copyText)
            setText(tab.text !== 'undefined' ? tab.code : children)
        }

        onTabSelected && onTabSelected(tabSelectedIndex)
    }, [tabSelectedIndex])


    /**
     * 
     */
    const getCopyString = () => {
        let cText = textToCopy ? textToCopy : text

        if(cText && (cText.constructor === Array)){
            cText = cText.join('')
        }

        const str = (`
                        <script type="text/javascript">
                            ${cText}
                        </script>
                        `).toString()

        console.log(str)
        console.log({textToCopy})
        console.log({text})

        return str

    }

    return (
        <div>
            {tabs &&

                < div className='flex w-full border border-gray-300 rounded-t-md'>
                    {tabs.map(({ title }, index) => (
                        <Tab
                            id={index}
                            variant='underline'
                            onClick={() => {
                                setTabSelectedIndex(index)
                            }}
                            isSelected={index === tabSelectedIndex}
                        >{title}</Tab>
                    ))}
                </div>

            }

            <div className='relative'>

                <Wrapper
                    className={`relative z-0 ${tabs ? 'rounded-b-md' : 'rounded-md'}`}>
                    {showScript && <GrayCode>{`<script type="text/javascript">`}</GrayCode>}
                    <Text
                        tailwind={tailwind}
                        className={className}
                    >{text}</Text>
                    {showScript && <GrayCode>{`</script>`}</GrayCode>}

                </Wrapper>

                <Notification
                    showDismiss={false}
                    timeoutMillis={2500}
                    isShown={showCopied}
                    title='copied!'
                    tailwind='z-20'
                    onCloseComplete={() => setShowCopied(false)}
                />

                {
                    //todo remove the false when the comma issue gets fixed
                    showCopy &&
                    <div className='absolute top-0 right-0 z-10'>
                        <CopyToClipboard
                            onCopy={() => setShowCopied(true)}
                            text={showScript ?
                                getCopyString()
                                :
                                (textToCopy ? textToCopy : text)
                            }>

                            <IconButton
                                round={false}
                                tailwind='m-2'
                                src={<ClipboardCopyIcon />}
                            />
                        </CopyToClipboard>
                    </div>
                }
            </div >
        </div>
    );
};

CodeBox.defaultProps = {
    showCopy: true,
    script: false
};

CodeBox.propTypes = {
    script: PropTypes.bool,
    copyText: PropTypes.bool,
    tabs: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        code: PropTypes.object,
        script: PropTypes.bool,
        copyText: PropTypes.string,
    }))
};
export default CodeBox;