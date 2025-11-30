import { Input } from "../componentes/Input"
import { Button } from "../componentes/Button"
import { useState } from "react"
import background_desktop from "../assets/Login_Background_Desktop.svg";
import background_mobile from "../assets/Login_Background_Mobile.png";
import Logo from "../assets/Logo.svg"

export function SignUp(){
  const [email,setEmail] = useState("")
  const [ password, setPassword ] = useState("")
  const [ isLoading, setIsloading] = useState(false)


  function onSubmit(e:React.FormEvent){
    e.preventDefault()
    console.log(email, password)
  }


  return(
    <div className="w-screen h-screen  xl:grid grid-cols-2 relative ">
      <section className="hidden xl:block w-screen h-screen">
        <img src={background_desktop} alt="imagem azul" className="w-screen h-screen object-cover"/>
      </section>
       <section className="block  xl:hidden w-screen h-screen absolute -z-10">
        <img src={background_mobile} alt="imagem azul" className="w-screen h-screen object-cover"/>
      </section>      

      <form  onSubmit={onSubmit} className="w-full   flex flex-col xl:px-36  gap-4 bg-white absolute xl:relative py-14  rounded-3xl xl:rounded-none xl:rounded-tl-2xl mt-3">
        <div className="flex justify-center gap-2 mb-8">
          <img src= { Logo } alt="Logo"/>
          <h1 className="text-2xl --color-blue-dark font-bold">HelpDesk</h1>
        </div>

        <div className="p-7">
          <h1 className="text-xl font-bold">Crie sua conta</h1>
          <span>Informe seu nome, e-mail e senha</span>
          <div className="mt-10 flex flex-col gap-4">
            <Input
            required
            legend="Nome"
            type="text"
            placeholder="Digite o nome completo"
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            required
            legend="E-mail"
            type="email"
            placeholder="exemplo@mail.com"
            onChange={(e) => setEmail(e.target.value)}
            />
            <Input
            required
            legend="senha"
            type="password"
            placeholder="Digite sua senha"
             onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <span className="mb-10">Mínimo de 6 dígitos</span>
          <Button type="submit" isLoading={isLoading}>
            Cadastrar
          </Button>
        </div>
      
        <div className="p-7">
          <p className="text-base font-semibold">Já uma conta?</p>
          <span className="text-xs">Entre agora mesmo</span>
          <a href="/" className="flex justify-center items-center py-1.5 rounded-lg cursor-pointer mt-7 bg-gray-500 hover:bg-gray-600 transition ease-linear text-gray-200">
          Acessar conta
          </a>
        </div>
      </form>
    </div>
  )

}