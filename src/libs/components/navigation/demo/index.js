import React, { useState } from 'react';
import Navigation from '..';
import NavItem from '../navitem';
import { ReactComponent as SettingsSVG } from './images/settings.svg'
import { ReactComponent as ArchiveSVG } from './images/archive.svg'
import { ReactComponent as AnnotationsSVG } from './images/annotation.svg'
import SecondaryNav from '../secondary-nav';
import SecondaryNavItem from '../secondary-nav/secondary-nav-item';

const navData = [
    {
        id: 0,
        title: 'dashboard',
        badge: '20+',
        icon: <ArchiveSVG />,
    },
    {
        id: 1,
        title: 'team',
        icon: <SettingsSVG />,

    }, {
        id: 2,
        title: 'projects',
        icon: <AnnotationsSVG />,

    }, {
        id: 3,
        title: 'calendar',
        icon: <SettingsSVG />,

    }, {
        id: 4,
        title: 'documents',
        icon: <ArchiveSVG />,
        badge: '5'
    }, {
        id: 5,
        title: 'reports',
        icon: <AnnotationsSVG />,

    }]

const secondaryNavData = [
    {
        id: 6,
        title: 'Website redesign',
        badge: '20+',
    },
    {
        id: 7,
        title: 'GraphQL API',

    }, {
        id: 8,
        title: 'Customer migration guides',

    }, {
        id: 9,
        title: 'Profit sharing program',

    }]

const Demo = () => {
    const [selectedId, setSelectedId] = useState()
    return (
        <div className='w-full min-h-full flex flex-col justify-evenly items-center'>
            <Navigation>
                {
                    navData.map(({ title, badge, icon, id }, index) => (
                        <NavItem
                            icon={icon}
                            badge={badge}
                            isSelected={selectedId === id}
                            onClick={() => setSelectedId(id)}>{title}</NavItem>
                    ))

                }
            </Navigation>

            <div className='h-px w-full bg-gray-800 my-6' />

            <Navigation>
                {
                    navData.map(({ title }, index) => (
                        <NavItem
                            isSelected={index === selectedId}
                            onClick={() => setSelectedId(index)}>{title}</NavItem>
                    ))

                }
            </Navigation>

            <div className='h-px w-full bg-gray-800 my-6' />

            <Navigation tailwind='mb-12'>
                {
                    navData.map(({ title, badge, icon, id }, index) => (
                        <NavItem
                            icon={icon}
                            badge={badge}
                            isSelected={selectedId === id}
                            onClick={() => setSelectedId(id)}>{title}</NavItem>
                    ))
                }

                <SecondaryNav title='projects'>
                    {
                        secondaryNavData.map(({title,id}) => (
                            <SecondaryNavItem
                            isSelected={id===selectedId}
                        onClick={() => setSelectedId(id)}>{title}</SecondaryNavItem>
                        ))
                    }
                </SecondaryNav>
            </Navigation>


        </div>
    );
};

export default Demo;