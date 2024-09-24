import { products } from "../constants";
import PopularProductsCard from "../components/PopularProductsCard";

const PopularProducts = () => {
  return (
    <section id="products" className="max-container max-sm:mt-12">
      <div className="flex flex-col justify-start gap-5">
        <h2 className="text-4xl font-palanquin font-bold text-textColor-300">
          <span className="text-primary-300">Popular</span> Products
        </h2>
        <p className="lg:max-w-lg mt-2 font-montserrat text-textColor-200">
          Our gaming mice are built with SensTec technology to offer the most accurate and responsive gameplay experience. Whether you're a competitive esports player or a casual gamer, our selection has something to suit every need.
        </p>
      </div>
      <div className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-4 gap-14">
        {
          products.map((product) => {
            return(
              <PopularProductsCard key={product.name} {...product} />
            )
          })
        }
      </div>
    </section>
  )
}

export default PopularProducts