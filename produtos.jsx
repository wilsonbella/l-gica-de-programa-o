import React from "react";
    const Produtos = () =>{
    const [produtos,setProdutos] = React.useState([]);
    const [filtroId,setFiltro] = React.useState([0]);

    React.useEffect(async () => {
        const url = "http://localhost/eletro_lojas/";
        const response = await fetch(url);
        setProdutos(await response.json());
    }, [])
    const categoriasPoluidas = produtos.map(categoria => {
        const obj = { };
        obj.categoria = categoria.categoria; 
        return obj;
    });
  const categorias = [...new Set(categoriasPoluidas.map(JSON.stringify))].map(JSON.parse);

    function shadow(event) {
        const img = event.target;
        if (img.classList[6] == "border-0" && img.classList[7] != "shadow-lg") {
        img.classList.toggle('shadow-lg',true);
        } else if (img.parentElement.classList[6] == "border-0" && img.parentElement.classList[7] != "shadow-lg") {
            img.parentElement.classList.toggle('shadow-lg',true);
        } else if (img.parentElement.parentElement.classList[6] == "border-0" && img.parentElement.parentElement.classList[7] != "shadow-lg") {
            img.parentElement.parentElement.classList.toggle('shadow-lg',true);
        }    
    }

    function shadowless(event) {
        const img = event.target;
       img.classList.toggle('shadow-lg',false);
        } else if (img.parentElement.classList[7] == "shadow-lg") {
            img.parentElement.classList.toggle('shadow-lg',false);
        } else if (img.parentElement.parentElement.classList[7] == "shadow-lg") {
            img.parentElement.parentElement.classList.toggle('shadow-lg',false);
        } 

    }
    function totalProdutos(categoria){
        let count = 0;
        for (const i of produtos) {
         if(i.categoria == categoria) {
                ++count;
            }
        }
        return count;
    }

    function filtro(event){
  let lista = event.target.id;
        setFiltro(lista)
    }

    return(
        <main className="container-fluid">
        <h2>Produtos</h2>
        <hr/>
        <div className="d-flex">
            <aside className="categorias">
                <h3>Categorias</h3>
                <ul className="list-group ml-2">
                    <li id={0} className="list-item list-group-item-action d-flex justify-content-between align-items-center" onClick={filtro}>
                        Todos
                        <span className="badge badge-primary badge-pill">{produtos.length}</span>
                    </li>
                    {categorias.map((categoria) => {
                        return(
                            <li key={categoria.categoria} id={categoria.categoria} className="list-item list-group-item-action d-flex justify-content-between align-items-center" onClick={filtro}>
                                {categoria.categoria}
                                <span className="badge badge-primary badge-pill">{totalProdutos(categoria.categoria)}</span>
                            </li>
                        )
                    })}
      </ul>
            </aside>
            <div className="container row mx-auto">
                {produtos.map((produto) => {
 if (filtroId == 0) {
                        return(
                            
                            <div key={produto.id} className={produto.categoria + " col-sm-12 col-lg-4 card align-items-center p-5 border-0"} onMouseEnter={shadow} onMouseLeave={shadowless}>
                                <div className="card-img-top div-height vh-100 d-flex align-items-center"> <img className="h-75 mx-auto" src={produto.imagem} alt={produto.categoria}/> </div>
                                <div className="card-body">
                                    <p className="card-text"> {produto.descricao} </p>
                                    <del className="card-title preço">R$ {produto.preco}</del>
                                    <p className="card-title preçoAtual text-danger font-weight-bold text-monospace">R$ {produto.preco}</p>
                                </div>
                            </div>
             })}
            </div>

        </div>
       
    </main>
    )
}
export default Produtos;
