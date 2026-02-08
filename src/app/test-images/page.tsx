export default function TestImages() {
  return (
    <div className="min-h-screen p-8 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">🖼️ Image Test Page</h1>
        <p className="text-slate-600 mb-8">
          This page tests if your images are loading correctly. If you see images below, they're accessible!
        </p>
        
        <div className="space-y-8">
          {/* Project Images */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Project Images</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-600 mb-2">SafeWatch Hero</h3>
                <p className="text-sm text-slate-500 mb-2">Path: /images/projects/safewatch-hero.png</p>
                <img 
                  src="/images/projects/safewatch-hero.png" 
                  alt="SafeWatch" 
                  className="w-full max-w-2xl h-auto border border-slate-200 rounded" 
                />
              </div>
              
              <div>
                <h3 className="font-semibold text-emerald-600 mb-2">Afya Dashboard</h3>
                <p className="text-sm text-slate-500 mb-2">Path: /images/projects/afya-dashboard.png</p>
                <img 
                  src="/images/projects/afya-dashboard.png" 
                  alt="Afya" 
                  className="w-full max-w-2xl h-auto border border-slate-200 rounded" 
                />
              </div>
              
              <div>
                <h3 className="font-semibold text-amber-600 mb-2">Automation Screenshot</h3>
                <p className="text-sm text-slate-500 mb-2">Path: /images/projects/automation-screenshot.png</p>
                <img 
                  src="/images/projects/automation-screenshot.png" 
                  alt="Automation" 
                  className="w-full max-w-2xl h-auto border border-slate-200 rounded" 
                />
              </div>
              
              <div>
                <h3 className="font-semibold text-indigo-600 mb-2">IoT Monitoring</h3>
                <p className="text-sm text-slate-500 mb-2">Path: /images/projects/iot-monitoring.png</p>
                <img 
                  src="/images/projects/iot-monitoring.png" 
                  alt="IoT" 
                  className="w-full max-w-2xl h-auto border border-slate-200 rounded" 
                />
              </div>
            </div>
          </div>
          
          {/* Profile Images */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Profile Images</h2>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Headshot</h3>
                <p className="text-sm text-slate-500 mb-2">Path: /images/headshot.png</p>
                <img 
                  src="/images/headshot.png" 
                  alt="Headshot" 
                  className="w-64 h-auto border border-slate-200 rounded" 
                />
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">OG Image (Social Preview)</h3>
                <p className="text-sm text-slate-500 mb-2">Path: /images/og-image.png</p>
                <img 
                  src="/images/og-image.png" 
                  alt="OG" 
                  className="w-full max-w-2xl h-auto border border-slate-200 rounded" 
                />
              </div>
            </div>
          </div>
          
          {/* Resume */}
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-bold mb-4">Resume PDF</h2>
            <p className="text-sm text-slate-500 mb-2">Path: /resume.pdf</p>
            <a 
              href="/resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Open Resume PDF
            </a>
          </div>
          
          {/* Diagnostic Info */}
          <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg">
            <h2 className="text-xl font-bold mb-4">✅ Diagnostic Checklist</h2>
            <div className="space-y-2 text-sm">
              <p>✓ If images appear above: Images are loading correctly!</p>
              <p>✗ If images show broken icon: Check file paths and names</p>
              <p>🔍 Open Browser DevTools (F12) → Console to see any errors</p>
              <p>🔍 Check Network tab → Filter "Img" to see image requests</p>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <a href="/" className="text-blue-600 hover:underline">← Back to Home</a>
        </div>
      </div>
    </div>
  );
}