import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  return (
    <div className="header_container">
      <h1 className="header_title">
        <Link to="/">
          <img
            // onClick={() => {
            //   navigate("/");
            // }}
            className="header_title_img"
            src="https://cdn.imweb.me/upload/S201906120f7a1744ec4f2/81aeec21be26b.png"
            alt=""
          />
        </Link>
      </h1>
      <div className="header_subtitle">
        <div className="header_subtitle_container">
          <div className="header_subtitle_box1">
            <h2 className="header_subtitle_sentence">
              개발자,디자이너 없이 <br />
              혼자서도 쇼핑몰을 만들 수 <br />
              있어요
            </h2>
            <p className="header_p">
              아임웹으로 시행착오는 줄이고 빠르게 성장해보세요.
            </p>
            <div className="header_button_container">
              <Link to="/about">
                <button
                  className="headr_button"
                  onClick={() => {
                    navigate("/about");
                  }}
                >
                  더 알아보기
                </button>
              </Link>
              {/* 페이지이동  */}
            </div>
          </div>
          <div className="header_subtitle_box2">
            <img
              className="header_subtitle_box2_img"
              src="https://cdn.imweb.me/thumbnail/20220524/db07a158c6d64.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
