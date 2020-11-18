import React from 'react';
import Album from './Album.js';

class ClassList extends React.Component {
    state = {
      classList: []
    };

    componentDidMount() {
      const classList = [
        {
          seq: 1,
          genre: "S",
          region: "HD",
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
      this.setState({classList});
    };

    render() {
        const { classList } = this.state;

        return (
            <div class="album py-5 bg-light">
            <div class="container">
              <div class="row">
                {classList.map((class_) => { return <Album key={class_.seq} classInfo={class_} /> })}
              </div>
            </div>
          </div>
        )
    };
}

export default ClassList;