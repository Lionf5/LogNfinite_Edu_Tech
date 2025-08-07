import React from 'react';
import { Clock, Users, Star, ArrowRight } from 'lucide-react';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full-Stack Web Development",
      description: "Master modern web development with React, Node.js, and MongoDB",
      image: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "12 weeks",
      students: "2,847",
      rating: 4.9,
      price: "₹15,999",
      level: "Beginner to Advanced"
    },
    {
      id: 2,
      title: "Data Science & Analytics",
      description: "Learn Python, machine learning, and data visualization techniques",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "16 weeks",
      students: "1,923",
      rating: 4.8,
      price: "₹18,999",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Digital Marketing Mastery",
      description: "Complete guide to SEO, social media marketing, and paid advertising",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "8 weeks",
      students: "3,421",
      rating: 4.7,
      price: "₹12,999",
      level: "Beginner"
    },
    {
      id: 4,
      title: "Mobile App Development",
      description: "Build iOS and Android apps using React Native and Flutter",
      image: "https://images.pexels.com/photos/147413/twitter-facebook-together-exchange-of-information-147413.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "14 weeks",
      students: "1,567",
      rating: 4.9,
      price: "₹17,999",
      level: "Intermediate to Advanced"
    },
    {
      id: 5,
      title: "Cloud Computing & DevOps",
      description: "Master AWS, Docker, Kubernetes, and modern deployment strategies",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "10 weeks",
      students: "1,234",
      rating: 4.8,
      price: "₹16,999",
      level: "Advanced"
    },
    {
      id: 6,
      title: "UI/UX Design Fundamentals",
      description: "Learn design thinking, prototyping, and user experience principles",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      duration: "6 weeks",
      students: "2,156",
      rating: 4.6,
      price: "₹11,999",
      level: "Beginner"
    }
  ];

  return (
    <section id="courses" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our most sought-after courses designed by industry experts to give you 
            practical skills that employers value.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                  {course.level}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                
                <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4" />
                    <span>{course.students}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-current text-yellow-400" />
                    <span>{course.rating}</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-1 group">
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-900 text-white px-8 py-4 rounded-lg hover:bg-gray-800 transition-colors font-semibold">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;