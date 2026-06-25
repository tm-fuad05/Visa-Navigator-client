import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <a href="/" className="flex items-end active:scale-95 transition-transform">
      <span className="text-3xl font-bold text-primaryBlue tracking-tighter">
        V
      </span>
      <span className="text-xl font-bold tracking-tight text-gray-900 font-logo">
        isorix
      </span>
    </a>
  );
}
