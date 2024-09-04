"use client";
/* eslint-disable @next/next/no-img-element */
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import { useCart } from "@/context/cartContext";

type Props = {
  children: React.ReactNode;
  id: number;
  img: string;
  title: string;
  description: string;
  valor: number;
};

const Modal = ({ children, id, title, description, img, valor }: Props) => {
  const { cartItems, addToCart, removeFromCart } = useCart();

  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex max-w-4xl">
        <div className="flex">
          <img
            src={img}
            alt={title}
            className="object-cover max-w-md h-[200px] xl:h-[400px] lg:h-[400px] md:h-[400px] rounded-2xl"
          />
        </div>
        <DialogHeader className="pl-1 xl:pl-6 lg:pl-6 md:pl-6">
          <DialogTitle className="flex font-extrabold text-3xl">
            {title}
          </DialogTitle>
          <DialogDescription className="flex xl:text-md lg:text-md md:text-md xl:pt-8 lg:pt-8 md:pt-8 pt-2">
            {description}
          </DialogDescription>
          <DialogDescription className="flex font-light text-black text-xl xl:pt-8 lg:pt-8 md:pt-8 pt-2">
            R$ {valor}
          </DialogDescription>

          <div className="flex w-full items-center justify-center pt-8">
            <DialogClose asChild>
              <Button
                className="w-3/4 outline-none"
                onClick={() =>
                  addToCart({
                    id,
                    img,
                    name: title,
                    price: valor,
                    quantity: 1,
                  })
                }
              >
                Adicionar ao carrinho
              </Button>
            </DialogClose>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
