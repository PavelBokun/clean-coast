import "./App.css";
import ProductList from "./ProductList/ProductList";
import Title from "./ProductList/Title";

function App() {
  const products = [
    {
      id: 1,
      name: "Унитаз-компакт Элисса косой выпуск, боковой подвод, белый ОСКОЛЬСКАЯ КЕРАМИКА",
      price: 213.01,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/898f756c2521c3a615fe280cabca4253/image_1_00043433.jpg",
      imageSecond: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/f8d0d9ee302b7a2ba7710e662f6e4dc1/image_2_00043433.jpg",
      imageThrid:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/bea99e2c3fd43db9858349307cf59c2a/image_3_00043433.jpg",
      d:1
    },
    {
      id: 2,
      name: `Унитаз-компакт "Лига" (эконом: 2-реж., полипроп, кос вып) SANTEK`,
      price: 149.99,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/c2d5f5ecf0cb7562cffbee6e5b5d461b/image_5_00103023.jpg",
      imageSecond: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/d9f400a01958f9b4efa68fab889e7d88/image_2_00103023.jpg",
      imageThrid:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/2b91ebca7836db2489f149b373692c75/image_4_00103023.jpg",
      
      d:2
    },
    {
      id: 3,
      name: `Унитаз-компакт "Алькор" (эконом: 2-реж., полипроп, кос вып) SANTEK` ,
      price: 199.99,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/8911545a378f3cb8bf1826b2dd5bf6dd/image_5_00103025.jpg",
      imageSecond: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/c515c74582e5bd576005aaf17bf618f5/image_1_00103025.jpg",
      imageThrid:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/435e89d812b18cd89c5dfd6a79080f84/image_4_00103025.jpg",
      d:3
    },
    {
      id: 4,
      name: `Унитаз-компакт "Уно" (эконом: 2-реж., полипроп, пласт крепеж, softclose, кос вып) SANTEK` ,
      price: 199.99,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/a4c34ad5e1be7605a8f09830febc3aae/image_5_00103026.jpg",
      imageSecond: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/33edefcfcd99fd9267fe8aac9894b612/image_2_00103026.jpg",
      imageThrid:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/65c57975efde97a9a25d4d6c278f6390/image_4_00103026.jpg",
      d:4
    },
    {
      id: 4,
      name: `Унитаз-компакт Ирида, ОСКОЛЬСКАЯ КЕРАМИКА.` ,
      price: 199.99,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/631ff28a53889bca2ef185e0bd7a8a86/image_1_00126459.jpg",
      imageSecond:"https://avatars.mds.yandex.net/i?id=3e93ed1b90c2a3a4f8c9010880e32d43-5274396-images-thumbs&n=13",
      imageThrid:'https://avatars.mds.yandex.net/i?id=8676e9799c3d0f0fe59b8c6668ddda70cb00d40d-4078438-images-thumbs&n=13',
      d:5
    },
    {
      id: 5,
      name: `Унитаз-компакт "Бореаль" антивсплеск (стандарт: 2-реж., дюро, метал крепеж, softclose, кос вып) SANTEK.` ,
      price: 314.33,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/5904adff7e9ea2ade0923a4b92e9ac77/image_4_00103053.jpg",
      imageSecond:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/c15176bee23f766261a4876b7802a7c0/image_2_00103053.jpg",
      imageThrid:'https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/93ce6d68ddcd12f8ef1be84943484409/image_3_00103053.jpg',
      d:6
    },
    {
      id: 6,
      name: `Унитаз-компакт "Нео Лайт" (станд, 2-реж., дюро, метал крепеж, softclose, тонкое, кос вып) SANTEK` ,
      price: 385.62,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/710aef6b216b7fc7b01f996ad75fc7df/image_4_00103059.jpg",
      imageSecond:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/118f0b29324cc72d1d719365edee67eb/image_2_00103059.jpg",
      imageThrid:'https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/750aa6dbbaf55677dfb97348320387c4/image_3_00103059.jpg',
      d:6
    },
    {
      id: 7,
      name: `Унитаз-компакт "Остин" (станд, 2-реж., дюро, метал крепеж, softclose, тонкое, гор вып) SANTEK` ,
      price: 415.19,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/c32de53f1f9a394801a144414316f6a3/image_5_00103062.jpg",
      imageSecond:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/dd5ac22efc7e4d27fc86f38e35233a46/image_2_00103062.jpg",
      imageThrid:'https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/5d853d9873bab51a9965c2bfb6667fcb/image_4_00103062.jpg',
      d:7
    },
    {
      id: 8,
      name: `Унитаз-компакт "Нео" rimless БЕЗОБОДКОВЫЙ (стандарт: 2-реж., дюро, метал крепеж, softclose, тонкое, гор вып) SANTEK` ,
      price: 482.12,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/b451e4ac0abd19335c8162b9b435d574/image_4_00103066.jpg",
      imageSecond:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/dcb150b909a6b949632072c9708e8fd0/image_2_00103066.jpg",
      imageThrid:'https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/118b49dbaf18c24387f9d85ba261907e/image_3_00103066.jpg',
      d:8
    },
    {
      id: 9,
      name: `Унитаз-компакт "Римини" (эконом: 1-реж полипроп, кос вып) SANTEK` ,
      price: 212.60,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/4ae9ca86e42988a2bc3f6a63c0448662/image_1_00103046.jpg",
      imageSecond:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/5d108c75093e989540c72f87df86f243/image_3_00103046.jpg",
      imageThrid:'https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/62804d0aa836aff1ed4decc2c1c155b9/image_4_00103046.jpg',
      d:9
    },{
      id: 10,
      name: `Унитаз-компакт "Анимо" (эконом: 1-реж., полипроп, кос вып) SANTEK` ,
      price: 212.60,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/72d2ffe3f13626e14bb005694a3cf70b/image_1_00103030.jpg",
      imageSecond:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/28a3495a12c0340e0b685e30e452fc89/image_2_00103030.jpg",
      imageThrid:'https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/d81474add2fea1cc826d4d46a5fb5231/image_4_00103030.jpg',
      d:10
    },
    
    // Добавьте другие товары по вашему усмотрению
  ];
  return (
    <>
    <Title />
      <ProductList products={products} />
    </>
  );
}

export default App;
