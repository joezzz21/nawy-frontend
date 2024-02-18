import NavBar from "./components/NavBar"

export const metadata = {
  title: 'Nawy | Apartments',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div>
      <head>
        <title>{metadata.title}</title>
        {/* Other metadata tags can be added here */}
      </head>
      <header>
        <NavBar />
      </header>
      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col items-center justify-center mt-10">
          {children}
        </div>
      </div>
    </div>
  )
}
