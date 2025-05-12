import React from 'react';

const Overview: React.FC = () => {
  return (
    <div className="overview-section">
      <h2 className="text-2xl font-bold mb-6 section-title">Overview</h2>

      <p className="mb-6">
        This report outlines a comprehensive operational pipeline for the MicaSense RedEdge-MX Dual Camera system
        and the MicaSense Altum/Altum-PT sensors. The pipeline covers sensor specifications, drone integration
        including gimbal and sun sensor fit, pre-flight preparations, data acquisition best practices, a detailed data
        processing workflow, and an overview of software options and key output products.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="feature-card">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">RedEdge-MX Dual Camera System</h3>
          <img
            src="https://ext.same-assets.com/1935660927/531234094.png"
            alt="RedEdge-MX Dual Camera System"
            className="sensor-image mb-4"
          />
          <p>
            The RedEdge-MX Dual Camera System combines two 5-band multispectral cameras to provide a 10-band solution.
            This system is ideal for advanced vegetation research and monitoring, offering high-resolution data capture
            across the visible and near-infrared spectrum.
          </p>
        </div>

        <div className="feature-card">
          <h3 className="text-xl font-semibold mb-3 text-blue-700">Altum & Altum-PT</h3>
          <img
            src="https://ext.same-assets.com/1935660927/1784852694.png"
            alt="Altum-PT Camera"
            className="sensor-image mb-4"
          />
          <p>
            The MicaSense Altum and Altum-PT combine multiple spectral bands with thermal imaging capabilities.
            The Altum-PT adds a high-resolution panchromatic band for enhanced spatial detail, making it ideal for
            precise agricultural monitoring and analysis.
          </p>
        </div>
      </div>

      <div className="info-box">
        <h4 className="font-semibold mb-2">Sensor Status Note</h4>
        <p>
          Both the RedEdge-MX Dual Camera and the original Altum are no longer in production, having been succeeded
          by newer models. However, they remain widely used in the field, and this guide applies to these sensors as well as their successors.
        </p>
      </div>

      <h3 className="text-xl font-semibold mt-8 mb-4">Key Applications</h3>
      <ul className="list-disc pl-6 mb-6 space-y-2">
        <li>Precision agriculture and crop health monitoring</li>
        <li>Forestry and vegetation analysis</li>
        <li>Environmental monitoring and conservation</li>
        <li>Research and development in remote sensing</li>
        <li>Water resource management</li>
        <li>Land use and land cover classification</li>
      </ul>

      <h3 className="text-xl font-semibold mt-8 mb-4">Pipeline Overview</h3>
      <div className="bg-gray-50 p-6 rounded-lg">
        <ol className="space-y-4">
          <li className="step-container">
            <div className="step-number">1</div>
            <div className="step-content">
              <h4 className="font-semibold">Sensor Specifications</h4>
              <p>Understanding the technical details and capabilities of your specific MicaSense sensor.</p>
            </div>
          </li>
          <li className="step-container">
            <div className="step-number">2</div>
            <div className="step-content">
              <h4 className="font-semibold">Drone Integration</h4>
              <p>Mounting options, gimbal considerations, and DLS 2 sun sensor integration.</p>
            </div>
          </li>
          <li className="step-container">
            <div className="step-number">3</div>
            <div className="step-content">
              <h4 className="font-semibold">Pre-Flight Preparation</h4>
              <p>Flight planning, calibration procedures, and equipment checks.</p>
            </div>
          </li>
          <li className="step-container">
            <div className="step-number">4</div>
            <div className="step-content">
              <h4 className="font-semibold">Data Acquisition</h4>
              <p>Best practices for capturing high-quality multispectral data in the field.</p>
            </div>
          </li>
          <li className="step-container">
            <div className="step-number">5</div>
            <div className="step-content">
              <h4 className="font-semibold">Data Processing</h4>
              <p>Workflow for converting raw imagery into actionable information and analysis products.</p>
            </div>
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Overview;
