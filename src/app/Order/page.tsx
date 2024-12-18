import Navbar from "@/Components/Navbar";
import { Sidebar } from "@/Components/Sidebar";
import { Pagination } from "@/Components/Pagination";
import { ProductGrid } from "@/Components/ProductGrid";
import electronicAppliancesData from "@/app/Order/electronicAppliacesData";
import homeAppliancesData from "@/app/Order/homeAppliancesData";

export default function ProductListingPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <Sidebar />
          <main className="flex-1">
            {/* Home Appliances Section */}
            <h2 className="text-2xl font-bold mb-6 text-center">Home Appliances</h2>
            <ProductGrid products={homeAppliancesData} />
            <Pagination />

            {/* Electronic Appliances Section */}
            <h2 className="text-2xl font-bold mt-12 mb-6 text-center">Electronic Appliances</h2>
            <ProductGrid products={electronicAppliancesData} />
            <Pagination />
          </main>
        </div>
      </div>
    </div>
  );
}
