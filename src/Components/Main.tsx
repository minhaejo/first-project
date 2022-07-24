import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Main.css";

import MainItem from "./MainItem";

export type ImgData = {
  id: number;
  imgUrl: string;
  paragraph: string;
  representative: string;
};
export type ImgDataContainer = ImgData[];

const initialImgDataContainer: ImgDataContainer = [
  {
    id: 1,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/ea2f128763399.png  ",
    paragraph:
      "아임웹으로 일주일도 안돼서 원하는 웹사이트 \n 형태가 갖춰지는 것을 보고 잘 선택했다고 \n 저희 스스로 칭찬했습니다.",
    representative: "밑미 손하빈 대표",
  },
  {
    id: 2,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/959f9df227495.png",
    paragraph:
      "타 유명 서비스를 오래 이용하다가 아임웹으로 \n  옮긴지 1년이 안됐는데 작년에 비해 매출이 300% 성 \n 장을 했습니다.",
    representative: "생긴대로 조승연 대표",
  },
  {
    id: 3,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220531/7638f59b47905.png",
    paragraph:
      "웹사이트는 제작도 어렵지만 유지/보수도 큰 산이에 \n 요. 아임웹은 국내 모든 결제 기능이 완벽히 지원되고 \n 웬만한 구현은 다 돼서 운영이 수월했습니다.",
    representative: "에디션 마크 이지은 크리에이티브 디렉터",
  },
];

const Main = () => {
  const [datas, setDatas] = useState<ImgDataContainer>(initialImgDataContainer);
  return (
    <div className="main_container">
      <div className="main_container_text_container">
        <div className="main_container_text">
          <h2>
            놀라운 성장을 보여준 브렌드들은 <br /> 왜 아임엡을 선택했을까요?
          </h2>
        </div>
        <div className="main_container_paragragh_container">
          <p>
            아임웹으로 뛰어난 비즈니스 성과를 내고 있는 그들의 이야기를
            만나보세요.
          </p>
        </div>
      </div>
      <ul className="main_slider_container">
        {datas.map((data) => (
          <MainItem data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
