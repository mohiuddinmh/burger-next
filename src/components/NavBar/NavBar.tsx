export default function NavBar() {
    return <nav className="sticky top-0 z-50 flex items-center justify-between bg-gray-800 p-4">
        <div className="text-white cursor-pointer">
            <div>Burger</div>
        </div>

        <div className="text-white cursor-pointer">
            <div>Cart</div>
        </div>
    </nav>;
}