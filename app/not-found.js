import Link from 'next/link';
export default function NotFound() {
  return (
    <div>
      <div className="font-ranga text-4xl">404-page not found 🎃</div>
      <div className="font-robot text-2xl">
        Try going to the{' '}
        <Link className="link" href="/">
          home page
        </Link>
      </div>
    </div>
  );
}
