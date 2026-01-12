import { createBrowserRouter } from 'react-router';
import Index from '../pages/Index';
import Form from '../pages/Form'; 
import CardSelection from '../pages/Cardselection';
import CardReading from '../pages/Cardreading';
import ReadingHistory from '../pages/Readinghistory';
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
        Component: Form,
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