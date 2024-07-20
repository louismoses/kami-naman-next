import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const TopNav: NextPage<Props> = ({}) => {
  return (
    <nav className="fixed p-8 flex w-full max-w-[1224px] m-auto left-0 right-0 bg-red-300 justify-between">
      <Link href={"/home"}>
        <div>logo</div>
      </Link>
      <Link href={"/"}>
        <div>index</div>
      </Link>
    </nav>
  );
};

export default TopNav;
