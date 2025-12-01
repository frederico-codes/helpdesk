import Defaultogo from "../assets/Defaultogo.svg"
import tecnicos from "../assets/icons/tecnicos.svg"
import briefcase from "../assets/icons/briefcase.svg"
import wrench from "../assets/icons/wrench.svg"
import list from "../assets/icons/clipboard-list.svg"
import menu from "../assets/icons/Menu.png"
import LogoIconLight from "../assets/Logo_IconLight.png"
import avatar from "../assets/Avatar.svg"

export function Calls(){

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
          <a href="#" 
          className="w-[180px] flex items-center gap-2 text-sm text-gray-600 p-3 bg-blue-dark outline-0 rounded-sm"
          >
            <img src={list} alt=""   className="invert brightness-0" />
            Chamados
          </a>
          <a href="#" 
          className="w-[180px] flex items-center gap-2 text-sm text-gray-400 p-3 outline-0 rounded-sm "
          >
            <img src={tecnicos} alt="icone users"  className="" />
            Técnicos
          </a>
          <a href="#" 
          className="w-[180px] flex items-center gap-2 text-sm text-gray-400 p-3 outline-0 rounded-sm"
          >
            <img src={briefcase} alt="icone users"  className="" />
            Clientes
          </a>
          <a href="#" 
          className="w-[180px] flex items-center gap-2 text-sm text-gray-400 p-3 outline-0 rounded-sm"
          >
            <img src={wrench} alt="icone users"  className="" />
            Serviços
          </a>
        </nav>
      </section>
      <section className="block  xl:hidden w-screen h-screen  absolute  top-0 left-6">
        
          <div className="flex justify-between items-center  ">
            {/* GRUPO ESQUERDA */}
            <div className="flex items-center gap-3.5 absolute top-5">
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
              <img src={avatar} alt="avatar" className="absolute top-6 right-16" />
            </div>
          </div>
            
      </section>      

      <form   className="w-full  flex flex-col xl:px-36  gap-4 bg-white absolute xl:relative py-24  rounded-3xl xl:rounded-none xl:rounded-tl-2xl mt-28 xl:mt-4">
      
      </form>
    </div>
  )

}
 
