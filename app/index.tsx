/**
 * @author Joshua Couto
 * Southern Alberta Institute of Technology: CPRG-303-C
 * Lab 2: Layout Components
 * Created: 02.19.26
 */

import { SafeAreaView } from "react-native";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";

export default function Index() {
  return (
    <SafeAreaView>
      <ToDoList/>
      <ToDoForm/>
    </SafeAreaView>
  );
}