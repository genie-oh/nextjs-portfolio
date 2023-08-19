import { FunctionComponent, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";
import { variantsRevealFromBotoom } from "../../motions/variantsRevealFromBottom";

const ImageTextCard: FunctionComponent<{
  imgUrl: string;
  title: string;
  text: string;
}> = ({ imgUrl, title, text }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      variants={variantsRevealFromBotoom}
      initial="initial"
      animate={controls}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col p-5 m-5 text-center whitespace-pre-wrap bg-yellow-100 shadow rounded-2xl"
    >
      <div className="h-48 mb-5 border-b-2 border-gray-200 ">
        <img className="h-full mx-auto " src={imgUrl} />
      </div>
      <div className="w-full mb-3 text-xl font-bold text-pink-500">{title}</div>
      <div className="w-full text-sm">{text}</div>
    </motion.div>
  );
};

export default ImageTextCard;
