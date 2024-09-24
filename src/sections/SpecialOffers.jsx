import { offer } from "../assets/images";
import Button from "../components/Button";
import ButtonNoHover from "../components/ButtonNoHover";

const SpecialOffers = () => {
  return (
    <section className="flex justify-center items-center max-xl:flex-col-reverse gap-20 max-container">
      <div>
        <img 
          src={offer}
          width="700px"
          height="700px"
          className="object-contain"/>
      </div>

      <div
        className="flex flex-1 flex-col">
          <h2 className="mt-10 font-montserrat text-4xl capitalize font-bold lg:max-w-lg">
            Special Offer <span className="text-primary-300 inline-block text-4xl underline">Now</span>
        </h2>
        <p className="mt-6 lg:max-w-lg leading-8 font-raleway text-xl text-textColor-200">
          Discover the perfect gaming mouse designed to enhance your speed, precision, and comfort. Whether you're a competitive gamer or just looking to improve your setup, we have the right tools to boost your performance.
        </p>
        <div className="flex justify-center flex-wrap gap-4 m-16">
         <Button 
          title="Shop now"
          bgColor="bg-primary-300"
          textColor="text-white"/>

          <ButtonNoHover 
            title="Learn more"
            bgColor="bg-white"
            textColor="text-textColor-300"
          />
        </div>
      </div>

    </section>
  )
}

export default SpecialOffers



