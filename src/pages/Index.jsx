import { Button } from "@/components/ui/button";
import { NavLink } from "react-router-dom";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header Section */}
      <header className="flex justify-between items-center p-4 bg-white shadow-sm">
        <div className="text-2xl font-bold">SaaSLogo</div>
        <nav>
          <ul className="flex space-x-4">
            {["Home", "Features", "Pricing", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={`#${item.toLowerCase()}`}
                  className="text-gray-600 hover:text-gray-900"
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-4 py-20 bg-gray-50">
        <h1 className="text-4xl font-bold mb-4">Transform Your Business with Our SaaS Solution</h1>
        <p className="text-xl text-gray-600 mb-8">Streamline operations, boost productivity, and drive growth with our innovative platform.</p>
        <Button size="lg" className="px-8">Get Started</Button>
      </section>

      {/* Product Description Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-4 py-20">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">Powerful Features for Your Success</h2>
          <p className="text-gray-600 mb-4">
            Our SaaS platform offers cutting-edge tools designed to optimize your workflow,
            enhance collaboration, and provide valuable insights for data-driven decision making.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Intuitive dashboard for easy management</li>
            <li>Real-time analytics and reporting</li>
            <li>Seamless integration with your existing tools</li>
          </ul>
        </div>
        <div className="md:w-1/2">
          <img src="/placeholder.svg" alt="Product illustration" className="mx-auto object-cover w-full h-[300px]" />
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-primary text-white text-center px-4 py-20">
        <h2 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Business?</h2>
        <p className="text-xl mb-8">Join thousands of satisfied customers and take your company to the next level.</p>
        <Button size="lg" variant="secondary" className="px-8">Start Your Free Trial</Button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center p-4 mt-auto">
        <p>&copy; 2024 SaaSLogo. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;