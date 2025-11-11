import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-white via-green-50/30 to-green-100/40">
        {/* Navbar */}
        <nav className="relative z-50 flex items-center justify-between w-full py-5 px-6 md:px-12 lg:px-20">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center text-white font-bold text-xl">
              B
            </div>
            <span className="text-xl font-bold text-gray-900">BuildIt</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1 bg-white/80 backdrop-blur-sm rounded-full px-2 py-2 shadow-sm border border-gray-200">
            <a href="#" className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition">
              Home
            </a>
            <a href="#features" className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition">
              Features
            </a>
            <a href="#testimonials" className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition">
              Testimonials
            </a>
            <a href="#contact" className="px-5 py-2 rounded-full text-sm font-medium text-gray-700 hover:bg-green-50 hover:text-green-700 transition">
              Contact
            </a>
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/app?state=signin"
              className="px-5 py-2.5 text-sm font-medium text-gray-700 hover:text-green-700 transition"
            >
              Sign In
            </Link>
            <Link
              to="/app?state=signup"
              className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white text-sm font-medium rounded-full transition shadow-lg shadow-green-600/20 hover:shadow-green-600/30"
            >
              Get Started Free
            </Link>
          </div>

          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed inset-0 z-[100] lg:hidden">
            <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
            <div className="absolute right-0 top-0 bottom-0 w-72 bg-white shadow-2xl p-6 flex flex-col">
              <button
                onClick={() => setMenuOpen(false)}
                className="self-end p-2 hover:bg-gray-100 rounded-lg transition mb-8"
              >
                <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
              <div className="flex flex-col gap-2">
                <a href="#" className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition">
                  Home
                </a>
                <a href="#features" className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition">
                  Features
                </a>
                <a href="#testimonials" className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition">
                  Testimonials
                </a>
                <a href="#contact" className="px-4 py-3 text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition">
                  Contact
                </a>
              </div>
              <div className="mt-auto flex flex-col gap-3">
                <Link to="/app?state=signin" className="px-4 py-3 text-center text-gray-700 border border-gray-300 rounded-lg hover:bg-gray-50 transition">
                  Sign In
                </Link>
                <Link to="/app?state=signup" className="px-4 py-3 text-center bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
                  Get Started Free
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Hero Section */}
        <div className="relative px-6 md:px-12 lg:px-20 py-16 md:py-24">
          {/* Decorative elements */}
          <div className="absolute top-20 right-10 w-64 h-64 bg-green-400/20 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-green-300/20 rounded-full blur-3xl" />
          
          <div className="relative max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Content */}
              <div className="space-y-8">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 border border-green-200 rounded-full">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-600"></span>
                  </span>
                  <span className="text-sm font-medium text-green-800">AI-Powered Resume Builder</span>
                </div>

                {/* Heading */}
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                    Create Your Perfect Resume in{" "}
                    <span className="bg-gradient-to-r from-green-600 to-green-700 bg-clip-text text-transparent">
                      Minutes
                    </span>
                  </h1>
                  <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                    Let AI craft a professional resume tailored to your experience. No design skills needed—just your career story.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4">
                  <Link
                    to="/app"
                    className="group flex items-center gap-2 px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-medium rounded-xl transition shadow-lg shadow-green-600/25 hover:shadow-green-600/40 hover:-translate-y-0.5"
                  >
                    Start Building Free
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:translate-x-1 transition">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                  <button className="flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-700 font-medium rounded-xl border border-gray-300 transition shadow-sm">
                    <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                    Watch Demo
                  </button>
                </div>

                {/* Social Proof */}
                <div className="flex items-center gap-8 pt-4">
                  <div className="flex -space-x-3">
                    {[
                      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
                      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
                      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
                      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100"
                    ].map((src, i) => (
                      <img
                        key={i}
                        src={src}
                        alt={`user-${i}`}
                        className="w-10 h-10 rounded-full border-2 border-white object-cover"
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#16a34a">
                          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Trusted by 50,000+ job seekers</p>
                  </div>
                </div>
              </div>

              {/* Right Visual */}
              <div className="relative hidden lg:block">
                <div className="relative bg-white rounded-2xl shadow-2xl p-8 border border-gray-200">
                  {/* Mock Resume Preview */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full" />
                      <div className="flex-1">
                        <div className="h-4 bg-gray-200 rounded w-32 mb-2" />
                        <div className="h-3 bg-gray-100 rounded w-24" />
                      </div>
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="space-y-3">
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-5/6" />
                      <div className="h-3 bg-gray-200 rounded w-4/6" />
                    </div>
                    <div className="h-px bg-gray-200" />
                    <div className="space-y-3">
                      <div className="h-3 bg-green-100 rounded w-24" />
                      <div className="h-3 bg-gray-200 rounded w-full" />
                      <div className="h-3 bg-gray-200 rounded w-3/4" />
                    </div>
                  </div>
                  
                  {/* Floating badge */}
                  <div className="absolute -top-4 -right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium">
                    ✨ AI Generated
                  </div>
                </div>
                
                {/* Decorative dots */}
                <div className="absolute -bottom-8 -left-8 w-32 h-32 opacity-50">
                  <div className="grid grid-cols-4 gap-2">
                    {[...Array(16)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
          * {
            font-family: 'Inter', sans-serif;
          }
        `}
      </style>
    </>
  );
};

export default Hero;