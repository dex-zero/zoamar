import { UserRound } from "lucide-react";

export function LoginPage() {
    return(
        <div className="flex justify-center items-center pt-20">
            <div className="flex flex-col bg-zinc-300 p-6 size-auto rounded items-center gap-5">
                <div className="flex justify-between w-80">
                    <h1 className="font-bold text-2xl ">Entrar na Conta</h1>
                    <UserRound className="size-16"/> 
                </div>
                <div className="flex flex-col gap-10">
                    <div>
                        <h2 className="font-bold text-xl">E-mail</h2>
                        <input className="bg-zinc-500 rounded w-80 p-2 text-white" type="text" />
                    </div>
                    <div>
                        <h2 className="font-bold text-xl">Senha</h2>
                        <input className="bg-zinc-500 rounded w-80 p-2 text-white" type="text" />
                    </div>
                </div>
                <div className="pt-12">
                    <button className=" bg-black text-white w-40 h-12 rounded text-xl">Entrar</button>
                </div>
                <div className="pt-12 flex justify-between w-80">
                    <p className="font-medium">Esqueci minha senha</p>
                    <p className="font-medium">Cadastrar</p>
                </div>
            </div>
        </div>
    )
}