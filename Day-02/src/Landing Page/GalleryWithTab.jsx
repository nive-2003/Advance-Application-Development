import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
   
  export function GalleryWithTab() {
    const data = [
      {
        label: "Delux Package",
        value: "html",
        images: [
          {
            imageLink:
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
          },
          {
            imageLink:
              "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
          },
          {
            imageLink:
              "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          },
        ],
      },
      {
        label: "Premium Package",
        value: "react",
        images: [
          {
            imageLink:
              "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
          },
        ],
      },
      {
        label: "Luxury Package",
        value: "vue",
        images: [
          {
            imageLink:
              "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
          },
          {
            imageLink:
              "https://demos.creative-tim.com/material-kit-pro/assets/img/examples/blog5.jpg",
          },
          {
            imageLink:
              "https://material-taillwind-pro-ct-tailwind-team.vercel.app/img/content2.jpg",
          },
          {
            imageLink:
              "https://images.unsplash.com/photo-1620064916958-605375619af8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1493&q=80",
          },
        ],
      },
      
    ];
   
    return (
        <div className="absolute ml-[300px] z-index: 20">
            
      <Tabs value="html" className="bg-white">
        <TabsHeader>
          {data.map(({ label, value }) => (
              <Tab key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody className="grid grid-cols-1 gap-4  ">
          {data.map(({ value, images }) => (
              <TabPanel
              className="grid grid-cols-6 gap-9 md:grid-cols-3"
              key={value}
              value={value}
          >
              {images?.map(({ imageLink }, index) => (
                  <div key={index} className="relative bg-white w-[300px] h-[300px] shadow-[0_5px_12px_rgba(8,_112,_184,_0.7)] hover:shadow-[0_5px_12px_rgba(8,_112,_184,_0.7)] hover:scale-110 shadow-2xl hover:shadow-2xl transition duration-700">
                      <a href={imageLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                          <img
                              className="h-40 w-full max-w-full object-cover object-center "
                              src={imageLink}
                              alt="image-photo"
                          />
                       <div className="relative">
    <div className="flex justify-between">
        <div>
            <span>1 Bedroom deluxe houseboat</span>
            <span className="block mt-1">From ₹7500</span>
        </div>
        <div className="absolute mt-[50px] mr-[10px] right-0">
            <button className="mt-[10px] bg-blue-gray-400 rounded-md  h-18 w-[120px]">Book Online</button>
        </div>
    </div>
    </div>

                      </a>
                  </div>
              ))}
          </TabPanel>
          
          ))}
        </TabsBody>
      </Tabs>
          </div>
    );
  }