const IPAPI_KEY = "d617b8396a85627a4fafd8d19ffcc5e2"

function getLocationFromIP(ip) {
    const URL = `http://api.ipapi.com/${ip}?access_key=${IPAPI_KEY}`

    fetch(URL)
        .then((response) => response.json())
        .then(data => {
            // Datos de la API en caso de error
            if (data.hasOwnProperty('error')) {
                // Datos de prueba
                const mockResponse = {
                    "ip": "2806:2f0:8000:c916:132:51a2:84e6:86e0",
                    "type": "ipv6",
                    "continent_code": "NA",
                    "continent_name": "North America",
                    "country_code": "MX",
                    "country_name": "Mexico",
                    "region_code": null,
                    "region_name": null,
                    "city": null,
                    "zip": null,
                    "latitude": 23.0,
                    "longitude": -102.0,
                    "location": {
                        "geoname_id": null,
                        "capital": "Mexico City",
                        "languages": [
                            {
                                "code": "es",
                                "name": "Spanish",
                                "native": "Español"
                            }
                        ],
                        "country_flag": "https://assets.ipstack.com/flags/mx.svg",
                        "country_flag_emoji": "🇲🇽",
                        "country_flag_emoji_unicode": "U+1F1F2 U+1F1FD",
                        "calling_code": "52",
                        "is_eu": false
                    }
                }
                return mockResponse
            }
            return data
        })
        .then((data)=>{
            console.log(data);
        })

}
