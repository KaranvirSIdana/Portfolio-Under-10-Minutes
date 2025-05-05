
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
    <section id="experience" className="py-20 bg-muted/30">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="h-8 w-8 text-primary" />
          <h2 className="text-3xl font-bold">Experience</h2>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>Lead Data Scientist</CardTitle>
                  <CardDescription>Great Learning</CardDescription>
                </div>
                <CardDescription className="text-right">2021 - Present</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Leading a team of data scientists working on Large Language Model implementations.</li>
                <li>Designing and implementing advanced NLP solutions for enterprise clients.</li>
                <li>Optimizing model performance and fine-tuning for specific business domains.</li>
                <li>Mentoring junior data scientists and establishing best practices.</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2">
                <div>
                  <CardTitle>Data Scientist</CardTitle>
                  <CardDescription>Previous Company</CardDescription>
                </div>
                <CardDescription className="text-right">2020 - 2021</CardDescription>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
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
