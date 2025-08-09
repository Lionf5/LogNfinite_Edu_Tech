import React from 'react';
import { CheckCircle, Users, Trophy, Globe } from 'lucide-react';

const About = () => {
  const achievements = [
    { icon: <Users className="w-6 h-6" />, number: "10,000+", label: "Students Trained" },
    { icon: <Trophy className="w-6 h-6" />, number: "95%", label: "Job Placement Rate" },
    { icon: <Globe className="w-6 h-6" />, number: "50+", label: "Countries Reached" },
    { icon: <CheckCircle className="w-6 h-6" />, number: "500+", label: "Corporate Partners" }
  ];

  const values = [
    {
      title: "Quality Education",
      description: "We maintain the highest standards in curriculum design and instruction delivery."
    },
    {
      title: "Innovation First",
      description: "Constantly updating our methods to incorporate the latest industry trends and technologies."
    },
    {
      title: "Student Success",
      description: "Your success is our success. We provide comprehensive support throughout your learning journey."
    },
    {
      title: "Accessibility",
      description: "Making quality education accessible to learners from all backgrounds and locations."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Empowering Learners Since 2024
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              LogNfinite Learning Solutions was founded with a simple yet powerful vision: to make 
              world-class education accessible to everyone, everywhere. We believe that learning should 
              be engaging, practical, and directly applicable to real-world challenges.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Our team of expert instructors, industry professionals, and education specialists work 
              together to create comprehensive learning experiences that not only teach technical skills 
              but also foster critical thinking and problem-solving abilities.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Industry-aligned curriculum</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Hands-on project-based learning</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Dedicated career support</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
                <span className="text-gray-700">Lifetime access to course materials</span>
              </div>
            </div>
          </div>

          <div>
            <img
              src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Team collaboration"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Impact</h3>
            <p className="text-xl text-gray-600">Numbers that speak to our commitment to excellence</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center mx-auto mb-4">
                  {achievement.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{achievement.number}</div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-xl text-gray-600">The principles that guide everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6 border border-gray-200 rounded-xl hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;