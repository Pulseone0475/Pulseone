import React, { useEffect, useState } from "react";
import Head from "next/head";

export default function HomePage() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const hour = new Date().getHours();
    setIsDark(hour < 7 || hour >= 19);
  }, []);

  const bgClass = isDark ? "bg-gray-900 text-white" : "bg-white text-gray-900";
  const btnClass = isDark ? "bg-blue-600 hover:bg-blue-500" : "bg-blue-700 hover:bg-blue-800";

  return (
    <div className={\`min-h-screen \${bgClass} transition duration-500 font-sans\`}>
      <Head>
        <title>Pulse One - CRM Platform</title>
        <meta name="description" content="An Eye for Vision - De slimme CRM-oplossing voor moderne bedrijven" />
      </Head>
      <header className="flex justify-between items-center p-4 border-b">
        <h1 className="text-xl font-bold text-blue-600">Pulse One</h1>
      </header>
      <main className="flex flex-col items-center justify-center text-center px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-4">An Eye for Vision</h2>
        <p className="text-lg mb-8 max-w-xl">
          De slimme CRM-oplossing voor moderne bedrijven.
        </p>
        <a href="#contact" className={\`\${btnClass} text-white px-6 py-3 rounded-xl font-medium shadow-lg transition\`}>
          Plan een demo
        </a>
      </main>
    </div>
  );
}
