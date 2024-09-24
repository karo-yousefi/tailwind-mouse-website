import Button from "../components/Button";
import { mouse8 } from "../assets/images";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 max-container w-full">
      <div
        className="flex flex-1 flex-col">
          <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
            The Best Quality
          <span className="text-red-600 inline-block text-8xl">Mouses</span>
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam numquam dolorem porro voluptatem fugiat ipsa et nesciunt, omnis natus, necessitatibus nobis non, temporibus eius quisquam. Eum magni a maxime explicabo?
        </p>
        <div className="m-16">
         <Button 
          title="View details"
          bgColor="bg-red-600"
          textColor="text-white"/>
        </div>
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img
          src={mouse8}
          width="570"
          height="522"
          className="object-contain"
        />
      </div>
    </section>
  )
}

export default SuperQuality