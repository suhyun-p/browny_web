import React from 'react';
import Header from '../components/Header.js';
import Navigation from '../components/Navigation.js';
import Footer from '../components/Footer.js';
import Jumbotron from '../components/Jumbotron.js';
import Card from '../components/Card.js';

import class_image_1 from '../images/class_1.jpeg';
import class_image_2 from '../images/class_2.jpeg';
import class_image_3 from '../images/class_3.jpeg';
import class_image_4 from '../images/class_4.jpeg';
import class_image_5 from '../images/class_5.jpeg';
import class_image_6 from '../images/class_6.jpeg';
import class_image_7 from '../images/class_7.jpeg';

class App extends React.Component {

  state = {
    classInfoList: []
  };

  componentDidMount() {
    const classInfoList = [
      {
        seq: 1,
        genre: "S",
        region: "HD",
        image: class_image_2,
        title: "아오라 살사 스페셜 에센스 시즌 2",
        inst1: "노랑강사",
        inst2: "스칼렛",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        location: "댄싱아일랜드 or 별도 연습실",
        price: "100,000",
        priceDesc: "",
        discountOption: [],
        account: "우리은행 180-08244668 | 전신영",
        target: "초급 수료 이상(intermediate)",
        etc: "",
        inquery: "스칼렛 | 010-2335-8364"
      },
      {
        seq: 2,
        genre: "B",
        region: "HD",
        type: "O",
        image: class_image_1,
        title: "갬성끌올, 트렌디패턴 특강",
        inst1: "스칼렛",
        inst2: "에릭",
        startDate: "11/6",
        endDate: "11/27",
        dateDesc: "총 4주, 매주 금요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        location: "마콘도",
        price: "10,000",
        priceDesc: "입장료 별도",
        discountOption: [],
        account: "",
        target: "",
        etc: "",
        inquery: ""
      },
      {
        seq: 3,
        genre: "B",
        region: "GN",
        type: "",
        image: class_image_3,
        title: "연말빠뤼 발표반",
        inst1: "고민중",
        inst2: "초코",
        startDate: "11/5",
        endDate: "12/10",
        dateDesc: "총 6주, 매주 목요일",
        startTime: "20:30",
        endTime: "22:00",
        timeDesc: "1회 90분",
        location: "",
        price: "150,000",
        priceDesc: "",
        discountOption: [
          "커플 신청 시 각 1만원 할인",
          "아오라 특전 : 목&토 교차수강 무료"
        ],
        account: "",
        target: "",
        etc: "",
        inquery: "스칼렛 | 카카오톡 ID : ssg8364"
      },
      {
        seq: 4,
        genre: "B",
        region: "HD",
        type: "",
        image: class_image_3,
        title: "연말빠뤼 발표반",
        inst1: "고민중",
        inst2: "스칼렛",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "18:00",
        endTime: "19:30",
        timeDesc: "1회 90분",
        location: "",
        price: "150,000",
        priceDesc: "",
        discountOption: [
          "커플 신청 시 각 1만원 할인",
          "아오라 특전 : 목&토 교차수강 무료"
        ],
        account: "",
        target: "",
        etc: "",
        inquery: "스칼렛 | 카카오톡 ID : ssg8364"
      },
      {
        seq: 5,
        genre: "B",
        region: "GN",
        type: "",
        image: class_image_4,
        title: "소수정예 바차타센슈얼 집중코칭반",
        inst1: "스칼렛",
        inst2: "에릭",
        startDate: "11/5",
        endDate: "11/26",
        dateDesc: "총 4주, 매주 목요일",
        startTime: "19:00",
        endTime: "20:30",
        timeDesc: "1회 60분",
        location: "이야호 스튜디오 강남점",
        price: "100,000",
        priceDesc: "",
        discountOption: [
          "파티반과 동시 수강 시 1만원 할인"
        ],
        account: "",
        target: "",
        etc: "3커플 한정(커플 신청 우선)",
        inquery: "카카오 : SSG8364"
      },
      {
        seq: 6,
        genre: "S",
        region: "HD",
        type: "",
        image: class_image_5,
        title: "아오라 살사 정규시작반 5기",
        inst1: "브라우니",
        inst2: "칼리",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        location: "댄싱 스튜디오 or 별도 연습실",
        price: "70,000",
        priceDesc: "",
        discountOption: [
          "11/1까지 신청 완료 시 6만원"
        ],
        account: "우리은행 180-08-244668 전신영",
        target: "입문자(Basic Level)",
        etc: "",
        inquery: "스칼렛(카카오톡 ID) : SSG8364"
      },
      {
        seq: 7,
        genre: "S",
        region: "HD",
        type: "",
        image: class_image_7,
        title: "아오라 살사 LV.2",
        inst1: "에릭",
        inst2: "이나",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "19:00",
        endTime: "20:00",
        timeDesc: "1회 60분",
        location: "댄싱아일랜드 or 별도공지",
        price: "90,000",
        priceDesc: "",
        discountOption: [
          "살사 + 바차타 동시 수강 시 1만원 DC"
        ],
        account: "우리은행 180-08-244668 전신영",
        target: "Lv1 수료 이상",
        etc: "",
        inquery: "스칼렛(카카오톡 ID) : SSG8364"
      },
      {
        seq: 8,
        genre: "B",
        region: "HD",
        type: "",
        image: class_image_7,
        title: "아오라 바차타 LV.2",
        inst1: "에릭",
        inst2: "이나",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        location: "",
        price: "90,000",
        priceDesc: "",
        discountOption: [
          "살사 + 바차타 동시 수강 시 1만원 DC"
        ],
        account: "우리은행 180-08-244668 전신영",
        target: "",
        etc: "",
        inquery: "스칼렛(카카오톡 ID) : SSG8364"
      }
    ]
    this.setState({classInfoList});
  };

  render() {
    const { classInfoList } = this.state;

    return  (
      <>
        <div className="container">
          <Header/>
          <Navigation/>
          <Jumbotron/>
          <div className="row mb-2">
            {classInfoList.map((classInfo) => { return <Card key={classInfo.seq} classInfo={classInfo} /> })}
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}

export default App;
