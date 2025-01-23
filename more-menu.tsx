import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import {
  ArrowLeft,
  Calendar,
  Activity,
  Bell,
  HelpCircle,
  AlertTriangle,
  UserCog,
  FileText,
  Heart,
  Phone,
  Share2,
  Star,
  Languages,
  Settings,
  BookOpen,
  Stethoscope,
  Brain,
  Hospital,
  Watch,
} from "lucide-react"

export default function MoreMenu({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) {
  const menuItems = [
    {
      category: "Tư vấn & Hỗ trợ Y tế",
      items: [
        { icon: Stethoscope, label: "Tư vấn trực tuyến", page: "online-consultation" },
        { icon: Hospital, label: "Đặt lịch khám", page: "book-appointment" },
      ],
    },
    {
      category: "Theo dõi Sức khỏe",
      items: [
        { icon: Activity, label: "Chỉ số sức khỏe", page: "health-index" },
        { icon: Heart, label: "Theo dõi tim mạch", page: "heart-monitoring" },
        { icon: BookOpen, label: "Nhật ký sức khỏe", page: "health-diary" },
        { icon: Watch, label: "Thêm đồng hồ thông minh", page: "smart-watch" },
      ],
    },
    {
      category: "Tài khoản & Cài đặt",
      items: [
        { icon: UserCog, label: "Thông tin cá nhân", page: "personal-info" },
        { icon: Settings, label: "Cài đặt", page: "settings" },
        { icon: Bell, label: "Thông báo", page: "notifications" },
        { icon: Languages, label: "Ngôn ngữ", page: "language" },
      ],
    },
    {
      category: "Hỗ trợ & Thông tin",
      items: [
        { icon: HelpCircle, label: "Trợ giúp", page: "help" },
        { icon: AlertTriangle, label: "Báo cáo sự cố", page: "report-issue" },
        { icon: Phone, label: "Liên hệ", page: "contact" },
        { icon: FileText, label: "Điều khoản sử dụng", page: "terms" },
      ],
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

      <ScrollArea className="h-[calc(100vh-8rem)]">
        <div className="space-y-6">
          {menuItems.map((category, index) => (
            <div key={index} className="space-y-3">
              <h2 className="text-sm font-semibold text-gray-500 px-2">{category.category}</h2>
              <div className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <Card key={itemIndex} className={`border-0 shadow-none ${item.highlight ? "bg-[#564adc]/10" : ""}`}>
                    <CardContent className="p-0">
                      <Button
                        variant="ghost"
                        className={`w-full justify-start h-12 px-2 hover:bg-[#564adc]/5 ${
                          item.highlight ? "text-[#564adc] font-medium" : ""
                        }`}
                        onClick={() => onNavigate(item.page)}
                      >
                        <item.icon className={`h-5 w-5 mr-3 ${item.highlight ? "text-[#564adc]" : "text-gray-500"}`} />
                        <span>{item.label}</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

