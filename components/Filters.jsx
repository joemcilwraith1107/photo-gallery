

export default function Header({ tags }) {

    const menu = tags.map((filter) => (
        <button key={filter} className="flex-auto flex-nowrap p-1 text-xs sm:text-sm lg:text-base text-center font-normal text-gray-600 hover:text-gray-900 active:text-black" value={filter} >
            {filter}
        </button>
    ));

    return (
        <header className="container mx-auto flex flex-row justify-between items-center space-x-4 bg-white py-6 px-6">
            <nav className="flex flex-row flex-wrap w-full justify-center content center p">
                {menu}
            </nav>
        </header>
    )
}