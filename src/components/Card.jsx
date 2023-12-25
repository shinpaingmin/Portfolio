import Button from "./Button"

const Card = ({ img, projectType, desc, url1, 
                urlType1, Icon1, url2, urlType2, Icon2  }) => {
  return (
    <div className="rounded-xl border-gray-200 shadow h-[450px] md:h-[470px]">
      <div className="w-full h-[240px] md:h-[310px]">
          <img src={img} alt={projectType} className="w-full h-full object-cover 
                                                     object-top rounded-t-xl" />
      </div>
      <div className="px-4 py-8">
          <p className="mb-4">{ desc }</p>

          <Button url={url1} urlType={urlType1} Icon={Icon1} />

          {
            url2 && <Button url={url2} urlType={urlType2} Icon={Icon2} />
          }
      </div>
  </div>
  )
}

export default Card