export default function ImageSection() {

    return (

        <div className="w-full grid grid-cols-3 grid-rows-2 gap-6 h-screen relative z-[-1]">
            <div className="relative col-span-3 row-span-2 md:col-span-2">
                <img src="/images/3AE33D24-12E0-47C9-80AA-666A8E1C0884.jpg" alt="" className="absolute inset-0 w-full h-full object-cover bg-gray-100 sm:rounded-lg" />
            </div>
            <div className="relative hidden md:block">
                <img src="images/30DEC9A9-36F6-49D3-82FD-8540DC77443C.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
            <div className="relative hidden md:block">
                <img src="images/F397AEEF-FAC9-462D-BCFA-908EBB7284B4.jpg" alt="" className="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-100" />
            </div>
        </div>

    )

}