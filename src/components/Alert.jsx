
const Alert = ({ success, setSuccess, FaCheckCircle, RxCross2,  }) => {
  return (
    <div className={`flex items-center p-4  ${success? "mb-4 mr-3 translate-x-0" : "mr-0 translate-x-full"} transition-all
                     text-green-600 rounded-lg bg-blue-50 w-max
                     fixed bottom-0 right-0`} 
            role="alert"
      >
          <div className="flex items-center mr-5">
            <FaCheckCircle size={24} />
            <p className="ml-3">
              Thanks for contacting me!
            </p>
          </div>

          <RxCross2 size={24} 
                    className="cursor-pointer"
                    onClick={() => setSuccess(false)} />
    </div>
  )
}

export default Alert