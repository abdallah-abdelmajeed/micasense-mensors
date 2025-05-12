import React from 'react';

const Integration: React.FC = () => {
  return (
    <div className="integration-section">
      <h2 className="text-2xl font-bold mb-6 section-title">Drone Integration</h2>

      <p className="mb-6">
        Proper integration of MicaSense sensors with your drone platform is critical for collecting high-quality
        data. This section covers mounting options, gimbal considerations, and the integration of the
        Downwelling Light Sensor (DLS 2) for accurate reflectance measurements.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Mounting Options</h3>
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="mb-4">
              MicaSense sensors can be attached to your aircraft using at least two of the four provided threaded
              mounting points with M3 x 0.5 screws. The sensor should be mounted in a position that:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Maintains a nadir (straight down) orientation during flight</li>
              <li>Avoids obstructions in the camera's field of view</li>
              <li>Minimizes vibration from the aircraft</li>
              <li>Allows for adequate cooling</li>
              <li>Provides protection during takeoff and landing</li>
            </ul>
            <p>
              For heavier platforms with landing gear, the sensor can be mounted directly to the aircraft frame,
              while smaller platforms may require a custom mount or gimbal system.
            </p>
          </div>
          <div>
            <img
              src="https://ext.same-assets.com/966869137/2369203879.png"
              alt="MicaSense Sensor Mounting"
              className="sensor-image mb-4"
            />
            <p className="text-sm text-gray-600 italic text-center">
              Example of a MicaSense camera mounted on a drone platform
            </p>
          </div>
        </div>

        <div className="info-box">
          <h4 className="font-semibold mb-2">RedEdge-MX Dual Camera Mounting</h4>
          <p>
            For the RedEdge-MX Dual Camera System, both cameras must be mounted securely and aligned to ensure
            proper image synchronization. MicaSense provides a custom mounting plate for this purpose, which should be
            used to maintain proper alignment between the two cameras.
          </p>
          <img
            src="https://ext.same-assets.com/4044102406/531234094.png"
            alt="RedEdge-MX Dual Camera Mounting"
            className="mt-4 sensor-image max-w-sm mx-auto"
          />
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Gimbal Considerations</h3>
      <div className="mb-8">
        <p className="mb-4">
          Using a gimbal with MicaSense sensors is highly recommended for maintaining a consistent nadir view throughout
          the flight, which is essential for creating accurate orthomosaics and reflectance maps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <h4 className="text-lg font-medium mb-3">Gimbal Requirements</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Must support the weight of the sensor (231g for RedEdge-MX, 460g for Altum-PT)</li>
              <li>Should provide 2-axis (pitch and roll) or 3-axis stabilization</li>
              <li>Must maintain nadir orientation throughout flight</li>
              <li>Should minimize vibration transfer from the drone</li>
              <li>Should allow for easy cable routing for power and communication</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium mb-3">Compatible Gimbals</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>DJI Skyport for M300 (for Altum-PT)</li>
              <li>Gremsy Pixy U</li>
              <li>FOXTECH G38 and G52</li>
              <li>Custom gimbals by integration specialists</li>
            </ul>
            <p className="text-sm text-gray-600 italic">
              Note: When using a gimbal, ensure it doesn't obstruct the camera's field of view or block the DLS 2 sensor.
            </p>
          </div>
        </div>

        <img
          src="https://ext.same-assets.com/4044102406/3209824301.png"
          alt="MicaSense with Gimbal"
          className="sensor-image mb-4 max-w-lg mx-auto"
        />
        <p className="text-sm text-gray-600 italic text-center mb-6">
          Example of a MicaSense camera mounted on a gimbal system
        </p>

        <div className="warning-box">
          <h4 className="font-semibold mb-2">Important Gimbal Considerations</h4>
          <p>
            When using a gimbal with MicaSense sensors, consider the following:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Ensure the gimbal is properly balanced to prevent motor strain</li>
            <li>Position the sensor in landscape orientation (unless flight planning specifically requires portrait)</li>
            <li>Secure all cables to prevent them from interfering with gimbal movement</li>
            <li>If using a DLS 2 sensor, ensure it remains unobstructed and level relative to the aircraft</li>
            <li>Calibrate the gimbal before each flight for optimal performance</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">DLS Integration</h3>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div>
            <p className="mb-4">
              The Downwelling Light Sensor (DLS 2) is a critical component for accurate reflectance calibration.
              It measures the ambient light conditions during image capture, allowing for compensation of
              lighting variations during post-processing.
            </p>

            <h4 className="text-lg font-medium mt-6 mb-3">DLS 2 Mounting Requirements</h4>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Position:</strong> Mount on the top of the aircraft where it will not be shadowed by the aircraft or other components</li>
              <li><strong>Orientation:</strong> The light sensor must face upward with a clear view of the sky</li>
              <li><strong>Level:</strong> Must be parallel to the top of the aircraft (not necessarily level with the ground)</li>
              <li><strong>Connection:</strong> Connected to the camera via the DLS port using the provided cable</li>
            </ul>
          </div>
          <div>
            <img
              src="https://ext.same-assets.com/4044102406/3262587070.png"
              alt="DLS 2 Sensor"
              className="sensor-image mb-4"
            />
            <p className="text-sm text-gray-600 italic text-center">
              MicaSense DLS 2 sensor for accurate light measurement
            </p>
          </div>
        </div>

        <h4 className="text-lg font-medium mt-6 mb-3">DLS 2 Integration Diagram</h4>
        <img
          src="https://ext.same-assets.com/966869137/1500002520881/image-15.png"
          alt="DLS 2 Integration Diagram"
          className="sensor-image mb-4 max-w-lg mx-auto"
        />
        <p className="text-sm text-gray-600 italic text-center mb-6">
          Diagram showing proper DLS 2 connection to the MicaSense camera
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3">DLS 2 Installation Tips</h4>
        <div className="tip-box">
          <ul className="list-disc pl-6 space-y-2">
            <li>Install the DLS 2 away from electromagnetic interference sources (GPS antennas, telemetry radios, etc.)</li>
            <li>Use the provided mounting screws to secure the DLS 2 to a flat surface on top of the aircraft</li>
            <li>Ensure the GPS receiver on the DLS 2 has a clear view of the sky for accurate position and sun angle data</li>
            <li>Route the cable away from motors and electronic speed controllers to minimize electrical noise</li>
            <li>If the aircraft tilts during flight, the DLS 2 will still provide accurate measurements as it includes an IMU to compensate for aircraft attitude</li>
            <li>For best results, use both the DLS 2 and a calibration reflectance panel for complete calibration</li>
          </ul>
        </div>

        <p className="mt-6">
          Proper integration of the DLS 2 sensor is essential for collecting accurate reflectance data. It works
          together with the calibration reflectance panel (captured before and after flights) to provide
          comprehensive calibration data for post-processing.
        </p>
      </div>
    </div>
  );
};

export default Integration;
