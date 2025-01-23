import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Bell, Activity, PillIcon as Pills } from "lucide-react"

export default function Notifications({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-3xl font-bold text-[#564adc]">Thông báo</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Tùy chọn thông báo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Bell className="h-5 w-5 text-[#564adc]" />
              <span>Thông báo chung</span>
            </div>
            <Switch />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Activity className="h-5 w-5 text-[#564adc]" />
              <span>Nhắc nhở hoạt động</span>
            </div>
            <Switch />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Pills className="h-5 w-5 text-[#564adc]" />
              <span>Nhắc nhở uống thuốc</span>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Lịch sử thông báo</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Đã đến giờ uống thuốc</span>
            <span className="text-sm text-gray-500">2 giờ trước</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Lịch hẹn khám bệnh ngày mai</span>
            <span className="text-sm text-gray-500">5 giờ trước</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Bạn đã đạt mục tiêu 10,000 bước chân!</span>
            <span className="text-sm text-gray-500">Hôm qua</span>
          </div>
        </CardContent>
      </Card>

      <div className="flex justify-between">
        <Button variant="outline">Đánh dấu tất cả đã đọc</Button>
        <Button variant="outline">Xóa tất cả thông báo</Button>
      </div>
    </div>
  )
}

