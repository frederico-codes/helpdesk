import { X } from "lucide-react";

interface DeleteCustomerModalProps {
  open: boolean;
  onClose: () => void;
  customer: {
    name: string;
  };
  onConfirm: () => void;
}

export function DeleteCustomerModal({
  open,
  onClose,
  customer,
  onConfirm,
}: DeleteCustomerModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-lg animate-fade">

        {/* HEADER */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-b-gray-500 ">
          <h2 className="text-base font-semibold">Excluir cliente</h2>

          <button onClick={onClose} className="text-gray-400 hover:text-black">
            <X size={20} />
          </button>
        </div>

        {/* BODY */}
        <div className="px-6 py-6 flex flex-col gap-4">

          <p className="text-gray-700">
            Deseja realmente excluir{" "}
            <span className="font-semibold">{customer.name}</span>?
          </p>

          <p className="text-base text-gray-200">
            Ao excluir, todos os chamados deste cliente serão removidos e esta
            ação não poderá ser desfeita.
          </p>

        </div>

        {/* FOOTER */}
        <div className="px-6 py-4 border-t border-t-gray-500 flex gap-3">

          <button
            onClick={onClose}
            className="flex-1 py-2.5 border-0 rounded-md text-gray-700 hover:bg-gray-600 bg-gray-500 transition ease-linear"
          >
            Cancelar
          </button>

          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 rounded-md bg-gray-900 text-gray-600 hover:bg-gray-300 cursor-pointer transition ease-linear"
          >
            Sim, excluir
          </button>
        </div>
      </div>
    </div>
  );
}
