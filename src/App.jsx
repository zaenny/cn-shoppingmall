import { Routes, Route } from "react-router";
import './App.css'
import ProductAll from "./page/ProductAll";
import Login from "./page/Login";
import ProductDetail from "./page/ProductDetail";
import Navbar from "./component/Navbar";


// 전체상품, 로그인, 상품상세페이지
// 네이게이션바 생성
// 전체 상품페이지에서는 전체 상품을 볼 수 있다
// 로그인 버튼을 누르면 로그인 페이지 표출
// 상품디테일 클릭시 비로그인상태일때 로그인 페이지 표출
// 로그인시 상품디테일 페이지 접근가능
// 로그아웃 버튼 클릭시 로그아웃
// 로그아웃되면 상품 디테일 페이지를 볼 수없다 로그인페이지 이동
// 로그인하면 로그아웃 , 로그아웃하면 로그인
// 상품을 검색 할 수있다. 

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<ProductAll/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/product/:id" element={<ProductDetail/>}/>
      </Routes>
    </div>
  )
}

export default App
