import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const bloodPressureData = [
  { time: "6:00", systolic: 120, diastolic: 80 },
  { time: "9:00", systolic: 122, diastolic: 82 },
  { time: "12:00", systolic: 125, diastolic: 85 },
  { time: "15:00", systolic: 121, diastolic: 81 },
  { time: "18:00", systolic: 118, diastolic: 79 },
]

const heartRateData = [
  { time: "6:00", rate: 72 },
  { time: "9:00", rate: 75 },
  { time: "12:00", rate: 78 },
  { time: "15:00", rate: 74 },
  { time: "18:00", rate: 71 },
]

export function HealthCharts() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Huyết áp</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={bloodPressureData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="systolic" stroke="#564adc" name="Tâm thu" />
                <Line type="monotone" dataKey="diastolic" stroke="#10b981" name="Tâm trương" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-lg font-semibold">Nhịp tim</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heartRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="time" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="rate" stroke="#ef4444" name="Nhịp tim" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

