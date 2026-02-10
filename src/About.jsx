import React from "react";

function About() {
  return (
    <div className="bg-[#fdfaf6] py-16 px-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-10 space-y-10">

        {/* Title */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            ☕ About Chinova
          </h1>
          <p className="text-gray-500 text-lg">
            Where great coffee creates great moments.
          </p>
        </div>

        {/* Our Story */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Chinova was born from one simple belief: 
            <span className="font-medium text-gray-800">
              {" "}Great coffee creates great moments.
            </span>
          </p>
          <p className="text-gray-600 leading-relaxed">
            What started as a small passion for quality beans and cozy
            conversations has grown into a warm space where people connect,
            work, laugh, and unwind — one cup at a time.
          </p>
          <p className="text-gray-700 font-medium">
            We don’t just serve coffee. We serve experiences.
          </p>
        </section>

        {/* Our Mission */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Our Mission
          </h2>
          <p className="text-gray-600 leading-relaxed">
            To deliver premium, ethically sourced coffee while creating a
            welcoming atmosphere where everyone feels at home.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mt-4">
            <li>☕ High-quality, freshly roasted beans</li>
            <li>🌱 Sustainable sourcing</li>
            <li>❤️ Exceptional customer service</li>
            <li>🏡 A cozy space for community & creativity</li>
          </ul>
        </section>

        {/* What Makes Us Different */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            What Makes Us Different?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            We carefully select our beans from trusted farmers who share our
            passion for quality and sustainability. Every cup is crafted with
            precision — from the grind to the pour.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center mt-4">
            <div className="bg-gray-100 p-3 rounded-lg">Bold Espresso</div>
            <div className="bg-gray-100 p-3 rounded-lg">Smooth Lattes</div>
            <div className="bg-gray-100 p-3 rounded-lg">Rich Cappuccinos</div>
            <div className="bg-gray-100 p-3 rounded-lg">Cold Brew</div>
          </div>
        </section>

        {/* Our Space */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800 border-b pb-2">
            Our Space
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Our coffee shop is designed to feel like your second home.
          </p>

          <ul className="grid sm:grid-cols-2 gap-3 text-gray-700 mt-4">
            <li>📚 Quiet study sessions</li>
            <li>💼 Business meetings</li>
            <li>👫 Catching up with friends</li>
            <li>🌿 Peaceful alone time</li>
          </ul>

          <p className="text-gray-700 font-medium text-center mt-6">
            There’s always a seat waiting for you.
          </p>
        </section>

        {/* CTA */}
        <div className="text-center pt-6 border-t">
          <p className="text-lg text-gray-700 mb-4">
            At Chinova, every cup tells a story.
          </p>
          <button className="bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition">
            Visit Us Today ☕
          </button>
        </div>

      </div>
    </div>
  );
}

export default About;
