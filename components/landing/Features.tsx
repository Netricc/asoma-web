"use client";

import { useContext } from "react";
import { ServiceCard, Button } from "@/components/";
import { AppContext } from "@/lib/context/store";
import Link from "next/link";
import { tourIcon } from "@/assets/icons";
import Image from "next/image";

import {
  webDevelopmentImage,
  aiDevelopmentImage,
  serverImage,
} from "@/assets/images";
const Features = () => {
  const context = useContext(AppContext);
  const language = context?.language || "en";
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="w-full min-h-screen container-max bg-white max-lg:pt-[200px] max-md:pt-[180px] max-sm:pt-[140px] pb-[120px] max-lg:pb-[62px] max-md:pb-[42px] max-sm:pb-[32px]"
    >
      <div
        className={`flex flex-col gap-[100px] max-lg:gap-[500px]  ${
          language === "de" ? "max-sm:gap-[540px]" : "max-sm:gap-[340px]"
        }  items-center`}
      >
        <ServiceCard
          title={`${
            language === "en"
              ? "web development"
              : language === "ar"
              ? "تطوير الويب"
              : "Webentwicklung"
          }`}
          description={`${
            language === "en"
              ? "We provide a full web development service, from design to coding and deployment, including a free domain for 2 years. We also offer a subscription for website updates, once a month."
              : language === "ar"
              ? "نحن نقدم خدمة تطوير ويب شاملة، بدءًا من التصميم إلى البرمجة والنشر، بما في ذلك دومين مجاني لمدة عامين. كما نوفر اشتراكًا لتحديثات الموقع شهريًا."
              : " Wir bieten einen vollständigen Webentwicklungsservice an, von Design über Codierung bis hin zur Bereitstellung, einschließlich einer kostenlosen Domain für 2 Jahre. Wir bieten auch ein Abonnement für monatliche Website-Updates an."
          }`}
          reverse={false}
          img={webDevelopmentImage}
          key={1}
          id={1}
        />
        <ServiceCard
          title={`${
            language === "en"
              ? "AI Development"
              : language === "ar"
              ? "تطوير الذكاء الاصطناعي"
              : "KI-Entwicklung"
          }`}
          description={`${
            language === "en"
              ? "We develop advanced AI solutions, including chatbots and automation tools, to help businesses improve customer engagement, streamline operations, and make smarter decisions. Our AI-powered systems optimize workflows, enhance productivity, and deliver intelligent insights tailored to your needs."
              : language === "ar"
              ? "نحن نطور حلولًا متقدمة للذكاء الاصطناعي، بما في ذلك الروبوتات التفاعلية وأدوات الأتمتة، لمساعدة الشركات على تحسين التفاعل مع العملاء، وتبسيط العمليات، واتخاذ قرارات أكثر ذكاءً. أنظمتنا المدعومة بالذكاء الاصطناعي تعمل على تحسين سير العمل، وزيادة الإنتاجية، وتقديم رؤى ذكية مخصصة لاحتياجاتك."
              : "Wir entwickeln fortschrittliche KI-Lösungen, einschließlich Chatbots und Automatisierungstools, um Unternehmen zu helfen, das Kundenengagement zu verbessern, Abläufe zu optimieren und smartere Entscheidungen zu treffen. Unsere KI-gesteuerten Systeme optimieren Arbeitsabläufe, steigern die Produktivität und liefern intelligente Einblicke, die auf Ihre Bedürfnisse zugeschnitten sind."
          }`}
          reverse={true}
          img={aiDevelopmentImage}
          key={2}
          id={2}
        />

        <ServiceCard
          title={`${
            language === "en"
              ? "Server Attack Defense"
              : language === "ar"
              ? "حماية الخوادم من الهجمات"
              : "Angriffsschutz-Dienste"
          }`}
          description={`${
            language === "en"
              ? "We offer comprehensive server attack defense services, including proactive monitoring and mitigation of various cyber threats. Our subscription plans ensure your servers remain secure and resilient against potential attacks."
              : language === "ar"
              ? "نحن نقدم خدمات شاملة لحماية الخوادم من الهجمات، بما في ذلك المراقبة الاستباقية والتخفيف من مختلف التهديدات الإلكترونية. تضمن خطط الاشتراك لدينا بقاء خوادمك آمنة وقوية ضد الهجمات المحتملة."
              : "Wir bieten umfassende Server-Angriffsschutz-Dienste an, einschließlich proaktiver Überwachung und Minderung verschiedener Cyber-Bedrohungen. Unsere Abonnementpläne stellen sicher, dass Ihre Server sicher und widerstandsfähig gegen potenzielle Angriffe bleiben."
          }`}
          reverse={false}
          img={serverImage}
          key={3}
          id={3}
        />
      </div>
      <div className="w-full flex justify-center max-sm:text-base max-sm:mt-[100px] mt-[200px] ">
        <Button className="bg-primary text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
          <Link className="flex w-fit flex-row items-center" href={"/services"}>
            <span>
              {language === "en"
                ? "All Services"
                : language === "ar"
                ? "كل الخدمات"
                : "Alle Dienstleistungen"}
            </span>
            <Image
              className={`${language === "ar" ? "mr-[12px]" : "ml-[12px]"}`}
              src={tourIcon}
              alt="go icon"
            />
          </Link>
        </Button>
      </div>
    </section>
  );
};

export default Features;
