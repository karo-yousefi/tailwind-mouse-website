import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  return (
    <section className="max-container">
      <h3
        className="font-montserrat text-center text-4xl font-bold">
        What Our <span className="text-primary-300">Customers</span> Say?</h3>
        <p className="m-auto mt-4 max-w-lg text-center text-textColor-200 text-2xl font-raleway">Hear stories from our customers</p>
        <div
          className="mt-32 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14">
            {reviews.map((review, index) => {
              return (
                <ReviewCard 
                  key={index}
                  imgURL={review.imgURL}
                  customerName={review.customerName}
                  rating={review.rating}
                  feedback={review.feedback}
                />
              )
            })}
        </div>
    </section>
  )
}

export default CustomerReviews