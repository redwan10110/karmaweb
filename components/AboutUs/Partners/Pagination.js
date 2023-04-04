const Pagination = () => {
  return (
    <div className="hidden lg:block">
      <div className=" flex items-center justify-center py-[100px]">
        <div className="flex gap-4">
            <button className=" bg-primary text-secondary text-[21px] leading-[32px] font-bold w-[64px] h-[64px] flex items-center justify-center rounded-full">
            1
            </button>
            <div className=" bg-[#6533FF0F] text-primary text-[21px] leading-[32px] font-bold w-[64px] h-[64px] flex items-center justify-center rounded-full">
            2
            </div>
            <div className=" bg-[#6533FF0F] text-primary text-[21px] leading-[32px] font-bold w-[64px] h-[64px] flex items-center justify-center rounded-full">
            3
            </div>
            <div className=" bg-[#6533FF0F] text-primary text-[21px] leading-[32px] font-bold w-[64px] h-[64px] flex items-center justify-center rounded-full">
            4
            </div>
            <div className=" bg-[#6533FF0F] text-primary text-[21px] leading-[32px] font-bold w-[64px] h-[64px] flex items-center justify-center rounded-full">
            5
            </div>
            <div className=" bg-[#6533FF0F] text-primary text-[21px] leading-[32px] font-bold w-[64px] h-[64px] flex items-center justify-center rounded-full">
            {">"}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
