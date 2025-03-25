import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Heart, Users, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">MindForward Africa</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/login"
                className="px-4 py-2 text-purple-600 hover:text-purple-700 font-medium"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Your Mental Health Journey Starts Here
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connecting African youth with mental health professionals and support groups
            for a brighter, healthier future.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="#learn-more"
              className="inline-flex items-center px-6 py-3 bg-purple-100 text-purple-600 rounded-md hover:bg-purple-200 font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="learn-more" className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose MindForward Africa?</h2>
            <p className="mt-4 text-xl text-gray-600">
              We're committed to making mental health support accessible and stigma-free
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-purple-50 rounded-lg p-8">
              <Shield className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Professional Support</h3>
              <p className="text-gray-600">
                Connect with verified mental health professionals who understand African youth's unique challenges
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <Users className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Support Groups</h3>
              <p className="text-gray-600">
                Join supportive communities of peers facing similar challenges
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-8">
              <Heart className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Safe Space</h3>
              <p className="text-gray-600">
                A judgment-free environment where you can express yourself freely
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <p className="mt-4 text-xl text-gray-600">
              Start your journey to better mental health in three simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Sign Up',
                description: 'Create your account and tell us about your needs'
              },
              {
                title: 'Choose Your Path',
                description: 'Select between professional counseling or support groups'
              },
              {
                title: 'Get Support',
                description: 'Connect with professionals or join group sessions'
              }
            ].map((step, index) => (
              <div key={index} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-600 text-white">
                    {index + 1}
                  </div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  <p className="mt-2 text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Flexible Plans for Everyone</h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the plan that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Free Trial',
                price: '$0',
                duration: '1 week',
                features: ['1 free session', 'Access to resources', 'Community support']
              },
              {
                name: 'Basic Plan',
                price: '$10',
                duration: 'per month',
                features: ['4 sessions monthly', '2-hour sessions', 'Priority support']
              },
              {
                name: 'Extended Plan',
                price: '$20',
                duration: 'per month',
                features: ['8 sessions monthly', '2-hour sessions', '24/7 support']
              }
            ].map((plan, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-8 bg-purple-50">
                <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                <p className="mt-4">
                  <span className="text-4xl font-bold text-purple-600">{plan.price}</span>
                  <span className="text-gray-600">/{plan.duration}</span>
                </p>
                <ul className="mt-6 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-purple-600 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to="/signup"
                  className="mt-8 w-full inline-flex justify-center items-center px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 font-medium"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center">
                <Brain className="h-8 w-8 text-purple-400" />
                <span className="ml-2 text-xl font-semibold">MindForward Africa</span>
              </div>
              <p className="mt-4 text-gray-400">
                Empowering African youth through accessible mental health support
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">How It Works</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Support Groups</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Mental Health Tips</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">Email: support@mindforward.africa</li>
                <li className="text-gray-400">Phone: +250 123 456 789</li>
                <li className="text-gray-400">Kigali, Rwanda</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} MindForward Africa. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;