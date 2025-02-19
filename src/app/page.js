import Link from "next/link";

export const metadata = {
  title: "Home Page",
  description: "This is home page",
};

const HomePage = async () => {
  const res = await fetch("http://localhost:5000/shoes", {
    cache: "no-store",
  });
  const shoes = await res.json();

  throw new Error("Error from home page!");

  return (
    <div className="text-center my-5">
      <h1 className="text-4xl">Home Page</h1>

      <div className="flex justify-between flex-wrap p-5">
        {shoes.slice(0, 3).map((shoe) => (
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

      <Link href="/all-shoes" className="btn btn-primary">
        See more
      </Link>
    </div>
  );
};

export default HomePage;
