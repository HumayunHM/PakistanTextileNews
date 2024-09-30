import React from 'react'

const Copyright = () => {
  return (
        <div className="bg-darkblue text-white py-1 text-center">
          <p className="font-inter text-xs"> Copyright
            &copy; {new Date().getFullYear()} Pakistan Textile News, All Rights Reserved
          </p>
        </div>
      );
}

export default Copyright