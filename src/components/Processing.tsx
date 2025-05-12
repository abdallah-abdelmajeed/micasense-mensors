import React from 'react';

const Processing: React.FC = () => {
  return (
    <div className="processing-section">
      <h2 className="text-2xl font-bold mb-6 section-title">Data Processing</h2>

      <p className="mb-6">
        Processing multispectral data from MicaSense sensors involves converting raw images into calibrated,
        georeferenced outputs that can be analyzed to extract valuable information. This section covers
        software options and detailed processing steps to transform your raw data into actionable insights.
      </p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Software Selection</h3>
      <div className="mb-10">
        <p className="mb-4">
          Several software options are available for processing MicaSense multispectral data, each with different
          capabilities, workflows, and pricing models. The best choice depends on your specific needs, technical expertise,
          and budget.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Pix4D</h4>
            <p className="mb-4">
              Commercial photogrammetry software with specialized tools for agriculture and multispectral processing.
            </p>
            <h5 className="font-medium text-gray-700 mb-2">Key Features:</h5>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
              <li>Advanced radiometric calibration</li>
              <li>Direct support for MicaSense cameras</li>
              <li>Index calculation and prescription maps</li>
              <li>High accuracy orthomosaics and DSMs</li>
              <li>Specialized Pix4Dfields for agriculture</li>
            </ul>
            <p className="text-sm text-gray-600">
              Best for: Professional agricultural mapping, research applications requiring high accuracy
            </p>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Agisoft Metashape</h4>
            <p className="mb-4">
              Powerful photogrammetry software with good multispectral support and flexible workflows.
            </p>
            <h5 className="font-medium text-gray-700 mb-2">Key Features:</h5>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
              <li>Advanced image alignment algorithms</li>
              <li>Multispectral support</li>
              <li>Python scripting capabilities</li>
              <li>Thermal processing for Altum</li>
              <li>Support for various export formats</li>
            </ul>
            <p className="text-sm text-gray-600">
              Best for: Research applications, users requiring customizable workflows
            </p>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">MicaSense Atlas</h4>
            <p className="mb-4">
              Cloud-based processing platform specifically designed for MicaSense sensors.
            </p>
            <h5 className="font-medium text-gray-700 mb-2">Key Features:</h5>
            <ul className="list-disc pl-6 mb-4 space-y-1 text-sm">
              <li>Streamlined upload and processing</li>
              <li>Built-in calibration for MicaSense sensors</li>
              <li>Multiple vegetation indices</li>
              <li>Zoning and analytics tools</li>
              <li>Data sharing and export options</li>
            </ul>
            <p className="text-sm text-gray-600">
              Best for: Users seeking simplicity, quick turnaround for agricultural applications
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Open Source Options</h4>
            <p className="mb-4">
              Free and open-source alternatives for processing multispectral data.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>OpenDroneMap:</strong> Free, open-source photogrammetry software with multispectral support</li>
              <li><strong>MicaSense ImageProcessing Library:</strong> Python tools for calibrating and processing MicaSense data</li>
              <li><strong>QGIS:</strong> Open-source GIS software for analyzing processed data</li>
              <li><strong>Python + Rasterio/GDAL:</strong> Custom workflows for specialized processing</li>
            </ul>
            <p className="text-sm text-gray-600">
              Best for: Technical users, researchers, budget-conscious projects
            </p>
          </div>
          <div className="feature-card">
            <h4 className="text-lg font-medium mb-3">Other Commercial Options</h4>
            <p className="mb-4">
              Additional commercial software with multispectral processing capabilities.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-1">
              <li><strong>DroneDeploy:</strong> Cloud-based platform with good MicaSense integration</li>
              <li><strong>ArcGIS:</strong> Advanced GIS software with remote sensing capabilities</li>
              <li><strong>Trimble eCognition:</strong> Specialized for object-based image analysis</li>
              <li><strong>AgVault:</strong> Sentera's solution for agricultural data processing</li>
            </ul>
            <p className="text-sm text-gray-600">
              Best for: Integration with existing workflows, specialized analytical needs
            </p>
          </div>
        </div>

        <div className="info-box">
          <h4 className="font-semibold mb-2">Software Selection Considerations</h4>
          <p>
            When choosing processing software, consider:
          </p>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            <li>Your technical expertise and available time for learning</li>
            <li>Budget constraints and processing volume (subscription vs. perpetual licenses)</li>
            <li>Integration with existing workflows and data systems</li>
            <li>Specific analytical requirements (e.g., specialized indices, 3D models, time series)</li>
            <li>Processing environment (cloud vs. local processing; hardware requirements)</li>
          </ul>
        </div>
      </div>

      <h3 className="text-xl font-semibold mt-10 mb-4">Processing Steps</h3>
      <div>
        <p className="mb-4">
          While specific workflows vary between software packages, the general process for converting raw MicaSense
          data into usable outputs follows these key steps:
        </p>

        <div className="bg-gray-50 p-6 rounded-lg mb-8">
          <ol className="space-y-6">
            <li className="step-container">
              <div className="step-number">1</div>
              <div className="step-content">
                <h4 className="font-semibold">Data Import & Organization</h4>
                <p>Import all image files, ensuring proper grouping of multi-band captures and calibration images.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Import all spectral bands and match corresponding captures</li>
                  <li>Import metadata, including GPS/position information</li>
                  <li>Identify and properly tag calibration panel images</li>
                  <li>Import DLS 2 data (sun sensor information)</li>
                </ul>
              </div>
            </li>
            <li className="step-container">
              <div className="step-number">2</div>
              <div className="step-content">
                <h4 className="font-semibold">Radiometric Calibration</h4>
                <p>Convert raw digital numbers to calibrated reflectance values.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Apply calibration panel reflectance values</li>
                  <li>Incorporate DLS 2 irradiance data for scene illumination correction</li>
                  <li>Process pre-flight and post-flight calibration images</li>
                  <li>Correct for vignetting and lens distortion</li>
                </ul>
              </div>
            </li>
            <li className="step-container">
              <div className="step-number">3</div>
              <div className="step-content">
                <h4 className="font-semibold">Image Alignment & Orthorectification</h4>
                <p>Align images spatially and correct for geometric distortions.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Generate tie points between overlapping images</li>
                  <li>Build sparse and dense point clouds</li>
                  <li>Create a digital surface model (DSM)</li>
                  <li>Orthorectify all images to remove perspective distortion</li>
                </ul>
              </div>
            </li>
            <li className="step-container">
              <div className="step-number">4</div>
              <div className="step-content">
                <h4 className="font-semibold">Mosaic Generation</h4>
                <p>Combine individual images into seamless multi-band orthomosaics.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Generate separate orthomosaics for each spectral band</li>
                  <li>Apply blending to reduce seam visibility</li>
                  <li>Generate RGB composites for visual inspection</li>
                  <li>Verify alignment between spectral bands</li>
                </ul>
              </div>
            </li>
            <li className="step-container">
              <div className="step-number">5</div>
              <div className="step-content">
                <h4 className="font-semibold">Index Calculation</h4>
                <p>Calculate vegetation indices from calibrated reflectance data.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Calculate common indices (NDVI, NDRE, OSAVI, etc.)</li>
                  <li>Create custom indices for specific applications</li>
                  <li>Generate index maps with appropriate color scales</li>
                  <li>Apply statistical analysis to index values</li>
                </ul>
              </div>
            </li>
            <li className="step-container">
              <div className="step-number">6</div>
              <div className="step-content">
                <h4 className="font-semibold">Data Export & Analysis</h4>
                <p>Export processed data in appropriate formats for further analysis.</p>
                <ul className="list-disc pl-6 mt-2 space-y-1 text-sm">
                  <li>Export orthomosaics in GeoTIFF format</li>
                  <li>Generate zoning maps for variable rate applications</li>
                  <li>Export to GIS software for integration with other spatial data</li>
                  <li>Generate reports and visualizations</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="text-lg font-medium mb-3">Common Vegetation Indices</h4>
            <table className="spec-table">
              <thead>
                <tr>
                  <th>Index</th>
                  <th>Calculation</th>
                  <th>Application</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>NDVI</td>
                  <td>(NIR - Red) / (NIR + Red)</td>
                  <td>General plant vigor, biomass</td>
                </tr>
                <tr>
                  <td>NDRE</td>
                  <td>(NIR - RedEdge) / (NIR + RedEdge)</td>
                  <td>Chlorophyll content, nitrogen status</td>
                </tr>
                <tr>
                  <td>GNDVI</td>
                  <td>(NIR - Green) / (NIR + Green)</td>
                  <td>Photosynthetic activity, canopy variation</td>
                </tr>
                <tr>
                  <td>OSAVI</td>
                  <td>(NIR - Red) / (NIR + Red + 0.16)</td>
                  <td>Minimizes soil background effects</td>
                </tr>
                <tr>
                  <td>CIR</td>
                  <td>NIR / Red</td>
                  <td>Simple ratio for healthy vegetation</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <img
              src="https://ext.same-assets.com/966869137/966869137/remotesensing-12-03164-ag-550.jpg"
              alt="Multispectral Data Processing"
              className="sensor-image mb-4"
            />
            <p className="text-sm text-gray-600 italic text-center mb-6">
              Example of processed multispectral data showing various crop conditions
            </p>

            <div className="warning-box">
              <h4 className="font-semibold mb-2">Processing Best Practices</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Always process with calibration data for accurate reflectance values</li>
                <li>Verify alignment between bands before calculating indices</li>
                <li>Consider using ground control points for improved accuracy</li>
                <li>Document processing parameters for reproducibility</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="tip-box">
          <h4 className="font-semibold mb-2">Advanced Processing Techniques</h4>
          <p className="mb-2">
            For specialized applications and research:
          </p>
          <ul className="list-disc pl-6 space-y-1">
            <li><strong>Machine Learning Classification:</strong> Use supervised classification algorithms to identify crop types, weeds, diseases, etc.</li>
            <li><strong>Time Series Analysis:</strong> Track changes over multiple flights to monitor crop development</li>
            <li><strong>Fusion with Other Data Sources:</strong> Combine with soil maps, yield data, or weather information</li>
            <li><strong>3D Analysis:</strong> Use point clouds and DSMs to calculate plant height and volume</li>
            <li><strong>Custom Index Development:</strong> Create specialized indices targeting specific crop conditions</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Processing;
