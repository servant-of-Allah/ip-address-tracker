import React from 'react'

const Info = ({info}) => {
  return (
  <div className="info-container">
    
      <div className='info-gap'>
      <div className="info">
        <p>IP ADDRESS</p>
        <h2>{info.ip}</h2>
      </div>
      <span className='line'></span>
      </div>

    <div className='info-gap'>
    <div className="info">
      <p>LOCATION</p>
      <h2>{`${info.location?.city}, ${info.location?.country} ${info.location?.postalCode}`}</h2>
    </div>
    <span className='line'></span>
    </div>

    <div className='info-gap'>
    <div className="info">
      <p>TIME ZONE</p>
      <h2>{`UTC ${info.location?.timezone}`}</h2>
    </div>
    <span className='line'></span>
    </div>

    <div className="info">
      <p>ISP</p>
      <h2>{info.isp ? info.isp : 'N/A'}</h2>
    </div>
  </div>
  )
}

export default Info
