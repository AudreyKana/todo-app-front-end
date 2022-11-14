import React from 'react'
import "./meetingItem.css";

export default function MeetingItem({meeting}) {
  return (
    <div className="w-full h-full rounded-2xl" style={{backgroundColor:meeting.color}}>
      <h6 className="text-xsm p-2 mx-2.5 font-normal">{meeting.Time}</h6>
      <h5 className="text-base font-semibold p-2 mx-2">{meeting.Title}</h5>
      <h2 className='h2'>{meeting.Image.map((img, index)=> <img src={img} key={index} width="25" style={{borderRadius: "50%"}}/>)}</h2>
    </div>
  )
}


