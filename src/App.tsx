import './App.css'
import { useRandom } from './hooks/useRandom';

export const App = () => {

  const query = useRandom()
  
  return (
    <div className="App">
      {query.isFetching ? (
        <p>Cargando...</p>
      ) : (
        <p>El número actual es: {query.data}</p>
      )}

      {
        !query.isLoading && query.isError && (<h3>{`${query.error}`}</h3>)
      }

      <button onClick={() => query.refetch() } disabled={query.isFetching}>
        {query.isFetching ? '...' : 'Nuevo numero'}
      </button>
    </div>
  )
}
