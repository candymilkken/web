import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Send } from "lucide-react"

export default function Messaging({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-4 space-y-4">
      <Button variant="ghost" onClick={onBack}>
        <ArrowLeft className="mr-2 h-4 w-4" />
        Quay lại
      </Button>
      <h1 className="text-2xl font-bold">Tin nhắn</h1>
      <Card>
        <CardHeader>
          <CardTitle>Bs. Nguyễn Văn A</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-gray-100 p-2 rounded-lg">
            <p>Xin chào, bạn có câu hỏi gì không?</p>
          </div>
          <div className="bg-blue-100 p-2 rounded-lg text-right">
            <p>Dạ, tôi muốn hỏi về kết quả xét nghiệm gần đây.</p>
          </div>
          <div className="flex space-x-2">
            <Input placeholder="Nhập tin nhắn..." />
            <Button size="icon">
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

