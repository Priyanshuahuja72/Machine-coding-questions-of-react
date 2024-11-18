import { useState } from 'react'
import './App.css'
import Folder from './component/Folder'
import explorer from './data/folderData'
import UseTreeHook from './hooks/use-tree-hook';
function App() {
const [explorerData, setExplorerData] = useState(explorer);
const { insertNode } = UseTreeHook();

const handleInsertNode = (folderId, item, isFolder) => {
    let finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
}
  return (
    <div className="app">
    <Folder
      explorerData = {explorerData}
      handleInsertNode={handleInsertNode}
    />
    </div>
  )

}

export default App
