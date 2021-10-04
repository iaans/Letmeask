import illustrationImg from "../assets/images/illustration.svg"
import logoImg from "../assets/images/logo.svg"
import googleImage from "../assets/images/google-icon.svg"

import "../styles/auth.scss"


export function Home() {
    return (
        <div id="page-auth">   
            <aside>
                <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tira as dúvidas de sua audiência em tempo-real</p>
            </aside>

            <main>
                <div>
                    <img src={logoImg} alt="Letmeask" />
                    <button>
                        <img src={googleImage} alt="Logo do google" />
                        Crie sua sala com o Google
                    </button>
                    <div>
                        ou entre em uma sala
                    </div>
                    
                    <form>
                        <input 
                        type="text"
                        placeholder="Digite o código da sala" 
                        />
                    <button type="submit">
                        Entrar na sala
                    </button>
                    </form>
                </div>
            </main>
        </div>
    )
    
}