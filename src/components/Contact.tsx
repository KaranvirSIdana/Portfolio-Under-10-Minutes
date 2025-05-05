
import { useState, useEffect } from "react";
import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/sonner";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  
  const [formCompletion, setFormCompletion] = useState(0);
  
  useEffect(() => {
    // Calculate form completion percentage
    let completedFields = 0;
    if (formData.name) completedFields++;
    if (formData.email) completedFields++;
    if (formData.message) completedFields++;
    
    setFormCompletion((completedFields / 3) * 100);
  }, [formData]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast.success("Message sent! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };
  
  // Mathematical pattern for background
  const gridColumns = 20;
  const gridRows = 10;
  let gridItems = [];
  
  for (let i = 0; i < gridRows; i++) {
    for (let j = 0; j < gridColumns; j++) {
      // Skip some cells to create an interesting pattern
      if ((i + j) % 4 === 0 || (i * j) % 5 === 0) {
        gridItems.push({
          row: i + 1,
          col: j + 1,
          symbol: ["∑", "∫", "∂", "√", "π", "∞"][Math.floor(Math.random() * 6)]
        });
      }
    }
  }

  return (
    <section id="contact" className="py-20 bg-muted/30 relative">
      <div className="absolute inset-0 opacity-5 overflow-hidden">
        {gridItems.map((item, index) => (
          <div
            key={index}
            className="absolute text-sm font-serif text-primary/40"
            style={{
              top: `${(item.row / gridRows) * 100}%`,
              left: `${(item.col / gridColumns) * 100}%`,
              transform: `rotate(${Math.random() * 45 - 22.5}deg)`
            }}
          >
            {item.symbol}
          </div>
        ))}
      </div>
      
      <div className="container max-w-5xl mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
        <p className="text-muted-foreground mb-10">Let's connect and explore potential collaborations.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg equation-box">
            <h3 className="text-xl font-semibold mb-6 flex items-center">
              <Mail className="h-5 w-5 text-primary mr-2" />
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors animate-pulse-glow">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <a href="mailto:karanvirsingh46@gmail.com" className="hover:text-primary transition-colors">
                  karanvirsingh46@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <a href="tel:+919878584748" className="hover:text-primary transition-colors">
                  +91 9878584748
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="https://linkedin.com/in/karanvir" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  linkedin.com/in/karanvir
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5 text-primary" />
                </div>
                <a 
                  href="https://www.linkedin.com/in/karanvir-sidana0308/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors"
                >
                  github.com/karanvir
                </a>
              </div>
            </div>
            
            <div className="mt-10 p-4 bg-background/40 rounded-lg border border-primary/10">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-sm font-medium">Form Completion</h4>
                <span className="text-xs text-primary">{Math.round(formCompletion)}%</span>
              </div>
              <div className="w-full bg-muted h-2 rounded-full overflow-hidden">
                <div 
                  className="bg-primary h-full transition-all duration-500 ease-out"
                  style={{ width: `${formCompletion}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="bg-card/80 backdrop-blur-sm p-8 rounded-xl shadow-lg equation-box">
            <h3 className="text-xl font-semibold mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input 
                  type="text" 
                  id="name" 
                  name="name"
                  placeholder="Your name" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary bg-background/50"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  placeholder="Your email address" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="border-primary/20 focus:border-primary bg-background/50"
                />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message"
                  placeholder="Your message" 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="min-h-[150px] border-primary/20 focus:border-primary bg-background/50"
                />
              </div>
              <Button 
                type="submit" 
                className="w-full relative overflow-hidden group animate-equation"
              >
                <span className="relative z-10">Send Message</span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
