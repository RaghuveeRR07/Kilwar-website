import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import { Link } from 'react-router-dom';

export const AboutLinks = () => {
  return (
    <section className="bg-#000435 p-4 md:p-8">
      <div className="mx-auto max-w-5xl">
        <Link to='/Services#blockchain'><AboutLink
          heading="Blockchain"
          subheading="Learn what we do here"
          imgSrc="https://cdn.corporatefinanceinstitute.com/assets/AdobeStock_280230556-scaled.jpeg"
          href="Hero2.jsx#blockchain"
        /></Link>
        <Link to='/Services#ai'><AboutLink 
          heading="AI"
          subheading="We work with great people"
          imgSrc="https://cioafrica.co/wp-content/uploads/2024/01/AI.jpg"
            // href="/Services#timepass"
        ></AboutLink>
        </Link>
        <Link to='/Services#ecommerce'>
        <AboutLink
          heading="E-commerce"
          subheading="Our work speaks for itself"
          imgSrc="https://st.depositphotos.com/1001877/3814/i/450/depositphotos_38143799-stock-photo-e-commerce-shopping-cart-with.jpg"
        //   href="#"
        />
        </Link>
        <Link to='/Services#mobileApps'>
        <AboutLink
          heading="Mobile-Applications"
          subheading="We want cool people"
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX5_dV9AbAvL6r7V5EPS-Eq5FCbjG5BBU55w&s"
        //   href="#"
        /></Link>
        <AboutLink
          heading="Fun"
          subheading="Incase you're bored"
          imgSrc="https://t4.ftcdn.net/jpg/02/66/31/75/360_F_266317554_kr7DPOoM5Uty0YCeFU9nDZTt4a2LeMJF.jpg"
        //   href="/#"
        />

      </div>

    </section>
  );
};

const AboutLink = ({ heading, imgSrc, subheading, href }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between border-b-2 border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50 md:text-6xl"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block"
              key={i}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span className="relative z-10 mt-2 block text-base text-neutral-500 transition-colors duration-500 group-hover:text-neutral-50">
          {subheading}
        </span>
      </div>

      <motion.img
        style={{
          top,
          left,
          translateX: "-50%",
          translateY: "-50%",
        }}
        variants={{
          initial: { scale: 0, rotate: "-12.5deg" },
          whileHover: { scale: 1, rotate: "12.5deg" },
        }}
        transition={{ type: "spring" }}
        src={imgSrc}
        className="absolute z-0 h-24 w-32 rounded-lg object-cover md:h-48 md:w-64"
        alt={`Image representing a AboutLink for ${heading}`}
      />

      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring" }}
        className="relative z-10 p-4"
      >
        <FiArrowRight className="text-5xl text-neutral-50" />
      </motion.div>
    </motion.a>
  );
};