import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const GalleryCarousal = () => {
  return (
    <div className="bg-#000435">
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll down
        </span>
      </div>
      <HorizontalScrollCarousel />
      <div className="flex h-48 items-center justify-center">
        <span className="font-semibold uppercase text-neutral-500">
          Scroll up
        </span>
      </div>
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-#000435">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-neutral-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-12 z-10 grid place-content-center">
        <p className="mt-64 bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div>
    </div>
  );
};

export default GalleryCarousal;

const cards = [
  {
    url: "https://img.freepik.com/premium-photo/red-black-themed-robot-side-view-generative-ai_343887-765.jpg",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://media.licdn.com/dms/image/C4D12AQHOU7AktAoVuw/article-cover_image-shrink_720_1280/0/1622547976586?e=2147483647&v=beta&t=LVauWALa2ngn6KaEKMj03M8YKrttifRP6_m91BJgOqs",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://oddculture.com/wp-content/uploads/2018/11/10-Cool-Tech-Tools-Your-Should-Know-About.jpg",
    title: "Title 4",
    id: 4,
  },
  {
    url: "https://www.aerotech.com/wp-content/uploads/2020/11/New-Precision-Image.jpg.webp",
    title: "Title 5",
    id: 5,
  },
  {
    url: "https://img.freepik.com/premium-photo/crystal-semiconductor-chip-manufacturing-technology-robotic-arm-production-silicon-processors-crystal-semiconductors-electronics-industry-equipment-nanotechnology-cpu-factory_76964-115318.jpg",
    title: "Title 6",
    id: 6,
  },
  {
    url: "https://assets.nick.com/uri/mgid:arc:imageassetref:shared.nick.us:a625d441-bbbf-42c8-9927-6a0157aac911?quality=0.7&gen=ntrn",
    title: "Title 7",
    id: 7,
  },
];