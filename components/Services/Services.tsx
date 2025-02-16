"use client";
import ServiceCard from "../ui/ServiceCard";
import Button from "../ui/Button";
import { useContext } from "react";
import { AppContext } from "@/lib/context/store";
import Link from "next/link";
import { tourIcon } from "@/assets/icons";
import Image from "next/image";
import {
  webDevelopmentImage,
  domainServerImage,
  smartHomeImage,
  aiDevelopmentImage,
  serverImage,
  robotImage,
  appDevelopmentImage,
} from "@/assets/images";
const Services = () => {
  const { language } = useContext(AppContext) || { language: "en" };
  return (
    <section
      dir={`${language === "ar" ? "rtl" : "ltr"}`}
      className="w-full pt-[80px] container-max bg-white  pb-[120px] max-lg:pb-[62px] max-md:pb-[42px] max-sm:pb-[32px]"
    >
      <div className="h-fit">
        <div
          className={`flex pt-[200px] pb-[80px]  flex-col gap-[100px] items-center max-lg:gap-[500px]  ${
            language === "de" ? "max-sm:gap-[600px]" : "max-sm:gap-[500px]"
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

          <ServiceCard
            title={`${
              language === "en"
                ? "Domain and server booking"
                : language === "ar"
                ? "حجز النطاق والخادم"
                : "Domain- und Serverbuchung"
            }`}
            description={`${
              language === "en"
                ? "Get your website online with our Domain and Server Booking service. Secure your perfect domain name and reliable hosting with fast performance, SSL security, and 24/7 support. Whether for a blog, business, or e-commerce, we provide everything you need to launch with confidence."
                : language === "ar"
                ? "احصل على موقعك الإلكتروني عبر خدمة حجز النطاق والخادم لدينا. تأمين اسم النطاق المثالي والاستضافة الموثوقة مع أداء سريع، أمان SSL، ودعم 24/7. سواء كان لمدونة، عمل تجاري، أو تجارة إلكترونية، نقدم لك كل ما تحتاجه لإطلاق موقعك بثقة."
                : "Bringen Sie Ihre Website mit unserem Domain- und Serverbuchungsservice online. Sichern Sie sich den perfekten Domainnamen und zuverlässiges Hosting mit schneller Leistung, SSL-Sicherheit und 24/7 Support. Egal ob für einen Blog, ein Unternehmen oder E-Commerce, wir bieten alles, was Sie benötigen, um mit Vertrauen zu starten."
            }`}
            reverse={true}
            img={domainServerImage}
            key={4}
            id={4}
          />

          <ServiceCard
            title={`${
              language === "en"
                ? "Custom Model Training"
                : language === "ar"
                ? "تدريب نموذج مخصص"
                : "Benutzerdefinierte Modellschulung"
            }`}
            description={`${
              language === "en"
                ? "We train AI models tailored to your needs, ensuring high accuracy and efficiency for tasks like image recognition, NLP, and predictions."
                : language === "ar"
                ? "نقوم بتدريب نماذج الذكاء الاصطناعي المخصصة لاحتياجاتك، مع ضمان دقة وكفاءة عالية في المهام مثل التعرف على الصور، ومعالجة اللغة الطبيعية، والتنبؤات."
                : "Wir trainieren KI-Modelle, die auf Ihre Bedürfnisse zugeschnitten sind, und gewährleisten hohe Genauigkeit und Effizienz bei Aufgaben wie Bildverarbeitung, natürlicher Sprachverarbeitung und Vorhersagen."
            }`}
            reverse={false}
            img={robotImage}
            key={5}
            id={5}
          />

          <ServiceCard
            title={`${
              language === "en"
                ? "App Development"
                : language === "ar"
                ? "تطوير التطبيقات"
                : "App-Entwicklung"
            }`}
            description={`${
              language === "en"
                ? "We provide a full web development service, from design to coding and deployment, including a free domain for 2 years. We also offer a subscription for website updates, once a month."
                : language === "ar"
                ? "نحن نقدم خدمة تطوير ويب شاملة، بدءًا من التصميم إلى البرمجة والنشر، بما في ذلك دومين مجاني لمدة عامين. كما نوفر اشتراكًا لتحديثات الموقع شهريًا."
                : " Wir bieten einen vollständigen Webentwicklungsservice an, von Design über Codierung bis hin zur Bereitstellung, einschließlich einer kostenlosen Domain für 2 Jahre. Wir bieten auch ein Abonnement für monatliche Website-Updates an."
            }`}
            reverse={true}
            img={appDevelopmentImage}
            key={6}
            id={6}
          />

          <ServiceCard
            title={`${
              language === "en"
                ? "Installation of Smart Devices for Homes and Businesses"
                : language === "ar"
                ? "تركيب الأجهزة الذكية للمنازل والأعمال"
                : "Installation von Smart Devices für Häuser und Unternehmen"
            }`}
            description={`${
              language === "en"
                ? "We install smart devices for homes and businesses, enhancing security, efficiency, and convenience. From smart lighting to security systems, we ensure seamless integration and reliable performance."
                : language === "ar"
                ? "نقوم بتركيب الأجهزة الذكية للمنازل والأعمال، مما يعزز الأمان والكفاءة والراحة. من الإضاءة الذكية إلى أنظمة الأمان، نضمن التكامل السلس والأداء الموثوق."
                : "Wir installieren Smart Devices für Häuser und Unternehmen, um Sicherheit, Effizienz und Komfort zu verbessern. Von intelligenter Beleuchtung bis zu Sicherheitssystemen sorgen wir für nahtlose Integration und zuverlässige Leistung."
            }`}
            reverse={true}
            img={smartHomeImage}
            key={7}
            id={7}
          />
        </div>
      </div>

      <div className="w-full flex justify-center max-sm:text-base max-sm:mt-[100px] mt-[200px] ">
        <Button className="bg-primary text-white font-inter text-lg font-medium py-[14px] px-[18px] rounded-full hover:bg-primary-dark duration-200 active:bg-primary-darker">
          <Link className="flex w-fit flex-row items-center" href={"/work"}>
            <span>
              {language === "en"
                ? "Visit Work"
                : language === "ar"
                ? "زر الأعمال"
                : "Arbeitsbesuch"}
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

export default Services;
