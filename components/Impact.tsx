"use client";

import { useEffect, useState } from "react";

const stats = [
  {
    number: 6235,
    label: "सेवा प्राप्त संख्या",
    icon: "❤️",
  },
  {
    number: 700,
    label: "पुनर्मिलन संख्या",
    icon: "🤝",
  },
  {
    number: 1130,
    label: "पदक तथा सम्मान संख्या",
    icon: "🏆",
  },
  {
    number: 5000,
    label: "भेटघाट कार्यक्रम संख्या",
    icon: "👥",
  },
];

function Counter({
  target,
  duration = 1800,
}: {
  target: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const progress = Math.min(
        (timestamp - startTime) / duration,
        1
      );

      const current = Math.floor(progress * target);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return <>{count.toLocaleString("en-US")}+</>;
}

export default function Impact() {
  return (
    <section className="relative z-20 -mt-8 md:-mt-12 px-5">
      <div className="max-w-7xl mx-auto">

        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className={`
                  relative group
                  p-6 md:p-8 lg:p-10
                  text-center
                  transition-all duration-300
                  hover:bg-blue-50
                  ${
                    index !== stats.length - 1
                      ? "border-r border-gray-100"
                      : ""
                  }
                  ${
                    index >= 2
                      ? "border-t lg:border-t-0 border-gray-100"
                      : ""
                  }
                `}
              >

                {/* ICON */}
                <div className="mx-auto w-14 h-14 md:w-16 md:h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl md:text-3xl transition-transform duration-300 group-hover:scale-110">
                  {stat.icon}
                </div>

                {/* NUMBER */}
                <div className="mt-5 text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-700">
                  <Counter target={stat.number} />
                </div>

                {/* LABEL */}
                <p className="mt-2 text-sm md:text-base font-semibold text-gray-600 leading-6">
                  {stat.label}
                </p>

                {/* SMALL LINE */}
                <div className="mt-4 mx-auto w-10 h-1 rounded-full bg-red-500 group-hover:w-16 transition-all duration-300" />

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}
