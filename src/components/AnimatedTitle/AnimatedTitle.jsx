import React, { useEffect } from "react";
import styled from "styled-components";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
  color: ${({ color }) => color || "inherit"};
`;

const HandWave = styled(motion.span)`
  display: inline-block;
  font-size: 2em;
  margin-left: 0.5em;
`;

const AnimatedTitle = ({ text, color, onAnimationEnd }) => {
  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);

  useEffect(() => {
    if (onAnimationEnd) {
      const totalWords = text.split(" ").length;
      const totalDelay = (totalWords - 1) * 0.01 + 0.75;
  
      const timer = setTimeout(() => {
        onAnimationEnd();
      }, totalDelay * 1000);
  
      return () => clearTimeout(timer);
    }
  }, [onAnimationEnd, text]);
  
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 0.75,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  const handWaveAnimation = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        delay: 1.5, // delay showing the hand wave
      },
    },
  };

  return (
    <>
      {text.split(" ").map((word, index) => {
        return (
          <Word
            ref={ref}
            aria-hidden="true"
            key={index}
            initial="hidden"
            animate={ctrls}
            variants={wordAnimation}
            transition={{
              delayChildren: index * 0.05,
              staggerChildren: 0.05,
            }}
          >
            {word.split("").map((character, index) => {
              return (
                <Character
                  aria-hidden="true"
                  key={index}
                  variants={characterAnimation}
                  color={color}
                >
                  {character}
                </Character>
              );
            })}
          </Word>
        );
      })}
    </>
  );
};

export default AnimatedTitle;