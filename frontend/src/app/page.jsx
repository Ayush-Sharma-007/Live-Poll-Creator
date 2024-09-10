import React from 'react'

const Home = () => {
  return (
    <>
  {/* Hero */}
  <div className="h-screen bg-gradient-to-b from-violet-950 via-violet-300 to-violet-950">
    <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8">
      {/* Title */}
      <div className="max-w-3xl text-center mx-auto">
        <h1 className="block font-medium text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        Create. Share. Engage in Real-Time Polls!
        </h1>
      </div>
      {/* End Title */}
      <div className="max-w-3xl text-center mx-auto">
        <p className="text-lg text-black">
        Create live polls and surveys in seconds. Share them instantly. Watch responses live.
        </p>
      </div>
      {/* Buttons */}
      <div className="text-center">
        <a
          className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
          href="/createpoll"
        >
          Create New Poll
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
      <div className="text-center">
        <a
          className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:shadow-blue-700/50 py-3 px-6"
          href="#"
        >
          Explore Your Polls
          <svg
            className="shrink-0 size-4"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </a>
      </div>
      {/* End Buttons */}
    </div>
  </div>
  {/* End Hero */}
</>

  )
}

export default Home