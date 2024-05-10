var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -0.2864806640356754,
        "pitch": 0.20607932814970198,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 0.11924296925195321,
          "pitch": 0.2909104921766392,
          "rotation": 0,
          "target": "1-entrance-foyer"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.9878193117516538,
          "pitch": 0.002307327211831023,
          "title": "SEPERATE ACCESS STAIR TO BEDROOM 1 AND 2",
          "text": "BEDROOM ONE AND 2 CAN BE EASILY SEPERATED AS AN AIR BNB"
        },
        {
          "yaw": 3.120858480387353,
          "pitch": 0.07282448090611737,
          "title": "MAIN FRONT DOOR TO OUTSIDE HOUSE",
          "text": ""
        }
      ]
    },
    {
      "id": "1-entrance-foyer",
      "name": "ENTRANCE FOYER",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.2123022614117147,
          "pitch": 0.48238750257178786,
          "rotation": 0,
          "target": "2-entrance-foyer-2"
        },
        {
          "yaw": -3.0097513126861806,
          "pitch": 0.2619357535799871,
          "rotation": 0,
          "target": "0-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-entrance-foyer-2",
      "name": "ENTRANCE FOYER 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.1755010496888545,
          "pitch": 0.49216369305964314,
          "rotation": 0,
          "target": "1-entrance-foyer"
        },
        {
          "yaw": 0.20502017896488134,
          "pitch": 0.28877153636919495,
          "rotation": 0,
          "target": "3-guest-bathroom"
        },
        {
          "yaw": 2.181092191658853,
          "pitch": 0.35641941589091886,
          "rotation": 5.497787143782138,
          "target": "4-lounge-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 3.106897131600566,
          "pitch": 0.1292326137173987,
          "title": "STUDY",
          "text": ""
        }
      ]
    },
    {
      "id": "3-guest-bathroom",
      "name": "GUEST BATHROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.7902561113177917,
          "pitch": 0.24514026810195233,
          "rotation": 1.5707963267948966,
          "target": "2-entrance-foyer-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-lounge-1",
      "name": "LOUNGE 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.6666033536511664,
          "pitch": 0.33281908633884605,
          "rotation": 0,
          "target": "5-dining-area"
        },
        {
          "yaw": -1.5583831365747738,
          "pitch": 0.42604132701691455,
          "rotation": 0,
          "target": "2-entrance-foyer-2"
        },
        {
          "yaw": 2.8457498346348586,
          "pitch": 0.16915267286453073,
          "rotation": 0,
          "target": "7-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-dining-area",
      "name": "DINING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.0035410680854255,
        "pitch": 0.1486575360304201,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.16516138345415143,
          "pitch": 0.2617806021292921,
          "rotation": 0,
          "target": "4-lounge-1"
        },
        {
          "yaw": 2.7072881262289874,
          "pitch": 0.6200111722812842,
          "rotation": 0,
          "target": "15-bottom-of-staircase"
        },
        {
          "yaw": -1.6684732032285847,
          "pitch": 0.3369924262194388,
          "rotation": 0,
          "target": "6-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-lounge-2",
      "name": "LOUNGE 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.9968245822561883,
        "pitch": 0.12394185766840238,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": 3.016368861272211,
          "pitch": 0.13672954299903317,
          "rotation": 0,
          "target": "15-bottom-of-staircase"
        },
        {
          "yaw": 0.9512862050093975,
          "pitch": 0.35706918500421025,
          "rotation": 0,
          "target": "7-kitchen"
        },
        {
          "yaw": -1.9446234546547405,
          "pitch": 0.4488529015709215,
          "rotation": 0,
          "target": "8-lounge-2-2"
        },
        {
          "yaw": 2.5659824349815716,
          "pitch": 0.3749297832323961,
          "rotation": 0,
          "target": "5-dining-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-kitchen",
      "name": "KITCHEN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0858913320433965,
          "pitch": 0.4240442636530375,
          "rotation": 0,
          "target": "6-lounge-2"
        },
        {
          "yaw": -0.05629495262753892,
          "pitch": 0.06251877665697236,
          "rotation": 0,
          "target": "4-lounge-1"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -3.0783252392595504,
          "pitch": 0.10244571198458985,
          "title": "SCULLERY",
          "text": "GARAGE ACCESSED THROUGH SCULLERY"
        }
      ]
    },
    {
      "id": "8-lounge-2-2",
      "name": "LOUNGE 2-2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.8169512358719038,
        "pitch": 0.11612734171571049,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.6194748675484192,
          "pitch": 0.37995389630341236,
          "rotation": 0,
          "target": "6-lounge-2"
        },
        {
          "yaw": 1.5007255658091276,
          "pitch": 0.281863861220053,
          "rotation": 0,
          "target": "9-fire-place"
        },
        {
          "yaw": 3.0878147592626437,
          "pitch": 0.15213206773578136,
          "rotation": 0,
          "target": "10-main-patio-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-fire-place",
      "name": "FIRE PLACE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -1.1731874142095897,
        "pitch": 0.08951859981410593,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.6542377939405881,
          "pitch": 0.29395777629139275,
          "rotation": 0,
          "target": "8-lounge-2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-main-patio-entrance",
      "name": "MAIN PATIO ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.754925407623144,
          "pitch": 0.627760653520081,
          "rotation": 0,
          "target": "8-lounge-2-2"
        },
        {
          "yaw": -0.7417245036402846,
          "pitch": 0.2759382311969496,
          "rotation": 6.283185307179586,
          "target": "11-main-patio"
        },
        {
          "yaw": 0.45612832340776777,
          "pitch": 0.26252496298041805,
          "rotation": 0,
          "target": "12-main-pateo-2"
        },
        {
          "yaw": -1.7898140702810856,
          "pitch": 0.29734615820440524,
          "rotation": 0,
          "target": "9-fire-place"
        },
        {
          "yaw": 2.681486181383196,
          "pitch": 0.3062592783088576,
          "rotation": 0,
          "target": "6-lounge-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-main-patio",
      "name": "MAIN PATIO",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -3.1331119477978078,
        "pitch": -0.12125624882677677,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -0.21477689741060857,
          "pitch": 0.23668918246698212,
          "rotation": 0,
          "target": "10-main-patio-entrance"
        },
        {
          "yaw": -0.9186275534684611,
          "pitch": 0.22769326173214033,
          "rotation": 0,
          "target": "12-main-pateo-2"
        },
        {
          "yaw": 1.6970098038758126,
          "pitch": 0.20931158512511772,
          "rotation": 0,
          "target": "13-main-patio-3"
        },
        {
          "yaw": -3.0906289541059095,
          "pitch": 0.08975255511377433,
          "rotation": 0,
          "target": "14-beach-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-main-pateo-2",
      "name": "MAIN PATEO 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.875648058380925,
          "pitch": 0.288545680868614,
          "rotation": 0,
          "target": "10-main-patio-entrance"
        },
        {
          "yaw": 2.1040361468919704,
          "pitch": 0.23784040982080157,
          "rotation": 0,
          "target": "11-main-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-main-patio-3",
      "name": "MAIN PATIO 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3925138373124355,
          "pitch": 0.24068861003633657,
          "rotation": 0,
          "target": "11-main-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-beach-side",
      "name": "BEACH SIDE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.8038652371906228,
          "pitch": 0.13702241336818055,
          "rotation": 0,
          "target": "11-main-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bottom-of-staircase",
      "name": "BOTTOM OF STAIRCASE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0020429551825493775,
          "pitch": -0.07990936191273157,
          "rotation": 0,
          "target": "16-staircase-mid-landing"
        },
        {
          "yaw": -1.7711262635500198,
          "pitch": 0.32709617279965286,
          "rotation": 0,
          "target": "5-dining-area"
        },
        {
          "yaw": -2.6760893673000137,
          "pitch": 0.33336927696721474,
          "rotation": 0,
          "target": "6-lounge-2"
        },
        {
          "yaw": 2.6647367423371158,
          "pitch": 0.27152310027502047,
          "rotation": 0,
          "target": "8-lounge-2-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-staircase-mid-landing",
      "name": "STAIRCASE MID LANDING",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7088941548270995,
          "pitch": 0.7607067850391367,
          "rotation": 0.7853981633974483,
          "target": "15-bottom-of-staircase"
        },
        {
          "yaw": -0.14888794237911718,
          "pitch": -0.0763757079560996,
          "rotation": 0,
          "target": "17-staircase-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-staircase-top",
      "name": "STAIRCASE TOP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.6802493082335666,
          "pitch": 0.24396461563176075,
          "rotation": 0,
          "target": "31-main-bedroom-entrance"
        },
        {
          "yaw": -0.10901079669574898,
          "pitch": 0.3815125069658869,
          "rotation": 5.497787143782138,
          "target": "19-upstairs-sitting-area-entrance"
        },
        {
          "yaw": 0.9078521654340967,
          "pitch": 0.5114598768993872,
          "rotation": 0,
          "target": "18-upstairs-sitting-area"
        },
        {
          "yaw": 1.7636452574463704,
          "pitch": 0.7192812575430896,
          "rotation": 0,
          "target": "16-staircase-mid-landing"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-upstairs-sitting-area",
      "name": "UPSTAIRS SITTING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5723471170103736,
          "pitch": 0.5355385107838693,
          "rotation": 0,
          "target": "17-staircase-top"
        },
        {
          "yaw": -1.3158426140058914,
          "pitch": 0.5430847788951603,
          "rotation": 0,
          "target": "19-upstairs-sitting-area-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-upstairs-sitting-area-entrance",
      "name": "UPSTAIRS SITTING AREA ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6321867185184216,
          "pitch": 0.49415563408562946,
          "rotation": 0,
          "target": "18-upstairs-sitting-area"
        },
        {
          "yaw": -2.7791011180781258,
          "pitch": 0.46167126283881643,
          "rotation": 0,
          "target": "17-staircase-top"
        },
        {
          "yaw": -0.2830912436442361,
          "pitch": 0.3676502111447064,
          "rotation": 0,
          "target": "23-upstairs-sitting-area-2"
        },
        {
          "yaw": 0.647669323577654,
          "pitch": 0.17352060935172986,
          "rotation": 0,
          "target": "21-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-common-passage",
      "name": "COMMON PASSAGE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "21-bedroom-1",
      "name": "BEDROOM 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6589520055879055,
          "pitch": 0.31984289887369677,
          "rotation": 0,
          "target": "19-upstairs-sitting-area-entrance"
        },
        {
          "yaw": 1.9705799549987866,
          "pitch": 0.34425702655169665,
          "rotation": 0,
          "target": "22-bedroom-1-ensuite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-bedroom-1-ensuite",
      "name": "BEDROOM 1 ENSUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.410783990773229,
          "pitch": 0.3520837426269079,
          "rotation": 0,
          "target": "21-bedroom-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-upstairs-sitting-area-2",
      "name": "UPSTAIRS SITTING AREA 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9996164294636429,
          "pitch": 0.3375724946942853,
          "rotation": 6.283185307179586,
          "target": "28-upstairs-sitting-area-middle"
        },
        {
          "yaw": -1.1639654213867345,
          "pitch": 0.5009713581736843,
          "rotation": 0,
          "target": "24-bedroom-2-entrance"
        },
        {
          "yaw": 2.0165472236804316,
          "pitch": 0.3004544489959944,
          "rotation": 4.71238898038469,
          "target": "21-bedroom-1"
        },
        {
          "yaw": 2.5304347637983273,
          "pitch": 0.36943713357989694,
          "rotation": 0,
          "target": "19-upstairs-sitting-area-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-bedroom-2-entrance",
      "name": "BEDROOM 2 ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8773585465924416,
          "pitch": 0.41466234572686567,
          "rotation": 4.71238898038469,
          "target": "25-bedroom-2-ensuite-entrance"
        },
        {
          "yaw": 0.20416034366571978,
          "pitch": 0.1733737405338296,
          "rotation": 0,
          "target": "27-bedroom-2-sitting-area"
        },
        {
          "yaw": 2.380424181148163,
          "pitch": 0.3871037352102178,
          "rotation": 0,
          "target": "23-upstairs-sitting-area-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-bedroom-2-ensuite-entrance",
      "name": "BEDROOM 2 ENSUITE ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.34863109145408444,
          "pitch": 0.427797409749644,
          "rotation": 0,
          "target": "26-bedroom-2-ensuite"
        },
        {
          "yaw": -1.9753247706278714,
          "pitch": 0.4294892158639989,
          "rotation": 0,
          "target": "24-bedroom-2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-bedroom-2-ensuite",
      "name": "BEDROOM 2 ENSUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.83914499823495,
          "pitch": 0.13654285789354503,
          "rotation": 0,
          "target": "27-bedroom-2-sitting-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-bedroom-2-sitting-area",
      "name": "BEDROOM 2 SITTING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.990777079311858,
          "pitch": 0.2598919896304501,
          "rotation": 0,
          "target": "25-bedroom-2-ensuite-entrance"
        },
        {
          "yaw": -2.581663495805831,
          "pitch": 0.31504706779165303,
          "rotation": 0,
          "target": "24-bedroom-2-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-upstairs-sitting-area-middle",
      "name": "UPSTAIRS SITTING AREA MIDDLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": 2.2963930190275565,
        "pitch": 0.16842014621918366,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -2.5118369129618436,
          "pitch": 0.30422831702531994,
          "rotation": 0,
          "target": "29-upstairs-dining-area"
        },
        {
          "yaw": 0.5265344339339073,
          "pitch": 0.20100326126395807,
          "rotation": 5.497787143782138,
          "target": "19-upstairs-sitting-area-entrance"
        },
        {
          "yaw": 3.0215538142979854,
          "pitch": 0.2099732179502194,
          "rotation": 0,
          "target": "30-upstairs-kitchenette"
        },
        {
          "yaw": 1.119501170877557,
          "pitch": 0.02998593781405745,
          "rotation": 0,
          "target": "19-upstairs-sitting-area-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-upstairs-dining-area",
      "name": "UPSTAIRS DINING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.09644850020784013,
          "pitch": 0.17923054975743646,
          "rotation": 0,
          "target": "30-upstairs-kitchenette"
        },
        {
          "yaw": -1.8115598360239602,
          "pitch": 0.41517186469650547,
          "rotation": 0,
          "target": "28-upstairs-sitting-area-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-upstairs-kitchenette",
      "name": "UPSTAIRS KITCHENETTE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.1354614381092603,
          "pitch": 0.17490927362722886,
          "rotation": 0,
          "target": "29-upstairs-dining-area"
        },
        {
          "yaw": -1.4421194743357226,
          "pitch": 0.1919108114271122,
          "rotation": 0,
          "target": "28-upstairs-sitting-area-middle"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-main-bedroom-entrance",
      "name": "MAIN BEDROOM ENTRANCE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "yaw": -2.8657327402834323,
        "pitch": 0.08427923519561631,
        "fov": 1.2599180821480807
      },
      "linkHotspots": [
        {
          "yaw": -1.7209559930978955,
          "pitch": 0.34250501829598434,
          "rotation": 0,
          "target": "35--main-bedroom"
        },
        {
          "yaw": 2.695581740720244,
          "pitch": 0.330177319685113,
          "rotation": 0,
          "target": "32-main-bedroom-sitting-area"
        },
        {
          "yaw": 0.02686474145011708,
          "pitch": 0.169084058860701,
          "rotation": 0,
          "target": "17-staircase-top"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-main-bedroom-sitting-area",
      "name": "MAIN BEDROOM SITTING AREA",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15976511267852445,
          "pitch": 0.17736378003978892,
          "rotation": 1.5707963267948966,
          "target": "33-main-bedroom-balcony"
        },
        {
          "yaw": 2.930220471422567,
          "pitch": 0.36997439927907294,
          "rotation": 0,
          "target": "31-main-bedroom-entrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-main-bedroom-balcony",
      "name": "MAIN BEDROOM BALCONY",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.594009813665231,
          "pitch": 0.4335634771776302,
          "rotation": 6.283185307179586,
          "target": "32-main-bedroom-sitting-area"
        },
        {
          "yaw": 0.8394500558267577,
          "pitch": 0.2646678761444132,
          "rotation": 0,
          "target": "34-main-bedroom-balcony-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-main-bedroom-balcony-2",
      "name": "MAIN BEDROOM BALCONY 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.57064282123536,
          "pitch": 0.2968667263093572,
          "rotation": 0,
          "target": "33-main-bedroom-balcony"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35--main-bedroom",
      "name": " MAIN BEDROOM",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.206492184828009,
          "pitch": 0.24804098067653513,
          "rotation": 0,
          "target": "31-main-bedroom-entrance"
        },
        {
          "yaw": -1.0789779435147402,
          "pitch": 0.6841338720360994,
          "rotation": 0,
          "target": "36-main-bedroom-middle"
        },
        {
          "yaw": 0.5501232385101922,
          "pitch": 0.24409705598236187,
          "rotation": 4.71238898038469,
          "target": "37-main-bedroom-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-main-bedroom-middle",
      "name": "MAIN BEDROOM MIDDLE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0387929494762318,
          "pitch": 0.04764833773854704,
          "rotation": 0,
          "target": "37-main-bedroom-back"
        },
        {
          "yaw": 1.5461721182970454,
          "pitch": 0.3664278624477344,
          "rotation": 0,
          "target": "35--main-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-main-bedroom-back",
      "name": "MAIN BEDROOM BACK",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.36666549337533283,
          "pitch": 0.3969117435594569,
          "rotation": 0,
          "target": "38-main-bedroom-ensuite"
        },
        {
          "yaw": -0.865031459286115,
          "pitch": 0.18493471052909705,
          "rotation": 0,
          "target": "36-main-bedroom-middle"
        },
        {
          "yaw": -1.4780369822368389,
          "pitch": 0.16875971617557184,
          "rotation": 0,
          "target": "35--main-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-main-bedroom-ensuite",
      "name": "MAIN BEDROOM ENSUITE",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7729940603537635,
          "pitch": 0.3378964039406114,
          "rotation": 0,
          "target": "39-main-bedroom-ensuite-window"
        },
        {
          "yaw": -2.6548530295623767,
          "pitch": 0.43199052623511314,
          "rotation": 0,
          "target": "37-main-bedroom-back"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-main-bedroom-ensuite-window",
      "name": "MAIN BEDROOM ENSUITE WINDOW",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1488,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.715245050852076,
          "pitch": 0.47198320448686637,
          "rotation": 0,
          "target": "38-main-bedroom-ensuite"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "21 ANTILLES ROAD",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
