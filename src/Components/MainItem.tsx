import React from "react";
import { ImgData } from "./Main";
import "./MainItem.css";

interface Props {
  data: ImgData;
}

const MainItem: React.FC<Props> = ({ data }) => {
  const { imgUrl, paragraph, representative, representativeName } = data;

  return (
    <div className="main_item_container">
      <li className="main_item_box_container>">
        <img className="main_slider_img" src={imgUrl} alt="" />

        <p className="main_text">
          {paragraph.split("\n").map((line) => {
            return (
              <>
                {line}
                <br />
              </>
            );
          })}
        </p>
        <div className="representative_name_container">
          <strong>{representative}</strong>
          <span>{representativeName}</span>
        </div>
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
