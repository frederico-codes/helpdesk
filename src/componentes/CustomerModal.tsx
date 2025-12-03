// CustomerModal.jsx
import { X } from "lucide-react";
import { Button } from "./Button";

interface CustomerModalProps {
  open: boolean;
  onClose: () => void;
  customer: {
    initials: string;
    name: string;
    email: string;
  };
}


export function CustomerModal({ open, onClose, customer }: CustomerModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-md shadow-lg animate-fade">
        
        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-b-gray-500">
          <h2 className="text-base text-gray-700">Cliente</h2>

          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-6 flex flex-col gap-6">

          {/* Avatar + iniciais */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-700 text-white flex items-center justify-center text-lg font-medium">
              {customer.initials}
            </div>
          </div>

          {/* Nome */}
          <div className="flex flex-col">
            <label className="text-xxs text-gray-300 ">NOME</label>
            <span className=" text-base pb-1 border-b border-b-gray-500">{customer.name}</span>
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label className="text-xs text-gray-300">E-MAIL</label>
            <span className= "text-base text-gray-200 pb-1 border-b border-b-gray-500">{customer.email}</span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-t-gray-500">
          <button className="w-full bg-gray-900 text-sm text-gray-600 py-2.5 rounded-md hover:bg-gray-800">
            Salvar
          </button>
        </div>
      </div>
    </div>
  );
}
