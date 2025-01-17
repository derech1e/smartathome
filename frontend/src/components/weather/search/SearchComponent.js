import React, {useContext} from 'react'
import {ThemeContext} from '../../../context/ThemeContext'
import {FiSearch} from 'react-icons/fi'
import {IoIosArrowDown, IoIosArrowUp} from 'react-icons/io'

const IconComponent = ({type, color}) => {
    const TYPES = {
        search: <FiSearch/>,
        up: <IoIosArrowUp/>,
        down: <IoIosArrowDown/>,
    }
    return <p className={`opacity-75 text-2xl fill-${color}`}>{TYPES[type]}</p>
}

export default (props) => {
    const {theme, colorTheme} = useContext(ThemeContext)

    return (
        <div className='h-12 mx-5 mt-5'>
            <div className='relative'>
                <div className='absolute top-0 left-0 ml-5 mt-3'>
                    <IconComponent type='search' color={colorTheme}/>
                </div>
                <input
                    style={{
                        backgroundColor: `${theme === 'dark' ? '#3a3a3a' : '#e2e8f0'}`,
                        letterSpacing: '0.05em',
                    }}
                    className={`data-hj-whitelist block appearance-none w-full border-none rounded-full shadow py-3 pl-12 pr-6 mb-3 leading-tight focus:outline-none focus:bg-gray-200 truncate placeholder-gray-500 text-${colorTheme}`}
                    id='grid-first-name'
                    type='text'
                    placeholder='Stadtname oder PLZ eingeben'
                    onChange={props.citySearch}
                    onKeyDown={props.keyPressed}
                    tabIndex='0'
                    value={props.city}
                />
                {props.showCaret ? (
                    <div
                        className='flex right-0 absolute top-0 mr-4 mt-3 cursor-pointer'
                        onClick={props.caretClicked}>
                        {props.showAddresses ? (<IconComponent type='up' color={colorTheme}/>) :
                            (<IconComponent type='down' color={colorTheme}/>)}
                    </div>
                ) : null}
            </div>
        </div>
    )
}
