import Link from "next/link";

export default function NavBar() {
    return <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-800 p-4">
        <div className="text-white cursor-pointer">
            <Link href={"/"}>Burger</Link>
        </div>

        <div className="text-white cursor-pointer">
            <Link href={"/cart"}>Cart</Link>
        </div>
    </nav>;
}