import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import ShoppingCart from "@/app/ShoppingCart/page";

type Props = {
  children: React.ReactNode;
};

const CartModal = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent className="flex min-w-max overflow-auto">
        <SheetHeader>
          <ShoppingCart />
          {/* <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </SheetDescription> */}
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default CartModal;
