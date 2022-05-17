import React from 'react';
import styled from 'styled-components'
import Avatar from 'libs/components/avatar'

const src = 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

const Demo = () => {
    const avatar = 'mx-6'
    const wrapper = 'flex items-center'

    return (
        <div className='bg-gray-100 min-h-screen flex flex-col items-center justify-evenly'>
            <div className={`${wrapper} `}>
                <Avatar
                className={avatar}
                    src={src}
                    size='small'
                    variant='rounded'

                />

                <Avatar
                className={avatar}
                    src={src}
                    size='medium'
                    variant='rounded'

                />
                <Avatar
                className={avatar}
                    src={src}
                    size='large'
                    variant='rounded'

                />
            </div>
            <div className={wrapper}>
                <Avatar
                className={avatar}
                    src={src}
                    size='small'

                />

                <Avatar
                className={avatar}
                    src={src}
                    size='medium'

                />
                <Avatar
                className={avatar}
                    src={src}
                    size='large'

                />
            </div>

            
            <div className={wrapper}>
                    <Avatar
                        stacked={true}
                        src={src}
                        size='small'

                    />

                    <Avatar
                        stacked={true}
                        src={src}
                        size='small'

                    />
                    <Avatar
                        stacked={true}
                        src={src}
                        size='small'

                    />
                </div>
                <div className={wrapper}>
                    <Avatar
                        stacked={true}
                        src={src}
                        size='medium'

                    />

                    <Avatar
                        stacked={true}
                        src={src}
                        size='medium'

                    />
                    <Avatar
                        stacked={true}
                        src={src}
                        size='medium'

                    />
                </div>
                <div className={wrapper}>
                    <Avatar
                        stacked={true}
                        src={src}
                        size='large'

                    />

                    <Avatar
                        stacked={true}
                        src={src}
                        size='large'

                    />
                    <Avatar
                        stacked={true}
                        src={src}
                        size='large'

                    />
                </div>

        </div>
    );
};

export default Demo;