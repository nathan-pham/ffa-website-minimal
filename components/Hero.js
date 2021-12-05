export default function Hero() {

    return (

        <div className="w-full flex items-center">
            <div>
                <h1 className="text-6xl font-extrabold leading-tight">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-400 to-blue-500">Start building</span> the future of agriculture.
                </h1>
                <p className="my-8 text-gray-500 text-xl">Del Oro FFA is a youth organization that provides the best learning experience with an obsessive focus on leadership and career skills.</p>
                <button className="bg-black text-white rounded-md px-6 py-3 w-44 font-semibold border transition-colors border-black hover:bg-white hover:text-black">Start Learning</button>
            </div>

            {/* linear-gradient(to right, rgb(236, 72, 153), rgb(239, 68, 68), rgb(245, 158, 11)) */}
            {/* bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 */}

            {/* <h1 class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-pink-400 to-red-600">
  Hello, world!
</h1> */}
            <img src="illustrations/chicken.svg" />
        </div>

    )

}