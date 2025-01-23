import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Upload, Send } from "lucide-react"

export default function Insurance({ onBack }: { onBack: () => void }) {
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")

  const handleUpload = () => {
    // Implement image upload logic here
    console.log("Insurance card uploaded")
  }

  const handleAskAI = () => {
    // Implement AI query logic here
    setAnswer("Bảo hiểm của bạn có thể sử dụng tại Bệnh viện A và còn hiệu lực đến ngày 31/12/2023.")
  }

  return (
    <div className="p-4 space-y-4 bg-white text-[#564adc] min-h-full">
      <Button variant="ghost" onClick={onBack} className="text-[#564adc] hover:text-[#564adc]/80">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Quay lại
      </Button>
      <h1 className="text-4xl font-extrabold mb-6">Bảo hiểm</h1>

      <Card className="bg-[#564adc]/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Thông tin</CardTitle>
        </CardHeader>
        <CardContent>
          <Button onClick={handleUpload} className="w-full bg-[#564adc] text-white hover:bg-[#564adc]/90">
            <Upload className="mr-2 h-4 w-4" />
            Tải lên ảnh thẻ bảo hiểm
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-[#564adc]/10">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Hỏi AI về bảo hiểm</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            placeholder="Ví dụ: Bảo hiểm này có xài được ở BV A không?"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="bg-white text-[#564adc] placeholder-[#564adc]/50 border-[#564adc]/30"
          />
          <Button onClick={handleAskAI} className="w-full bg-[#564adc] text-white hover:bg-[#564adc]/90">
            <Send className="mr-2 h-4 w-4" />
            Hỏi AI
          </Button>
          {answer && (
            <div className="mt-4 p-4 bg-[#564adc]/10 rounded-md">
              <p className="font-semibold">Trả lời của AI:</p>
              <p>{answer}</p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

