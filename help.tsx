import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ArrowLeft, Search } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function Help({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-3xl font-bold text-[#564adc]">Trợ giúp</h1>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input className="pl-10" placeholder="Tìm kiếm câu hỏi" />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Câu hỏi thường gặp</CardTitle>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Làm thế nào để đặt lịch hẹn?</AccordionTrigger>
              <AccordionContent>
                Để đặt lịch hẹn, hãy vào mục "Đặt lịch khám" từ trang chủ hoặc menu chính. Sau đó, chọn bác sĩ, ngày giờ
                mong muốn và điền thông tin cần thiết.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Làm sao để xem kết quả xét nghiệm?</AccordionTrigger>
              <AccordionContent>
                Kết quả xét nghiệm có thể được xem trong mục "Hồ sơ bệnh án". Chọn xét nghiệm cụ thể để xem chi tiết
                hoặc tải xuống báo cáo.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Làm thế nào để cập nhật thông tin cá nhân?</AccordionTrigger>
              <AccordionContent>
                Vào mục "Thông tin cá nhân" từ menu chính. Tại đây, bạn có thể chỉnh sửa các thông tin như địa chỉ, số
                điện thoại, và thông tin y tế.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Liên hệ hỗ trợ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <p>
            Nếu bạn không tìm thấy câu trả lời cho vấn đề của mình, vui lòng liên hệ với đội ngũ hỗ trợ của chúng tôi:
          </p>
          <p>Email: support@medihouse.com</p>
          <p>Điện thoại: 1900 1234</p>
          <Button className="w-full mt-2 bg-[#564adc]">Gửi yêu cầu hỗ trợ</Button>
        </CardContent>
      </Card>
    </div>
  )
}

