import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import "./app.css";

// Standard Inline SVGs to replace the missing Lucide brand icons
const GithubIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ size = 20 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
            <a href="/" className="text-xl font-bold tracking-tighter">
              Rex<span className="text-sky-500">.dev</span>
            </a>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors"><GithubIcon size={20} /></a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-sky-500 transition-colors"><LinkedinIcon size={20} /></a>
            </div>
          </div>
        </nav>

        <main className="flex-grow">
          <Outlet />
        </main>

        <footer className="bg-slate-900 text-white py-8 text-center">
          <p className="text-sm text-slate-400">© 2026 Rex Core. All rights reserved.</p>
        </footer>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

