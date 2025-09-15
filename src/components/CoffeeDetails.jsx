import { useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const lodar = useLoaderData();
  const  { name, photo, price, taste, quantity ,details} = lodar;
  return (
    <div className="flex justify-center items-center h-screen">
        <div className="card card-side bg-base-100 shadow-sm">
      <figure>
        <img
          src={photo}
          alt={name}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Price: {price}</p>
        <p>Taste: {taste}</p>
        <p>Quantity: {quantity}</p>
        <p>Details: {details}</p>
      </div>
    </div>
    </div>
  );
};

export default CoffeeDetails;
