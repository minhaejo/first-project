import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./Main.css";

import MainItem from "./MainItem";

export type ImgData = {
  id: number;
  imgUrl: string;
  paragraph: string;
  representative: string;
  representativeName: string;
};
export type ImgDataContainer = ImgData[];

const initialImgDataContainer: ImgDataContainer = [
  {
    id: 1,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/ea2f128763399.png  ",
    paragraph:
      "아임웹으로 일주일도 안돼서 원하는 웹사이트 \n 형태가 갖춰지는 것을 보고 잘 선택했다고 \n 저희 스스로 칭찬했습니다.",
    representative: " 밑미 ",
    representativeName: " 손하빈 대표",
  },

  {
    id: 2,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/959f9df227495.png",
    paragraph:
      "타 유명 서비스를 오래 이용하다가 아임웹으로 \n  옮긴지 1년이 안됐는데 작년에 비해 매출이 300% 성 \n 장을 했습니다.",
    representative: "생긴대로 ",

    representativeName: " 조승연 대표",
  },
  {
    id: 3,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220531/7638f59b47905.png",
    paragraph:
      "웹사이트는 제작도 어렵지만 유지/보수도 큰 산이에 \n 요. 아임웹은 국내 모든 결제 기능이 완벽히 지원되고 \n 웬만한 구현은 다 돼서 운영이 수월했습니다.",
    representative: "에디션 마크 ",
    representativeName: " 이지은 크리에이티브 디렉터",
  },
  {
    id: 4,
    imgUrl: "https://cdn.imweb.me/thumbnail/20220530/7874d196fb7a0.png",
    paragraph:
      "아임웹에서 제공하는 서비스로 매출이 크게 \n 늘었어요! 특히 페이스북 마케팅은 알아서 \n 잠재고객을 찾아주니 홍보가 쉽게 되더라구요",
    representative: "어텃",
    representativeName: " 장예솔",
  },
  {
    id: 5,
    imgUrl: "	https://cdn.imweb.me/thumbnail/20220530/20efb291c9522.png",
    paragraph:
      "성장중인 비지니스라 예산이 적고 웹 사이트 수정도 빈 \n 번한데 아임웹은 경제적이면서 외부 인력없이 스스로 \n 운영이 가능한 점이 가장 좋았습니다.",
    representative: "매직볼트",
    representativeName: " 박영만 , 강래승 대표",
  },
];
// 4번 5번이 화면에 렌더링이 되면 안됨
//
const Main = () => {
  const [datas, setDatas] = useState<ImgDataContainer>(initialImgDataContainer);
  const [pxCount, setPxCount] = useState(1);

  const ulRef = useRef<HTMLUListElement | null>(null);
  console.log(ulRef);

  const onPrevImgHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    // ulRef.current.style.transform = ``
    if (ulRef.current !== null) {
      ulRef.current.style.transform = `translateX(-${1700 * pxCount}px)`;
    }
  };

  const onNextImgHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ): void => {
    if (ulRef.current !== null) {
      ulRef.current.style.transform = `translateX(+${1700 * pxCount}px)`;
    }
  };

  // useEffect(() => {
  //   setTimeout(() => {
  //     setDatas(initialImgDataContainer);
  //   }, 2500);
  // }, []);

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

      <button className="prev_button" onClick={onPrevImgHandler}>
        <span className="prev_button_content">‹</span>
      </button>
      <button className="next_button" onClick={onNextImgHandler}>
        <span className="next_button_content ">›</span>
      </button>

      <ul className="main_slider_container" ref={ulRef}>
        {datas?.map((data) => (
          <MainItem data={data} key={data.id} />
        ))}
      </ul>
    </div>
  );
};

export default Main;
