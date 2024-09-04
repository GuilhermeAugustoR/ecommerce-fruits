"use client";
/* eslint-disable @next/next/no-img-element */
import { AlignJustify, ShoppingCart } from "lucide-react";
import React from "react";
import CartModal from "./cartModal";
import { useCart } from "@/context/cartContext";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";

type Props = {};

const Navbar = (props: Props) => {
  const { cartItems } = useCart();
  const itemsInCart = cartItems.length;

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
            Site commerce
          </span>
        </a>

        <div className="hidden w-full md:block md:w-auto md:mr-2 mr-0" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4rounded-lg bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                aria-current="page"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                Produtos
              </a>
            </li>

            <li className="relative">
              <CartModal>
                <a
                  href="#"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-400 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  <ShoppingCart />
                  {itemsInCart > 0 && (
                    <span className="absolute top-0 lg:right-0 md:right-0 -mt-2 -mr-3 lg:-mt-3 md:-mt-3 md:-mr-3 bg-emerald-500 text-white rounded-full px-1 py-[1px] text-xs">
                      {itemsInCart}
                    </span>
                  )}
                </a>
              </CartModal>
            </li>
          </ul>
        </div>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="bg-transparent outline-none border-none hover:bg-transparent"
              >
                <AlignJustify
                  className="flex w-fit size-[32px]"
                  color="black"
                />
              </Button>
            </SheetTrigger>

            <SheetContent side={"top"} className="bg-background">
              <SheetHeader>
                <SheetDescription>
                  <div className="w-auto" id="navbar-default">
                    <ul className="font-medium flex flex-col p-1 rtl:space-x-reverse gap-2">
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          aria-current="page"
                        >
                          Inicio
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Sobre
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-700 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                        >
                          Produtos
                        </a>
                      </li>

                      <li className="relative">
                        <CartModal>
                          <a
                            href="#"
                            className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-emerald-400 md:p-0 dark:text-white md:dark:hover:text-emerald-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                          >
                            <ShoppingCart />
                            {itemsInCart > 0 && (
                              <span className="absolute top-0 lg:right-0 md:right-0 -mt-2 -mr-3 lg:-mt-3 md:-mt-3 md:-mr-3 bg-emerald-500 text-white rounded-full px-1 py-[1px] text-xs">
                                {itemsInCart}
                              </span>
                            )}
                          </a>
                        </CartModal>
                      </li>
                    </ul>
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
