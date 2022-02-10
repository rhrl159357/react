import React, { useRef, useState } from 'react';
// import dayjs from "dayjs";
// import 'dayjs/locale/ko';

import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

import {add, format, sub, differenceInHours} from 'date-fns';
import { format as timezoneFormat} from 'date-fns-tz';
import addWeeks from 'date-fns/addWeeks'
import ko from 'date-fns/locale/ko';

// dayjs.locale("ko");
// dayjs.extend(utc);
// dayjs.extend(timezone);

export default function DatefnsExample() {

    const dayFnsDate = new Date();
    const newdayFnsDate = add(dayFnsDate,{weeks: 1});
    const cloneNewdayFnsDate = addWeeks(newdayFnsDate,1);

    const [day, setDay] = useState("");
    const birthDayRef = useRef(null);
    
    const handleBirthDayChange = (event) =>{
        setDay(format(new Date(event.target.value), "EEEE", {locale:ko}))
    }
  return (
    <div>
        DateFns
        <div>
            Immutable Check
        </div>
        <div>
            {format(dayFnsDate, "yyyy-MM-dd")}
            <br />
            {format(newdayFnsDate, "yyyy-MM-dd")}
            <br />
            {format(cloneNewdayFnsDate, "yyyy-MM-dd")}
            <br />
        </div>
        <br /> 
        <div>Summer time</div>
        {/* <div>{dayjs.tz.guess()}</div> */}
        <div>
            2018년 3월 10일 13시에 하루 더하기 : 
            <br />
            {/* {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(1,"day").format()} */}
            {timezoneFormat(
                add(new Date("2018-03-10 13:00:00"),{days : 1}) ,"yyyy-MM-dd HH:mm:ssXXX", 
            {timeZone : "America/New_York"})}
        </div>

        <div>
            2018년 3월 10일 13시에 24시간 더하기 : 
            <br />
            {/* {dayjs.tz("2018-03-10 13:00:00", "America/New_York").add(24,"hour").format()} */}
            {timezoneFormat(
                add(new Date("2018-03-10 13:00:00"),{hours : 24}) ,"yyyy-MM-dd HH:mm:ssXXX", 
            {timeZone : "America/New_York"})}
        </div>

        <div>Leap year (korea)</div>
        <div>
            2017년 1월 1일 1년 빼기 : 
            <br />
            {format(sub(new Date("2017-01-01"),{years: 1}),'yyyy-MM-dd')}
        </div>

        <div>
            2017년 1월 1일 365일 빼기 : 
            <br />
            {format(sub(new Date("2017-01-01"),{day: 365}),'yyyy-MM-dd')}
        </div>
        <div>한국어로 표기 07-17-2021을 2021년 7월 17일로 표기</div>
        <div>{format(new Date("07-17-2021"), "yyyy년 M월 d일")}</div>
        <br/>
        <div>
            <input type="date" ref={birthDayRef} onChange={handleBirthDayChange} />
            <div>무슨 요일 일까</div>
            <div>{day}</div>
        </div>
        <br />
        <div>2021-07-17 03:00 와 2021-07-18 2:00은 몇시간 차이인가</div>
        {/* <div>{dayjs("2021-07-17 03:00").diff(dayjs("2021-07-18 02:00"), "hours")}시간</div> */}
        {differenceInHours(new Date("2021-07-17 03:00"), new Date("2021-07-18 02:00"))}
    </div>
  )
}
