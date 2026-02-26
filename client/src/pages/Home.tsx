import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Star, Sparkles, Scissors, Droplets, Heart } from "lucide-react";
import { useState } from "react";

/**
 * Design Philosophy: Vibrant Playful Energy
 * - Bold vibrant orange (#FF7A3D) as primary color
 * - Playful, hand-drawn aesthetic with organic shapes
 * - Energetic animations and hover effects
 * - Warm, inviting typography (Fredoka for headings, Poppins for body)
 */

export default function Home() {
  const [selectedImage, setSelectedImage] = useState(0);

  const services = [
    {
      icon: Scissors,
      title: "Full Grooming",
      description: "Complete bath, dry, and haircut service tailored to your dog's breed and style preferences.",
    },
    {
      icon: Droplets,
      title: "Bath & Wash",
      description: "Professional bathing with premium shampoos and conditioners for a fresh, clean coat.",
    },
    {
      icon: Heart,
      title: "Nail & Paw Care",
      description: "Gentle nail trimming, paw pad cleaning, and moisturizing treatments for healthy paws.",
    },
    {
      icon: Sparkles,
      title: "De-shedding",
      description: "Specialized treatment to reduce shedding and keep your dog's coat healthy and shiny.",
    },
  ];

  const portfolio = [
    {
      image: "https://private-us-east-1.manuscdn.com/sessionFile/dEDbRc6EehzPPNBE8o9Sih/sandbox/js4tgbzDUSSatmHE9pYpwv-img-2_1772088291000_na1fn_Z3Jvb21pbmctdHJhbnNmb3JtYXRpb24tMQ.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEVEYlJjNkVlaHpQUE5CRThvOVNpaC9zYW5kYm94L2pzNHRnYnpEVVNTYXRtSEU5cFlwd3YtaW1nLTJfMTc3MjA4ODI5MTAwMF9uYTFmbl9aM0p2YjIxcGJtY3RkSEpoYm5ObWIzSnRZWFJwYjI0dE1RLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=kCCnQxYJwc1in8tAznN3mSrDJe9ZYj4HO0UX1drO9NUlIuklYa2ObfxuaTIJxvXIbIZIHXyWrpn5o-jodTPm8gM8zUfSS1AXR1WemN-ahA5jAK~tK9KquFnQkDfZ4jeQTRKm6~vwJIn9bLLBohTrEfXND0sgJVRAWxfJbChbYR0TRvV~FNqU8BI2UogXjrn-JXNlybpCNM2glmsnRIe8Df4~t57MbhXbR0dCLAterFjc2IrgvgJhV7EroNDnG0EqzOw08V0F-NifHivea6WWRrqgNSrZ6rN2sGauCkNpAAdqcQuWAJ~pZ2QlhsaW4-0bWUFbUBbbHSOiuapCoDryqQ__",
      title: "Fluffy Transformation",
      breed: "Cavalier King Charles Spaniel",
    },
    {
      image: "https://private-us-east-1.manuscdn.com/sessionFile/dEDbRc6EehzPPNBE8o9Sih/sandbox/js4tgbzDUSSatmHE9pYpwv-img-3_1772088290000_na1fn_Z3Jvb21pbmctdHJhbnNmb3JtYXRpb24tMg.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEVEYlJjNkVlaHpQUE5CRThvOVNpaC9zYW5kYm94L2pzNHRnYnpEVVNTYXRtSEU5cFlwd3YtaW1nLTNfMTc3MjA4ODI5MDAwMF9uYTFmbl9aM0p2YjIxcGJtY3RkSEpoYm5ObWIzSnRZWFJwYjI0dE1nLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=oT3KNa1mufNhiYlyjjaZ2Ld-C94WfaxvnavxjKE81O6c6cdeSX-~pUu6Qp3UxzBm4OV1Miw0avT9VPiaNph6GEExmqvoEt1RhlvV6zLph2nZwwW4a3G8oxbK8X1CZGvjEdAsksXXh7fSGFAer9WiThmuqZ0WTvqAECBMjQMfsWyeKINTwP~esV3vk5z4ejgWdWbWvT~WVYITtYCp1OT7oo7gOZxQ~sfB2CriJEtCddRDEue0gGZbiepDUuu0mCP~1PglKf382ZnQhr4p-MaKqSqulAw6-h0EeKG8UqANB6y41E-VNWnBTJa21PVv4F0UaKRyXjC5lPmB1s3K4jEFWw__",
      title: "Poodle Perfection",
      breed: "Toy Poodle",
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
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">M</span>
            </div>
            <h1 className="text-xl font-bold text-gray-900">Maya's Pet Grooming</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition">Services</a>
            <a href="#portfolio" className="text-gray-700 hover:text-orange-500 transition">Portfolio</a>
            <a href="#testimonials" className="text-gray-700 hover:text-orange-500 transition">Reviews</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition">Contact</a>
          </div>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Book Now</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 to-white pt-20 pb-32">
        {/* Decorative wavy background */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <path d="M0,300 Q300,200 600,300 T1200,300 L1200,600 L0,600 Z" fill="currentColor" className="text-orange-500" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <div className="inline-block bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold">
                ✨ Mobile Grooming Service
              </div>
              <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Dog's Spa Day, <span className="text-orange-500">On Wheels</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional dog grooming that comes to your home. We bring the spa experience directly to your doorstep with our fully equipped mobile grooming van.
              </p>
              <div className="flex gap-4 pt-4">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                  Book Your Appointment
                </Button>
                <Button size="lg" variant="outline" className="border-orange-500 text-orange-500 hover:bg-orange-50">
                  Learn More
                </Button>
              </div>
              <div className="flex gap-8 pt-8">
                <div>
                  <p className="text-3xl font-bold text-orange-500">500+</p>
                  <p className="text-gray-600">Happy Dogs Groomed</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-orange-500">4.9★</p>
                  <p className="text-gray-600">Customer Rating</p>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/dEDbRc6EehzPPNBE8o9Sih/sandbox/js4tgbzDUSSatmHE9pYpwv-img-1_1772088297000_na1fn_aGVyby1iYW5uZXI.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvZEVEYlJjNkVlaHpQUE5CRThvOVNpaC9zYW5kYm94L2pzNHRnYnpEVVNTYXRtSEU5cFlwd3YtaW1nLTFfMTc3MjA4ODI5NzAwMF9uYTFmbl9hR1Z5YnkxaVlXNXVaWEkucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=QocwuUYFLv6X5Yu6b8WmpLRn-yB307AfUCmBFnoO7y7pPvrpLACzZ0mJWKmAbG0pExFahI9mQWcYpMpDhXymA0mC1mh9H~5JQtBXDhdByiLgaouUWPJ7uqReOGTV1QpLuAP7GcVvxvIEiiW031HtqFQPwZsdT1gITdKLwOQxSwDo7rJbficxNkGLcBz9N51im6g39IEJU8Ppix5Smtc08e~vyhIgXG6XKTe-DQOcBTkiC7JZe9DNo8XsfTmmJ1wKjmThoJH24MaABRrSY5VKNMvSAaVvHy~HKy011Y18uBWWshBT~w2qnfOXt3OetLD0wR9pStcOt8o31gpI6SBXFg__"
                alt="Happy groomed dog"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-lg">
                <p className="text-sm font-semibold text-gray-900">All About Furry Tails! 🐾</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Our Services</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Professional Grooming Services</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              From basic baths to complete grooming transformations, we offer comprehensive services tailored to your dog's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 bg-white border-0"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-orange-500" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Our Work</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">Grooming Transformations</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              See the amazing before and after results of our professional grooming services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {portfolio.map((item, index) => (
              <div 
                key={index}
                className="group cursor-pointer"
                onClick={() => setSelectedImage(index)}
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-bold">{item.title}</h4>
                      <p className="text-sm text-gray-200">{item.breed}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Reviews</h3>
            <h2 className="text-4xl font-bold text-gray-900 mt-2">What Our Clients Say</h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Don't just take our word for it - hear from happy dog owners who trust us with their furry friends.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-6 bg-white border-0 shadow-md hover:shadow-lg transition-shadow">
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
      <section className="py-20 bg-white">
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
                    <p className="text-gray-600">Your dog stays in a familiar environment</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Premium Equipment</h4>
                    <p className="text-gray-600">State-of-the-art grooming tools and products</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">Personalized Care</h4>
                    <p className="text-gray-600">Tailored grooming for your dog's unique needs</p>
                  </div>
                </div>
              </div>
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white mt-6">
                Schedule Your Visit
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Call Us</h4>
                <p className="text-gray-300">0419 509 190</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Email</h4>
                <p className="text-gray-300">hello@mayaspetgrooming.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold mb-1">Service Area</h4>
                <p className="text-gray-300">Greater Brisbane Area</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-800 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-6">Ready to Book?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl">
              Contact us today to schedule your dog's grooming appointment. We're available 7 days a week and offer flexible booking times to suit your schedule.
            </p>
            <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
              Get in Touch
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Maya's Pet Grooming. All About Furry Tails! 🐾</p>
        </div>
      </footer>
    </div>
  );
}
