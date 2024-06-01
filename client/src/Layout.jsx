const Layout = ({ children, title }) => {
    return (
        <>
            <div className="w-full flex flex-col pb-20">
                <header className="text-3xl bg-green-400 text-center font-bold py-3">
                    {title}
                </header>
                {children}
                <footer className='bg-green-200 font-light absolute bottom-0 p-4 w-full text-center'>Created by Zbad, Insijam Creative Team</footer>
            </div>
        </>
    )
}

export default Layout