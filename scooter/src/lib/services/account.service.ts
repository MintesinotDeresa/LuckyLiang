import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/db/auth.config"
import connectDB from "@/lib/db/connectDB"
import User from "@/lib/models/userModel"
import bcrypt from "bcryptjs"

export const AccountService = {
  async getUser() {
    const session = await getServerSession(authOptions)
    if (!session?.user?.email) throw new Error("Not authenticated")

    await connectDB()
    const user = await User.findOne({ email: session.user.email }).select("name email")
    if (!user) throw new Error("User not found")

    return user
  },

  async updatePassword(email: string, oldPassword: string, newPassword: string) {
    await connectDB()
    const user = await User.findOne({ email })
    if (!user) throw new Error("User not found")

    const isMatch = await bcrypt.compare(oldPassword, user.password)
    if (!isMatch) throw new Error("Incorrect current password")

    const hashed = await bcrypt.hash(newPassword, 10)
    user.password = hashed
    await user.save()

    return { message: "Password updated successfully" }
  },
}

