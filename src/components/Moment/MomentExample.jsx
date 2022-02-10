import moment from "moment-timezone";
import React, { useRef, useState } from 'react';
import "moment/locale/ko";

export default function MomentExample() {
    const momnetDate = moment();
    const newMomentDate = momnetDate.add(1,"week");
    const cloneNewMomentDate = newMomentDate.clone().add(1,"week");

    const [day, setDay] = useState("");
    const birthDayRef = useRef(null);
    
    const handleBirthDayChange = (event) =>{
        setDay(moment(event.target.value, "YYYY-MM-DD").format("dddd"))
    }
  return (
    <div>
        Moment
        <div>
            Immutable Check
        </div>
        <div>
            {momnetDate.format()}
            <br />
            {newMomentDate.format()}
            <br />
            {cloneNewMomentDate.format()}
            <br />
        </div>
        <br /> 
        <div>Summer time</div>
        <div>
            2018년 3월 10일 13시에 하루 더하기 : 
            <br />
            {moment.tz("2018-03-10 13:00:00", "America/New_York").add(1,"day").format()}
        </div>

        <div>
            2018년 3월 10일 13시에 24시간 더하기 : 
            <br />
            {moment.tz("2018-03-10 13:00:00", "America/New_York").add(24,"hour").format()}
        </div>

        <div>Leap year (korea)</div>
        <div>
            2017년 1월 1일 1년 빼기 : 
            <br />
            {moment("2017-01-01").subtract(1,"year").format()}
        </div>

        <div>
            2017년 1월 1일 365일 빼기 : 
            <br />
            {moment("2017-01-01").subtract(365,"day").format()}
        </div>
        <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
        <div>{moment("07-17-2021").format("YYYY년 M월 D일")}</div>
        <br/>
        <div>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
            <div>무슨 요일 일까</div>
            <div>{day}</div>
        </div>
        <br />
        <div>2021-07-17 03:00 와 2021-07-18 2:00은 몇시간 차이인가</div>
        <div>{moment("2021-07-17 03:00").diff(moment("2021-07-18 02:00"), "hours")}시간</div>
    </div>
  )
}
