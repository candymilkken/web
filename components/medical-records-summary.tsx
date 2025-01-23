import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ArrowLeft, FileText } from "lucide-react"

interface MedicalRecord {
  id: string
  date: string
  type: string
  doctor: string
  diagnosis: string
}

const recentRecords: MedicalRecord[] = [
  {
    id: "1",
    date: "10/07/2023",
    type: "Xét nghiệm máu",
    doctor: "Bs. Nguyễn Văn A",
    diagnosis: "Thiếu sắt nhẹ",
  },
  {
    id: "2",
    date: "05/06/2023",
    type: "Khám tổng quát",
    doctor: "Bs. Trần Thị B",
    diagnosis: "Sức khỏe tốt",
  },
  {
    id: "3",
    date: "20/05/2023",
    type: "X-quang ngực",
    doctor: "Bs. Lê Văn C",
    diagnosis: "Không phát hiện bất thường",
  },
]

export function MedicalRecordsSummary({ onBack, onViewAll }: { onBack: () => void; onViewAll: () => void }) {
  return (
    <div className="p-4 space-y-4">
      <div className="flex justify-between items-center">
        <Button variant="ghost" onClick={onBack} className="text-[#564adc]">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Quay lại
        </Button>
        <h1 className="text-xl font-bold text-[#564adc]">Medihouse</h1>
      </div>
      <h2 className="text-2xl font-bold text-[#564adc]">Tóm tắt hồ sơ bệnh án</h2>
      <ScrollArea className="h-[400px]">
        <div className="space-y-4">
          {recentRecords.map((record) => (
            <Card key={record.id}>
              <CardHeader>
                <CardTitle className="text-lg font-semibold flex items-center">
                  <FileText className="mr-2 h-5 w-5 text-[#564adc]" />
                  {record.type}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  <strong>Ngày:</strong> {record.date}
                </p>
                <p>
                  <strong>Bác sĩ:</strong> {record.doctor}
                </p>
                <p>
                  <strong>Chẩn đoán:</strong> {record.diagnosis}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </ScrollArea>
      <Button onClick={onViewAll} className="w-full bg-[#564adc]">
        Xem tất cả hồ sơ
      </Button>
    </div>
  )
}

