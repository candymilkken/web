import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, Video, MessageSquare, Calendar } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function OnlineConsultation({
  onBack,
  onNavigate,
}: { onBack: () => void; onNavigate: (path: string) => void }) {
  const doctors = [
    {
      name: "Bs. Nguyễn Văn A",
      specialty: "Tim mạch",
      available: true,
      rating: 4.9,
      reviews: 128,
      avatar: "/doctor-1.jpg",
    },
    {
      name: "Bs. Trần Thị B",
      specialty: "Da liễu",
      available: true,
      rating: 4.8,
      reviews: 96,
      avatar: "/doctor-2.jpg",
    },
    {
      name: "Bs. Lê Văn C",
      specialty: "Nội khoa",
      available: false,
      rating: 4.7,
      reviews: 156,
      avatar: "/doctor-3.jpg",
    },
  ]

  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-xl font-bold text-[#564adc]">Medihouse</h1>
      </div>

      <h2 className="text-2xl font-bold text-[#564adc]">Tư vấn trực tuyến</h2>

      <div className="grid grid-cols-2 gap-4">
        <Card className="bg-[#564adc] text-white">
          <CardContent className="p-4">
            <Video className="h-6 w-6 mb-2" />
            <h3 className="font-semibold">Tư vấn video</h3>
            <p className="text-sm opacity-80">Gặp bác sĩ qua video call</p>
          </CardContent>
        </Card>
        <Card className="bg-[#564adc] text-white">
          <CardContent className="p-4">
            <MessageSquare className="h-6 w-6 mb-2" />
            <h3 className="font-semibold">Chat với bác sĩ</h3>
            <p className="text-sm opacity-80">Nhắn tin trực tiếp</p>
          </CardContent>
        </Card>
      </div>

      <h3 className="font-semibold text-gray-600">Bác sĩ đang trực tuyến</h3>

      <ScrollArea className="h-[400px]">
        <div className="space-y-4">
          {doctors.map((doctor, index) => (
            <Card key={index}>
              <CardContent className="p-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={doctor.avatar} />
                    <AvatarFallback>{doctor.name.split(" ").pop()?.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h4 className="font-semibold">{doctor.name}</h4>
                      <span className={`text-sm ${doctor.available ? "text-green-500" : "text-gray-500"}`}>
                        {doctor.available ? "Đang trực tuyến" : "Không trực tuyến"}
                      </span>
                    </div>
                    <p className="text-sm text-gray-500">{doctor.specialty}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-yellow-400">★</span>
                      <span className="text-sm ml-1">{doctor.rating}</span>
                      <span className="text-sm text-gray-500 ml-2">({doctor.reviews} đánh giá)</span>
                    </div>
                    <div className="flex space-x-2 mt-2">
                      <Button size="sm" className="bg-[#564adc]" disabled={!doctor.available}>
                        <Video className="h-4 w-4 mr-1" />
                        Gọi video
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => onNavigate("appointments")}
                        disabled={!doctor.available}
                      >
                        <Calendar className="h-4 w-4 mr-1" />
                        Đặt lịch hẹn
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

