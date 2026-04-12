import { Map } from "./map"
import CarIcon from "../../icons/car-icon.svg?react"
import BusIcon from "../../icons/bus-icon.svg?react"
import { LazyDiv } from "../lazyDiv"
import { LOCATION, LOCATION_ADDRESS } from "../../const"

export const Location = () => {
  return (
    <>
      <LazyDiv className="card location">
        <h2 className="english">Location</h2>
        <div className="addr">
          {LOCATION}
          <div className="detail">{LOCATION_ADDRESS}</div>
        </div>
        <Map />
      </LazyDiv>

      <LazyDiv className="card location">
        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <BusIcon className="transportation-icon" />
          </div>
          <div className="heading">대중교통</div>
          <div />
          <div className="content">
            * 지하철 이용시
            <br />
            지하철 2호선, 4호선, 5호선
            <br />
            <b>동대문역사문화공원역 4번출구</b>
            <br />
            지하철 3호선
            <br />
            <b>동대입구역 4번출구</b>
            <br />
          </div>
          <div />
          <div className="content">
            * 버스 이용 시
            <br />
            - 간선(파랑): 144, 301, 420
            <br />
            - 지선(초록): 7212
            <br />
            <b>장충동(동국대입구) 정류장</b>
          </div>
        </div>

        <div className="location-info">
          <div className="transportation-icon-wrapper">
            <CarIcon className="transportation-icon" />
          </div>
          <div className="heading">자가용</div>
          <div />
          <div className="content">
            네이버지도,카카오내비,티맵 등 이용
            <br />
            <b>장충민영주차장</b> 검색
            <br />
            (장충동 주민센터 바로 옆)
            <br />
  
            ※ 주차장 층간 연결로가 좁고 꺾여있어 준대형 이상 차량은 주의깊게 운전하셔야 합니다.
            <br />
            주차 공간이 협소하오니 가급적 대중교통을 이용해 주시기 바랍니다.
            <br />
          </div>
        </div>
      </LazyDiv>
    </>
  )
}
