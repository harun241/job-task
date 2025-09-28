import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar";


function MainLayout() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* Navbar */}
      <Navbar />

      {/* Main content */}
      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6 text-center text-sm text-gray-600 dark:text-gray-400">
          © 2025 My Website. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

export default MainLayout;
