function getTime(time_zone){
    return fetch(`https://api.ipbase.com/v1/json/${time_zone}`)
    .then(response=>response.json())
    .then(()=>{
        return {
            "abbreviation": "EST",
            "client_ip": "2806:2f0:8000:c916:132:51a2:84e6:86e0",
            "datetime": "2023-05-04T22:47:31.709962-05:00",
            "day_of_week": 4,
            "day_of_year": 124,
            "dst": false,
            "dst_from": null,
            "dst_offset": 0,
            "dst_until": null,
            "raw_offset": -18000,
            "timezone": "America/Cancun",
            "unixtime": 1683258451,
            "utc_datetime": "2023-05-05T03:47:31.709962+00:00",
            "utc_offset": "-05:00",
            "week_number": 18
        }
    })
    .then((data)=> {
        let currentTime = new Date(data.datetime)
        const curTime = "".concat(currentTime.getHours(), ':', currentTime.getMinutes())
        return curTime
    })
}