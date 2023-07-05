import { useRouter } from "next/router"
import Layout from "src/core/layouts/Layout"
import { SignupForm } from "src/auth/components/SignupForm"
import { BlitzPage, Routes } from "@blitzjs/next"

const SignupInfoPage: BlitzPage = () => {
  const router = useRouter()

  return (
    <Layout title="Sign Up">
      <div>
        <p> Chegamos até aqui </p>
      </div>
    </Layout>
  )
}

export default SignupInfoPage
