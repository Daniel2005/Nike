import React, { useState, useEffect } from 'react';
import { star } from '../assets/icons';
import { logo } from '../assets/images';
import {useMotionValue, useTransform, motion} from 'framer-motion';


const PopularProductCard = ({ imgURL, name, price, imgCard }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [30, -30]);

  const colors = [
    {value: '#b6a179'},
    {value: '#272425'},
    {value: '#6389cb'},
    {value: '#f2c758'},
  ]

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [isModalOpen]);

  return (
    <div className="flex flex-1 flex-col w-full max-sm:w-full">
      <img
        src={imgURL}
        alt={name}
        className="w-full h-auto max-w-full hover:-translate-y-3 transition duration-300 ease-in-out delay-100 cursor-pointer"
        onClick={openModal}
      />
      <div className="mt-8 flex justify-start gap-2.5">
        <img src={star} alt="rating" width={24} height={24} />
        <p className="leading-normal text-slate-gray text-xl font-montserrat">(4.5)</p>
      </div>
      <h3 className="mt-2 text-2xl font-semibold leading-normal font-palanquin">{name}</h3>
      <p className="mt-2 text-2xl text-[#147efb] font-semibold font-montserrat leading-normal">{price}</p>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-slate-gray bg-opacity-75 z-[100]">
          <div className="w-full bg-transparent h-full flex items-center justify-center max-sm:mr-10" style={{perspective: 2000 }}>
            <motion.div 
            style={{x, y, rotateX, rotateY, z: 100}} 
            drag
            dragElastic={0.18}
            dragConstraints={{top: 0, left: 0, right:0, bottom: 0}}
            whileTap={{cursor: 'grabbing'}}
            className='w-[426px] max-sm:w-[260px] min-h-[500px] max-sm:min-h-[350px] bg-[#e7dcd6] relative rounded-[30px] border-[4px] border-white px-[40px] py-[24px] max-sm:px-5 cursor-grab'>
              <button
              className="absolute text-2xl bg-transparent text-black rounded-full -top-3 -right-3 w-[30px] cursor-pointer z-50"
              onClick={closeModal}
            >
              <i class="fas fa-window-close text-[30px]"></i>
            </button>
            <div className='mb-6 max-sm:mb-3'>
              <img src={logo} alt="" />
            </div>
            <h1 className='text-4xl max-sm:text-lg mb-6 max-sm:mb-4 font-extrabold max-sm:max-w-[150px]'>{name} Pre-day</h1>
            <p className='max-w-[300px] max-sm:text-sm text-[#000000] mb-6 max-sm:mb-3'>
              Taking the classic look into new realm
            </p>
            <div className='flex items-center gap-x-[20px] mb-12 max-sm:mb-6'>
              <button className='bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] max-sm:py-2 max-sm:px-2 rounded-lg'>Add to Bag</button>
              <div className='text-[24px] max-sm:text-[16px] font-bold text-[#000000]'>{price}</div>
            </div>
            <ul className='flex gap-x-[10px]'>
              {colors.map((color, index) => (
                <li 
                key={index} 
                style={{backgroundColor: color.value}} 
                className='w-8 h-8 max-sm:w-6 max-sm:h-6 rounded-full cursor-pointer'
                ></li>
              ))}
            </ul>
            <motion.div 
            style={{x, y, rotateX, rotateY, z: 100000}}
            className='absolute top-12 -right-[210px] w-[570px] mt-[105px] max-sm:w-[280px] max-sm:-right-[90px] max-sm:mt-[90px]'>
              <img src={imgCard} alt="" draggable="false" className='-rotate-45'/>
            </motion.div>
            </motion.div>

          </div>

        </div>
      )}
    </div>
  );
};

export default PopularProductCard;