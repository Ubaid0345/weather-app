import React from 'react'

export default function Search(props) {
    return (
        <div className='container pt-4' style={{ height: '500px' }}>
            <div className='col-lg-5'>
                <div className='form-group'>
                    <albel htmlFor=''>type city name</albel>
                    <input 
                    type='text' 
                    className='form-control' 
                    name='city' 
                    id='city'
                    value={props.city}
                    onChange={props.change} 
                    aria-aria-describedby='helpId' 
                    placeholder='' />
                </div>
                <div className='col-lg-1 text-center'>
                    <label htmlFor=''></label>
                    <h5>Or</h5>
                </div>
                <div className='col-lg-5'>
                    <div className='form-group'>
                        <label htmlFor=''>get co ordinate</label>
                        <button className='btn fa fa-crosshairs' onClick={props.getLocation}></button>
                        <div className='row'>
                            <div className='bg-dark text-white rounded pt-1 pl-1 pr-1'>lat:</div>
                            <input 
                            type='number' 
                            step='any' 
                            className='form-control col mr-1' 
                            value={props.lat}
                            onChange={props.change}
                            name='lat' 
                            id='lat' 
                            aria-describedby='helpId' 
                            placeholder='' />
                            <div className='bg-dark text-white rounded pt-1 pl-1 pr-1' >lon:</div>
                            <input
                            type='number'
                            step='any' 
                            className='form-control col mr-1' 
                            value={props.lon}
                            onChange={props.change}
                            name='lon' 
                            id='lon' 
                            aria-describedby='helpId' 
                            placeholder='' />
                        </div>
                    </div>
                </div>
                <div>
                    <label htmlFor='col-lg-1'>search</label>
                    <button className='btn btn-primary fa fa-search' onClick={props.search}></button>
                </div>
            </div>
        </div>
    )
}
