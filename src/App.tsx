import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//페이지 컴포넌트
import MainPage from "@/pages/index/index";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          index
          path="/" //기본경로에 / 붙이면 그대로 기본경로로...
          element={<MainPage />} //mainpage 자체가 컴포넌트가 된거라서 컴포넌트처럼 사용해줘야함.
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
