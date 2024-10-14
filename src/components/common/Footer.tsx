export default function Footer() {
    return (
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-gray-800 bg-gray-900">
            <p className="text-xs text-gray-500">© 2024 Aura. All rights reserved.</p>
            <nav className="sm:ml-auto flex gap-4 sm:gap-6">
                <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400 transition-colors" href="#">
                    Terms of Service
                </a>
                <a className="text-xs hover:underline underline-offset-4 text-gray-400 hover:text-purple-400 transition-colors" href="#">
                    Privacy
                </a>
            </nav>
        </footer>
    )
}