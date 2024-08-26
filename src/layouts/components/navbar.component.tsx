import Link from "next/link";

export interface NavbarProps {}

const Navbar = (NavbarProps) => {
  return (
    <div className="navbar">
      <Link href="/" className="btn btn-ghost text-xl gap-0 lowercase">
        Life <span className="text-2xl c">.</span>
      </Link>
    </div>
  );
};


export default Navbar