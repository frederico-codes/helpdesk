import { X } from "phosphor-react"

interface Props {
  open: boolean
  onClose: () => void
}

export function MyCallingsTechniciansDetailModalAdditionalService({ open, onClose }: Props) {
  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4">
      {/* CONTAINER DO MODAL */}
      <div className="
        bg-white rounded-2xl w-full max-w-[440px]
        pt-5 pb-6
        shadow-lg animate-fade
      ">
        
        {/* HEADER */}
        <div className="flex items-center justify-between px-6 border-b border-gray-500 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Serviço adicional
          </h2>

          <button onClick={onClose}>
            <X size={22} className="text-gray-700 hover:text-gray-500 ease-linear transition cursor-pointer" />
          </button>
        </div>

        {/* FORM */}
        <div className="px-6 mt-4 space-y-5">

          <div>
            <label className="text-xs font-semibold text-gray-300">TÍTULO</label>
            <input
              type="text"
              placeholder="Instalação de rede"
              className="
                w-full border-b border-gray-500 focus:border-blue-600
                outline-none py-2 text-gray-700
              "
            />
          </div>

          <div>
            <label className="text-xs font-semibold text-gray-300">VALOR</label>
            <input
              type="text"
              placeholder="R$ 180,00"
              className="
                w-full border-b border-gray-300 focus:border-blue-600
                outline-none py-2 text-gray-700
              "
            />
          </div>
        </div>

        {/* BOTÃO SALVAR */}
        <div className="px-6 mt-6">
          <button
            className="
              w-full bg-gray-900 text-white py-3 rounded-md
              font-medium text-sm hover:bg-gray-500 hover:text-gray-200 transition cursor-pointer
            "
          >
            Salvar
          </button>
        </div>
      </div>
    </div>
  )
}
