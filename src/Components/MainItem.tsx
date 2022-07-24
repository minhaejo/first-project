import React from "react";
import { ImgData } from "./Main";
import "./MainItem.css";

interface Props {
  data: ImgData;
}

const MainItem: React.FC<Props> = ({ data }) => {
  const { imgUrl, paragraph, representative } = data;

  console.log(imgUrl);
  return (
    <div className="main_item_container">
      <li className="main_item_box_container>">
        <div>
          <img className="main_slider_img" src={imgUrl} alt="" />
        </div>
        {paragraph.split("\n").map((line) => {
          return (
            <p>
              {line}
              <br />
            </p>
          );
        })}
        <strong>
          <span>{representative}</span>
        </strong>
      </li>
    </div>
  );
};

export default MainItem;
//이미 main컴포넌트에선 돌고있음 그런데
// data라는 애는 객체야
// 객체안에 프로퍼티 paragraph는 스트링데이터
// 얘네만
// {
//   data.split("\n").map((line) => {
//     return (
//       <span>
//         {line}
//         <br />
//       </span>
//     );
//   });
// }
