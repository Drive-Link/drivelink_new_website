"use client";
import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";

const Forms = () => {
  const [formData, setFormData] = useState({
    lastname: "",
    firstname: "",
    email: "",
    message: "",
    privacyChecked: false,
  });

  const [status, setStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | any >
  ) => {
    const { name, type, value, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.privacyChecked) {
      setStatus("Please agree to the Privacy Policy");
      return;
    }

    setStatus("Sending...");

    try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || '/api/contact'
      const res = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: formData.firstname,
          lastname: formData.lastname,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("Message sent successfully!");
        setTimeout(() => {
          setStatus("");
          setFormData({
            lastname: "",
            firstname: "",
            email: "",
            message: "",
            privacyChecked: false,
          });
        }, 2000);
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong.");
    }
  };

  useEffect(() => {
    if (status === "Please agree to the Privacy Policy") {
      const timer = setTimeout(() => setStatus(""), 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const getButtonLabel = () => {
    switch (status) {
      case "Sending...":
        return "Sending...";
      case "Message sent successfully!":
        return "Success!";
      case "Failed to send message.":
        return "Failed";
      default:
        return "Submit";
    }
  };

  return (
    <div className="forms bg-[#EBF1FF]">
      <div className="forms-content min-h-[90vh] mx-auto max-w-[1200px] px-[20px] py-[20px] sm:pb-[100px]">
        <div className="formsgroup bg-white rounded-[16px] sm:rounded-[32px] sm:flex sm:gap-[50px] sm:py-[30px] sm:px-[18px] sm:flex-row-reverse shadow-lg px-[18px] py-[30px]">
          {/* Form Section */}
          <div className="formbox1 sm:flex-1">
            <form ref={formRef} onSubmit={handleSubmit}>
              {/* Last Name */}
              <div className="form-group mt-[30px]">
                <label className="block text-[14px] font-[500] mb-[6px] text-[#344054]">Last Name</label>
                <input
                  type="text"
                  name="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] text-[16px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#101F91]"
                />
              </div>

              {/* First Name */}
              <div className="form-group mt-[30px]">
                <label className="block text-[14px] font-[500] mb-[6px] text-[#344054]">First Name</label>
                <input
                  type="text"
                  name="firstname"
                  value={formData.firstname}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] text-[16px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#101F91]"
                />
              </div>

              {/* Email */}
              <div className="form-group mt-[30px]">
                <label className="block text-[14px] font-[500] mb-[6px] text-[#344054]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] text-[16px] text-[#101828] focus:outline-none focus:ring-2 focus:ring-[#101F91]"
                />
              </div>

              {/* Message */}
              <div className="form-group mt-[30px]">
                <label className="block text-[14px] font-[500] mb-[6px] text-[#344054]">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full border border-[#D0D5DD] rounded-[8px] px-[14px] py-[10px] text-[16px] text-[#101828] min-h-[180px] resize-none focus:outline-none focus:ring-2 focus:ring-[#101F91]"
                />
              </div>

              {/* Privacy Policy */}
              <div className="privacy-policy flex mt-[20px] items-start gap-[10px]">
                <input
                  type="checkbox"
                  name="privacyChecked"
                  checked={formData.privacyChecked}
                  onChange={handleChange}
                  className="mt-[4px] border border-[#90979E] cursor-pointer"
                />
                <p className="text-[14px] font-[400] leading-[20px] text-[#90979E] max-w-[270px] sm:max-w-[490px]">
                  By submitting this form, you agree to the processing of personal data according to our{" "}
                  <Link href="/privacy">
                    <span className="underline hover:text-blue-600 cursor-pointer">Privacy Policy.</span>
                  </Link>
                </p>
              </div>

              {/* Submit Button */}
              <div className="btn mt-[30px]">
                {status === "Please agree to the Privacy Policy" && (
                  <p className="text-red-500 mb-[5px]">{status}</p>
                )}
                <button
                  type="submit"
                  disabled={status === "Message sent successfully!"}
                  className={`w-full py-[12px] rounded-[12px] text-white text-[16px] font-[600] transition duration-200 ${
                    status === "Message sent successfully!"
                      ? "bg-green-500 opacity-50 cursor-not-allowed"
                      : status === "Failed to send message."
                      ? "bg-red-500"
                      : "bg-[#101F91] hover:bg-[#1A2BA8]"
                  }`}
                >
                  {getButtonLabel()}
                </button>
                {status === "Something went wrong." && (
                  <p className="text-red-500 mt-[5px]">{status}</p>
                )}
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="sm:flex-1">
            <div className="contactinfo bg-[#101F91] rounded-[28px] pt-[30px] sm:px-[20px] px-[18px] mt-[50px] pb-[100px] sm:mt-0">
              <h2 className="text-white font-[700] text-[20px] leading-[36px] tracking-[0px]">
                Contact Information
              </h2>
              <p className="text-white text-[14px] mt-[20px]">
                How to Get in Touch with Our Team
              </p>

              {[
                {
                  title: "Email Support",
                  desc: "Interested in switching? Speak to our team.",
                  contact: "support@usedrivelink.com",
                },
                {
                  title: "Chat to Sales",
                  desc: "Reach out to our sales team for fast, personalized support.",
                  contact: "Mondays to Sundays: 8am-7pm",
                },
                {
                  title: "Call Us",
                  desc: "Give us a call for immediate assistance.",
                  contact: "+234905-968-5515",
                },
              ].map((box, idx) => (
                <div
                  key={idx}
                  className="rounded-[24px] border border-gray-500 p-[18px] bg-[rgba(225,225,225,0.05)] mt-[30px] text-white"
                >
                  <h3 className="font-[700] text-[18px]">{box.title}</h3>
                  <p className="mt-[14px] text-[14px] opacity-75">{box.desc}</p>
                  <p className="mt-[14px] text-[16px] underline opacity-90">
                    {box.contact}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forms;
