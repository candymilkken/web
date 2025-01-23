"use client"

import { useState } from "react"
import Layout from "./layout"
import { BottomNav } from "./bottom-nav"
import Login from "./login"
import Dashboard from "./dashboard"
import MedicalRecords from "./medical-records"
import Appointments from "./appointments"
import HealthInsights from "./health-insights"
import Messaging from "./messaging"
import Insurance from "./insurance"
import Nutrition from "./nutrition"
import Exercise from "./exercise"
import Emergency from "./emergency"
import AddMedicine from "./add-medicine"
import BookAppointment from "./book-appointment"
import ChatWithDoctor from "./chat-with-doctor"
import Support from "./support"
import MoreMenu from "./more-menu"
import OnlineConsultation from "./online-consultation"
import HealthIndex from "./health-index"
import HeartMonitoring from "./heart-monitoring"
import PersonalInfo from "./personal-info"
import HealthDiary from "./health-diary"
import Settings from "./settings"
import Notifications from "./notifications"
import Language from "./language"
import Help from "./help"
import ReportIssue from "./report-issue"
import Contact from "./contact"
import Terms from "./terms"
import SmartWatch from "./smart-watch"
import AIChat from "./ai-chat"

export default function MedihousePatientPortal() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [currentPage, setCurrentPage] = useState("dashboard")

  const handleLogin = () => {
    setIsLoggedIn(true)
  }

  const handleBack = () => {
    setCurrentPage("dashboard")
  }

  const handleNavigate = (page: string) => {
    setCurrentPage(page)
  }

  return (
    <Layout>
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <div className="relative h-full">
          <div className="overflow-y-auto h-[calc(100%-4rem)] pb-16">
            {currentPage === "dashboard" && <Dashboard onNavigate={handleNavigate} />}
            {currentPage === "records" && <MedicalRecords onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "appointments" && <Appointments onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "health" && <HealthInsights onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "messages" && <Messaging onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "insurance" && <Insurance onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "nutrition" && <Nutrition onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "exercise" && <Exercise onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "emergency" && <Emergency onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "add-medicine" && <AddMedicine onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "book-appointment" && <BookAppointment onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "chat-with-doctor" && <ChatWithDoctor onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "support" && <Support onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "more" && (
              <MoreMenu onBack={() => setCurrentPage("dashboard")} onNavigate={handleNavigate} />
            )}
            {currentPage === "online-consultation" && <OnlineConsultation onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "health-index" && <HealthIndex onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "heart-monitoring" && <HeartMonitoring onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "personal-info" && <PersonalInfo onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "health-diary" && <HealthDiary onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "settings" && <Settings onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "notifications" && <Notifications onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "language" && <Language onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "help" && <Help onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "report-issue" && <ReportIssue onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "contact" && <Contact onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "terms" && <Terms onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "smart-watch" && <SmartWatch onBack={() => setCurrentPage("dashboard")} />}
            {currentPage === "ai-chat" && <AIChat onBack={() => setCurrentPage("dashboard")} />}
          </div>
          <BottomNav onNavigate={handleNavigate} currentPage={currentPage} />
        </div>
      )}
    </Layout>
  )
}

