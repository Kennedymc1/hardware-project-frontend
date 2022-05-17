import React, { useState, useEffect } from 'react';
import Card from '../card';
import PropTypes from 'prop-types'

/**
 * 
 * for child values that are not <DescItem/> include the parameter customcontent with value true 
 * @returns 
 */
const DescriptionList = ({ alt, testid, heading, subHeading, children: childrenParams, invert, mobileFlat, tailwind }) => {
    const [filteredChildren, setFilteredChildren] = useState([])

    let children = childrenParams

    if (typeof childrenParams.length === 'undefined') {
        children = [childrenParams]
    }


    const extractChildren = (children) => {
        let rChildren = []
        let iterations = 0

        const extract = (child) => {
            iterations++
            let foundChildren = false

            child && child.props.children && child.props.children.map(child => {
                foundChildren = true
                extract(child)
            })

            if (!foundChildren && child) {
                rChildren.push(child)
            }

        }


        extract(children)

        return rChildren
    }

    useEffect(() => {

        const fChildren = []
        children.map(child => {
            if (child && (child.props.customContent || child.props.customcontent)) {
                fChildren.push(child)
            } else {
                const extractedChildren = extractChildren(child)
                const validExtractedChildren = extractedChildren.filter(child => {
                    if (child && child.props.content) {
                        return true
                    } else {
                        return false
                    }
                })
                fChildren.push(...validExtractedChildren)
            }
        })

        setFilteredChildren(fChildren)

    }, [children])




    return (
        <div
            data-testid={testid}
            className={`w-full ${tailwind} `}>

            <Card
                shadow
                rounded
                tailwind={`w-full shadow-sm md:shadow-md rounded-lg ${!mobileFlat && 'rounded-lg'}`}
                header={{
                    heading: heading,
                    subHeading: subHeading
                }}
            >


                {
                    filteredChildren.map((child, index) => {
                        let tailwind
                        if (index === (children.length - 1)) {
                            tailwind = 'rounded-b-lg'
                        }
                        let isEven = (alt ? !(index % 2 === 0) : (index % 2 === 0))

                        if (invert) { isEven = !isEven }

                        const params = {
                            key: index,
                            tailwind,
                        }

                        if (!child.props.customContent && !child.props.customcontent) {
                            params.isEven = `${isEven}`
                        } else {
                            params.iseven = `${isEven}`
                        }

                        params.horizontal = 'true'

                        return React.cloneElement(child, params)
                    })
                }
            </Card>

        </div>
    );
};

DescriptionList.defaultProps = {
    /**determines whether the even and odd background colors should  be inverted */
    invert: false,
    /**determines whether to remove the rounded in the mobile view */
    mobileFlat: true,
}

DescriptionList.propTypes = {
    heading: PropTypes.string,
    subHeading: PropTypes.string,

}

export default DescriptionList;