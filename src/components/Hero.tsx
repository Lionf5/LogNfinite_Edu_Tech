import React from 'react';
import { Play, ArrowRight, Users, Award, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Award className="w-4 h-4" />
                <span>Trusted by 10,000+ Students</span>
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                  Future with
                </span>
                Expert Learning
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Unlock your potential with our comprehensive learning solutions. From programming to data science, 
                we provide world-class education that prepares you for tomorrow's challenges.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl">
                <span className="font-semibold">Start Learning Today</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-lg hover:border-gray-300 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <Play className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">50+</div>
                <div className="text-sm text-gray-600">Expert Courses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">10K+</div>
                <div className="text-sm text-gray-600">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-blue-200 rounded-full opacity-60"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-purple-200 rounded-full opacity-60"></div>
            
            <div className="absolute top-8 right-8 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">Live Sessions</span>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-white p-4 rounded-xl shadow-lg">
              <div className="flex items-center space-x-3">
                <Users className="w-6 h-6 text-blue-600" />
                <div>
                  <div className="text-sm font-bold text-gray-900">2,847</div>
                  <div className="text-xs text-gray-600">Active Learners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;