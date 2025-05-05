
import Head from "next/head";
import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would handle form submission here
    console.log("Form submitted:", formData);
    alert("Thank you for your message. We'll get back to you soon!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <Head>
        <title>Contact | Centripetal Media</title>
        <meta name="description" content="Get in touch with Centripetal Media for inquiries, collaborations, or to learn more about our work." />
      </Head>
      
      <Layout>
        <div className="pt-20">
          {/* Contact Header */}
          <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto text-center">
                <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">CONTACT US</h1>
                <p className="text-xl text-gray-300">
                  We'd love to hear from you. Reach out for inquiries, collaborations, or to learn more about our work.
                </p>
              </div>
            </div>
          </section>
          
          {/* Contact Form & Info */}
          <section className="py-24 bg-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                {/* Contact Form */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-8">GET IN TOUCH</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full min-h-[150px]"
                      />
                    </div>
                    
                    <Button type="submit" className="w-full bg-black text-white hover:bg-gray-800">
                      SEND MESSAGE
                    </Button>
                  </form>
                </div>
                
                {/* Contact Information */}
                <div>
                  <h2 className="text-2xl font-bold tracking-tight mb-8">CONTACT INFORMATION</h2>
                  
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-lg font-bold mb-2">Office</h3>
                      <p className="text-gray-700">
                        123 Creative Avenue<br />
                        Los Angeles, CA 90210<br />
                        United States
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-2">Email</h3>
                      <p className="text-gray-700">
                        info@centripetal.media<br />
                        press@centripetal.media
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-2">Phone</h3>
                      <p className="text-gray-700">
                        +1 (323) 555-0123
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-bold mb-2">Social Media</h3>
                      <div className="flex space-x-4">
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                          Instagram
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                          Twitter
                        </a>
                        <a href="https://vimeo.com" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black">
                          Vimeo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
}
