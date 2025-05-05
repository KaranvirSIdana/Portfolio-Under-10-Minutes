
import { useEffect, useState } from "react";
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import { Calculator, SquareDot, FileFunction } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const DataViz = () => {
  const [animate, setAnimate] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setAnimate(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  // Sample data for visualizations
  const lineData = [
    { month: "Jan", value: 65 },
    { month: "Feb", value: 59 },
    { month: "Mar", value: 80 },
    { month: "Apr", value: 81 },
    { month: "May", value: 56 },
    { month: "Jun", value: 55 },
    { month: "Jul", value: 40 },
  ];
  
  const barData = [
    { name: "Model A", accuracy: 85 },
    { name: "Model B", accuracy: 92 },
    { name: "Model C", accuracy: 78 },
    { name: "Model D", accuracy: 89 },
  ];
  
  const pieData = [
    { name: "LLMs", value: 45 },
    { name: "Classic ML", value: 30 },
    { name: "Statistics", value: 25 },
  ];
  
  const COLORS = ["#8b5cf6", "#3b82f6", "#14b8a6", "#f59e0b"];
  
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-primary/10 p-3 rounded-full">
            <SquareDot className="h-7 w-7 text-primary" />
          </div>
          <h2 className="text-3xl font-bold">The Math Behind the Data</h2>
        </div>
        
        <p className="text-lg text-muted-foreground max-w-3xl mb-12">
          Data science is fundamentally mathematical. From statistical distributions to machine learning algorithms,
          mathematics forms the backbone of how we interpret and leverage data for insights.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="hover-card backdrop-blur-sm bg-gradient-to-br from-blue-500/10 to-indigo-500/10 border-none">
            <CardContent className="p-6 h-[300px]">
              <div className="flex items-center gap-2 mb-4">
                <Calculator className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Predictive Models</h3>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <LineChart data={animate ? lineData : lineData.map(d => ({ ...d, value: 0 }))} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <XAxis dataKey="month" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#8b5cf6" 
                    strokeWidth={3} 
                    dot={{ fill: "#8b5cf6" }}
                    isAnimationActive={true}
                    animationDuration={2000} 
                    animationEasing="ease-out" 
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="hover-card backdrop-blur-sm bg-gradient-to-br from-emerald-500/10 to-green-500/10 border-none">
            <CardContent className="p-6 h-[300px]">
              <div className="flex items-center gap-2 mb-4">
                <FileFunction className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Model Performance</h3>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <BarChart data={animate ? barData : barData.map(d => ({ ...d, accuracy: 0 }))} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                  <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
                  <Tooltip />
                  <Bar 
                    dataKey="accuracy" 
                    fill="#14b8a6" 
                    radius={[4, 4, 0, 0]}
                    isAnimationActive={true}
                    animationDuration={2000}
                    animationEasing="ease-out"
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          
          <Card className="hover-card backdrop-blur-sm bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-none">
            <CardContent className="p-6 h-[300px]">
              <div className="flex items-center gap-2 mb-4">
                <SquareDot className="h-5 w-5 text-primary" />
                <h3 className="text-lg font-medium">Expertise Distribution</h3>
              </div>
              <ResponsiveContainer width="100%" height="85%">
                <PieChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    innerRadius={40}
                    paddingAngle={5}
                    dataKey={animate ? "value" : "value"}
                    isAnimationActive={true}
                    animationDuration={2000}
                    animationEasing="ease-out"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default DataViz;
