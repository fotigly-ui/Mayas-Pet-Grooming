import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Star, Sparkles, Scissors, Droplets, Heart, Send, Facebook, Instagram, Music, Link } from "lucide-react";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { trpc } from "@/lib/trpc";
import { toast } from "sonner";

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
    dogName: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  // Check if user has accepted cookies
  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookie-consent");
    if (!cookieConsent) {
      setShowCookieBanner(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setShowCookieBanner(false);
  };

  const handleRejectCookies = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setShowCookieBanner(false);
  };

  const contactMutation = trpc.contact.submit.useMutation();

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const result = await contactMutation.mutateAsync(formData);
      
      // Show success message
      toast.success(result.message);
      setFormSubmitted(true);
      
      // Clear form after 2 seconds
      setTimeout(() => {
        setFormData({ name: "", email: "", phone: "", dogName: "", message: "" });
        setFormSubmitted(false);
      }, 2000);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to submit inquiry. Please try again.";
      toast.error(errorMessage);
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
  ];

  const portfolio = [
    {
      image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/IorVULIfXjyXHckl.jpeg",
      title: "Happy in the Van",
      breed: "Golden Retriever",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Cookie Consent Banner */}
      {showCookieBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-900 text-white p-4 md:p-6 shadow-2xl border-t border-orange-500">
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm md:text-base leading-relaxed">
                We use cookies to enhance your browsing experience and analyze site traffic. By continuing to use our website, you consent to our use of cookies.
              </p>
            </div>
            <div className="flex gap-3 flex-shrink-0">
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-white hover:bg-gray-800"
                onClick={handleRejectCookies}
              >
                Reject
              </Button>
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white"
                onClick={handleAcceptCookies}
              >
                Accept
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img 
              src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/kLLMfmJtZSVONRsZ.jpeg" 
              alt="Maya's Pet Grooming Logo"
              className="h-20 w-auto"
            />
            <div>
              <h1 className="text-lg font-bold text-gray-900">Maya's Pet Grooming</h1>
              <p className="text-xs text-orange-500 font-semibold">All about FurryTails</p>
            </div>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-orange-500 transition font-medium">About</a>
            <a href="#services" className="text-gray-700 hover:text-orange-500 transition font-medium">Services</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-500 transition font-medium">Contact</a>
          </div>
          <a href="#contact">
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">Book Now</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50 pt-12 pb-16">
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
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/fhGmHWJoYmYXbtls.PNG"
                alt="Maya's Pet Grooming Team Caricature"
                className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-orange-500 uppercase tracking-wider">Meet Maya's</h3>
                <h2 className="text-4xl font-bold text-gray-900 mt-3">Named after the littlest team member.</h2>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/nJPvxwcbRwJwDAtl.jpeg" 
                  alt="Maya's Pet Grooming Team"
                  className="w-full h-auto rounded-2xl shadow-xl"
                />
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
      <section id="services" className="py-16 bg-gray-50">
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
                  className="p-8 hover:shadow-xl hover:-translate-y-3 transition-all duration-300 bg-gradient-to-br from-orange-50 to-white border-0 rounded-2xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl flex items-center justify-center mb-6 shadow-lg">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-orange-50">
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

          <div className="mt-16">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img 
                src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663384661868/IorVULIfXjyXHckl.jpeg" 
                alt="Happy dog in van"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            {/* Left: Contact Info & WhatsApp */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-2">We'd Love to Hear From You!</h2>
                <p className="text-gray-300">Have a question or want to book an appointment? Get in touch with us today.</p>
              </div>

              <div className="space-y-4">
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
              </div>

              <a href="https://wa.me/61419509190" target="_blank" rel="noopener noreferrer" className="inline-flex gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition">
                <span>💬</span>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Right: Contact Form */}
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
              
              {formSubmitted && (
                <div className="mb-6 p-4 bg-green-500/20 border border-green-500 rounded-lg text-green-200">
                  ✓ Thank you! We'll contact you soon.
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleFormChange}
                    required
                    className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="0419 509 190"
                      value={formData.phone}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Dog Name</label>
                    <input
                      type="text"
                      name="dogName"
                      placeholder="Max"
                      value={formData.dogName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your dog and what services you're interested in..."
                    value={formData.message}
                    onChange={handleFormChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-700 text-white placeholder-gray-400 rounded-lg border border-gray-600 focus:border-orange-500 focus:outline-none transition resize-none"
                  />
                </div>

                <Button 
                  type="submit"
                  size="lg" 
                  disabled={contactMutation.isPending}
                  className="bg-orange-500 hover:bg-orange-600 text-white font-semibold w-full flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {contactMutation.isPending ? (
                    <>
                      <span className="animate-spin">⏳</span>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-xs text-gray-400 text-center">
                  🔒 We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-700">
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
