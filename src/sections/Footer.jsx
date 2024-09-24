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
            className="mt-6 text-textColor-100 leading-7 font-raleway text-white-400 sm:max-w-sm">
            The mouse that you want!
          </p>
          <div className="flex items-center gap-5 mt-8">
            {
              socialMedia.map((item) => {
                return (
                  <div key={item} className="flex justify-center items-center w-12 h-12 bg-white rounded-full cursor-pointer hover:scale-110 transition-normal">
                    <a href={item.link} target="_blank">
                      <img
                        src={item.src}
                        alt={item.alt}
                        width="20px"
                        height="20px"
                      />
                    </a>
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
                    <h4 className="text-white font-raleway text-2xl font-medium leading-normal mb-6">{item.title}</h4>
                    <ul>
                      {item.links.map((link) => {
                        return (
                          <li key={link.name} className="mt-3 text-textColor-100 font-raleway text-base leading-normal hover:text-textColor-200 cursor-pointer">
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
      <div className="flex justify-between text-textColor-100 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-raleway cursor-pointer">
          <img
            src={copyrightSign}
            alt="Copyright"
            width="20px"
            height="20px"
            className="rounded-full m-0"
          />
          <p className="hover:text-textColor-200">Copyright. All rights reserved.</p>
        </div>
        <p className="hover:text-textColor-200">Terms & Conditions</p>
      </div>
    </footer>
  )
}

export default Footer