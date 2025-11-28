import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";

export default function DoxAnyone() {
  const handleDoxNow = () => {
    window.open("https://discord.com", "_blank");
  };

  return (
    <div className="min-h-screen bg-[#000000] text-white flex flex-col animate-fadeIn">
      <Header />
      <main className="flex-1 w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">
          {/* Header Section */}
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black mb-2 text-blue-500">
              Dox Anyone
            </h1>
            <p className="text-sm text-gray-400 max-w-2xl mx-auto">
              Expose individuals on our platform
            </p>
          </div>

          {/* Pricing Section */}
          <div className="bg-slate-800 border-2 border-slate-700 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
              Pricing
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              <div className="bg-slate-900 rounded-lg p-4 border border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <p className="text-xs font-semibold text-blue-400 mb-1">
                  PAKISTAN
                </p>
                <p className="text-xl font-bold text-blue-500">299</p>
                <p className="text-xs text-blue-400 font-semibold">PKR</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 border border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <p className="text-xs font-semibold text-blue-400 mb-1">
                  UNITED STATES
                </p>
                <p className="text-xl font-bold text-blue-500">1.10</p>
                <p className="text-xs text-blue-400 font-semibold">USD</p>
              </div>
              <div className="bg-slate-900 rounded-lg p-4 border border-blue-500 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300">
                <p className="text-xs font-semibold text-blue-400 mb-1">
                  INDIA
                </p>
                <p className="text-xl font-bold text-blue-500">99</p>
                <p className="text-xs text-blue-400 font-semibold">INR</p>
              </div>
            </div>
          </div>

          {/* Instructions Section */}
          <div className="bg-slate-800 border-2 border-slate-700 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8">
            <h2 className="text-lg sm:text-xl font-bold mb-4 text-white">
              How It Works
            </h2>
            <div className="space-y-3 sm:space-y-4">
              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Click Dox Button
                  </h3>
                  <p className="text-xs text-gray-400">
                    Start your doxing submission process.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Discord Ticket
                  </h3>
                  <p className="text-xs text-gray-400">
                    Create a support ticket on Discord with details.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Prepare Content
                  </h3>
                  <p className="text-xs text-gray-400">
                    Gather photo and details for verification.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Payment
                  </h3>
                  <p className="text-xs text-gray-400">
                    Complete payment. Moderators verify submission.
                  </p>
                </div>
              </div>

              <div className="flex gap-3">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-7 w-7 rounded-md bg-blue-600 text-white font-bold text-xs hover:bg-blue-700 transition-colors">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white mb-0.5">
                    Publish
                  </h3>
                  <p className="text-xs text-gray-400">
                    After verification, post goes live on website.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-4 sm:mt-6">
            <button
              onClick={handleDoxNow}
              className="inline-flex items-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              Dox Now
              <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
            </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
