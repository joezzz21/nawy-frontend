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
      <body>{children}</body>
    </div>
  )
}
