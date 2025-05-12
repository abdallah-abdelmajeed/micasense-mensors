import { useState } from 'react';
import './App.css';
import Overview from './components/Overview';
import Specifications from './components/Specifications';
import Integration from './components/Integration';
import PreFlight from './components/PreFlight';
import Acquisition from './components/Acquisition';
import Processing from './components/Processing';

function App() {
  const [activeSection, setActiveSection] = useState('overview');

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'overview':
        return <Overview />;
      case 'specifications':
        return <Specifications />;
      case 'integration':
        return <Integration />;
      case 'pre-flight':
        return <PreFlight />;
      case 'acquisition':
        return <Acquisition />;
      case 'processing':
        return <Processing />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation Bar */}
      <nav className="bg-blue-700 text-white px-6 py-3 sticky top-0 shadow-md z-10">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src="/images/camera-icon.svg" alt="MicaSense" className="w-8 h-8" />
            <h1 className="text-xl font-bold">MicaSense Sensors Guide</h1>
          </div>
          <div className="hidden md:flex space-x-6">
            <button
              className={`${activeSection === 'overview' ? 'border-b-2 border-white' : ''} px-1 py-1`}
              onClick={() => setActiveSection('overview')}
            >
              Overview
            </button>
            <button
              className={`${activeSection === 'specifications' ? 'border-b-2 border-white' : ''} px-1 py-1`}
              onClick={() => setActiveSection('specifications')}
            >
              Specifications
            </button>
            <button
              className={`${activeSection === 'integration' ? 'border-b-2 border-white' : ''} px-1 py-1`}
              onClick={() => setActiveSection('integration')}
            >
              Integration
            </button>
            <button
              className={`${activeSection === 'pre-flight' ? 'border-b-2 border-white' : ''} px-1 py-1`}
              onClick={() => setActiveSection('pre-flight')}
            >
              Pre-Flight
            </button>
            <button
              className={`${activeSection === 'acquisition' ? 'border-b-2 border-white' : ''} px-1 py-1`}
              onClick={() => setActiveSection('acquisition')}
            >
              Acquisition
            </button>
            <button
              className={`${activeSection === 'processing' ? 'border-b-2 border-white' : ''} px-1 py-1`}
              onClick={() => setActiveSection('processing')}
            >
              Processing
            </button>
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg text-sm">
            Share
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-blue-100 py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              MicaSense Multispectral Sensors
            </h1>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-600 mb-6">
              Comprehensive Operational Pipeline
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              A detailed guide covering sensor specifications, drone integration, pre-flight preparation,
              data acquisition best practices, and processing workflows for MicaSense RedEdge-MX
              Dual Camera and Altum/Altum-PT sensors.
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-white">
        <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row">
          {/* Sidebar */}
          <aside className="md:w-1/4 mb-8 md:mb-0 md:pr-8">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-24">
              <h3 className="text-lg font-bold mb-4 text-gray-800">Table of Contents</h3>
              <ul className="space-y-3">
                <li>
                  <button
                    className={`${activeSection === 'overview' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-500`}
                    onClick={() => setActiveSection('overview')}
                  >
                    Overview
                  </button>
                </li>
                <li>
                  <button
                    className={`${activeSection === 'specifications' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-500`}
                    onClick={() => setActiveSection('specifications')}
                  >
                    Sensor Specifications
                  </button>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('specifications')}
                      >
                        RedEdge-MX Dual Camera
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('specifications')}
                      >
                        Altum & Altum-PT
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className={`${activeSection === 'integration' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-500`}
                    onClick={() => setActiveSection('integration')}
                  >
                    Drone Integration
                  </button>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('integration')}
                      >
                        Mounting Options
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('integration')}
                      >
                        Gimbal Considerations
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('integration')}
                      >
                        DLS Integration
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className={`${activeSection === 'pre-flight' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-500`}
                    onClick={() => setActiveSection('pre-flight')}
                  >
                    Pre-Flight Pipeline
                  </button>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('pre-flight')}
                      >
                        Flight Planning
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('pre-flight')}
                      >
                        Calibration Target
                      </button>
                    </li>
                  </ul>
                </li>
                <li>
                  <button
                    className={`${activeSection === 'acquisition' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-500`}
                    onClick={() => setActiveSection('acquisition')}
                  >
                    Data Acquisition
                  </button>
                </li>
                <li>
                  <button
                    className={`${activeSection === 'processing' ? 'text-blue-600 font-medium' : 'text-gray-700'} hover:text-blue-500`}
                    onClick={() => setActiveSection('processing')}
                  >
                    Data Processing
                  </button>
                  <ul className="ml-4 mt-2 space-y-2">
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('processing')}
                      >
                        Software Selection
                      </button>
                    </li>
                    <li>
                      <button
                        className="text-sm text-gray-600 hover:text-blue-500"
                        onClick={() => setActiveSection('processing')}
                      >
                        Processing Steps
                      </button>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="md:w-3/4">
            <div className="bg-white p-6 rounded-lg">
              <div id="content-area">
                {renderActiveSection()}
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 py-8">
        <div className="container mx-auto px-6">
          <p className="text-center text-gray-600">
            © {new Date().getFullYear()} MicaSense Sensors Guide. All information is based on official MicaSense documentation.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
