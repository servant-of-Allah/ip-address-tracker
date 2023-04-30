import React from 'react'

const Popup = ({statusText, setShowPop}) => {

    function handleReload() {
        window.location.reload();
    }

  return (
    <div className='layer'>
        <div className='popup'>
            <p>{statusText}</p>
            <div className='btn-container'>
            <button type='button' className='pop-btn' onClick={() => setShowPop(false)}>
                default
            </button>
            <button type='button' className='pop-btn' onClick={handleReload}>
                reload
            </button>
            </div>
        </div>
    </div>
  )
}

export default Popup
