export async function getProducts() {
  const res = await fetch(
    "https://683cb76b199a0039e9e338a5.mockapi.io/api/product"
  );

  if (!res.ok) {
    throw new Error("fetch is faild");
  }
  return res.json();
}
