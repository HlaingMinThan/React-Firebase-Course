import React from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../../components/Navbar';
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './styles.css'
import useTheme from '../../hooks/useTheme';

export default function Layout() {

    const location = useLocation();

    let { isDark } = useTheme();

    return (
        <div className={isDark ? 'bg-dbg' : 'bg-white'}>
            <Navbar />
            <SwitchTransition>
                <CSSTransition timeout={200} classNames='fade' key={location.pathname}>
                    <div className=' max-w-6xl mx-auto p-3'>
                        <Outlet />
                    </div>
                </CSSTransition>
            </SwitchTransition>

        </div>
    )
}
