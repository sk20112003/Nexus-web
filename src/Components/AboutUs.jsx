import React from 'react';
import logo from '../assets/logo.jpg'

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 mt-5 ">
      <div className="container mx-auto px-4">
        <header className="text-center mb-12">
          <h1 className="text-5xl  font-bold text-gray-900 mb-4 ">About Us</h1>
          <p className="text-2xl text-gray-700 italic">At Nexus Info, we proudly stand at the forefront of technological innovation, serving as a premier software company committed to meeting the diverse needs of businesses across industries. With a rich tapestry of expertise, we specialize in delivering a comprehensive range of services that span the development of dynamic websites, robust e-commerce platforms, sophisticated WordPress websites, cutting-edge educational platforms, and strategic business consulting services.</p>
          <h1 className="text-5xl  font-bold text-gray-900 mb-4 my-5 ">Commitment</h1>
          <p className="text-2xl text-gray-700 italic">
          At the core of Nexus Info's mission is the unwavering commitment to making advanced online solutions accessible to businesses of all sizes and industries. We firmly believe that digital transformation should not be limited by budgetary constraints. Therefore, our dedicated team is driven by the goal of empowering businesses with cost-effective yet high-quality digital solutions that not only meet but surpass their expectations.
          </p>
          <ol className="text-2xl text-gray-700 italic">
            <li className='mt-4'>
            Innovation: We embrace innovation as a driving force, ensuring that our clients stay ahead in the ever-evolving digital landscape
            </li>
            <li className='mt-4'>
            Reliability: Trust is the foundation of our client relationships. Nexus Info is synonymous with reliability, delivering solutions that stand the test of time.
            </li>
            <li className='mt-4'>
            Client Satisfaction: Your success is our success. We prioritize client satisfaction through personalized, attentive service and solutions tailored to your unique business needs.
            </li>
          </ol>
        </header>
        </div>
    </div>
  );
}

export default AboutUs;
