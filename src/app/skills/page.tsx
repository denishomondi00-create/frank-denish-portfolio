const SKILLS = [
  {
    cat: "AI & Machine Learning",
    icon: "🤖",
    items: [
      "LLM Orchestration & Integration",
      "On-device Inference (GGUF, LLaMA)",
      "NLP Pipelines (NER, Classification)",
      "Model Fine-tuning (LoRA)",
      "ML Governance & Explainability",
      "TensorFlow & PyTorch"
    ]
  },
  {
    cat: "Full Stack Development",
    icon: "💻",
    items: [
      "FastAPI & Flask (Python)",
      "Next.js & React (App Router)",
      "Node.js & Express",
      "React Native (iOS/Android)",
      "PostgreSQL & Redis",
      "GraphQL & REST APIs"
    ]
  },
  {
    cat: "Automation & Integration",
    icon: "⚡",
    items: [
      "Python (Pandas, NumPy, OpenPyXL)",
      "API Orchestration",
      "CI/CD Pipelines",
      "ETL Processes",
      "Scheduled Task Management",
      "Data Pipeline Engineering"
    ]
  },
  {
    cat: "DevOps & Infrastructure",
    icon: "🏗️",
    items: [
      "Docker Containerization",
      "Kubernetes Orchestration",
      "Terraform (IaC)",
      "GitHub Actions",
      "Prometheus & Grafana",
      "AWS & Azure"
    ]
  },
  {
    cat: "Embedded Systems & IoT",
    icon: "🔌",
    items: [
      "Microcontroller Programming (Arduino, ESP32)",
      "C/C++ Firmware Development",
      "Sensor Integration",
      "MQTT & Serial Protocols",
      "Real-time Data Streaming",
      "Power Optimization"
    ]
  },
  {
    cat: "Data & Analytics",
    icon: "📊",
    items: [
      "PostgreSQL (Relational Modeling)",
      "SQLite (Embedded Databases)",
      "Prisma ORM",
      "Data Visualization",
      "Database Migration Strategies",
      "Query Optimization"
    ]
  }
];

export default function SkillsPage() {
  return (
    <div className="min-h-screen pb-24">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-20 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Technical Arsenal
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl">
            Building reliable systems across the full stack with focus on real-world impact and operational excellence.
          </p>
        </div>
      </section>

      {/* Skills Grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          {SKILLS.map((group, idx) => (
            <div key={idx} className="space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{group.icon}</span>
                <h2 className="text-2xl font-display font-bold">{group.cat}</h2>
              </div>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-5 py-3 bg-white border border-slate-200 rounded-2xl text-slate-700 font-medium hover:border-blue-500 hover:text-blue-600 hover:shadow-md transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Context */}
        <div className="mt-16 p-12 bg-blue-50 rounded-3xl border border-blue-100">
          <h2 className="text-2xl font-display font-bold mb-6">
            Beyond the Tech Stack
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-bold mb-3 text-blue-900">Problem Solving</h3>
              <p className="text-slate-600 text-sm">
                Breaking down complex challenges into actionable, testable solutions with measurable outcomes.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-900">System Thinking</h3>
              <p className="text-slate-600 text-sm">
                Understanding how components interact, anticipating edge cases, and designing for reliability.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-blue-900">Continuous Learning</h3>
              <p className="text-slate-600 text-sm">
                Staying current with emerging technologies while maintaining deep expertise in core fundamentals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}