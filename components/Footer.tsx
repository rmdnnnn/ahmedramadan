export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#262626] mt-auto">
      <div className="max-w-[640px] mx-auto px-6 py-8">
        <p className="text-sm text-muted text-center">
          © {currentYear}. Built with Next.js and Tailwind CSS.
        </p>
      </div>
    </footer>
  );
}

