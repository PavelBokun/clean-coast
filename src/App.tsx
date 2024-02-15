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
      d:4
    },
    {
      id: 2,
      name: `Унитаз-компакт "Лига" (эконом: 2-реж., полипроп, кос вып) SANTEK`,
      price: 149.99,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/c2d5f5ecf0cb7562cffbee6e5b5d461b/image_5_00103023.jpg",
      imageSecond: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/d9f400a01958f9b4efa68fab889e7d88/image_2_00103023.jpg",
      imageThrid:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/2b91ebca7836db2489f149b373692c75/image_4_00103023.jpg",
      
      d:4
    },
    {
      id: 3,
      name: `Унитаз-компакт "Алькор" (эконом: 2-реж., полипроп, кос вып) SANTEK` ,
      price: 199.99,
      image: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/8911545a378f3cb8bf1826b2dd5bf6dd/image_5_00103025.jpg",
      imageSecond: "https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/c515c74582e5bd576005aaf17bf618f5/image_1_00103025.jpg",
      imageThrid:"https://www.bereg.by/upload/aoptima_imagick_resizes/toBestFit_Y/w_500_h_500/blur_1/435e89d812b18cd89c5dfd6a79080f84/image_4_00103025.jpg",
      d:4
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
