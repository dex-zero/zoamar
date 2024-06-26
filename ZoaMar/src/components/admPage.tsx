import CardAdd from './Cards/cardAdd'
import CardRemove from './Cards/cardRemove'
import CardUpdate from './Cards/cardUpdate'

export function AdmPage(){
    return(
        <div className='flex-wrap flex gap-8 items-center justify-center'>
            <div>
                <CardAdd
                title="Adicionar um Item"
                button="Adicionar Item"
                name="Nome do Produto"
                price="Preço"
                stock="Quantidade de Estoque"
                departament="Departamento"
                tag="Tag"
                />
            </div>
            <div>
                <CardRemove
                title="Remover um Item"
                searchID="ID do produto"
                searchTag="Tag do produto"
                remove="Remover produto"
                />
            </div>
            <div>
                <CardUpdate
                title="Atualizar um Item"
                button="Atualizar Item"
                name="Novo nome"
                price="Novo preço"
                stock="Nova quantidade em estoque"
                departament="Novo departamento"
                tag="Nova tag"
                />
            </div>
        </div>
    )
}