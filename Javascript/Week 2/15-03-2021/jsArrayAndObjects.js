        /*
         Create 3 realistic objects with at least 10 key-value pairs

         One of the 3 objects should contain a key with another object value which in turn has 5 key-value pairs
        */

        //Object Person: 
        const Person = {
            Name: 'Maxwell King',
            Age: 25,
            Occupation: 'Software Developer',
            Hairstyle: "Skin",
            skinTone: 'Dark',
            DateOfBirth: '07/06/1996',
            PlaceOfBirth: 'Canada',
            Nationality:'Nigerian',
            StateOfOrigin: 'Lagos State',
            Hobbies: ['Singing', 
                      'Playing Video Games',
                      'Dancing' 
                    ]
          }
  
          console.log(Person);
  
          //Obect Mobile Phone:
          const MobilePhone = {
            Name: 'Samsung Galaxy S10',
            Color: ['White', 'Black', 'Gold', 'Matte Blace'],
            Technology: 'GSM / CDMA / HSPA / EVDO / LTE',
            Display: {
                        Type: 'Dynamic AMOLED, HDR10+',
                        Resolution: '1440 x 3040 pixels, 19:9 ratio',
                      },
            
            OperatingSystem: 'Android 9.0 (Pie)',
            CPU: 'Octa-core (2x2.73 GHz Mongoose M4 & 2x2.31 GHz Cortex-A75 & 4x1.95 GHz Cortex-A55) - EMEA/LATAM',
            InternalMemory: ['64GB', '128GB', '256GB', '512GB'],
            Camera: {
                      FrontCamera: '21MP',
                      RearCamera: '13MP'
                    },
            Battery: 'Li-Ion 3400 mAh, non-removable',
            Price: {
                    ROM64gbRAM4gb: '$999',
                    ROM64gbRAM8gb: '$1199',
                    ROM128gbRAM8gb: '$1599',
                    ROM256gbRAM16gb: '$1999',
                    ROM512gbRAM32gb: '$2599'
                  }
          }
  
          console.log(MobilePhone);
  
          //Object Digital Camera:
          const DigitalCamera = {
            Name: 'Nikon D7500',
            Resolution: '5568 x 3712',
            Pixel: '21MP',
            ScreenSize: '3.2″',
            ScreenDots: 922000,
            ISO: 'ISO 100 - 51200',
            ShutterSpeed: '1/8000 sec',
            StorageTypes: 'SD/SDHC/SDXC',
            USB: 'USB 2.0',
            Weight: '720g'
          }

          console.log(DigitalCamera);
  
         // Create 3 realistic arrays with at least 3 other realistic arrays as elements. 
          
        //Array 1
        const streamingServices = [ 
           ['Oya Watch TV', 'Muvi', 'uduX'], 
           ['Tencent Video', 'Youku', 'iQiyi'], 
           ['Netflix', 'Hulu', 'Amazon Prime'] 
          ]
  
        console.log(streamingServices)
        console.log(streamingServices[0]);
        console.log(streamingServices[1])
        console.log(streamingServices[2])
        
        //Array 2
        const Artist = [
            ['Davido', 'Burna-Boy', 'Wizkid'],
            ['Sarkodie', 'Shatta Wale', 'Stonebwoy'],
            ['Cardi B', 'Beyonce', 'Taylor Swift']
        ]
            console.log(Artist)
            console.log(Artist[0])
            console.log(Artist[1])
            console.log(Artist[2])
  
        //Array 3
        const building = [
            ['Office Towers', 'Walk-up'],
            ['Detached', 'Townhouse', 'Condominium'],
            ['Malls', 'Big Box']
        ]
            console.log(building)
            console.log(building[0])
            console.log(building[1])
            console.log(building[2])
  
      // Create an array with two realistic objects as its elements

      const cars = [
            {
            "color": "purple",
            "type": "minivan",
            "registration": new Date('2017-01-03'),
            "capacity": 7
            },
            {
            "color": "red",
            "type": "station wagon",
            "registration": new Date('2018-03-03'),
            "capacity": 5
            },
        ]
  
              console.log(cars[0])
              console.log(cars[1])