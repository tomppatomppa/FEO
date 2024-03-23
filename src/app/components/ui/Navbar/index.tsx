import Link from "next/link";

export const Navbar = () => {
  return (
    <div className="sticky z-1 top-0 w-full h-24 bg-black opacity-90">
      <Wrapper>
        <Logo />
        <NavItems />
      </Wrapper>
    </div>
  );
};

const Wrapper = ({ children }: any) => {
  return (
    <div className="flex h-full justify-between items-center px-4 md:px-20">
      {children}
    </div>
  );
};
const Logo = () => {
  return (
    <div className="relative">
      <label className="text-4xl">FEO</label>
      <label className="text-md">Productions</label>
    </div>
  );
};

const NavItems = () => {
  return (
    <div className="flex gap-4">
      <Link href={"/"}>About</Link>
      <Link href={"/"}>Contact</Link>
    </div>
  );
};
