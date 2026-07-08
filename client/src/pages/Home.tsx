import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Star, Sparkles, Scissors, Droplets, Heart, Send, Facebook, Instagram, Music, Link } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Vibrant Playful Energy
 * - Bold vibrant orange (#FF7A3D) as primary color
 * - Professional yet playful aesthetic with organic shapes
 * - Smooth animations and refined interactions
 * - Warm, inviting typography (Fredoka for headings, Poppins for body)
 */

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create email subject and body
      const subject = `New Grooming Inquiry from ${formData.name}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`;
      const mailtoLink = `mailto:foti@mayaspetgrooming.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      // Log for backend integration
      console.log("Form submitted:", formData);
      
      // Show success message
      setFormSubmitted(true);
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", message: "" });
        setFormSubmitted(false);
      }, 3000);
      
      // Open email client
      window.location.href = mailtoLink;
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const services = [
    {
      icon: Scissors,
      title: "Full Groom",
      description: "Bath, blow-dry, brush-out, breed-appropriate haircut and a spritz of cologne. The full works.",
    },
    {
      icon: Droplets,
      title: "Bath & Tidy",
      description: "A wash, blow-dry and brush-out, plus a hygiene cut — paw pads, sanitary areas and a tidy face trim.",
    },
    {
      icon: Heart,
      title: "De-shedding Treatment",
      description: "A deep undercoat blow-out for heavy shedders — less fur on your couch, cooler dog in summer.",
    },
    {
      icon: Sparkles,
      title: "Flea Treatment",
      description: "A thorough flea wash and treatment to get your dog comfortable and itch-free again.",
    },
    {
      icon: Heart,
      title: "Puppy's First Groom",
      description: "A gentle, positive introduction to grooming so future visits are something your puppy looks forward to.",
    },
  ];

  const portfolio = [
    {
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/IorVULIfXjyXHckl.jpeg",
      title: "Happy in the Van",
      breed: "Golden Retriever",
    },
    {
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/NUUdtLJQPqLOcbdT.jpeg",
      title: "Professional Grooming Setup",
      breed: "Poodle",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      text: "Maya's team did an amazing job grooming our Golden Retriever! He looks and feels so much better. Highly recommend!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "The mobile service is so convenient. No need to drive anywhere - they come to us! Professional and friendly.",
      rating: 5,
    },
    {
      name: "Emma Wilson",
      text: "Our anxious pup is always calm with Maya's team. They really know how to handle dogs with care and patience.",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/kLLMfmJtZSVONRsZ.jpeg" 
              alt="Maya's Pet Grooming Logo"
              className="h-12 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Maya's Pet Grooming</h1>
              <p className="text-xs text-orange-500 font-semibold">All about FurryTails</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition font-medium">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition font-medium">Portfolio</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition font-medium">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition font-medium">Contact</a>
          </div>
          <a href="#contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">Book Now</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-16 pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Mobile Grooming Service
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Dog's Spa Day, <span className="text-orange-500">On Wheels</span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Professional dog grooming that comes to your home. We bring the spa experience directly to your doorstep with our fully equipped mobile grooming van.
              </p>
              <div className="flex gap-4 pt-4 flex-col sm:flex-row">
                <a href="#contact">
                  <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full sm:w-auto">
                    Book Now
                  </Button>
                </a>
                <a href="https://wa.me/61419509190" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white font-semibold w-full sm:w-auto">
                    💬 WhatsApp
                  </Button>
                </a>
                <a href="#services">
                  <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50 font-semibold">
                    Learn More
                  </Button>
                </a>
              </div>
              <div className="flex gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-orange-500">500+</p>
                  <p className="text-gray-600 text-sm">Happy Dogs Groomed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">4.9★</p>
                  <p className="text-gray-600 text-sm">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img 
                src="/manus-storage/IMG_3005_d38aa694.PNG"
                alt="Maya's Pet Grooming Team"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/XeYpEnAfTiXjZhal.jpeg" 
                alt="Maya's Pet Grooming Team"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Meet Maya's</h3>
                <h2 className="text-4xl font-bold text-gray-900 mt-3">Named after the littlest team member.</h2>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                Maya's Pet Grooming started the way most good local businesses do with a love of dogs and a family that wanted to do things properly. We kitted out our own trailer, put it on the road, and now bring the grooming salon straight to driveways.
              </p>
              <p className="text-lg font-semibold text-gray-900">
                No drop-off, no van full of strange dogs, no long wait at a salon.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Your dog is the only one in the trailer during their appointment, groomed calmly and on their own schedule, while you're just steps away at home.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                It's a genuinely family affair same friendly faces every visit, and a genuine soft spot for the nervous, the fluffy, and the ones who hate the hairdryer.
              </p>
              <div className="space-y-3 pt-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Experienced Groomers</h4>
                    <p className="text-gray-600 text-sm">Trained professionals with years of expertise</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Premium Products</h4>
                    <p className="text-gray-600 text-sm">Only the best shampoos and grooming supplies</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">+</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Gentle and Patient</h4>
                    <p className="text-gray-600 text-sm">We handle nervous or anxious dogs with care</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Our Services</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Everything your dog needs, done kerbside.</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Every groom is tailored to your dog's coat and temperament. Get in touch and we'll recommend the right service for your pup. Every service includes a complimentary nail trim and ear clean no matter which groom you book.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-xl hover:-translate-y-3 transition-all duration-300 bg-white border-0 rounded-xl"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">How It Works</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">Four steps, zero car trips.</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">01</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Get in touch</h4>
              <p className="text-gray-600">Call, text, email or WhatsApp with your dog's breed, size and what you'd like done.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">02</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">We book a time</h4>
              <p className="text-gray-600">Pick a slot that suits you we'll confirm the day before.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">03</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Trailer pulls up</h4>
              <p className="text-gray-600">We park outside your home and set up. Your dog stays close, calm and unbothered.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-4">04</div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Freshly groomed</h4>
              <p className="text-gray-600">We knock when they're done clean, brushed and smelling great.</p>
            </div>
          </div>

          <div className="mt-12 bg-white p-8 rounded-xl shadow-md text-center max-w-2xl mx-auto">
            <p className="text-gray-600 mb-4">Pricing depends on breed, coat and condition.</p>
            <p className="text-lg font-semibold text-gray-900">Send us a photo and we'll give you a straight answer.</p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/IorVULIfXjyXHckl.jpeg" 
                alt="Happy dog in van"
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/NUUdtLJQPqLOcbdT.jpeg" 
                alt="Groomed poodle"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-24 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Reviews</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Don't just take our word for it - hear from happy dog owners who trust us with their furry friends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow rounded-xl">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 leading-relaxed">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Van Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/dEDbRc6EehzPPNBE8o9Sih/sandbox/js4tgbzDUSSatmHE9pYpwv-img-4_1772088297000_na1fn_bW9iaWxlLWdyb29taW5nLXZhbg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEVEYlJjNkVlaHpQUE5CRThvOVNpaC9zYW5kYm94L2pzNHRnYnpEVVNTYXRtSEU5cFlwd3YtaW1nLTRfMTc3MjA4ODI5NzAwMF9uYTFmbl9iVzlpYVd4bExXZHliMjl0YVc1bkxYWmhiZy5wbmc~eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsd18xOTIwLGhfMTkyMC9mb3JtYXQsd2VicC9xdWFsaXR5LHFfODAiLCJDb25kaXRpb24iOnsiRGF0ZUxlc3NUaGFuIjp7IkFXUzpFcG9jaFRpbWUiOjE3OTg3NjE2MDB9fX1dfQ__&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=ekRqZwXQ4RC9CnLdCiTZI~h-sqQLUI-tf5LCO7ahRBA~EUowolLPZhHdaa5b5s4SL2lyrxgUY0gswkF6wxB0EUOG0ko04Rn3SunnBICX7OjtjLPumLIclmp9pQmed8hJ1mUSTogKDUVRO4tMKAKbeRxjvrV3KEOMEXAFsUbNY~~5gmHKYwqs3m6sKNaG0UWuzKRngfr0D6NCHsG7pJ23duNHJAFSs6AW6-kaYhhkY4t7o6SLTBjRTyT2Jth60H186AS0OcQnfnmNta4HB7PuzO-BYCirTyYWJtokQ6KU3Bav5-tcqnTX7WftnUdyAeS9yVhDE7KB7BcmJ3GYtjbXeQ__"
                alt="Mobile grooming van"
                className="w-full h-auto rounded-2xl shadow-xl"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-900">Mobile Spa on Wheels</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our fully equipped mobile grooming van brings professional grooming services directly to your home. No stress for your dog, no hassle for you.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Stress-Free Experience</h4>
                    <p className="text-gray-600 text-sm">Your dog stays in a familiar environment</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Premium Equipment</h4>
                    <p className="text-gray-600 text-sm">State-of-the-art grooming tools and products</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Personalized Care</h4>
                    <p className="text-gray-600 text-sm">Tailored grooming for your dog's unique needs</p>
                  </div>
                </div>
              </div>
              <a href="#contact">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold mt-6">
                  Schedule Your Visit
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Service Coverage</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-3">We Service Your Area</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Based in Currans Hill, we provide mobile grooming services throughout the Macarthur region.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 mb-2">Service Areas</h4>
              <p className="text-gray-600">Macarthur Region</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
              <h4 className="font-bold text-gray-900 mb-2">Mobile Service</h4>
              <p className="text-gray-600">We come to your home</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.5678901234567!2d150.7654321!3d-34.0123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a4d8c0000001%3A0x1234567890abcdef!2sCurrans%20Hill%20NSW%202567!5e0!3m2!1sen!2sau!4v1234567890123"
              width="100%"
              height="500"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <div className="mt-12 bg-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Not Sure If We Service Your Area?</h3>
            <p className="text-gray-600 mb-6">
              We're constantly expanding our service area. Contact us to check if we can reach your location or to discuss custom arrangements.
            </p>
            <a href="#contact">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">Get in Touch</Button>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <a href="tel:0419509190" className="flex gap-4 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-gray-300">0419 509 190</p>
              </div>
            </a>
            <a href="mailto:foti@mayaspetgrooming.com.au" className="flex gap-4 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-300">foti@mayaspetgrooming.com.au</p>
              </div>
            </a>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Service Area</h4>
                <p className="text-gray-300">Macarthur Region, NSW</p>
              </div>
            </div>
            <a href="https://wa.me/61419509190" target="_blank" rel="noopener noreferrer" className="flex gap-4 hover:opacity-80 transition">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <span className="text-white text-xl">💬</span>
              </div>
              <div>
                <h4 className="font-bold mb-1">WhatsApp</h4>
                <p className="text-gray-300">0419 509 190</p>
              </div>
            </a>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 md:p-12 border border-gray-700">
            <h2 className="text-3xl font-bold mb-2">Ready to Book?</h2>
            <p className="text-gray-300 mb-8">Send us a message and we'll get back to you within 24 hours.</p>
            
            {formSubmitted && (
              <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-200">
                ✓ Thank you! We'll contact you soon.
              </div>
            )}

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
                />
              </div>
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={formData.phone}
                onChange={handleFormChange}
                className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
              />
              <textarea
                name="message"
                placeholder="Tell us about your dog and what services you're interested in..."
                value={formData.message}
                onChange={handleFormChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition resize-none"
              />
              <Button 
                type="submit"
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full md:w-auto flex items-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
            <div className="flex gap-8 flex-wrap">
              <a href="https://www.facebook.com/profile.php?id=61580317682126" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition font-medium flex items-center gap-2">
                <Facebook className="w-5 h-5" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/mayaspetgrooming?igsh=MXRkcGQ4YWtrNXdwaA%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition font-medium flex items-center gap-2">
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
              <a href="https://www.tiktok.com/@mayaspetgrooming?_t=ZS-909WidRpsKe&_r=1" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition font-medium flex items-center gap-2">
                <Music className="w-5 h-5" />
                <span>TikTok</span>
              </a>
              <a href="https://wa.me/61419509190" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-orange-500 transition font-medium flex items-center gap-2">
                <span>💬 WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Maya's Pet Grooming. All about FurryTails!</p>
        </div>
      </footer>
    </div>
  );
}
