import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft } from "lucide-react"

export default function ReportIssue({ onBack }: { onBack: () => void }) {
  const [issueType, setIssueType] = useState("")
  const [description, setDescription] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Issue reported:", { issueType, description })
    // Reset form or show confirmation message
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-3xl font-bold text-[#564adc]">Báo cáo sự cố</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Gửi báo cáo sự cố</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="issue-type" className="text-sm font-bold">
                Loại sự cố
              </label>
              <Select value={issueType} onValueChange={setIssueType}>
                <SelectTrigger id="issue-type">
                  <SelectValue placeholder="Chọn loại sự cố" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="technical">Kỹ thuật</SelectItem>
                  <SelectItem value="account">Tài khoản</SelectItem>
                  <SelectItem value="appointment">Lịch hẹn</SelectItem>
                  <SelectItem value="other">Khác</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label htmlFor="description" className="text-sm font-bold">
                Mô tả sự cố
              </label>
              <Textarea
                id="description"
                placeholder="Vui lòng mô tả chi tiết sự cố bạn gặp phải"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="attachment" className="text-sm font-bold">
                Đính kèm ảnh chụp màn hình (nếu có)
              </label>
              <Input id="attachment" type="file" accept="image/*" />
            </div>
            <Button type="submit" className="w-full bg-[#564adc]">
              Gửi báo cáo
            </Button>
          </form>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-bold">Lưu ý</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Chúng tôi sẽ xem xét báo cáo của bạn và phản hồi trong thời gian sớm nhất. Nếu đây là vấn đề khẩn cấp, vui
            lòng liên hệ trực tiếp qua số điện thoại hỗ trợ.
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

