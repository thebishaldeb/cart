"use strict";
export default function productsReducer(INIT_PRODUCTS) {
  INIT_PRODUCTS = [
    {
      id: 1,
      image: "https://www.adorama.com/alc/wp-content/uploads/2017/06/gopro.jpg",
      title: "Nikon",
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
      days: 4,
      date: {
        start:"04 Jan'19",
        end:"07 Jan'19"
      },
      refund: 3000,
      rent: 200
    },
    {
      id: 2,
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2017/06/shutterstock_288688235-825x465.jpg",
      title: "Canon",
      description:
        "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
      days: 9,
      date: {
        start:"22 Jan'19",
        end:"30 Jan'19"
      },
      refund: 2500,
      rent: 100
    },
    {
      id: 3,
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2017/06/pentax-e1496317062423.jpg",
      title: "Pentax",
      description:
        'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"',
      days: 3,
      date: {
        start:"07 Feb'19",
        end:"09 Feb'19"
      },
      refund: 2000,
      rent: 210
    },
    {
      id: 4,
      image:
        "https://www.adorama.com/alc/wp-content/uploads/2017/06/fujifilm.jpg",
      title: "Panasonic",
      description:
        "If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.",
      days: 15,
      date: {
        start:"11 Mar'19",
        end:"25 Mar'19"
      },
      refund: 2110,
      rent: 120
    },
    {
      id: 5,
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/SONY_Cyber-shot_DSC_W530.JPG/800px-SONY_Cyber-shot_DSC_W530.JPG",
      title: "Philips",
      description:
        "Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      days: 8,
      date: {
        start:"03 Apr'19",
        end:"10 Apr'19"
      },
      refund: 3500,
      rent: 200
    },
    {
      id: 6,
      image: "https://www.adorama.com/alc/wp-content/uploads/2017/06/canon.jpg",
      title: "Sony",
      description:
        "All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. ",
      days: 1,
      date: {
        start:"01 Apr'19",
        end:"01 Apr'19"
      },
      refund: 1000,
      rent: 250
    }
  ];
  return INIT_PRODUCTS;
}
