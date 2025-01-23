"use client"

import { useState } from "react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronRight } from "lucide-react"

interface Doctor {
  id: string
  name: string
  specialty: string
  avatar: string
  description: string
  available: boolean
}

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Bs. Nguyễn Văn A",
    specialty: "Tim mạch",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Chuyên gia tim mạch với hơn 15 năm kinh nghiệm",
    available: true,
  },
  {
    id: "2",
    name: "Bs. Trần Thị B",
    specialty: "Da liễu",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Bác sĩ da liễu với chuyên môn về điều trị mụn và nám",
    available: true,
  },
  {
    id: "3",
    name: "Bs. Lê Văn C",
    specialty: "Nội khoa",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Bác sĩ nội khoa tổng quát, chuyên điều trị các bệnh thường gặp",
    available: true,
  },
  {
    id: "4",
    name: "Bs. Phạm Thị D",
    specialty: "Nhi khoa",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Bác sĩ nhi khoa với 10 năm kinh nghiệm điều trị bệnh trẻ em",
    available: true,
  },
  {
    id: "5",
    name: "Bs. Hoàng Văn E",
    specialty: "Thần kinh",
    avatar: "/placeholder.svg?height=40&width=40",
    description: "Chuyên gia thần kinh, chuyên điều trị các bệnh về não và hệ thần kinh",
    available: true,
  },
]

interface Day {
  dayName: string
  date: string
  active?: boolean
  doctors: Doctor[]
}

const generateDays = (): Day[] => {
  const days: Day[] = []
  const dayNames = ["CN", "T2", "T3", "T4", "T5", "T6", "T7"]
  const currentDate = new Date()

  for (let i = 0; i < 14; i++) {
    const date = new Date(currentDate)
    date.setDate(currentDate.getDate() + i)
    days.push({
      dayName: dayNames[date.getDay()],
      date: date.getDate().toString(),
      active: i === 1,
      doctors: doctors.map((doctor) => ({
        ...doctor,
        available: Math.random() > 0.3, // Randomly set availability for demo
      })),
    })
  }

  return days
}

export function DaySelector({ onNavigate }: { onNavigate: (page: string) => void }) {
  const [selectedDay, setSelectedDay] = useState<Day | null>(null)
  const [days] = useState(generateDays)

  return (
    <div className="relative">
      <ScrollArea className="w-full whitespace-nowrap rounded-md border">
        <div className="flex w-max space-x-4 p-4">
          {days.map((day, index) => (
            <Dialog key={index}>
              <DialogTrigger asChild>
                <button
                  onClick={() => setSelectedDay(day)}
                  className={cn(
                    "flex flex-col items-center rounded-full p-2 transition-all hover:bg-[#564adc] hover:text-white",
                    day.active || day === selectedDay ? "bg-[#564adc] text-white" : "text-gray-600",
                  )}
                >
                  <span className="text-sm">{day.dayName}</span>
                  <span className="font-semibold">{day.date}</span>
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle className="font-bold text-lg text-[#564adc]">
                    Bác sĩ trực ngày {day.dayName}, {day.date}
                  </DialogTitle>
                </DialogHeader>
                <div className="space-y-4">
                  {day.doctors
                    .filter((doctor) => doctor.available)
                    .slice(0, 3)
                    .map((doctor) => (
                      <div key={doctor.id} className="flex items-start space-x-4 rounded-lg border p-4">
                        <Avatar>
                          <AvatarImage src={doctor.avatar} alt={doctor.name} />
                          <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <h4 className="font-semibold">{doctor.name}</h4>
                          <p className="text-sm text-gray-500">{doctor.specialty}</p>
                          <p className="text-sm text-gray-500">{doctor.description}</p>
                        </div>
                      </div>
                    ))}
                  <div className="flex justify-between">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="flex items-center">
                          Xem thêm bác sĩ
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="sm:max-w-[600px]">
                        <DialogHeader>
                          <DialogTitle className="font-bold text-lg text-[#564adc]">Tất cả bác sĩ trực</DialogTitle>
                        </DialogHeader>
                        <div className="grid gap-4">
                          {day.doctors
                            .filter((doctor) => doctor.available)
                            .map((doctor) => (
                              <div key={doctor.id} className="flex items-start space-x-4 rounded-lg border p-4">
                                <Avatar>
                                  <AvatarImage src={doctor.avatar} alt={doctor.name} />
                                  <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className="flex-1">
                                  <h4 className="font-semibold">{doctor.name}</h4>
                                  <p className="text-sm text-gray-500">{doctor.specialty}</p>
                                  <p className="text-sm text-gray-500">{doctor.description}</p>
                                </div>
                              </div>
                            ))}
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button onClick={() => onNavigate("appointments")}>Đặt lịch hẹn</Button>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}

