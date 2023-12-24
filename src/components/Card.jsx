const Card = ({ img, projectType, desc, url, urlType, Icon  }) => {
  return (
    <div className="rounded-xl border-gray-200 shadow h-[470px]">
      <div className="w-full h-[310px]">
          <img src={img} alt={projectType} className="w-full h-full object-cover 
                                                     object-top rounded-t-xl" />
      </div>
      <div className="px-4 py-8">
          <p className="mb-4">{ desc }</p>

          <button type="button" className='bg-black text-white 
                                            px-4 py-3 rounded-md mb-4
                                            transition-all active:scale-95'
          >
            <a href={url} target="_blink" rel="noreferrer" className="flex items-center">
              <Icon className="mr-3" /> {urlType}
            </a>
          </button>
      </div>
  </div>
  )
}

export default Card