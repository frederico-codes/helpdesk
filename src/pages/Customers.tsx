import Defaultogo from "../assets/Defaultogo.svg"
import tecnicos from "../assets/icons/tecnicos.svg"
import briefcase from "../assets/icons/briefcase.svg"
import wrench from "../assets/icons/wrench.svg"
import list from "../assets/icons/clipboard-list.svg"
import menu from "../assets/icons/Menu.png"
import LogoIconLight from "../assets/Logo_IconLight.png"
import avatar from "../assets/Avatar.svg"
import pen from "../assets/chamados/pen-line.svg"
import { useState } from "react";
import { CustomerModal } from "../componentes/CustomerModal"; // importar modal
import { DeleteCustomerModal } from "../componentes/DeleteCustomerModal"
import { Trash2 } from "lucide-react";
import { useLocation } from "react-router-dom";

export function Customers(){
  const [modalOpen, setModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [selectedCustomer, setSelectedCustomer] = useState({ name: "" });
  const location = useLocation();


  const customerExample = {
    initials: "AC",
    name: "André Costa",
    email: "andre.costa@client.com",
  };

  return(
    <div className="w-screen h-screen  xl:grid xl:grid-cols-[280px_1fr] relative  bg-gray-100 ">
      <section className="hidden xl:block w-screen h-screen bg-gray-100 p-6 ">
        <div className="flex gap-3">
          <img src={Defaultogo} alt="Logo padrão" />
          <div className="flex flex-col">
            <h1 className="text-gray-600 text-xl">HelpDesk</h1>
            <span className="text-xxs text-blue-light">Admin</span>
          </div>
        </div>

        <nav className="pt-5 px-4">
          {/* CHAMADOS */}
          <a
            href="/"
            className={`
              w-[180px] flex items-center gap-2 text-sm p-3 outline-0 rounded-sm
              ${location.pathname === "/calls"
                ? "bg-blue-dark text-white"
                : "text-gray-400"
              }
            `}
          >
            <img
              src={list}
              alt=""
              className={location.pathname === "/calls" ? "invert brightness-0" : ""}
            />
            Chamados
          </a>

          {/* TÉCNICOS */}
          <a
            href="/technicians"
            className={`
              w-[180px] flex items-center gap-2 text-sm p-3 outline-0 rounded-sm
              ${location.pathname === "/technicians"
                ? "bg-blue-dark text-white"
                : "text-gray-400"
              }
            `}
          >
            <img
              src={tecnicos}
              alt="icone users"
              className={location.pathname === "/technicians" ? "invert brightness-0" : ""}
            />
            Técnicos
          </a>

          {/* CLIENTES */}
          <a
            href="/customers"
            className={`
              w-[180px] flex items-center gap-2 text-sm p-3 outline-0 rounded-sm
              ${location.pathname === "/customers"
                ? "bg-blue-dark text-white"
                : "text-gray-400"
              }
            `}
          >
            <img
              src={briefcase}
              alt="icone users"
              className={location.pathname === "/customers" ? "invert brightness-0" : ""}
            />
            Clientes
          </a>

          {/* SERVIÇOS */}
          <a
            href="/services"
            className={`
              w-[180px] flex items-center gap-2 text-sm p-3 outline-0 rounded-sm
              ${location.pathname === "/services"
                ? "bg-blue-dark text-white"
                : "text-gray-400"
              }
            `}
          >
            <img
              src={wrench}
              alt="icone users"
              className={location.pathname === "/services" ? "invert brightness-0" : ""}
            />
            Serviços
          </a>
        </nav>

      </section>

       <section className="block  xl:hidden w-screen h-screen  absolute  top-0 ">        
          <div className="flex justify-between items-center  ">
            {/* GRUPO ESQUERDA */}
            <div className="flex justify-center items-center gap-3.5 absolute top-7 left-6">
              <img src={menu} alt="menu" className=""/>

              <div className="flex justify-center gap-4 ">
                <img src= { LogoIconLight } alt="LogoIconLight" className="h-11 w-11"/>
                <div>
                  <h1 className="text-xl text-gray-600 ">HelpDesk</h1>
                  <span className="text-xxs text-blue-light ">Admin</span>
                </div>
              </div>
            </div>
            {/* GRUPO DIREITA */}
            <div>
              <img src={avatar} alt="avatar" className="absolute top-8 right-10" />
            </div>
          </div>            
      </section>     

      <form   className="w-full h-full flex flex-col px-6 xl:px-16  gap-4 bg-white absolute xl:relative py-24  rounded-3xl xl:rounded-none xl:rounded-tl-2xl mt-28 xl:mt-4">
        <h1 className="text-2xl font-bold">Clientes</h1>
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
          <table className="w-full text-left">
            
            {/* Cabeçalho */}
            <thead className="border-b border-gray-200">
              <tr className="text-sm text-gray-400">
                <th className="py-4 xl:px-6 font-medium">Nome</th>               
                <th className="py-4 xl:px-6 font-medium">E-mail</th>                
                <th className="py-4 px-6 font-medium"></th>
                <th className="py-4 px-6 font-medium"></th>
              </tr>
            </thead>

            {/* Primeira linha */}
            <tbody>
              <tr className="border-b last:border-none">
                <td className="py-4 xl:px-6 text-sm">
                  <div className="flex items-center gap-2 truncate max-w-[120px]">
                    <span className="w-7 h-7 rounded-full bg-blue-700 text-white text-xs flex items-center justify-center">
                      AC
                    </span>
                    <span className="truncate max-w-[50px] xl:truncate-none xl:max-w-full " >André Costa</span>
                  </div>
                </td>
                
                <td className="py-4 xl:px-6">                  
                  <div className="text-sm text-gray-400 truncate max-w-[120px] xl:truncate-none xl:max-w-full ">andre.costa@client.com	</div>
                </td> 

                <td className="py-4 px-1 w-4">
                  <div className="h-9 w-9 bg-gray-500 hover:bg-gray-600 flex justify-center items-center rounded-sm transition ease-linear">
                    <a onClick={() => {
                      setSelectedCustomer({ name: "André Costa" });
                      setDeleteModalOpen(true);
                    }} 
                     className=" rounded-lg cursor-pointer" >
                      <Trash2 size={15} />
                    </a>
                  </div>
                </td>              

                <td className="py-4 px-1  w-4">
                  <div className="h-9 w-9 bg-gray-500  hover:bg-gray-600 flex justify-center items-center rounded-sm cursor-pointer transition ease-linear">
                    <a onClick={() => setModalOpen(true)} 
                    className=" rounded-lg "
                    >                      
                      <img src={pen} alt="" />
                    </a>
                  </div>
                </td>
              </tr>             
            </tbody>
          </table>
        </div>     
      </form>

      <DeleteCustomerModal
      open={deleteModalOpen}
      onClose={() => setDeleteModalOpen(false)}
      customer={selectedCustomer}
      onConfirm={() => {
        console.log("Excluir cliente:", selectedCustomer.name);

        // Aqui você coloca o DELETE para API
        // await api.delete(`/customers/${id}`)

        setDeleteModalOpen(false);
      }}
      />


         {/* MODAL */}
      <CustomerModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        customer={customerExample}
      />
    </div>
  )

}


 
