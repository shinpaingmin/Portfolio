const ProgressBar = ({ width }) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`bg-blue-600 h-2.5 rounded-full ${width}`}></div>
    </div>
  )
}

export default ProgressBar