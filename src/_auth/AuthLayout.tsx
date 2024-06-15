import { Outlet, Navigate } from "react-router-dom";

const Authlayout = () => {
  const isAutenficated = false;

  return (
    <>
      {isAutenficated ? (
        <Navigate to="./" />
      ) : (
        <>
          <section className="flex flex-1 justify-center items-center flex-col py-10">
            <Outlet />
          </section>
          <img
            src="/assets/images/side2.jpg"
            alt="logo"
            className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
          />
        </>
      )}
    </>
  );
};

export default Authlayout;
