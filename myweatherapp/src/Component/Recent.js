import React from 'react'

export default function Recent(props) {
    let data;
    console.log(props.recent);
    if(props.recent==null){
        data=""
    }
    else{
        data = props.recent.map(
            (recentData, id)=>{
                return <li key={id}>{recentData.city}</li>
            }
        )
    }
    return (
        <div className='recent-box'>
            <h3>recent</h3>
            <ul className='list-unstyled'>
               {data}
            </ul>
        </div>
    )
}
