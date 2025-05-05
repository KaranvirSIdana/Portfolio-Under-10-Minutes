
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-muted/30 to-90%">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <div className="bg-primary/10 p-3 rounded-full">
            <Briefcase className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-8">
          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/95 backdrop-blur-sm">
            <CardHeader className="border-b border-border/30 pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl font-bold">Lead Data Scientist</CardTitle>
                  <CardDescription className="text-base">Great Learning</CardDescription>
                </div>
                <CardDescription className="text-right font-medium text-primary">2021 - Present</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="list-disc pl-5 space-y-3">
                <li>Leading a team of data scientists working on Large Language Model implementations.</li>
                <li>Designing and implementing advanced NLP solutions for enterprise clients.</li>
                <li>Optimizing model performance and fine-tuning for specific business domains.</li>
                <li>Mentoring junior data scientists and establishing best practices.</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg hover:shadow-xl transition-all bg-gradient-to-br from-card to-card/95 backdrop-blur-sm">
            <CardHeader className="border-b border-border/30 pb-4">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle className="text-xl font-bold">Data Scientist</CardTitle>
                  <CardDescription className="text-base">Previous Company</CardDescription>
                </div>
                <CardDescription className="text-right font-medium text-primary">2020 - 2021</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="pt-6">
              <ul className="list-disc pl-5 space-y-3">
                <li>Developed machine learning models for prediction and classification tasks.</li>
                <li>Implemented data preprocessing pipelines and feature engineering techniques.</li>
                <li>Collaborated with cross-functional teams to translate business requirements into technical solutions.</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
