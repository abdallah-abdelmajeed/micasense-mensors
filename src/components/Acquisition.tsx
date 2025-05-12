import React from 'react';

const Acquisition: React.FC = () => {
  return (
    <div className="acquisition-section">
      <h2 className="text-2xl font-bold mb-6 section-title">Data Acquisition</h2>

      <p className="mb-6">
        The data acquisition phase is crucial for obtaining high-quality multispectral imagery. This section covers
        best practices for collecting data with MicaSense sensors, including flight execution, data management,
        and common challenges to avoid.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Flight Execution</h3>
      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Key Operational Steps</h4>
            <ol className="list-decimal pl-6 mb-4 space-y-3">
              <li>
                <strong>Pre-flight calibration:</strong> Capture calibration panel images as described in the Pre-Flight section.
              </li>
              <li>
                <strong>Sensor warm-up:</strong> Power on the sensor at least 5 minutes before flight to allow thermal stabilization.
              </li>
              <li>
                <strong>Automated flight:</strong> Execute the pre-planned flight mission using your chosen flight control software.
              </li>
              <li>
                <strong>Monitoring:</strong> Monitor battery levels, image capture status (if available), and weather conditions.
              </li>
              <li>
                <strong>Post-flight calibration:</strong> Capture calibration panel images again after landing.
              </li>
            </ol>
            <p>
              For optimal results, maintain consistent altitude and speed throughout the mission to ensure uniform
              ground sampling distance (GSD) across the entire dataset.
            </p>
          </div>
          <div>
            <img
              src="https://ext.same-assets.com/966869137/4409203213975"
              alt="Drone in Flight"
              className="sensor-image mb-4"
            />
            <p className="text-sm text-gray-600 italic text-center">
              Drone platform with MicaSense camera during data collection
            </p>
          </div>
        </div>

        <h4 className="text-lg font-medium mt-6 mb-3">Operational Modes</h4>
        <table className="spec-table mb-6">
          <thead>
            <tr>
              <th>Capture Mode</th>
              <th>Description</th>
              <th>Best For</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Timer Mode</td>
              <td>Camera captures images at a fixed time interval (e.g., 1 second)</td>
              <td>Most mapping missions with consistent flight speed</td>
            </tr>
            <tr>
              <td>Overlap Mode</td>
              <td>Camera uses GPS to calculate position and triggers based on distance traveled</td>
              <td>Variable-speed flights or complex terrain</td>
            </tr>
            <tr>
              <td>External Trigger</td>
              <td>Camera is triggered by external signal from the drone flight controller</td>
              <td>Precise positioning or integration with RTK/PPK systems</td>
            </tr>
            <tr>
              <td>Manual Capture</td>
              <td>Images captured via WiFi command or physical button press</td>
              <td>Calibration images or spot sampling (not mapping)</td>
            </tr>
          </tbody>
        </table>

        <div className="warning-box">
          <h4 className="font-semibold mb-2">Important Flight Considerations</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Maintain consistent altitude above ground level, especially in variable terrain</li>
            <li>Monitor for changing light conditions (clouds, haze) and consider re-flying in consistent lighting if needed</li>
            <li>Verify image capture is happening throughout the flight (check status LEDs if visible)</li>
            <li>Avoid sudden yaw movements that could affect image alignment</li>
            <li>Consider reflying mission boundaries with cross-flight lines for improved reconstruction</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Data Management</h3>
      <div className="mb-10">
        <p className="mb-4">
          Proper data management is essential for maintaining organization across multiple flights and ensuring
          all necessary information is available for processing.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">File Organization</h4>
            <p className="mb-4">
              MicaSense sensors produce multiple image files for each capture - one file per spectral band.
              A typical 10-minute flight can generate thousands of files.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Directory Structure:</strong> Create separate folders for each flight/date</li>
              <li><strong>Naming Convention:</strong> Include date, location, and flight number in folder names</li>
              <li><strong>Keep Original Data:</strong> Always maintain a backup of the raw, unprocessed data</li>
              <li><strong>Calibration Images:</strong> Store calibration images in clearly marked subfolders</li>
              <li><strong>Metadata:</strong> Save flight logs and any field notes in the same directory</li>
            </ul>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Storage Requirements</h4>
            <p className="mb-4">
              Multispectral data requires significant storage capacity:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>RedEdge-MX:</strong> ~5MB per capture (5 bands at ~1MB each)</li>
              <li><strong>RedEdge-MX Dual:</strong> ~10MB per capture (10 bands total)</li>
              <li><strong>Altum:</strong> ~12MB per capture (5 multispectral bands + thermal)</li>
              <li><strong>Altum-PT:</strong> ~16MB per capture (includes panchromatic band)</li>
              <li><strong>Typical Flight:</strong> 10-20GB for a 20-acre field at standard resolution</li>
            </ul>
            <p className="mt-2">
              Plan for 64GB+ SD cards and sufficient backup storage for all flights.
            </p>
          </div>
        </div>

        <h4 className="text-lg font-medium mt-6 mb-3">Data Transfer & Verification</h4>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <ol className="list-decimal pl-6 space-y-3">
            <li>
              <strong>Transfer data immediately after flights:</strong> Copy all data from the SD card to your computer
              or external storage.
            </li>
            <li>
              <strong>Verify file integrity:</strong> Ensure all expected files are present. Each capture should include
              all spectral bands and metadata.
            </li>
            <li>
              <strong>Check image quality:</strong> Review sample images for blur, proper exposure, and complete coverage.
            </li>
            <li>
              <strong>Create backups:</strong> Store data in at least two separate locations to prevent loss.
            </li>
            <li>
              <strong>Document conditions:</strong> Record any unusual conditions during the flight (weather changes, equipment issues, etc.).
            </li>
          </ol>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Troubleshooting Common Issues</h3>
      <div>
        <div className="info-box mb-6">
          <h4 className="font-semibold mb-2">Visual Inspection of Data Quality</h4>
          <p>
            After data acquisition, it's important to perform a quick visual inspection of the captured images
            before leaving the field. This allows you to identify any issues that might require reflight while
            you're still on-site.
          </p>
        </div>

        <table className="spec-table">
          <thead>
            <tr>
              <th>Issue</th>
              <th>Possible Causes</th>
              <th>Solutions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Missing images</td>
              <td>SD card errors, power issues, trigger failure</td>
              <td>Check connections, format SD card, verify trigger settings</td>
            </tr>
            <tr>
              <td>Blurry images</td>
              <td>Excessive vibration, fast flight speed, incorrect focus</td>
              <td>Add vibration dampening, reduce speed, check camera mount</td>
            </tr>
            <tr>
              <td>Poor alignment between bands</td>
              <td>Camera movement between band captures</td>
              <td>Ensure solid mounting, add dampening, reduce flight speed</td>
            </tr>
            <tr>
              <td>Overexposed/underexposed images</td>
              <td>Changing light conditions, incorrect exposure settings</td>
              <td>Use auto-exposure, avoid flying in rapidly changing conditions</td>
            </tr>
            <tr>
              <td>Incomplete coverage</td>
              <td>Flight planning errors, interrupted mission</td>
              <td>Verify mission parameters, ensure adequate overlap</td>
            </tr>
            <tr>
              <td>GPS data missing</td>
              <td>Poor GPS signal, DLS 2 connectivity issues</td>
              <td>Check connections, ensure clear view of sky for GPS antennas</td>
            </tr>
          </tbody>
        </table>

        <div className="tip-box mt-6">
          <h4 className="font-semibold mb-2">Field Data Verification Tips</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Bring a laptop to the field for immediate data verification</li>
            <li>Use MicaSense's free ImageReview tool for quick data checks</li>
            <li>Have spare SD cards and batteries to avoid delays</li>
            <li>Document any areas of concern for special attention during processing</li>
            <li>If substantial issues are found, refly while still on-site if conditions permit</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Acquisition;
