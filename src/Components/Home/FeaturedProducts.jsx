import { motion } from "framer-motion";

const FeaturedProducts = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div>
      <h1 className="text-center font-bold text-3xl">Featured Products</h1>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3">
      <div>
        <img src="" alt="" />
      </div>
      
    </div>
  </motion.div>
);

export default FeaturedProducts;
