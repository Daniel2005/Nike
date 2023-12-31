const ShoeCard = ({imgURL, changeBigShoeImage, bigShoeImg}) => {
  const handleClick = () => {
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe);
    }
  };

  return (
    <div
      className={`
    border-2 rounded-xl
    ${
      bigShoeImg === imgURL.bigShoe ? "border-[#147efb]" : "border-transparent"
    } cursor-pointer max-sm:flex-1
    `}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:h-40 w-40 rounded-xl max-sm:p-4 max-[485px]:w-[100px] min-[486px]:w-[140px] max-[640px]:w-[140px]">
        <img
          src={imgURL.thumbnail}
          alt="shoe collection"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
