import React from 'react'
import * as AiIcons from 'react-icons/ai'; // "ai" is to import all the icons starting with ai and so on
import * as RiIcons from 'react-icons/ri';
import * as TiIcons from 'react-icons/ti';

export const SidebarData =[
    {
        title: 'Dashboard',
        path: '/dashboard',
        icon: <AiIcons.AiFillDashboard/>,
        cName: 'nav-text'
    },
    {
        title: 'Charts',
        path: '/chart',
        icon: <AiIcons.AiOutlineBarChart/>,
        cName: 'nav-text'
    },
    {
        title: 'Alerts',
        path: '/alerts',
        icon: <AiIcons.AiOutlineAlert/>,
        cName: 'nav-text'
    },
    {
        title: 'Weather',
        path: '/weather',
        icon: <TiIcons.TiWeatherPartlySunny/>,
        cName: 'nav-text'
    },
    {
        title: 'Account',
        path: '/account',
        icon: <RiIcons.RiAccountCircleLine/>,
        cName: 'nav-text'
    },
    <img src="/components/vclogo.png" alt="" />

];