"use client";

const ErrorPage = ({ error, reset }) => {
  return (
    <div className="text-center">
      <h1 className="text-4xl text-red-500">Something went wrong!</h1>
      <p className="my-5">{error.message}</p>
      <button onClick={() => reset()} className="btn btn-primary">
        Try again
      </button>
    </div>
  );
};

export default ErrorPage;
