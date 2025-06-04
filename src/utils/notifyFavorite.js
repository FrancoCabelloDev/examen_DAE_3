import { toast } from 'react-toastify';

export const notifyFavoriteAdded = (itemName) => {
  toast.success(`✨ "${itemName}" agregado a favoritos`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const notifyFavoriteRemoved = (itemName) => {
  toast.info(`💔 "${itemName}" removido de favoritos`, {
    position: "top-right",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};

export const notifyFormSuccess = () => {
  toast.success(`📧 ¡Mensaje enviado correctamente!`, {
    position: "top-center",
    autoClose: 4000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};