import { Card, CardContent } from "@/components/ui/card"
import { Brain, LineChart, Code, Database, BotIcon as Robot, Users } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      title: "AI Strategy Development",
      description:
        "Create a comprehensive roadmap for integrating AI into your business operations to drive growth and efficiency.",
      icon: Brain,
    },
    {
      title: "Machine Learning Implementation",
      description:
        "Design and deploy custom machine learning models tailored to your specific business challenges and data.",
      icon: LineChart,
    },
    {
      title: "AI Application Development",
      description:
        "Build intelligent applications that leverage the latest AI technologies to deliver exceptional user experiences.",
      icon: Code,
    },
    {
      title: "Data Strategy & Management",
      description:
        "Develop robust data pipelines and governance frameworks to ensure your AI initiatives are built on quality data.",
      icon: Database,
    },
    {
      title: "Automation Solutions",
      description: "Identify and implement automation opportunities to streamline operations and reduce costs.",
      icon: Robot,
    },
    {
      title: "AI Training & Workshops",
      description: "Empower your team with the knowledge and skills needed to work effectively with AI technologies.",
      icon: Users,
    },
  ]

  return (
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-purple-500">AI Consulting</span> Services
        </h2>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Comprehensive AI solutions tailored to your business needs
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon

          return (
            <Card
              key={index}
              className="bg-gray-900 border-gray-800 hover:border-purple-500 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.15)]"
            >
              <CardContent className="p-6">
                <div className="h-12 w-12 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-purple-500" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

