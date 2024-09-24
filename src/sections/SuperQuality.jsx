import Button from "../components/Button";
import { mouse5NoBG } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container w-full">
      <div
        className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg text-textColor-300">
            The Best Quality
          <span className="text-primary-300 inline-block text-8xl">Mouses</span>
        </h2>
        <p className="mt-10 leading-7 lg:max-w-lg text-textColor-200 text-xl">
        Here, we take pride in the quality and craftsmanship of our gaming mice. Every mouse we offer is built with the highest-grade materials and cutting-edge technology to ensure performance, durability, and comfort for years to come.
        </p>
        <div className="m-16">
         <Button 
          title="View details"
          bgColor="bg-primary-300"
          textColor="text-white"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={mouse5NoBG}
          width="1000px"
          height="1000px"
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality