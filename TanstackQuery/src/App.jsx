import {
  QueryClient,
  QueryClientProvider,
  useQuery,
  useMutation,
  useQueryClient
} from "@tanstack/react-query"
import { fetchTodos, addTodo } from './api/data.js'

const client = new QueryClient()


function App() {
  return (
    <QueryClientProvider client={client}>
      <Todos />
    </QueryClientProvider>
  )
}

function Todos() {
  console.log("Todo component rendered")
  const queryClient = useQueryClient()

  const { data: todos,isLoading,isError } = useQuery({
    queryFn: fetchTodos,
    queryKey: ['todos']
  })

  const mutation = useMutation({
    mutationFn: addTodo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['todos'] })
    }
  })

  if(isLoading) return <> Component Loading....</>

  if(isError) return <> Some Error ocurred while fetching the todos</>

  return (
    <>
      <ul>
        {todos?.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
      <button onClick={() => mutation.mutate({ title: "Read a book for 30 min" })}>
        Add Todo
      </button>
    </>
  )
}

export default App
