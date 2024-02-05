const data = async () => {
  await fetch('https://dummyjson.com/products/1')
    .then((res) => res.json())
    .then((json) => console.log(json));
};

console.log(data());
