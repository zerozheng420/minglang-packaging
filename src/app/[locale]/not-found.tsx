import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  // Use a simple 404 message since we don't have locale-specific translations available in not-found
  return (
    <div className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="text-center container-page">
        <h1 className="text-6xl font-bold text-primary-500">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-neutral-800">Page Not Found</h2>
        <p className="mt-2 text-neutral-500">The page you are looking for does not exist.</p>
        <Link href="/" className="mt-8 inline-block bg-primary-500 text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-600 transition-colors">
          Back to Home
        </Link>
      </div>
    </div>
  );
}
