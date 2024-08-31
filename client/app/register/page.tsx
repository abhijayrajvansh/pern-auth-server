import Register from "@/components/Register";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Rajvansh.js | Register'
}

const page = () => {
  return (
    <Register />
  )
}

export default page;