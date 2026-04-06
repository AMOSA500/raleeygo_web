import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-50">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center px-4">
        <div className="text-9xl font-bold text-brand-yellow mb-4">404</div>
        <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
        <p className="text-gray-600 text-lg mb-8 max-w-md mx-auto">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="btn-primary">Go Home</Link>
          <Link to="/contact" className="btn-secondary">Contact Support</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default NotFound
