import { RiCopyrightFill } from "react-icons/ri";
const Footer = () => {
  return (
    <div>
      <div className="flex flex-row mt-10 pb-2 place-content-center">
        <p className="text-center  text-white text-xs mr-1">
          Created by Elroy Chua Ming Xuan
        </p>
        <RiCopyrightFill className="text-white" />
        <p className="text-center  text-white text-xs ml-1">2023</p>
      </div>
      <div className="pb-10">
        <p className="text-center  text-gray-200 text-xs font-light">
          {`Made with React, NextJS & TailWindCSS. Hosted on Vercel.`}
        </p>
      </div>
    </div>
  );
};

export default Footer;
