/* eslint-disable @next/next/no-img-element */
import Modal from "@/components/modal";
import React from "react";

type Props = {};

const products = [
  {
    id: 1,
    name: "Abacaxi",
    img: "https://images.unsplash.com/photo-1587883012610-e3df17d41270?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YWJhY2F4aXxlbnwwfHwwfHx8MA%3D%3D",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus fugit voluptatibus nisi quam. Modi quod, dolor at distinctio eaque quae, vel ducimus sit repellendus odio voluptate et pariatur. Harum!",
    valor: 10,
  },
  {
    id: 2,
    name: "Morango",
    img: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus fugit voluptatibus nisi quam. Modi quod, dolor at distinctio eaque quae, vel ducimus sit repellendus odio voluptate et pariatur. Harum!",
    valor: 15,
  },
  {
    id: 3,
    name: "Tangerina",
    img: "https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&w=2865&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus fugit voluptatibus nisi quam. Modi quod, dolor at distinctio eaque quae, vel ducimus sit repellendus odio voluptate et pariatur. Harum!",
    valor: 8,
  },
  {
    id: 4,
    name: "Banana",
    img: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmFuYW5hfGVufDB8fDB8fHww",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus fugit voluptatibus nisi quam. Modi quod, dolor at distinctio eaque quae, vel ducimus sit repellendus odio voluptate et pariatur. Harum!",
    valor: 30,
  },
  {
    id: 5,
    name: "Maça",
    img: "https://images.unsplash.com/photo-1587590227264-0ac64ce63ce8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWElQzMlQTdhJTIwdmVybWVsaGF8ZW58MHx8MHx8fDA%3D",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus fugit voluptatibus nisi quam. Modi quod, dolor at distinctio eaque quae, vel ducimus sit repellendus odio voluptate et pariatur. Harum!",
    valor: 10,
  },
  {
    id: 6,
    name: "Cereja",
    img: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?q=80&w=2244&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. In temporibus fugit voluptatibus nisi quam. Modi quod, dolor at distinctio eaque quae, vel ducimus sit repellendus odio voluptate et pariatur. Harum!",
    valor: 40,
  },
];

const BestSellers = (props: Props) => {
  return (
    <section className="flex flex-col pt-12 p-2 lg:p-10">
      <div>
        <h2 className="text-4xl font-light">Mais Vendidos</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:p-2 gap-8 p-4 lg:p-6">
        {products.map(({ id, name, description, img, valor }) => (
          <>
            <Modal
              id={id}
              title={name}
              description={description}
              valor={valor}
              img={img}
            >
              <div
                key={id}
                className="flex flex-col md:w-[330px] md:h-[480px] w-[380px] h-[450px] shadow-sm rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={img}
                  alt={name}
                  className="object-cover max-w h-[250px]"
                />

                <div className="flex flex-col p-2">
                  <span className="pt-4 text-gray-700">{name}</span>
                  <span className="pt-2 text-sm text-gray-700">
                    {description}
                  </span>
                  <span className="pt-5 text-xl font-thin">R$ {valor}</span>
                </div>
              </div>
            </Modal>
          </>
        ))}
      </div>
    </section>
  );
};

export default BestSellers;
