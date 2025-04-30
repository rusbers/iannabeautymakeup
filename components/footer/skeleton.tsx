import Logo from "../logo"

export function FooterSkeleton() {
  return (
    <footer className="pt-20">
      <div className="logo-lines">
        <Logo className="mb-4 shrink-0" />
      </div>
      <div className="container">
        <div className="pb-6 flex flex-col items-center">
          {/* Get from CMS */}
          <div className="flex flex-col gap-2 items-center mb-6">
            <div className="w-[300px] h-4 animate-pulse bg-gray-600 rounded-lg"></div>
            <div className="w-[280px] h-4 animate-pulse bg-gray-600 rounded-lg"></div>
            <div className="w-[150px] h-4 animate-pulse bg-gray-600 rounded-lg"></div>
          </div>
          {/* Get from CMS */}
          <div className="flex flex-wrap gap-4 items-center">
            <div className="rounded-full size-6 animate-pulse p-3 bg-gray-600"></div>
            <div className="rounded-full size-6 animate-pulse p-3 bg-gray-600"></div>
            <div className="rounded-full size-6 animate-pulse p-3 bg-gray-600"></div>
            <div className="rounded-full size-6 animate-pulse p-3 bg-gray-600"></div>
          </div>
        </div>
      </div>
    </footer>
  )
}
