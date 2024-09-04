"use client";
/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/context/cartContext";
import React from "react";

type Props = {};

const ShoppingCart = (props: Props) => {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    calculateTotal,
  } = useCart();

  return (
    <section className="flex flex-col">
      <div className="w-full max-w-sm xl:max-w-7xl lg:max-w-7xl md:max-w-2xl px-4 md:px-5 lg-6 mx-auto relative z-1">
        <div className="grid grid-cols-12">
          <div className="flex flex-col col-span-12 xl:col-span-8 lg:pr-8 pb-8 lg:py-1 w-full max-xl:max-w-3xl max-xl:mx-auto">
            <div className="flex items-center justify-between pb-8 border-b border-gray-300">
              <h2 className="font-manrope font-bold text-3xl leading-10 text-black">
                Carrinho
              </h2>
              <h2 className="font-manrope font-bold text-xl leading-8 text-gray-600">
                {cartItems.length} {cartItems.length === 1 ? "Item" : "Itens"}
              </h2>
            </div>
            <div className="grid grid-cols-12 mt-8 max-md:hidden pb-6 border-b border-gray-200">
              <div className="col-span-12 md:col-span-7">
                <p className="font-normal text-lg leading-8 text-gray-400">
                  Detalhes dos produtos
                </p>
              </div>
              <div className="col-span-12 md:col-span-5">
                <div className="grid grid-cols-5">
                  <div className="col-span-3">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Quantidade
                    </p>
                  </div>
                  <div className="col-span-2">
                    <p className="font-normal text-lg leading-8 text-gray-400 text-center">
                      Total
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              {cartItems.map(({ id, img, name, price, quantity }) => (
                <div
                  key={id}
                  className="flex flex-col min-[500px]:flex-row min-[500px]:items-center gap-5 py-6  border-b border-gray-200 group"
                >
                  <div className="lg:w-full xl:w-full  w-[300px] md:max-w-[100px]">
                    <img src={img} alt={name} className="mx-auto rounded-xl" />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-4 w-full">
                    <div className="md:col-span-2">
                      <div className="flex flex-col h-[120px] justify-start items-baseline gap-3">
                        <h6 className="font-semibold text-base leading-7 text-black">
                          {name}
                        </h6>

                        <h6 className="font-medium text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-emerald-600">
                          R$ {price}
                        </h6>
                      </div>
                    </div>

                    <div className="flex items-center max-[500px]:justify-center h-full max-md:mt-3">
                      <div className="flex items-center h-full">
                        <button
                          className="group rounded-l-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          onClick={() => {
                            if (quantity === 1) {
                              removeFromCart(id);
                            } else {
                              decreaseQuantity(id);
                            }
                          }}
                        >
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>

                        <input
                          type="text"
                          className="border-y border-gray-200 outline-none text-gray-900 font-semibold text-md w-full max-w-[53px] min-w-[50px] placeholder:text-gray-900 py-[15px]  text-center bg-transparent"
                          value={quantity}
                          disabled
                        />

                        <button
                          className="group rounded-r-xl px-5 py-[18px] border border-gray-200 flex items-center justify-center shadow-sm shadow-transparent transition-all duration-500 hover:bg-gray-50 hover:border-gray-300 hover:shadow-gray-300 focus-within:outline-gray-300"
                          onClick={() => increaseQuantity(id)}
                        >
                          <svg
                            className="stroke-gray-900 transition-all duration-500 group-hover:stroke-black"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                          >
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                            <path
                              d="M11 5.5V16.5M16.5 11H5.5"
                              stroke=""
                              stroke-opacity="0.2"
                              stroke-width="1.6"
                              stroke-linecap="round"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex items-center max-[500px]:justify-center md:justify-end max-md:mt-3 h-full">
                      <p className="font-bold text-md leading-8 text-gray-600 text-center transition-all duration-300 group-hover:text-emerald-600">
                        R$ {price * quantity},00
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" col-span-12 xl:col-span-4 bg-gray-50 w-full max-xl:px-6 max-w-3xl xl:max-w-lg mx-auto lg:pl-8 py-10 p-4">
            <h2 className="font-manrope font-bold text-3xl leading-10 text-black pb-8 border-b border-gray-300">
              Resumo do pedido
            </h2>
            <div className="mt-8">
              <div className="flex items-center justify-between pb-6">
                <p className="font-normal text-lg leading-8 text-black">
                  {cartItems.length} {cartItems.length === 1 ? "Item" : "Itens"}
                </p>
                <p className="font-medium text-lg leading-8 text-black">
                  R$ {calculateTotal()},00
                </p>
              </div>
              <form>
                <label className="flex  items-center mb-1.5 text-gray-600 text-sm font-medium">
                  Entrega
                </label>
                <div className="flex pb-6">
                  <div className="relative w-full">
                    <input
                      type="text"
                      className="block w-full h-11 pl-2 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-400 focus:outline-gray-400"
                      placeholder="Digite seu cep"
                    />
                  </div>
                </div>
                <label className="flex items-center mb-1.5 text-gray-400 text-sm font-medium">
                  Promo Code
                </label>
                <div className="flex pb-4 w-full">
                  <div className="relative w-full ">
                    <div className=" absolute left-0 top-0 py-2.5 px-4 text-gray-300"></div>
                    <input
                      type="text"
                      className="block w-full h-11 pr-11 pl-2 py-2.5 text-base font-normal shadow-xs text-gray-900 bg-white border border-gray-300 rounded-lg placeholder-gray-500 focus:outline-gray-400 "
                      placeholder="xxxx xxxx xxxx"
                    />
                  </div>
                </div>
                <div className="flex items-center border-b border-gray-200">
                  <button className="rounded-lg w-full bg-black py-2.5 px-4 text-white text-sm font-semibold text-center mb-8 transition-all duration-500 hover:bg-black/80">
                    Aplicar
                  </button>
                </div>
                <div className="flex items-center justify-between py-8">
                  <p className="font-medium text-xl leading-8 text-black">
                    {cartItems.length}{" "}
                    {cartItems.length === 1 ? "Item" : "Itens"}
                  </p>
                  <p className="font-semibold text-xl leading-8 text-emerald-600">
                    R$ {calculateTotal()},00
                  </p>
                </div>
                <button className="w-full text-center bg-emerald-600 rounded-xl py-3 px-6 font-semibold text-lg text-white transition-all duration-500 hover:bg-emerald-700">
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
