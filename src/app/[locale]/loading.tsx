export default function Loading() {
  return (
    <div className="section-padding min-h-[60vh] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-primary-200 border-t-primary-500 rounded-full animate-spin mx-auto" />
        <p className="mt-4 text-neutral-500">Loading...</p>
      </div>
    </div>
  );
}
