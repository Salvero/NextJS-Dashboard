"use client"

import { Sidebar } from "@/components/dashboard/sidebar"
import { StatsCards } from "@/components/dashboard/stats-cards"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChartComponent } from "@/components/charts/line-chart"
import { BarChartComponent } from "@/components/charts/bar-chart"
// import { PieChartComponent } from "@/components/charts/pie-chart"
// import { AreaChartComponent } from "@/components/charts/area-chart"

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-background">
      <Sidebar />
      
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="bg-card border-b px-6 py-4">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome to your analytics dashboard
          </p>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          <div className="space-y-6">
            {/* Stats Cards */}
            <StatsCards />
            
            {/* Charts Grid */}
            <div className="grid gap-6 md:grid-cols-2">
              {/* Line Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Monthly Revenue Trend</CardTitle>
                  <CardDescription>
                    Track your revenue growth over the past 12 months
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <LineChartComponent />
                </CardContent>
              </Card>
              
              {/* Bar Chart */}
              <Card>
                <CardHeader>
                  <CardTitle>Quarterly Performance</CardTitle>
                  <CardDescription>
                    Revenue vs Profit comparison by quarter
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <BarChartComponent />
                </CardContent>
              </Card>
              
              {/* Pie Chart */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>Traffic Sources</CardTitle>
                  <CardDescription>
                    Distribution of traffic by device type
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <PieChartComponent />
                </CardContent>
              </Card> */}

              {/* Area Chart */}
              {/* <Card>
                <CardHeader>
                  <CardTitle>User Activity</CardTitle>
                  <CardDescription>
                    Weekly user and session trends
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <AreaChartComponent />
                </CardContent>
              </Card> */}
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}



