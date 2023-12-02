import { shoe8 } from "../assets/images"
import Button from "../components/Button"

const SuperQuality = () => {
  return (
    <section 
    id="about-us"
    className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
      <div className="flex flex-1 flex-col">
        <h2 className="mt-10 font-palanquin text-4xl capitalize font-bold lg:max-w-lg">
          We Provide You 
          <span className="text-[#147efb]"> Super </span> 
           <span className="text-[#147efb]">Quality</span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">Delivering an unparalleled blend of comfort and style, our intricately designed footwear is meticulously crafted to enhance your every step. Immerse yourself in a realm of superior quality, innovation, and a dash of sophistication.</p>
        <p className="mt-6 lg:max-w-lg info-text">Our unwavering commitment to precision and perfection guarantees your utmost satisfaction.</p>
        <div className="mt-11">
          <Button label="View details"/>
        </div>
      </div>

      <div className="flex flex-1 justify-center items-center">
        <img 
        src={shoe8} 
        alt="shoe8"
        width={570}
        height={522}
        className="object-contain shadow-2xl shadow-zinc-400 hover:-translate-y-2 transition duration-300 ease-in-out delay-100" />
      </div>
    </section>
  )
}

export default SuperQuality