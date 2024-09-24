import { copyrightSign, logo } from "../assets/icons";
import { socialMedia } from "../constants";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-center">
          <a href="/">
            <img
              src={logo}
              width="80px"
              height="80px"
              className="object-contain"
            />
          </a>
          <p
            className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
            The mouses for any uses!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((item) => {
                return (
                  <div key={item} className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                    <img
                      src={item.src}
                      alt={item.alt}
                      width="24px"
                      height="24px"
                    />
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {
              footerLinks.map((item) => {
                return (
                  <div key={item}>
                    <h4 className="text-white font-montserrat text-2xl font-medium leading-normal mb-6">{item.title}</h4>
                    <ul>
                      {item.links.map((link) => {
                        return (
                          <li key={link.name} className="mt-3 text-white-400 font-montserrat text-base leading-normal hover:text-slate-gray cursor-pointer">
                            <a>{link.name}</a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                )
              })
            }
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright"
            width="20px"
            height="20px"
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer