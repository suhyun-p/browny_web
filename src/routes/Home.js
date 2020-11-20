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
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        price: "100,000",
        priceDesc: ""
      },
      {
        seq: 2,
        genre: "B",
        region: "HD",
        type: "O",
        image: class_image_1,
        title: "갬성끌올, 트렌디패턴 특강",
        startDate: "11/6",
        endDate: "11/27",
        dateDesc: "총 4주, 매주 금요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        price: "10,000",
        priceDesc: "입장료 별도"
      },
      {
        seq: 3,
        genre: "B",
        region: "GN",
        type: "",
        image: class_image_3,
        title: "연말빠뤼 발표반",
        startDate: "11/5",
        endDate: "12/10",
        dateDesc: "총 6주, 매주 목요일",
        startTime: "20:30",
        endTime: "22:00",
        timeDesc: "1회 90분",
        price: "150,000",
        priceDesc: ""
      },
      {
        seq: 4,
        genre: "B",
        region: "HD",
        type: "",
        image: class_image_3,
        title: "연말빠뤼 발표반",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "18:00",
        endTime: "19:30",
        timeDesc: "1회 90분",
        price: "150,000",
        priceDesc: ""
      },
      {
        seq: 5,
        genre: "B",
        region: "GN",
        type: "",
        image: class_image_4,
        title: "소수정예 바차타센슈얼 집중코칭반",
        startDate: "11/5",
        endDate: "11/26",
        dateDesc: "총 4주, 매주 목요일",
        startTime: "19:00",
        endTime: "20:30",
        timeDesc: "1회 60분",
        price: "100,000",
        priceDesc: ""
      },
      {
        seq: 6,
        genre: "S",
        region: "HD",
        type: "",
        image: class_image_5,
        title: "아오라 살사 정규시작반 5기",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        price: "70,000",
        priceDesc: ""
      },
      {
        seq: 7,
        genre: "S",
        region: "HD",
        type: "",
        image: class_image_7,
        title: "아오라 살사 LV.2",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "19:00",
        endTime: "20:00",
        timeDesc: "1회 60분",
        price: "90,000",
        priceDesc: ""
      },
      {
        seq: 8,
        genre: "B",
        region: "HD",
        type: "",
        image: class_image_7,
        title: "아오라 바차타 LV.2",
        startDate: "11/7",
        endDate: "12/12",
        dateDesc: "총 6주, 매주 토요일",
        startTime: "20:00",
        endTime: "21:00",
        timeDesc: "1회 60분",
        price: "90,000",
        priceDesc: ""
      }
    ]
    this.setState({classInfoList});
  };

  render() {
    const { classInfoList } = this.state;

    return  (
      <>
        <div class="container">
          <Header/>
          <Navigation/>
          <Jumbotron/>
          <div class="row mb-2">
            {classInfoList.map((classInfo) => { return <Card key={classInfo.seq} classInfo={classInfo} /> })}
          </div>
        </div>
        <Footer/>
      </>
    )
  }
}

export default App;
