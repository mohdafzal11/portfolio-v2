export function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-8">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row justify-between items-center bg-black">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Portfolio. All rights reserved.
                </p>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        Twitter
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        LinkedIn
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground">
                        GitHub
                    </a>
                </div>
            </div>
        </footer>
    )
}
