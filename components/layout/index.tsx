type TPropsLayout = {
  children: JSX.Element | any;
};

const Layout = ({ children }: TPropsLayout) => {
  return (
    <main className="flex justify-center bg-gray-100">
      <div className="max-w-md h-[100vh] bg-white">
        <div>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
