import Index from '../pages/Index';
// import Form from '../pages/Form'; 
import CardSelection from '../pages/Cardselection'
import CardReading from '../pages/Cardreading'
import ReadingHistory from '../pages/Readinghistory'
import Layout from '../layout/Layout'
import {createBrowserRouter} from 'react-router'

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
        { 
            index: true, 
            Component: Index, 
        },
        // {
        //     path: "/form",
        //     Component: Form,
        // },
        {
            path: "/cardselection",
            Component: CardSelection,
        },
        {
            path: "/cardreading",
            Component: CardReading,
        },
        {
            path: "/readinghistory",
            Component: ReadingHistory,
        }

    ]
  }
]);