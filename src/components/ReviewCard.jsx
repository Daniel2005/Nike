import { star } from "../assets/icons"

const ReviewCard = ({imgURL, feedback, rating, customerName}) => {
  return (
    <div className="flex justify-center items-center flex-col">
      <img 
      src={imgURL}
      alt="customer" 
      width={120}
      height={120}
      className=" rounded-full object-cover"/>
      <p className="info-text m-auto mt-6 max-w-sm text-center">{feedback}</p>
      <div className="flex mx-4 justify-center items-center gap-2.5 mt-3">
      <img src={star} alt="rating" width={24} height={24} />
        <p className="text-xl text-slate-gray font-montserrat">({rating})</p>
      </div>
      <h3 className=" text-2xl text-center font-bold font-montserrat mt-3">{customerName}</h3>
    </div>
  )
}

export default ReviewCard