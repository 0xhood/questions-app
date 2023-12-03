"use client"
import ResetPasswordForm from '@/components/reset-password-box/reset-password'
import { useRouter } from 'next/navigation'
import React from 'react'

export default function ResetPAge() {
    const router = useRouter()
  return (
    <div className="bg-[#27374D]"><ResetPasswordForm goNext={router.push.bind(null, '/questions')} goBack={router.push.bind(null, '/auth')}/></div>
  )
}
