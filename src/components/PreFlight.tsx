import React from 'react';

const PreFlight: React.FC = () => {
  return (
    <div className="preflight-section">
      <h2 className="text-2xl font-bold mb-6 section-title">Pre-Flight Pipeline</h2>

      <p className="mb-6">
        Proper pre-flight preparation is essential for collecting high-quality multispectral data with MicaSense
        sensors. This section covers flight planning considerations and calibration procedures that should be
        completed before each flight mission.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Flight Planning</h3>
      <div className="mb-10">
        <p className="mb-4">
          Effective flight planning ensures optimal data collection for your specific application. When planning
          flights with MicaSense sensors, consider the following key parameters:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Flight Parameters</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Flight Altitude:</strong> Typically 100-120m above ground level for agricultural applications, balancing coverage area with resolution</li>
              <li><strong>Ground Sample Distance (GSD):</strong> 5-8 cm/pixel for RedEdge-MX, 5 cm/pixel for Altum multispectral bands</li>
              <li><strong>Flight Speed:</strong> Generally 4-10 m/s, depending on altitude and overlap requirements</li>
              <li><strong>Mission Area:</strong> Define the area of interest with adequate buffer zones</li>
              <li><strong>Battery Requirements:</strong> Calculate based on flight area, speed, and aircraft efficiency</li>
            </ul>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Coverage & Overlap</h4>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Forward Overlap:</strong> 75-80% minimum (higher for 3D reconstruction)</li>
              <li><strong>Side Overlap:</strong> 65-70% minimum (higher for dense vegetation)</li>
              <li><strong>Flight Direction:</strong> Prefer flying along the longest axis of the field</li>
              <li><strong>Cross Patterns:</strong> Consider double-grid patterns (cross flights) for improved reconstruction in challenging terrain or vegetation</li>
              <li><strong>Flight Lines:</strong> Ensure consistent altitude across all flight lines relative to ground level</li>
            </ul>
          </div>
        </div>

        <h4 className="text-lg font-medium mt-6 mb-3">Flight Planning Software</h4>
        <p className="mb-4">
          Several flight planning applications can be used to create automated missions for MicaSense sensors:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="p-4 border rounded-lg">
            <h5 className="font-semibold mb-2">DJI GS Pro / Pilot</h5>
            <p className="text-sm">
              For DJI platforms. Configure using RedEdge-MX or Altum camera parameters. Ensure adequate overlap settings.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h5 className="font-semibold mb-2">Mission Planner</h5>
            <p className="text-sm">
              For ArduPilot platforms. Define camera parameters manually and set appropriate trigger distance.
            </p>
          </div>
          <div className="p-4 border rounded-lg">
            <h5 className="font-semibold mb-2">UgCS</h5>
            <p className="text-sm">
              Advanced planning with terrain following and built-in MicaSense camera profiles.
            </p>
          </div>
        </div>

        <div className="warning-box">
          <h4 className="font-semibold mb-2">Important Planning Considerations</h4>
          <ul className="list-disc pl-6 space-y-1">
            <li>Plan flights for optimal sun conditions (10am-2pm, avoiding shadows where possible)</li>
            <li>Account for wind conditions (reduce speed in higher winds)</li>
            <li>Consider terrain variations and adjust flight altitude accordingly</li>
            <li>Break large areas into multiple flights if needed</li>
            <li>Include starting and ending calibration target captures in your flight timeline</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Calibration Target</h3>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="mb-4">
              The Calibrated Reflectance Panel (CRP) is a critical component for accurate data calibration.
              It provides a reference of known reflectance values, which is essential for converting raw
              imagery to accurate reflectance measurements.
            </p>

            <h4 className="text-lg font-medium mt-6 mb-3">Calibration Procedure</h4>
            <ol className="list-decimal pl-6 mb-4 space-y-3">
              <li>
                <strong>Setup the calibration panel:</strong> Place the panel on a flat surface away from shadows
                and reflective objects before flight.
              </li>
              <li>
                <strong>Capture calibration images:</strong> Take images of the panel from approximately 1-1.5m height,
                ensuring the panel occupies a significant portion of the image.
              </li>
              <li>
                <strong>Capture at least 3 images:</strong> This provides redundancy and improves calibration accuracy.
              </li>
              <li>
                <strong>Record panel serial number:</strong> The serial number corresponds to specific calibration
                values provided by MicaSense.
              </li>
              <li>
                <strong>Repeat after flight:</strong> Capture calibration images again after landing to account for
                changing light conditions.
              </li>
            </ol>
          </div>
          <div>
            <img
              src="https://ext.same-assets.com/966869137/2369203879.png"
              alt="Calibration Panel"
              className="sensor-image mb-4"
            />
            <p className="text-sm text-gray-600 italic text-center mb-6">
              Calibrated Reflectance Panel for MicaSense sensors
            </p>

            <div className="info-box">
              <h4 className="font-semibold mb-2">Panel Care</h4>
              <p>
                The calibration panel's reflective surface must be kept clean and protected from scratches or damage.
                Store the panel in its protective case when not in use, and avoid touching the reflective surface.
                If the panel becomes dirty, clean it according to MicaSense guidelines.
              </p>
            </div>
          </div>
        </div>

        <h4 className="text-lg font-medium mt-6 mb-3">Pre-Flight Checklist</h4>
        <div className="bg-gray-50 p-6 rounded-lg mb-6">
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Ensure MicaSense sensor is securely mounted</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Connect power and confirm sensor status LEDs indicate proper operation</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Verify DLS 2 is properly mounted with clear view of the sky</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Format SD card if needed (ensure sufficient storage space)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Check camera settings via WiFi interface (exposure, capture mode, etc.)</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Verify GPS signal on both the drone and DLS 2 sensor</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Set up and capture calibration panel images before flight</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Upload flight plan to the drone and verify parameters</span>
            </li>
            <li className="flex items-start">
              <span className="inline-block w-6 h-6 bg-blue-100 text-blue-700 text-center rounded mr-3 font-bold">✓</span>
              <span>Check weather conditions (wind speed, cloud cover, sun angle)</span>
            </li>
          </ul>
        </div>

        <div className="tip-box">
          <h4 className="font-semibold mb-2">Alternative Calibration Methods</h4>
          <p className="mb-2">
            If you don't have access to a MicaSense calibration panel, alternative methods include:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li>Deploying ground targets with known reflectance values in the survey area</li>
            <li>Using empirical line calibration with field spectroradiometer measurements</li>
            <li>Relying solely on DLS 2 data (less accurate but still valuable)</li>
          </ul>
          <p className="mt-2">
            For best results, the MicaSense Calibrated Reflectance Panel should be used whenever possible.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PreFlight;
