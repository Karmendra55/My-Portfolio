import { motion } from "framer-motion"
import profileImage from "../../assets/profile/profile.jpg";

const ProfileImage = () => {
  return (
    <div className="relative flex justify-center lg:justify-end">
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        {/* Outer Glow */}
        <div
          className="
            absolute
            inset-0
            rounded-full
            bg-white/10
            blur-3xl
            scale-125
          "
        />

        {/* Ring */}
        <div
          className="
            absolute
            -inset-4
            rounded-full
            border
            border-white/10
          "
        />

        {/* Ring 2 */}
        <div
          className="
            absolute
            -inset-8
            rounded-full
            border
            border-white/5
          "
        />

        {/* Image */}
        <img
          src={profileImage}
          alt="Karmendra Bahadur Srivastava"
          className="
            relative
            w-72
            h-72
            md:w-80
            md:h-96
            object-cover
            rounded-full
            border
            border-white/20
            shadow-2xl
            select-none
          "
          draggable={false}
        />
      </motion.div>
    </div>
  )
}

export default ProfileImage
