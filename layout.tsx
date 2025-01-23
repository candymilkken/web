import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ subsets: ["vietnamese"] })

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`min-h-screen flex items-center justify-center p-4 bg-white ${montserrat.className}`}>
      <div className="w-full max-w-md bg-[#564adc] rounded-lg shadow-lg overflow-hidden relative">
        <div className="h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto bg-white">{children}</div>
        </div>
      </div>
    </div>
  )
}

