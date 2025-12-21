import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function DeviceSelector({ selectedBrand, setSelectedBrand, setStep }) {
  const brands = [
    { 
      name: "Apple", 
      icon: "🍎",
      models: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 14 Pro", "iPhone 14", "iPhone 13 Pro Max", "iPhone 13 Pro", "iPhone 13", "iPhone 12 Pro Max", "iPhone 12 Pro", "iPhone 12", "iPhone 11 Pro Max", "iPhone 11 Pro", "iPhone 11", "iPhone XS Max", "iPhone XS", "iPhone XR", "iPhone X", "iPhone 8 Plus", "iPhone 8", "iPhone 7 Plus", "iPhone 7", "iPhone SE", "Anderes Modell"]
    },
    { 
      name: "Samsung", 
      icon: "📱",
      models: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S24", "Galaxy S23 Ultra", "Galaxy S23+", "Galaxy S23", "Galaxy S22 Ultra", "Galaxy S22+", "Galaxy S22", "Galaxy S21 Ultra", "Galaxy S21+", "Galaxy S21", "Galaxy A54", "Galaxy A53", "Galaxy A52", "Galaxy Note 20 Ultra", "Galaxy Note 20", "Galaxy Z Fold5", "Galaxy Z Flip5", "Anderes Modell"]
    },
    { 
      name: "Huawei", 
      icon: "📲",
      models: ["P60 Pro", "P50 Pro", "P40 Pro+", "P40 Pro", "P40", "P30 Pro", "P30", "Mate 50 Pro", "Mate 40 Pro", "Mate 30 Pro", "Nova Serie", "Anderes Modell"]
    },
    { 
      name: "Xiaomi", 
      icon: "🔲",
      models: ["Xiaomi 14 Ultra", "Xiaomi 14", "Xiaomi 13 Ultra", "Xiaomi 13", "Xiaomi 12 Pro", "Xiaomi 12", "Redmi Note 13 Pro", "Redmi Note 12 Pro", "Redmi Note 11 Pro", "Poco F5 Pro", "Poco F5", "Poco X5 Pro", "Anderes Modell"]
    },
    { 
      name: "Google Pixel", 
      icon: "🔍",
      models: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7", "Pixel 6 Pro", "Pixel 6", "Pixel 5", "Pixel 4 XL", "Pixel 4", "Anderes Modell"]
    },
    { 
      name: "OnePlus", 
      icon: "➕",
      models: ["OnePlus 12", "OnePlus 11", "OnePlus 10 Pro", "OnePlus 10T", "OnePlus 9 Pro", "OnePlus 9", "OnePlus Nord 3", "OnePlus Nord CE 3", "Anderes Modell"]
    },
    { 
      name: "Sony", 
      icon: "🎵",
      models: ["Xperia 1 V", "Xperia 5 V", "Xperia 1 IV", "Xperia 5 IV", "Xperia 10 V", "Anderes Modell"]
    },
    { 
      name: "Andere", 
      icon: "📞",
      models: ["Nokia", "LG", "Motorola", "OPPO", "Vivo", "Realme", "Andere Marke"]
    }
  ];

  const handleBrandSelect = (brand) => {
    setSelectedBrand(brand);
    setStep(2);
  };

  return (
    <div>
      <h2 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
        Schritt 1: Wählen Sie Ihre Smartphone-Marke
      </h2>
      <p className="text-slate-600 mb-8">
        Klicken Sie auf den Hersteller Ihres Gerätes
      </p>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {brands.map((brand, index) => (
          <motion.button
            key={brand.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => handleBrandSelect(brand)}
            className={`relative bg-white rounded-2xl p-6 text-center border-2 transition-all duration-300 group hover:shadow-lg ${
              selectedBrand?.name === brand.name 
                ? "border-cyan-500 shadow-lg shadow-cyan-500/20" 
                : "border-slate-100 hover:border-cyan-300"
            }`}
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">
              {brand.icon}
            </div>
            <p className="font-semibold text-slate-900">{brand.name}</p>
            <ChevronRight className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-300 group-hover:text-cyan-500 group-hover:translate-x-1 transition-all" />
          </motion.button>
        ))}
      </div>
    </div>
  );
}