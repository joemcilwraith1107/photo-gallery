export default function BackButton({}) {
  return (
    <div className="right-0 top-0 flex items-center p-4">
      <div className="rounded-full bg-black/60 text-white/75 hover:bg-black hover:text-white sm:p-1 md:p-4 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
          />
        </svg>
      </div>
    </div>
  )
}
