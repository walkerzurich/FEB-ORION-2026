import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from '@/components/ui/toaster';
import OpeningPage from '@/pages/OpeningPage.jsx';
import HomePage from '@/pages/HomePage.jsx';
import BuildingDetail from '@/pages/BuildingDetail.jsx';
import SubBuildingDetail from '@/pages/SubBuildingDetail.jsx';
import FEBDescriptionPage from '@/pages/FEBDescriptionPage.jsx';
import StaffPage from '@/pages/StaffPage.jsx';
import OrmawaPage from '@/pages/OrmawaPage.jsx';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Routes>
          {/* Opening / splash screen */}
          <Route path="/" element={<OpeningPage />} />

          {/* Main home with building grid */}
          <Route path="/home" element={<HomePage />} />

          {/* FEB description page */}
          <Route path="/feb-desc" element={<FEBDescriptionPage />} />

          {/* Staff page */}
          <Route path="/staff" element={<StaffPage />} />

          {/* Ormawa page */}
          <Route path="/ormawa" element={<OrmawaPage />} />

          {/* Building detail with panorama/video */}
          <Route path="/building/:buildingId" element={<BuildingDetail />} />
          <Route
            path="/building/:buildingId/sub/:subBuildingId"
            element={<SubBuildingDetail />}
          />
        </Routes>
        <Toaster />
      </div>
    </Router>
  );
}

export default App;