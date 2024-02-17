export default function ApartmentsLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div className="flex justify-center">
        <div className="w-4/5 flex flex-col items-center justify-center mt-10">
          {children}
        </div>
      </div>
    )
  }