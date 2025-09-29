export default function Footer() {
    return (
        <footer className="bg-gradient-to-br from-black-pearl-950 to-black-pearl-900 w-full">
            <div className="max-w-7xl mx-auto px-4">
                <div className="lg:px-0 py-16 gap-4 grid lg:grid-cols-2 items-end">
                    <div className="col-span-full flex justify-center lg:justify-start">
                        <img src="/logo.svg" alt="alt" className="w-12" width="24" height="24" />
                    </div>
                
                    <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left text-black-pearl-100 flex flex-col items-center lg:items-start">
                        <h2 className="text-lg">
                            Transformez le chaos informationel à une clarté stratégique avec notre solution SaaS de gouvernance de données.
                        </h2>
                    </div>

                    <div className="space-y-3 mt-4 lg:mt-0 text-center lg:text-end text-black-pearl-100 flex flex-col items-center lg:items-end">
                        <p className="p-0 m-0 text-lg font-medium">
                            contact@clarusdatamanagement.com
                        </p>
                        <p className="p-0 m-0">
                            Paris, France
                        </p>
                    </div>
                </div>
                <div className="max-xl:px-4 py-8 border-t-2 border-black-pearl-50 flex flex-col lg:flex-row justify-between items-center text-black-pearl-50 gap-4">
                    <a href="#" aria-label="Link to LinkedIn">
                        <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="44" height="44" rx="5" fill="#034877"/><g clipPath="url(#a)" fill="#EFF8FF"><path d="M31.995 32v-.001H32v-7.335c0-3.588-.773-6.353-4.968-6.353-2.016 0-3.37 1.107-3.922 2.156h-.058v-1.82h-3.978v13.352h4.142v-6.612c0-1.74.33-3.424 2.486-3.424 2.124 0 2.156 1.987 2.156 3.536v6.5zM12.33 18.648h4.147V32H12.33zM14.402 12A2.4 2.4 0 0 0 12 14.402c0 1.326 1.076 2.424 2.402 2.424s2.401-1.099 2.401-2.424A2.403 2.403 0 0 0 14.402 12"/></g><defs><clipPath id="a"><path fill="#fff" d="M12 12h20v20H12z"/></clipPath></defs></svg>
                    </a>
                    <p className="text-center lg:text-end">
                        © 2025 Clarus Data Management. Tous droits réservés.
                    </p>
                </div>
            </div>
        </footer>
    );
}