import { arrowRight } from "../assets/icons"
import Button from "../components/Button"
import { statistics, shoes } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard"
import { useState } from "react"

const Hero = () => {

  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className="w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container">
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p className="text-xl font-montserrat text-[#147efb]">Our Summer Collection</p>
        <h1 className="mt-10 font- text-8xl max-sm:text-[72px] font-bold max-sm:leading-[82px]">
          <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
          <br />
          <span className="text-[#147efb] inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14">Explore the latest in Nike fashion, where style meets functionality, offering supreme comfort and cutting-edge innovation for your dynamic lifestyle.</p>
        <Button label="Shop now"
        iconURL={arrowRight}/>

        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="font-bold text-4xl font-palanquin">{stat.value}</p>
              <p className="font-montserrat text-base text-slate-gray leading-7">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
        <img 
        src={bigShoeImg} 
        alt="shoe collection"
        width={810}
        height={500}
        className="object-contain relative z-10" />

        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:left-[5%] max-sm-bottom-[5%] ">
          {shoes.map((shoe) => (
            <div key={shoe}>
              <ShoeCard
              imgURL={shoe}
              changeBigShoeImage=
              {(shoe) => setbigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}/>
            </div> 
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero