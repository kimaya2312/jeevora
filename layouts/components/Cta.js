import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import WaitlistForm from "@components/WaitlistForm";

const DEFAULT_CTA = {
  title: "Your experience builds a better Jeevora — for everyone.",
  content: "You know what it feels like to sit in a 10-minute appointment and forget half of what you meant to say. We're building Jeevora so that never happens again — and we need patients like you to get it right.<br/><br/>*Join the waitlist. Get early access. Tell us what your health journey actually needs — and help shape an app that truly puts patients first.*",
  image: "/images/join-the-waitlist.png",
};

function Cta({ cta }) {
  const data = cta || DEFAULT_CTA;
  return (
    <section id="join-waitlist" className="section px-4">
      <div className="section container rounded-xl shadow">
        <div className="row mx-auto items-center justify-center">
          <div className="md:col-5 lg:col-4">
            <Image
              className="w-full"
              src={data.image}
              alt="call to action image"
              width={500}
              height={500}
            />
          </div>
          <div className="mt-5 md:col-6 lg:col-5 md:mt-0">
            <h2 className="text-center md:text-left">{data.title}</h2>
            <p className="mt-4 text-center md:text-left">
              {markdownify(data.content)}
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cta;
