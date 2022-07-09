// framer motion

export const motionContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.3,
    },
  },
};

export const motionItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

// unique id generator

export const generateReduxUniqueId = () =>
  'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });

// random date 10 to 30 days before today

export const getRandomDate = () => {
  const now = new Date();
  const min = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 10);
  const max = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 30);
  return new Date(min.getTime() + Math.random() * (max.getTime() - min.getTime()));
};
