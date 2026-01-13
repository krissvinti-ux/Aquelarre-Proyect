import { createBrowserRouter } from 'react-router';
import Index from '../pages/Index';
import CardSelection from '../pages/Cardselection';
import CardReading from '../pages/CardReading'; 
import ReadingHistory from '../pages/Readinghistory';
import Registrer from '../pages/Registrer'; 
import Layout from '../layout/Layout';


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout, 
    children: [
      { 
        index: true, 
        Component: Index, 
      },
      {
        path: "register",
        Component: Registrer, 
      },
      {
        path: "card-selection", 
        Component: CardSelection,
      },
      {
        path: "card-reading", 
        Component: CardReading,
      },
      {
        path: "historial", 
        Component: ReadingHistory,
      }
    ]
  }
]);