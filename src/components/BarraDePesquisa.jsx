function BarraDePesquisa() {
    return (
        <form action="/buscar" method="GET">
  <input type="search" name="q" placeholder="Pesquisar..." />
  <button type="submit">Buscar</button>
</form>

    )
}

export default BarraDePesquisa