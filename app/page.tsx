import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-10">
      <header className="col-span-10 h-20">
        <p>Aqui fica o header</p>
      </header>

      <form className="col-span-5 pt-10">
        <textarea 
          defaultValue="Como eu posso escolher publicar isso no LinkedIn e no X também eu vou escrever esse texto aqui."
          className="text-[13px] rounded w-full border dark:border-zinc-700 dark:bg-zinc-900 resize-none p-5 min-h-40" 
        />
        
        <footer className="flex items-center justify-end">
          <button className="h-8 bg-blue-700 px-10 rounded">
            <p className="text-xs">Publicar</p>
          </button>
        </footer>
      </form>

      <div className="col-span-5">
        <p>REDES SOCIAIS AQUI</p>
      </div>
    </div>
  )
}
