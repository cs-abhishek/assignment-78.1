import { useState, KeyboardEvent, MouseEvent } from 'react'

// Define types for the todo item
interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, text: 'Clean my computer', completed: false },
    { id: 2, text: 'Buy a keyboard', completed: false },
    { id: 3, text: 'Write an article about @xstate/test', completed: true },
  ])

  const [newTodo, setNewTodo] = useState<string>('')
  const [isAddingTodo, setIsAddingTodo] = useState<boolean>(false)

  const addTodo = (): void => {
    if (isAddingTodo) {
      if (newTodo.trim()) {
        setTodos([...todos, { 
          id: Date.now(), 
          text: newTodo.trim(), 
          completed: false 
        }])
        setNewTodo('')
      }
      setIsAddingTodo(false)
    } else {
      setIsAddingTodo(true)
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      addTodo()
    } else if (e.key === 'Escape') {
      setIsAddingTodo(false)
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number): void => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const handleRefresh = (): void => {
    window.location.reload()
  }

  const handleMouseOver = (e: MouseEvent<HTMLButtonElement>): void => {
    (e.target as HTMLButtonElement).style.backgroundColor = '#e0a200'
  }

  const handleMouseOut = (e: MouseEvent<HTMLButtonElement>): void => {
    (e.target as HTMLButtonElement).style.backgroundColor = '#f4b400'
  }

  return (
    <>
      {/* Navigation Bar */}
      <nav className="bg-white border-b border-gray-200">
        <div className="px-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div style={{ marginLeft: '70px' }}>
              <p className="text-xl font-medium leading-6 text-gray-900 sm:truncate">XTodo</p>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Gray thin line - Full screen width */}
      <div style={{ 
        height: '1px', 
        backgroundColor: '#E5E7EB', 
        width: '100vw',
        margin: 0,
        padding: 0
      }}></div>
      
      <div style={{ 
        minHeight: 'calc(100vh - 65px)', 
        backgroundColor: '#FAFAFA', 
        paddingTop: '20px',
        paddingLeft: '70px',
        paddingRight: '40px'
      }}>
        {/* Refresh button - Full screen width positioning */}
        <div style={{ 
          width: '100%', 
          display: 'flex', 
          justifyContent: 'flex-end', 
          marginBottom: '8px'
        }}>
          <button 
            onClick={handleRefresh}
            style={{
              backgroundColor: '#f4b400',
              color: 'white',
              border: 'none',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
          >
            Refresh
          </button>
        </div>
        
        <div style={{ width: '100%', maxWidth: 'none' }}>
          {/* Things to get done */}
          <div style={{ marginBottom: '24px' }}>
            <h2 style={{ 
              fontSize: '28px', 
              fontWeight: '700', 
              color: '#1f2937', 
              margin: '0 0 18px 0',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Things to get done
            </h2>
            
            {/* Things to do section */}
            <div style={{ marginBottom: '36px' }}>
              <h3 style={{ 
                fontSize: '16px', 
                fontWeight: '600', 
                color: '#374151', 
                marginBottom: '16px',
                margin: '0 0 16px 0',
                fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
              }}>
                Things to do
              </h3>
              <div>
                {todos.filter(todo => !todo.completed).map(todo => (
                  <div key={todo.id} style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    marginBottom: '12px' 
                  }}>
                    <label style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      cursor: 'pointer' 
                    }}>
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                        style={{
                          width: '16px',
                          height: '16px',
                          marginRight: '12px',
                          cursor: 'pointer',
                          accentColor: '#f4b400',
                          transform: 'scale(1.1)'
                        }}
                      />
                      <span style={{ 
                        color: '#374151', 
                        fontSize: '15px', 
                        fontWeight: '500',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                      }}>
                        {todo.text}
                      </span>
                    </label>
                  </div>
                ))}
                
                {/* Add todo button */}
                <div style={{ 
                  marginTop: '18px' 
                }}>
                  {isAddingTodo ? (
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <div style={{
                        width: '16px',
                        height: '16px',
                        marginRight: '12px',
                        border: '2px solid #d1d5db',
                        borderRadius: '4px'
                      }}></div>
                      <input
                        type="text"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                        onKeyDown={handleKeyDown}
                        onBlur={() => addTodo()}
                        placeholder="Enter todo..."
                        style={{
                          border: 'none',
                          outline: 'none',
                          backgroundColor: 'transparent',
                          fontSize: '15px',
                          fontWeight: '500',
                          color: '#374151',
                          fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                          flex: 1
                        }}
                        autoFocus
                      />
                    </div>
                  ) : (
                    <button 
                      onClick={addTodo}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        backgroundColor: '#f4b400',
                        color: 'white',
                        border: 'none',
                        borderRadius: '20px',
                        padding: '8px 16px',
                        fontSize: '14px',
                        fontWeight: '600',
                        cursor: 'pointer',
                        fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                        boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
                        transition: 'background-color 0.2s ease'
                      }}
                      onMouseOver={handleMouseOver}
                      onMouseOut={handleMouseOut}
                    >
                      <span style={{ 
                        fontSize: '16px', 
                        marginRight: '6px', 
                        fontWeight: '400' 
                      }}>
                        +
                      </span>
                      Add a todo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Things done section */}
          <div>
            <h3 style={{ 
              fontSize: '16px', 
              fontWeight: '600', 
              color: '#374151', 
              marginBottom: '16px',
              margin: '0 0 16px 0',
              fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
            }}>
              Things done
            </h3>
            <div>
              {todos.filter(todo => todo.completed).map(todo => (
                <div key={todo.id} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  marginBottom: '12px' 
                }}>
                  <label style={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                    <div 
                      onClick={() => toggleTodo(todo.id)}
                      style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '12px',
                        backgroundColor: '#f4b400',
                        borderRadius: '4px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer'
                      }}>
                      <svg width="12" height="9" viewBox="0 0 12 9" fill="none">
                        <path 
                          d="M1.5 4.5L4 7L10.5 1.5" 
                          stroke="white" 
                          strokeWidth="2" 
                          strokeLinecap="round" 
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <span style={{ 
                      color: '#374151', 
                      fontSize: '15px', 
                      fontWeight: '500',
                      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
                    }}>
                      {todo.text}
                    </span>
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
