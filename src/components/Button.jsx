import React from 'react'

const Button = ({ url, urlType, Icon }) => {
  return (
    <button type="button" className='bg-black text-white mr-3
                                            px-4 py-3 rounded-md mb-4
                                            transition-all active:scale-95'
          >
            <a href={url} target="_blink" rel="noreferrer" className="flex items-center">
              <Icon className="mr-3" /> {urlType}
            </a>
    </button>
  )
}

export default Button