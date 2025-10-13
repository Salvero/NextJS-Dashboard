"use client"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { 
  BarChart3, 
  Home, 
  Settings, 
  Users, 
  TrendingUp,
  PieChart,
  Activity
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "#", icon: Home, current: true },
  { name: "Analytics", href: "#", icon: BarChart3, current: false },
  { name: "Users", href: "#", icon: Users, current: false },
  { name: "Reports", href: "#", icon: TrendingUp, current: false },
  { name: "Settings", href: "#", icon: Settings, current: false },
]

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col bg-card border-r">
      <div className="flex h-16 items-center px-6 border-b">
        <div className="flex items-center space-x-2">
          <Activity className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold">Dashboard</span>
        </div>
      </div>
      
      <nav className="flex-1 space-y-1 px-4 py-4">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Button
              key={item.name}
              variant={item.current ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                item.current
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </Button>
          )
        })}
      </nav>
    </div>
  )
}


