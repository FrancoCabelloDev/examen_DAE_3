import { toast } from 'react-toastify';

export const notifyLikeAdded = () => {
  toast.success('❤️ Shot liked!', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const notifyLikeRemoved = () => {
  toast.info('💔 Like removed', {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const notifyFormSuccess = () => {
  toast.success('🎉 Project request sent! We\'ll be in touch soon.', {
    position: "top-right",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};