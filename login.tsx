import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CardHeader, CardContent, CardFooter } from "@/components/ui/card"

export default function Login({ onLogin }: { onLogin: () => void }) {
  return (
    <div>
      <CardHeader>
        <h1 className="text-2xl font-bold text-center text-[#564adc]">Medihouse</h1>
        <p className="text-center text-gray-600">Cổng thông tin bệnh nhân</p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="patientId">ID Bệnh nhân</Label>
          <Input id="patientId" placeholder="Nhập ID bệnh nhân" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Mật khẩu</Label>
          <Input id="password" placeholder="Nhập mật khẩu" type="password" />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#564adc] hover:bg-[#4538b5] text-white" onClick={onLogin}>
          Đăng nhập
        </Button>
      </CardFooter>
    </div>
  )
}

