
import "./style.css";
//imagens importadas
import img1 from "../../../assets/car-22.jpg";
import img2 from "../../../assets/car-1.jpeg";
import img3 from "../../../assets/car-8.jpg";
import img4 from "../../../assets/car-5.jpg";
import img5 from "../../../assets/car-9.jpg";
import img6 from "../../../assets/car-10.jpg";
import img7 from "../../../assets/car-11.jpg";
import NavCliente from "../NavbarHome";

export default function Showroom() {
  const imgs = [img1, img2, img3, img4, img5, img6, img7];
  const carName = ['mercedez', 'audi', 'aston martin', 'mercedez', 'bmw', 'audi', 'mercedez'];
  const carPrice = ['30.000', '40.000', '50.000', '20.000', '35.000', '70.000', '25.000'];
  return (
    <div>
      <NavCliente />
      Bem vindo
      <div className="container">
        {imgs.map((value, index) => {
          return (
            <div className="container-img">
              <img
                className="bmw"
                src={imgs[index]}
                alt="carro tal"
                width={400}
              />
              <h1>Nome: {carName[index]}</h1>
              <h1>Preço: ${carPrice[index]}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}
