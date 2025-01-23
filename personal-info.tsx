import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft } from "lucide-react"

export default function PersonalInfo({ onBack }: { onBack: () => void }) {
  const [personalInfo, setPersonalInfo] = useState({
    name: "Trần Ngọc",
    dateOfBirth: "1990-05-15",
    gender: "male",
    phoneNumber: "+84 123 456 789",
    email: "tran.ngoc@example.com",
    address: "123 Đường Lê Lợi, Quận 1, TP.HCM, Vietnam",
    height: "175",
    weight: "70",
    bloodType: "O+",
    emergencyContactName: "Nguyễn Văn A",
    emergencyContactPhone: "+84 987 654 321",
    healthConditions: "Hypertension, Asthma",
    allergies: "Penicillin",
    insuranceProvider: "Bảo Việt",
    policyNumber: "BV123456",
    coverageDetails: "Comprehensive medical coverage",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setPersonalInfo((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setPersonalInfo((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <div className="p-4 space-y-4">
      <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Quay lại
      </Button>
      <h1 className="text-2xl font-bold text-[#564adc]">Thông Tin Cá Nhân</h1>

      <Card>
        <CardHeader>
          <CardTitle>Ảnh đại diện</CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
            <span className="text-4xl text-gray-500">TN</span>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin cơ bản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Họ và tên</Label>
            <Input id="name" name="name" value={personalInfo.name} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="dateOfBirth">Ngày sinh</Label>
            <Input
              id="dateOfBirth"
              name="dateOfBirth"
              type="date"
              value={personalInfo.dateOfBirth}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="gender">Giới tính</Label>
            <Select
              name="gender"
              value={personalInfo.gender}
              onValueChange={(value) => handleSelectChange("gender", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Chọn giới tính" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="male">Nam</SelectItem>
                <SelectItem value="female">Nữ</SelectItem>
                <SelectItem value="other">Khác</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Số điện thoại</Label>
            <Input id="phoneNumber" name="phoneNumber" value={personalInfo.phoneNumber} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" value={personalInfo.email} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="address">Địa chỉ</Label>
            <Textarea id="address" name="address" value={personalInfo.address} onChange={handleInputChange} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin sức khỏe</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="height">Chiều cao (cm)</Label>
            <Input id="height" name="height" type="number" value={personalInfo.height} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="weight">Cân nặng (kg)</Label>
            <Input id="weight" name="weight" type="number" value={personalInfo.weight} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="bloodType">Nhóm máu</Label>
            <Input id="bloodType" name="bloodType" value={personalInfo.bloodType} onChange={handleInputChange} />
          </div>
          <div className="space-y-2">
            <Label htmlFor="healthConditions">Tình trạng sức khỏe</Label>
            <Textarea
              id="healthConditions"
              name="healthConditions"
              value={personalInfo.healthConditions}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="allergies">Dị ứng</Label>
            <Input id="allergies" name="allergies" value={personalInfo.allergies} onChange={handleInputChange} />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Liên hệ khẩn cấp</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="emergencyContactName">Tên người liên hệ</Label>
            <Input
              id="emergencyContactName"
              name="emergencyContactName"
              value={personalInfo.emergencyContactName}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="emergencyContactPhone">Số điện thoại</Label>
            <Input
              id="emergencyContactPhone"
              name="emergencyContactPhone"
              value={personalInfo.emergencyContactPhone}
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Bảo hiểm y tế</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="insuranceProvider">Nhà cung cấp bảo hiểm</Label>
            <Input
              id="insuranceProvider"
              name="insuranceProvider"
              value={personalInfo.insuranceProvider}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="policyNumber">Số hợp đồng</Label>
            <Input
              id="policyNumber"
              name="policyNumber"
              value={personalInfo.policyNumber}
              onChange={handleInputChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="coverageDetails">Chi tiết bảo hiểm</Label>
            <Textarea
              id="coverageDetails"
              name="coverageDetails"
              value={personalInfo.coverageDetails}
              onChange={handleInputChange}
            />
          </div>
        </CardContent>
      </Card>

      <div className="flex space-x-4">
        <Button className="flex-1 bg-[#564adc]">Lưu thay đổi</Button>
        <Button variant="outline" className="flex-1">
          Hủy
        </Button>
      </div>
    </div>
  )
}

