// "use client";
// import React from "react";
// import CartItem from "@/components/CartItem";
// import { useCartStore } from "@/Store/CartStore";
// import Link from "next/link";

// function CartPage() {
//   const cart = useCartStore((state) => state.items);
//   const clearCart = useCartStore((state) => state.clearCart);
//   const totalPrice = useCartStore((state)=> state.getTotalPrice())



//   return (
//     <section className="container mx-auto py-10 px-5">
//       {cart.length > 0 ? (
//         <>
//           <h1 className="text-3xl font-bold text-amber-950 mb-6">
//             Your Shopping Cart 🛒
//           </h1>

//           <div className="flex flex-col gap-8">
//             {cart.map((item) => (
//               <CartItem
//                 key={item.id}
//                 id={item.id}
//                 name={item.name}
//                 price={item.price}
//                 qty={item.qty}
//                 image={item.image}
//               />
//             ))}
//           </div>

//           <div className="mt-10 flex justify-between items-center flex-wrap gap-5 border-t pt-6">
//             <div className="text-xl font-bold text-amber-950">
//               Total Price: <span className="text-green-700">${totalPrice.toFixed(2)}</span>
//             </div>
//             <button
//               onClick={clearCart}
//               className="px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full shadow-md transition-all"
//             >
//               Clear Cart 🗑️
//             </button>
//           </div>
//         </>
//       ) :
//        (
//         <div className="flex flex-col justify-center items-center h-[60vh] text-center">
//           <h2 className="text-3xl font-bold text-amber-950 mb-4">
//             Your cart is empty 😢
//           </h2>
//           <p className="text-gray-600 mb-6">
//             Seems like you haven't added anything yet.
//           </p>
//           <Link
//             href="/menu"
//             className="bg-amber-900 text-white px-6 py-2 rounded-full hover:bg-amber-800 transition-all"
//           >
//             Go to Menu
//           </Link>
//         </div>
//       )
//       }
//     </section>
//   );
// }

// export default CartPage;

"use client";

import CartItem from "@/components/CartItem";
import { useCartStore } from "@/Store/CartStore";
import React from "react";
import Link from "next/link";
import { ShoppingBasket } from "lucide-react";
import { motion } from "framer-motion";

export default function CartPage() {
  const cart = useCartStore((state) => state.items  );
  const clearCart = useCartStore((state) => state.clearCart);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.qty * item.price, 0);

  if (cart.length === 0) {
    return (
      <div className="container mx-auto text-center py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center items-center gap-6"
        >
          <ShoppingBasket size={48} className="text-amber-950" />
          <h2 className="text-3xl font-bold text-amber-950">Your cart is empty</h2>
          <p className="text-amber-800">Looks like you haven’t added anything yet.</p>
          <Link href="/menu">
            <button className="px-6 py-2 rounded-full text-white bg-amber-950 hover:bg-amber-900 transition-all">
              Back to Menu
            </button>
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-950 mb-8 text-center">Your Cart</h1>

      <div className="space-y-10">
        {cart.map((item) => (
          <CartItem
            key={item.id}
            id={item.id}
            name={item.name}
            price={item.price}
            qty={item.qty}
            image={item.image}
          />
        ))}
      </div>

      <div className="mt-12 border-t pt-8 flex flex-col items-end">
        <h3 className="text-2xl font-bold text-amber-950">Total: ${totalPrice.toFixed(2)}</h3>
        <div className="flex gap-4 mt-4">
          <button
            onClick={clearCart}
            className="px-6 py-2 rounded-full border border-amber-800 text-amber-800 hover:bg-amber-100 transition-all"
          >
            Clear Cart
          </button>
          <button
            className="px-6 py-2 rounded-full bg-amber-950 text-white hover:bg-amber-900 transition-all"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
