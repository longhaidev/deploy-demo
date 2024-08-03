import React, { useEffect } from "react";
import PageDirect from "../../components/PageDirect/PageDirect";
export default function Policy() {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const policyData = [
    {
      title: "Disclaimers and Limitation of Liability",
      descript: `The Website is provided "as is" and "as available" without any warranties, either expressed or implied. InTheOven shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages resulting from the use or inability to use the Website.`,
    },
    {
      title: "Intellectual Property",
      descript: `The Website and its original content, features, and functionality are owned by InTheOven and are protected by international copyright, trademark, and other intellectual property laws.`,
    },
    {
      title: "Privacy Policy",
      descript: `Your use of the Website is also governed by our Privacy Policy, which can be found [link to Privacy Policy]. By using the Website, you consent to the practices described in the Privacy Policy.`,
    },
    {
      title: "Use of the Website",
      descript: `You must be at least 18 years old to use this Website. By using the Website, you represent and warrant that you are at least 18 years old. You agree to use the Website for lawful purposes only and in a manner that does not infringe upon the rights of others.`,
    },
    {
      title: "Acceptance of Terms",
      descript: `By using this Website, you agree to comply with and be bound by these terms and conditions. If you do not agree to these terms, please do not use the Website.`,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="w-full">
        <PageDirect pageName="Policy"></PageDirect>
      </div>
      <div className="w-[81%] mt-[6%] mb-[3%]">
        <div className="">
          {policyData &&
            policyData.map((section) => {
              return (
                <>
                  <h3 className="text-[24px]">{section.title}</h3>
                  <p className="text-[18px]">{section.descript}</p>
                </>
              );
            })}
        </div>
      </div>
    </div>
  );
}
