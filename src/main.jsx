import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from "./components/plugins/router"

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
