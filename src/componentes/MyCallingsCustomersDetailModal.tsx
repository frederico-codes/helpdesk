import { X } from "phosphor-react"

interface Props {
  open: boolean
  onClose: () => void
}

export function MyCallingsCustomersDetailModal({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
         {/* MODAL */}
      <div
        onClick={(e) => e.stopPropagation()}
        className="
          w-full max-w-md
          rounded-2xl bg-white
          shadow-xl
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-500">
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-gray-700 hover:text-gray-500 cursor-pointer"
            >
              ←
            </button>

            <h2 className="text-base font-semibold">
              Alterar senha
            </h2>
          </div>

          <button
            onClick={onClose}
            className="text-gray-700 hover:text-gray-500 cursor-pointer"
          >
           <X size={18} />
          </button>
        </div>

        {/* CONTEÚDO */}
        <div className="px-6 py-6 space-y-6">
          {/* SENHA ATUAL */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              SENHA ATUAL
            </label>
            <input
              type="password"
              placeholder="Digite sua senha atual"
              className="
                w-full border-b border-gray-500
                py-2 text-sm text-gray-800
                outline-none
                focus:border-blue-600
              "
            />
          </div>

          {/* NOVA SENHA */}
          <div>
            <label className="block text-xs font-semibold text-gray-400 mb-1">
              NOVA SENHA
            </label>
            <input
              type="password"
              placeholder="Digite sua nova senha"
              className="
                w-full border-b border-gray-500
                py-2 text-sm text-gray-800
                outline-none
                focus:border-blue-600
              "
            />
            <span className="mt-1 block text-xs text-gray-400">
              Mínimo de 6 dígitos
            </span>
          </div>
        </div>

        {/* FOOTER */}
        <div className="px-6 pb-6">
          <button
            className="
              w-full rounded-md
              bg-gray-900 py-3
              text-sm font-medium text-white
              hover:bg-gray-800 transition cursor-pointer
            "
          >
            Salvar
          </button>
        </div>
      </div>
   
    </div>
  )
}
