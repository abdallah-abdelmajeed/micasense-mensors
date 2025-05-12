import React from 'react';

const Specifications: React.FC = () => {
  return (
    <div className="specifications-section">
      <h2 className="text-2xl font-bold mb-6 section-title">Sensor Specifications</h2>

      <p className="mb-6">
        MicaSense offers several multispectral sensors designed for UAV integration and agricultural remote sensing.
        Below are the detailed specifications for the RedEdge-MX Dual Camera System and the Altum/Altum-PT models.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">RedEdge-MX Dual Camera System</h3>
      <div className="mb-8">
        <img
          src="https://ext.same-assets.com/1935660927/531234094.png"
          alt="RedEdge-MX Dual Camera System"
          className="sensor-image mb-6 max-w-md mx-auto"
        />

        <p className="mb-4">
          The RedEdge-MX Dual Camera System consists of two synchronized 5-band cameras: the
          standard RedEdge-MX and the RedEdge-MX Blue. Together, they provide 10 spectral bands
          for comprehensive vegetation analysis and research applications.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3">Spectral Bands</h4>
        <table className="spec-table mb-6">
          <thead>
            <tr>
              <th>Band</th>
              <th>Center Wavelength (nm)</th>
              <th>Bandwidth (nm)</th>
              <th>Camera</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blue</td>
              <td>475</td>
              <td>20</td>
              <td>RedEdge-MX</td>
            </tr>
            <tr>
              <td>Green</td>
              <td>560</td>
              <td>20</td>
              <td>RedEdge-MX</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>668</td>
              <td>10</td>
              <td>RedEdge-MX</td>
            </tr>
            <tr>
              <td>RedEdge</td>
              <td>717</td>
              <td>10</td>
              <td>RedEdge-MX</td>
            </tr>
            <tr>
              <td>Near IR</td>
              <td>842</td>
              <td>40</td>
              <td>RedEdge-MX</td>
            </tr>
            <tr>
              <td>Coastal Blue</td>
              <td>444</td>
              <td>10</td>
              <td>RedEdge-MX Blue</td>
            </tr>
            <tr>
              <td>Blue-Green</td>
              <td>531</td>
              <td>10</td>
              <td>RedEdge-MX Blue</td>
            </tr>
            <tr>
              <td>Green-Red</td>
              <td>650</td>
              <td>10</td>
              <td>RedEdge-MX Blue</td>
            </tr>
            <tr>
              <td>Red Edge 2</td>
              <td>740</td>
              <td>10</td>
              <td>RedEdge-MX Blue</td>
            </tr>
            <tr>
              <td>Near IR 2</td>
              <td>860</td>
              <td>10</td>
              <td>RedEdge-MX Blue</td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-lg font-medium mt-6 mb-3">Technical Specifications</h4>
        <table className="spec-table mb-6">
          <tbody>
            <tr>
              <td width="180"><strong>Weight</strong></td>
              <td>231g per camera (462g total)</td>
            </tr>
            <tr>
              <td><strong>Dimensions</strong></td>
              <td>8.7cm x 5.9cm x 4.5cm per camera</td>
            </tr>
            <tr>
              <td><strong>External Power</strong></td>
              <td>4.2 - 15.8V DC</td>
            </tr>
            <tr>
              <td><strong>Power Consumption</strong></td>
              <td>4W max per camera (8W total)</td>
            </tr>
            <tr>
              <td><strong>Ground Resolution</strong></td>
              <td>8 cm per pixel at 120m (~400 ft) altitude</td>
            </tr>
            <tr>
              <td><strong>Capture Rate</strong></td>
              <td>1 capture per second (synchronized)</td>
            </tr>
            <tr>
              <td><strong>Interface</strong></td>
              <td>Serial, Ethernet, WiFi, USB</td>
            </tr>
            <tr>
              <td><strong>Field of View</strong></td>
              <td>47.2° HFOV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 className="text-xl font-semibold mt-12 mb-4">Altum & Altum-PT</h3>
      <div className="mb-8">
        <img
          src="https://ext.same-assets.com/1935660927/1784852694.png"
          alt="Altum-PT Camera"
          className="sensor-image mb-6 max-w-md mx-auto"
        />

        <p className="mb-4">
          The MicaSense Altum combines five spectral bands with a thermal band, while the newer Altum-PT adds
          a high-resolution panchromatic band for enhanced spatial detail. These sensors provide comprehensive
          data for agricultural analysis, including plant stress information through thermal imaging.
        </p>

        <h4 className="text-lg font-medium mt-6 mb-3">Spectral Bands (Altum-PT)</h4>
        <table className="spec-table mb-6">
          <thead>
            <tr>
              <th>Band</th>
              <th>Center Wavelength (nm)</th>
              <th>Bandwidth (nm)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Blue</td>
              <td>475</td>
              <td>32</td>
            </tr>
            <tr>
              <td>Green</td>
              <td>560</td>
              <td>27</td>
            </tr>
            <tr>
              <td>Red</td>
              <td>668</td>
              <td>14</td>
            </tr>
            <tr>
              <td>Red Edge</td>
              <td>717</td>
              <td>12</td>
            </tr>
            <tr>
              <td>Near IR</td>
              <td>842</td>
              <td>57</td>
            </tr>
            <tr>
              <td>Thermal</td>
              <td>Longwave IR (LWIR) 8-14 μm</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Panchromatic (PT only)</td>
              <td>450-630</td>
              <td>180</td>
            </tr>
          </tbody>
        </table>

        <h4 className="text-lg font-medium mt-6 mb-3">Technical Specifications</h4>
        <table className="spec-table mb-6">
          <tbody>
            <tr>
              <td width="180"><strong>Weight</strong></td>
              <td>460g (Altum-PT)</td>
            </tr>
            <tr>
              <td><strong>Dimensions</strong></td>
              <td>8.2cm x 6.7cm x 6.45cm</td>
            </tr>
            <tr>
              <td><strong>External Power</strong></td>
              <td>4.9 - 25.2V DC</td>
            </tr>
            <tr>
              <td><strong>Power Consumption</strong></td>
              <td>8W nominal, 12W peak</td>
            </tr>
            <tr>
              <td><strong>Multispectral GSD</strong></td>
              <td>5.2 cm per pixel at 120m altitude</td>
            </tr>
            <tr>
              <td><strong>Panchromatic GSD</strong></td>
              <td>1.25 cm per pixel at 120m altitude (PT only)</td>
            </tr>
            <tr>
              <td><strong>Thermal GSD</strong></td>
              <td>81 cm per pixel at 120m altitude</td>
            </tr>
            <tr>
              <td><strong>Capture Rate</strong></td>
              <td>1 capture per second</td>
            </tr>
            <tr>
              <td><strong>Interface</strong></td>
              <td>Serial, Ethernet, WiFi, USB</td>
            </tr>
            <tr>
              <td><strong>Field of View</strong></td>
              <td>48° HFOV (multispectral), 45° HFOV (thermal)</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="tip-box">
        <h4 className="font-semibold mb-2">Integration Considerations</h4>
        <p>
          When selecting between the RedEdge-MX Dual Camera System and Altum/Altum-PT, consider the following:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>The RedEdge-MX Dual provides more spectral bands for advanced research</li>
          <li>Altum/Altum-PT adds thermal imaging for temperature and stress analysis</li>
          <li>Altum-PT offers significantly higher resolution with its panchromatic band</li>
          <li>RedEdge-MX Dual is lighter but requires mounting two synchronized cameras</li>
          <li>Both systems require the DLS 2 sun sensor for optimal reflectance calibration</li>
        </ul>
      </div>
    </div>
  );
};

export default Specifications;
