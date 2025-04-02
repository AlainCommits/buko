export default function Features() {
  const features = [
    {
      title: "Self-Hosted",
      description: "Host on your own server for complete control over your data.",
      icon: "🏠"
    },
    {
      title: "Tag System",
      description: "Organize bookmarks with custom tags for easy retrieval.",
      icon: "🏷️"
    },
    {
      title: "Search",
      description: "Powerful search to quickly find what you're looking for.",
      icon: "🔍"
    },
    {
      title: "Mobile Friendly",
      description: "Access your bookmarks on any device with a responsive interface.",
      icon: "📱"
    },
    {
      title: "Browser Extension",
      description: "Save bookmarks directly from your browser with our extension.",
      icon: "🧩"
    },
    {
      title: "Import/Export",
      description: "Easily migrate your existing bookmarks from other services.",
      icon: "💾"
    }
  ];

  return (
    <section id="features" className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Why Choose <span className="text-indigo-600">Buko</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
