import React from 'react';
import { BookOpen, Users, Award, Clock, Target, Globe } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert-Led Courses",
      description: "Learn from industry professionals with years of real-world experience",
      color: "blue"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Interactive Learning",
      description: "Engage with peers and instructors through live sessions and discussions",
      color: "purple"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Industry Certifications",
      description: "Earn recognized certifications that boost your career prospects",
      color: "green"
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Flexible Schedule",
      description: "Learn at your own pace with 24/7 access to course materials",
      color: "orange"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Personalized Path",
      description: "Get customized learning recommendations based on your goals",
      color: "red"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Community",
      description: "Connect with learners and professionals from around the world",
      color: "teal"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white',
      purple: 'bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white',
      green: 'bg-green-100 text-green-600 group-hover:bg-green-600 group-hover:text-white',
      orange: 'bg-orange-100 text-orange-600 group-hover:bg-orange-600 group-hover:text-white',
      red: 'bg-red-100 text-red-600 group-hover:bg-red-600 group-hover:text-white',
      teal: 'bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white'
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose LogNfinite Learning Solutions?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive learning experiences that combine cutting-edge technology 
            with proven educational methodologies to ensure your success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="group p-8 rounded-2xl border border-gray-200 hover:shadow-xl transition-all duration-300 hover:border-gray-300">
              <div className={`w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${getColorClasses(feature.color)}`}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Ready to Start Your Learning Journey?</h3>
          <p className="text-xl opacity-90 mb-8">Join thousands of students who have transformed their careers with our courses.</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors shadow-lg">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;