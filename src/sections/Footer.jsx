import { copyrightSign } from "../assets/icons"
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants"

const Footer = () => {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} 
            width={150}
            height={46} />
          </a>
          <p className="mt-6 text-base leading-7 font-montserrat text-white-400 sm:max-w-sm">Get shoes ready for the new term at your nearest Nike store. Find Your Perfect Size in Store. Get Rewards.</p>
          <div className="flex items-center gap-5 mt-8 ">
            {socialMedia.map((icon) => (
              <div className="flex items-center justify-center bg-slate-gray p-4 rounded-full hover:bg-white">
                <a target="blank" href={icon.link}>
                <img 
                src={icon.src}
                alt={icon.alt}
                width={24}
                height={24}
                 />
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between flex-1 lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section} className=" mx-5">
              <h4 className="text-white text-2xl font-montserra leading-normal font-mediumt mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link) => (
                    <li className="mt-3 text-base leading-normal font-montserrat text-slate-gray hover:text-white cursor-pointer" key={link.name}><a href={link.href}>{link.name}</a></li>
                  ))}
                </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between max-sm:items-center text-white-400 mt-24 max-sm:flex-col">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat">
          <img 
          src={copyrightSign} 
          alt="copy right"
          width={20}
          height={20}
          className=" rounded-full m-0 " />
          <p className="text-slate-gray">2023 Nike, Inc. All Rights Reserved</p>
        </div>
        <a target="_blank" href="https://agreementservice.svs.nike.com/bg/en_gb/rest/agreement?agreementType=termsOfUse&uxId=com.nike.unite&country=BG&language=en&requestType=redirect"><p className="font-montserrat cursor-pointer text-slate-gray hover:text-white">Terms & Conditions</p></a>
      </div>
    </footer>
  )
}

export default Footer