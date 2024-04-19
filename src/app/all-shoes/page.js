const AllShoesPage = async () => {
  const res = await fetch(`http://localhost:5000/shoes`, { cache: "no-store" });
  const shoes = await res.json();

  return (
    <div className="text-center">
      <h1 className="text-2xl font-semibold">All Shoes</h1>

      <div className="flex justify-between flex-wrap gap-5 p-5">
        {shoes.map((shoe) => (
          <div key={shoe.id} className="card w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{shoe.title}</h2>
              <h3 className="text-xl">${shoe.price}</h3>
              <p>{shoe.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllShoesPage;
