import React from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import MainItem from "./MainItem";

export type ImgData = {
  id: number;
  imgUrl: string;
  subTitle: string;
  paragraph: string;
};
export type ImgDataContainer = ImgData[];

const initialImgDataContainer: ImgDataContainer = [
  {
    id: 1,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/fa78cafd2812e.png",
    subTitle: "Meet me",
    paragraph:
      "아임웹으로 일주일도 안돼서 원하는 웹사이트 형태가 갖춰지는 것을 보고 잘 선택했다고 저희 스스로 칭찬했습니다.",
  },
  {
    id: 2,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/959f9df227495.png",
    subTitle: "SAENGIN",
    paragraph:
      "타 유명 서비스를 오래 이용하다가 아임웹으로 옮긴지 1년이 안됐는데 작년에 비해 매출이 300% 성장을 했습니다.",
  },
  {
    id: 3,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220531/7638f59b47905.png",
    subTitle: "EDITION DENMARK",
    paragraph:
      "웹사이트는 제작도 어렵지만 유지/보수도 큰 산이에요. 아임웹은 국내 모든 결제 기능이 완벽히 지원되고 웬만한 구현은 다 돼서 운영이 수월했습니다.",
  },
];

const Main = () => {
  const [datas, setDatas] = useState<ImgDataContainer>(initialImgDataContainer);
  return (
    <Link to="/main">
      <div>
        <h2>놀라운 성장을 보여준 브렌드들은 왜 아임엡을 선택했을까요?</h2>
        <p>
          아임웹으로 뛰어난 비즈니스 성과를 내고 있는 그들의 이야기를
          만나보세요.
        </p>
        <ul>
          {datas.map((data) => (
            <MainItem data={data} key={data.id} />
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default Main;
