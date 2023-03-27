import CampoTexto from '../campoTexto'
import ListaSuspensa from '../listaSuspensa'
import './formulario.css'
import Botao from '../Botao'
import { useState } from 'react'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const salvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
        setNome=('')
        setCargo=('')
        setImagem=('')
        setTime=('')
    }

    return (
        <section className="formulario">
            <form onSubmit={salvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                    label="Nome"
                    placeholder="Digite Seu Nome"
                />
                <CampoTexto
                    obrigatorio={true}
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                    label="Cargo"
                    placeholder="Digite Seu Cargo"
                />
                <CampoTexto
                    label="Imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                    placeholder="Digite O Endereço Da Imagem"
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card 🧧
                </Botao>
            </form>
        </section>
    )
}

export default Formulario
