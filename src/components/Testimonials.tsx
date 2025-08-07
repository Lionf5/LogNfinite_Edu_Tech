import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Software Engineer at Google",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The Full-Stack Web Development course completely transformed my career. The instructors were incredibly knowledgeable, and the hands-on projects gave me the confidence to land my dream job at Google.",
      rating: 5,
      course: "Full-Stack Web Development"
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Data Scientist at Microsoft",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "I was completely new to data science when I started. The course structure was perfect for beginners, and now I'm working as a Data Scientist at Microsoft. Best investment I've ever made!",
      rating: 5,
      course: "Data Science & Analytics"
    },
    {
      id: 3,
      name: "Anitha Reddy",
      role: "Digital Marketing Manager",
      image: "https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The Digital Marketing course was comprehensive and up-to-date with current industry trends. I've increased my company's online presence by 300% using the strategies I learned.",
      rating: 5,
      course: "Digital Marketing Mastery"
    },
    {
      id: 4,
      name: "Vikram Singh",
      role: "Mobile App Developer",
      image: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The mobile development course was exactly what I needed. The practical approach and real-world projects helped me build a portfolio that impressed employers. Highly recommended!",
      rating: 5,
      course: "Mobile App Development"
    },
    {
      id: 5,
      name: "Sneha Patel",
      role: "UI/UX Designer at Adobe",
      image: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The design course opened my eyes to user-centered design principles. The feedback from instructors was invaluable, and I now work at Adobe as a UX Designer!",
      rating: 5,
      course: "UI/UX Design Fundamentals"
    },
    {
      id: 6,
      name: "Arjun Menon",
      role: "Cloud Architect at AWS",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400",
      content: "The Cloud Computing course was comprehensive and practical. The hands-on labs and real-world scenarios prepared me perfectly for my role as a Cloud Architect at AWS.",
      rating: 5,
      course: "Cloud Computing & DevOps"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from our students who have transformed their careers and achieved their dreams 
            with LogiNfinite Learning Solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 relative">
              <Quote className="w-8 h-8 text-blue-600 opacity-20 absolute top-4 right-4" />
              
              <div className="flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  <div className="flex items-center mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
              
              <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                {testimonial.course}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Join Our Success Stories</h3>
            <p className="text-xl opacity-90 mb-8">
              Be part of our community of successful learners who have transformed their careers
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Journey
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors">
                View All Reviews
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;