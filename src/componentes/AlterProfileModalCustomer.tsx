interface Props {
  open: boolean
  onClose: () => void 
}

export function AlterProfileModalCustomer({ open, onClose }: Props) {


  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white w-full max-w-[360px] rounded-2xl shadow-lg p-5"
      >

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-700">Alterar senha</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-xl cursor-pointer">
            ✕
          </button>
        </div>

        <div className="mb-3">
          <label className="text-xs font-bold text-gray-600 block mb-1">SENHA ATUAL</label>
          <input
            type="password"
            placeholder="Digite sua senha atual"
            className="w-full border-b border-gray-300 focus:border-blue-600 outline-none text-sm py-1"
          />
        </div>

        <div className="mb-5">
          <label className="text-xs font-bold text-gray-600 block mb-1">NOVA SENHA</label>
          <input
            type="password"
            placeholder="Digite sua nova senha"
            className="w-full border-b border-gray-300 focus:border-blue-600 outline-none text-sm py-1"
          />
          <p className=" text-gray-400 mt-1">Mínimo de 6 dígitos</p>
        </div>

        <button className="w-full bg-gray-800 text-white text-sm font-medium py-3 rounded-xl hover:bg-gray-900 transition cursor-pointer">
          Salvar
        </button>

      </div>
    </div>
  );
}
