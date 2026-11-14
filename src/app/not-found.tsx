import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 bg-primary-container px-6 text-center text-on-primary">
      <p className="font-label text-label-md font-bold uppercase tracking-widest text-secondary-fixed">404</p>
      <h1 className="text-display-sm md:text-display-lg">This road doesn&apos;t lead anywhere</h1>
      <p className="max-w-md text-on-primary-container">The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back on the route.</p>
      <Link href="/" className="rounded-xl bg-secondary px-8 py-4 font-label text-label-lg text-on-secondary shadow-cta hover:bg-secondary-container">
        Back to home
      </Link>
    </main>
  );
}
