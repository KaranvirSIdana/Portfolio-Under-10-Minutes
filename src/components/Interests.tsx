
import { BookOpen } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Interests = () => {
  const interestCategories = [
    {
      title: "Artificial Intelligence",
      items: [
        "Latest advancements in LLMs and NLP",
        "Ethical implications of AI development",
        "Human-AI collaboration models",
        "Future of work with AI integration"
      ],
      icon: "🤖",
      bgClass: "from-blue-500/10 to-indigo-500/10"
    },
    {
      title: "History",
      items: [
        "Ancient civilizations",
        "World War era",
        "Socio-political movements",
        "History of technological revolutions"
      ],
      icon: "📜",
      bgClass: "from-amber-500/10 to-yellow-500/10"
    },
    {
      title: "Politics",
      items: [
        "Global governance systems",
        "Policy implications of technology",
        "International relations",
        "Democratic processes"
      ],
      icon: "🏛️",
      bgClass: "from-emerald-500/10 to-green-500/10"
    },
    {
      title: "Reading",
      items: [
        "Non-fiction on technology",
        "Historical biographies",
        "Political theory",
        "Science fiction"
      ],
      icon: "📚",
      bgClass: "from-purple-500/10 to-pink-500/10"
    }
  ];

  return (
    <section id="interests" className="py-20 bg-gradient-to-b from-background to-muted/30 to-90%">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-primary/10 p-3 rounded-full">
            <BookOpen className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Interests & Passions</h2>
        </div>
        <p className="text-muted-foreground mb-12 max-w-2xl">
          Beyond my professional expertise, I'm passionate about exploring these subjects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {interestCategories.map((category, index) => (
            <Card key={index} className={`h-full bg-gradient-to-br ${category.bgClass} backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all`}>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{category.icon}</span>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <span className="inline-block mr-2 mt-0.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
