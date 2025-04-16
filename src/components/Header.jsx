import Navigation from "./Navigation";

const Header = () => (
  <header className="bg-teal-500 text-white p-4">
    <div className="container mx-auto flex justify-between items-center">
      <h1 className="text-2xl font-bold">My Portfolio</h1>
      <Navigation />
    </div>
  </header>
);

export default Header;
