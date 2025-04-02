import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-4 text-center">
      <h1 className="text-6xl font-bold mb-6" style={{ fontFamily: "'Anton', Impact, sans-serif" }}>404</h1>
      <h2 className="text-2xl mb-4">Seite nicht gefunden</h2>
      <p className="mb-8 max-w-md">Die von Ihnen gesuchte Seite existiert nicht oder wurde möglicherweise verschoben.</p>
      <Link href="/" 
            className="px-6 py-3 bg-[#e01e1e] text-white font-bold rounded-sm hover:bg-[#b31818] transition duration-300"
            style={{ fontFamily: "'Anton', Impact, sans-serif" }}>
        Zurück zur Startseite
      </Link>
    </div>
  )
}
