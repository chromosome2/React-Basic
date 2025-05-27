import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
//페이지 컴포넌트
import MainPage from "@/pages/index/index";
import BookmarkPage from "@pages/bookmark/index";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route
            index
            path="/" //기본경로에 / 붙이면 그대로 기본경로로...
            element={<MainPage />} //mainpage 자체가 컴포넌트가 된거라서 컴포넌트처럼 사용해줘야함.
          ></Route>
          <Route path="/search/:id" element={<MainPage />}></Route>
          <Route path="/bookmark" element={<BookmarkPage />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
