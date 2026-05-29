import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import WaitlistForm from "@components/WaitlistForm";

const DEFAULT_CTA = {
  title: "Help shape Jeevora Care — join the beta.",
  content: "We're actively looking for patients to test Jeevora Care before launch. Your feedback directly influences what we build — which features matter most, what's missing, and what would make this genuinely useful in your day-to-day health journey.<br/><br/>*Sign up below to join the beta waitlist. Tell us which feature interests you most and share any thoughts — every response is read and shapes what we build next.*",
  image: "/images/join-the-waitlist.png",
};

function Cta({ cta, activeFeature }) {
  const data = cta || DEFAULT_CTA;
  return (
    <section id="join-waitlist" className="section px-4">
      <div className="container rounded-xl shadow p-10">
        <div className="row mx-auto items-center justify-center">
          <div className="md:col-7 lg:col-7 flex items-center justify-center px-6 lg:px-10">
            <Image
              className="w-full max-w-[480px] h-auto mx-auto"
              src={data.image}
              alt="call to action image"
              width={800}
              height={520}
            />
          </div>
          <div className="mt-5 md:col-5 lg:col-5 md:mt-0">
            <h2 className="text-center md:text-left">{data.title}</h2>
            <p className="mt-4 text-center md:text-left">
              {markdownify(data.content)}
            </p>
            <WaitlistForm feature={activeFeature} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
