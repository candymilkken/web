import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ArrowLeft, Download, Search } from "lucide-react"

export default function MedicalRecords({ onBack }: { onBack: () => void }) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-xl font-bold text-[#564adc]">Medihouse</h1>
      </div>
      <h2 className="text-2xl font-bold text-[#564adc]">Hồ sơ bệnh án</h2>
      <div className="flex space-x-2">
        <Input placeholder="Tìm kiếm hồ sơ..." className="border-[#564adc]" />
        <Button size="icon" className="bg-[#564adc] text-white">
          <Search className="h-4 w-4" />
        </Button>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-[#564adc]">Ngày</TableHead>
            <TableHead className="text-[#564adc]">Loại</TableHead>
            <TableHead className="text-[#564adc]">Bác sĩ</TableHead>
            <TableHead className="text-[#564adc]">Chẩn đoán</TableHead>
            <TableHead className="text-[#564adc]">Tải xuống</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell>10/07/2023</TableCell>
            <TableCell>Xét nghiệm máu</TableCell>
            <TableCell>Bs. Nguyễn Văn A</TableCell>
            <TableCell>Thiếu sắt nhẹ</TableCell>
            <TableCell>
              <Button size="sm" variant="ghost" className="text-[#564adc]">
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>05/06/2023</TableCell>
            <TableCell>Khám tổng quát</TableCell>
            <TableCell>Bs. Trần Thị B</TableCell>
            <TableCell>Sức khỏe tốt</TableCell>
            <TableCell>
              <Button size="sm" variant="ghost" className="text-[#564adc]">
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>20/05/2023</TableCell>
            <TableCell>X-quang ngực</TableCell>
            <TableCell>Bs. Lê Văn C</TableCell>
            <TableCell>Không phát hiện bất thường</TableCell>
            <TableCell>
              <Button size="sm" variant="ghost" className="text-[#564adc]">
                <Download className="h-4 w-4" />
              </Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  )
}

