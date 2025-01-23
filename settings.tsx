import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function Settings({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-3xl font-bold text-[#564adc]">Cài đặt</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Tài khoản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Đổi mật khẩu</span>
            <Button variant="outline">Cập nhật</Button>
          </div>
          <div className="flex justify-between items-center">
            <span>Xác thực hai yếu tố</span>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Quyền riêng tư & Dữ liệu</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Chia sẻ dữ liệu</span>
            <Select defaultValue="none">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn quyền" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none">Không chia sẻ</SelectItem>
                <SelectItem value="doctors">Chỉ bác sĩ</SelectItem>
                <SelectItem value="all">Tất cả</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-between items-center">
            <span>Tải xuống dữ liệu</span>
            <Button variant="outline">Tải xuống</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">Giao diện</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Chế độ tối</span>
            <Switch />
          </div>
          <div className="flex justify-between items-center">
            <span>Cỡ chữ</span>
            <Select defaultValue="medium">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Chọn cỡ chữ" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Nhỏ</SelectItem>
                <SelectItem value="medium">Vừa</SelectItem>
                <SelectItem value="large">Lớn</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Button className="w-full bg-red-500 hover:bg-red-600 text-white">Xóa tài khoản</Button>
    </div>
  )
}

