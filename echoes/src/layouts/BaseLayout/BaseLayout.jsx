import { GContainer } from 'GComponents';
import { BaseHeader } from 'GComp';
import { Outlet, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

function BaseLayout() {
  const location = useLocation();
  return (
    <GContainer className="echoes default-theme">
      <BaseHeader />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </GContainer>
  );
}

export default BaseLayout;
