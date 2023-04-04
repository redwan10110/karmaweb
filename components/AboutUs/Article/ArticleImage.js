import Image from "next/image";
import articleImage from "/public/assets/ArticleImage.png";

const ArticleImage = () => {
  return (
    <div>
      <div className="px-[25px] xl:px-[95px] py-[60px]">
        <Image src={articleImage} className="w-full"></Image>
      </div>
    </div>
  );
};

export default ArticleImage;
