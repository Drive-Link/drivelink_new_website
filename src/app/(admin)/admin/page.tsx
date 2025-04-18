import Adminlogin from "@/components/login/admin-login";

export default function Page() {
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10 bg-gray-50 ">
      <div className="w-full max-w-sm bg-gray-50  ">
        <Adminlogin/>
      </div>
    </div>
  )
}
