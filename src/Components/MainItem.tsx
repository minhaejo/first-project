import React from "react";
import { ImgData } from "./Main";

interface Props {
  data: ImgData;
}
const MainItem: React.FC<Props> = ({ data }) => {
  const { imgUrl, subTitle, paragraph } = data;
  console.log(imgUrl);
  return (
    <div>
      <li>
        <div>
          <img src={imgUrl} alt="" />
        </div>
        <strong>{subTitle}</strong>
        <p>{paragraph}</p>
      </li>
    </div>
  );
};

export default MainItem;
