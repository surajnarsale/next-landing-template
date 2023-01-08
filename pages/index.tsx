import { BeakerIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <BeakerIcon className="h-6 w-6 text-blue-500" />
      <motion.h1
        animate={{ y: 100 }}
        className="bg-blue-400 text-center  text-9xl hover:bg-green-400 "
      >
        HomePage
      </motion.h1>
    </>
  )
}
