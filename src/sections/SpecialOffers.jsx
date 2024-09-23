import { offer } from "../assets/images";
import Button from "../components/Button";

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
      <div>
        <img 
          src={offer}
          width="773px"
          height="678px"
          className="object-contain w-full"/>
      </div>

      <div
        className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            Special Offer <span className="text-red-600 inline-block text-4xl">Now</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam dolorem porro voluptatem fugiat ipsa et nesciunt, omnis natus, necessitatibus nobis non, temporibus eius quisquam. Eum magni a maxime explicabo?
        </p>
        <div className="flex flex-wrap gap-4 m-16">
         <Button 
          title="Shop now"
          bgColor="bg-red-600"
          textColor="text-white"/>
          <Button 
          title="Learn more"
          bgColor="bg-white"
          textColor="text-slate-700"/>
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers



