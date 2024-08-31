import Login from "@/components/Login"
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rajvansh.js | Login'
}

const page = () => {
  return (
    <Login />
  )
}

export default page;