import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { ArrowLeft, Camera, Send, Upload, X } from "lucide-react"

export default function Nutrition({ onBack }: { onBack: () => void }) {
  const [fridgeImage, setFridgeImage] = useState<string | null>(null)
  const [analysis, setAnalysis] = useState<string | null>(null)
  const [isAnalyzing, setIsAnalyzing] = useState(false)

  const handleFridgeAnalysis = () => {
    setIsAnalyzing(true)
    // Simulate AI analysis
    setTimeout(() => {
      setAnalysis(`
        Phân tích tủ lạnh của bạn:
        - Phát hiện: rau xanh, thịt gà, trứng, sữa
        - Thiếu: protein, chất xơ
        - Gợi ý món ăn: 
          1. Salad gà với trứng luộc
          2. Sinh tố rau củ giàu protein
        - Cần bổ sung: hạt điều, đậu phụ, cá hồi
      `)
      setIsAnalyzing(false)
    }, 2000)
  }

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-between">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-xl font-bold text-[#564adc]">Medihouse</h1>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <Card className="bg-[#90c47e]">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-white mb-2">
              <div className="p-2 bg-white/20 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <span>Nhịp tim</span>
            </div>
            <div className="text-white text-3xl font-bold">
              125 <span className="text-lg">bpm</span>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-[#9747ff]">
          <CardContent className="p-4">
            <div className="flex items-center space-x-2 text-white mb-2">
              <div className="p-2 bg-white/20 rounded-full">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <span>Bước chân</span>
            </div>
            <div className="text-white text-3xl font-bold">
              954 <span className="text-lg">steps</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-[#564adc] text-white">
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 mb-2">
            <div className="p-2 bg-white/20 rounded-full">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </div>
            <span>Nước uống</span>
          </div>
          <div className="text-3xl font-bold">
            1500 <span className="text-lg">ML</span>
          </div>
          <div className="mt-2 h-2 bg-white/20 rounded-full">
            <div className="h-full w-3/4 bg-white rounded-full"></div>
          </div>
        </CardContent>
      </Card>

      <Dialog>
        <DialogTrigger asChild>
          <Button className="w-full bg-[#564adc] text-white">
            <Camera className="mr-2 h-4 w-4" />
            Chụp ảnh tủ lạnh
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Phân tích tủ lạnh</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            {!fridgeImage ? (
              <div className="border-2 border-dashed rounded-lg p-8 text-center">
                <Upload className="mx-auto h-8 w-8 text-gray-400" />
                <p className="mt-2 text-sm text-gray-500">Tải lên ảnh tủ lạnh của bạn</p>
                <Input
                  type="file"
                  className="hidden"
                  onChange={(e) => setFridgeImage(URL.createObjectURL(e.target.files![0]))}
                />
                <Button className="mt-4" onClick={() => document.querySelector('input[type="file"]')?.click()}>
                  Chọn ảnh
                </Button>
              </div>
            ) : (
              <div className="relative">
                <img src={fridgeImage || "/placeholder.svg"} alt="Fridge" className="w-full rounded-lg" />
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-2 right-2"
                  onClick={() => setFridgeImage(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            )}
            {fridgeImage && (
              <Button className="w-full" onClick={handleFridgeAnalysis} disabled={isAnalyzing}>
                {isAnalyzing ? "Đang phân tích..." : "Phân tích"}
              </Button>
            )}
            {analysis && (
              <Card className="mt-4">
                <CardContent className="p-4">
                  <pre className="whitespace-pre-wrap text-sm">{analysis}</pre>
                </CardContent>
              </Card>
            )}
          </div>
        </DialogContent>
      </Dialog>

      <div className="mt-8">
        <h2 className="text-lg font-semibold mb-4">Tin tức sức khỏe</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">5 thói quen ăn uống lành mạnh</h3>
              <p className="text-sm text-gray-500">2 giờ trước</p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold">Cách tăng cường hệ miễn dịch</h3>
              <p className="text-sm text-gray-500">5 giờ trước</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

