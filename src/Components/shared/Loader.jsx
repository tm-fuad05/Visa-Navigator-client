export default function Loader() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="relative w-12 h-12">
        <div className="absolute inset-0 border-4 border-gray-100 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-t-primaryBlue rounded-full animate-spin"></div>
      </div>
    </div>
  );
}
