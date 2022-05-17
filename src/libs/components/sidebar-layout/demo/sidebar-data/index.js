import React from 'react'
import { ReactComponent as DashboardSVG } from 'templates/sidebar-layout/images/dashboard.svg'
import { ReactComponent as TeamSVG } from 'templates/sidebar-layout/images/team.svg'
import { ReactComponent as ProjectsSVG } from 'templates/sidebar-layout/images/projects.svg'
import { ReactComponent as CalendarSVG } from 'templates/sidebar-layout/images/calendar.svg'
import { ReactComponent as DocumentsSVG } from 'templates/sidebar-layout/images/documents.svg'
import { ReactComponent as ReportsSVG } from 'templates/sidebar-layout/images/reports.svg'

const sidebarData = [
    {
        text: 'Dashboard',
        icon: <DashboardSVG />,
    },
    {
        text: 'Team',
        badgeText: '5',
        icon: <TeamSVG />,

    }, {
        text: 'Projects',
        icon: <ProjectsSVG />,

    }, {
        text: 'Calendar',
        icon: <CalendarSVG />,

    }, {
        text: 'Documents',
        icon: <DocumentsSVG />,
        badgeText: '20+'
    }, {
        text: 'Reports',
        icon: <ReportsSVG />,

    }]

    export default sidebarData;
